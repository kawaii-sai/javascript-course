'use strict';

console.log('Mapty OOP Foundation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    // store the cooordinates as an array of lat and long
    this.coords = coords;
    // store distance in kilometers
    this.distance = distance;
    // stroe duration in minutes
    this.duration = duration;
  }

  // generate workout description
  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // generate description
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

const testWorkout = new Workout([40.7128, -74.006], 5.2, 24);
console.log('Test workout:', testWorkout);

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// ===== TESTING THE CLASS HIERARCHY ===== //

const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('=== RUNNING WORKOUT ===');
console.log('Distance:', run1.distance, 'km');
console.log('Duration:', run1.duration, 'min');
console.log('Cadence:', run1.cadence, 'spm');
console.log('Pace:', run1.pace.toFixed(1), 'min/km');
console.log('Description:', run1.description);
console.log('ID:', run1.id);

const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('=== CYCLING WORKOUT ===');
console.log('Distance:', cycling1.distance, 'km');
console.log('Duration:', cycling1.duration, 'min');
console.log('Elevation Gain:', cycling1.elevationGain, 'm');
console.log('Speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('Description:', cycling1.description);
console.log('ID:', cycling1.id);

console.log('=== INHERITANCE TESTING ===');
console.log(
  'Both inherit from Workout:',
  run1 instanceof Workout,
  cycling1 instanceof Workout
);

// DOM ELEMENTS
// main form element
const form = document.querySelector('.form');

// container workout list
const containerWorkouts = document.querySelector('.workouts');

// inputtype
const inputType = document.querySelector('.form__input--type');

// input distance
const inputDistance = document.querySelector('.form__input--distance');

// input duration
const inputDuration = document.querySelector('.form__input--duration');

// input cadence
const inputCadence = document.querySelector('.form__input--cadence');

// input elevation
const inputElevation = document.querySelector('.form__input--elevation');
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    console.log('🚀 App starting...');
    this._getLocalStorage();
    this._getPosition();

    // attach event handlers to form submission
    form.addEventListener('submit', this._newWorkout.bind(this));
    // attach event handlers for workout type changes
    inputType.addEventListener('change', this._toggleElevationField);

    // add click handling for workout list items
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));

    document.addEventListener('keydown', this._handleKeyDown.bind(this));
  }

  _handleKeyDown(e) {
    // close form when escape key is pressed
    if (e.key === 'Escape' && !form.classList.contains('hidden')) {
      this._hideForm();
      console.log('Form closed with Escape Key');
    }
  }

  _moveToPopup(e) {
    // find the closest workout element from the clicked target
    const workoutEl = e.target.closest('.workout');

    if (!workoutEl) return;

    // Find the workout object using the data-id attribute
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    // move the map to the workout coordinates
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
    console.log(`Navigated to ${workout.type} workout at`, workout.coords);
  }

  _getPosition() {
    console.log('🔍 Requesting user location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        this._handleLocationError.bind(this),
        {
          timeout: 10000,
          enableHighAccuracy: true,
          maximumAge: 600000,
        }
      );
    } else {
      alert('❌ Geolocation is not supported by this browser');
      this._loadDefaultMap();
    }
  }

  _handleLocationError(error) {
    console.error('Geolocation error:', error);

    let message = 'Could not get your position. ';

    switch (error.code) {
      case error.PERMISSION_DENIED:
        message +=
          'Location access was denied. Please enable location services and refresh the page.';
        break;
      case error.POSITION_UNAVAILABLE:
        message +=
          'Location information is unavailable. Using default location.';
        break;
      case error.TIMEOUT:
        message += 'Location request timed out. Using default location.';
        break;
      default:
        message += 'An unknown error occurred. Using default location.';
        break;
    }

    alert(`📍 ${message}`);
    this._loadDefaultMap();
  }

  _loadDefaultMap() {
    console.log('📍 Loading default map location (London)');
    const defaultCoords = [51.5074, -0.1278];

    this.#map = L.map('map').setView(defaultCoords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    this._renderStoredWorkouts();

    console.log('🗺️ Default map loaded successfully');
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    console.log(`📍 User location: ${latitude}, ${longitude}`);

    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    L.marker(coords).addTo(this.#map).bindPopup('Nandine ka!').openPopup();
    this.#map.on('click', this._showForm.bind(this));

    this._renderStoredWorkouts();

    console.log('Map loaded successfully at user location!');
  }

  _renderStoredWorkouts() {
    this.#workouts.forEach(workout => {
      this._renderWorkoutMarker(workout);
      this._renderWorkout(workout);
    });

    if (this.#workouts.length > 0) {
      console.log(`Rendered ${this.#workouts.length} stored workouts`);
    }
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    // turn on or display elevation
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');

    // turns off or hide the input cadence
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    // add hiding animation
    form.style.dispalay = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _newWorkout(e) {
    // helper function
    // validate input that they are actual numbers that make sense
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    // validate numbers are positive
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    // prevent the default form submission behavior
    e.preventDefault();

    // store data or extract data
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    console.log(`Creating ${type} workout:`, { distance, duration, lat, lng });

    // handle running workout
    if (type === 'running') {
      const cadence = +inputCadence.value;

      // validate all input elements are finite, positive, working
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

      // create the running object with map coordinates and form data
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // cycling workout creation
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      // validate all input elements are finite, positive, working
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers!');

      // create the running object with map coordinates and form data
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    console.log('workout object created: ', workout);

    this.#workouts.push(workout);

    this._renderWorkoutMarker(workout);

    this._renderWorkout(workout);

    this._setLocalStorage();

    this._hideForm();

    console.log('Workout creation complete!');
  }

  _renderWorkout(workout) {
    // create the base html
    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>
  `;

    if (workout.type === 'running')
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>
    `;

    if (workout.type === 'cycling')
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
    </li>
    `;

    form.insertAdjacentHTML('afterend', html);
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      // set popup content with emoji and workout description
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    console.log('Workouts saved to the local storage');
  }

  _getLocalStorage() {
    const data = localStorage.getItem('workouts');

    // check if the data exists before parsing
    if (!data) return;

    // parse the JSON data back to Javascript objects
    const storedWorkouts = JSON.parse(data);
    console.log('Retrieved workouts from local Storage', storedWorkouts);

    // restore proper workout objects with inheritance
    this.#workouts = storedWorkouts.map(workoutData => {
      let workout;

      // recreate running objects with proper inheritance
      if (workoutData.type === 'running') {
        workout = new Running(
          workoutData.coords,
          workoutData.distance,
          workoutData.duration,
          workoutData.cadence
        );
      }

      // recreate cycling objects with proper inheritance
      if (workoutData.type === 'cycling') {
        workout = new Cycling(
          workoutData.coords,
          workoutData.distance,
          workoutData.duration,
          workoutData.elevationGain
        );
      }

      // restore original date and ID to maintain data consistency
      workout.data = new Date(workoutData.date);
      workout.id = workoutData.id;
      workout.clicks = workoutData.click;

      return workout;
    });

    console.log('Workouts restored as proper objects', this.#workouts);
  }
}

const app = new App();
