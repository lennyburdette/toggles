import React, { useState } from 'react';
import './App.css';

function App() {
  const [toggled, setToggled] = useState(false);
  return <>
    <h1>Toggle Tests</h1>

    <article aria-labelledby="checkbox-title">
      <h2 id="checkbox-title">Checkbox</h2>

      <input type="checkbox" id="notify" name="notify" value="on" checked={toggled} onChange={(e) => setToggled(e.target.checked)}/>
      <label htmlFor="notify">Notify by email</label>

    </article>

    <article aria-labelledby="radios-title">
      <h2 id="radios-title">Radios</h2>

      <fieldset>
        <legend>Notify by email</legend>
        <input type="radio" id="notify-on" name="notify" value="on" checked={toggled} onChange={(e) => setToggled(e.target.checked)} />
        {' '}
        <label htmlFor="notify-on">on</label>
        {' '}
        <input type="radio" id="notify-off" name="notify" value="off" checked={!toggled} onChange={(e) => setToggled(!e.target.checked)} />
        {' '}
        <label htmlFor="notify-off">off</label>
      </fieldset>
    </article>

    <article aria-labelledby="button-title">
      <h2 id="button-title">Button</h2>

      <button type="button" aria-pressed={toggled ? "true" : "false"} onClick={() => setToggled(!toggled)}>
        Notify by email
      </button>
    </article>

    <article aria-labelledby="heading-title">
      <h2 id="heading-title">Card Header</h2>

      <div className="card">
        <div className="card__title">
          <h3 id="notify-by-email-heading">Notify by email</h3>
          <Switch checked={toggled} onChange={setToggled} aria-labelledby="notify-by-email-heading" />
        </div>

        {toggled && <div className="card__body">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>}
      </div>
    </article>
  </>;
}

function Switch({ checked, onChange, ...rest }) {
  return <label className="switch">
    <div className="switch__container">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} {...rest} />
      <span className="switch__toggle"></span>
    </div>
  </label>;
}

export default App;
