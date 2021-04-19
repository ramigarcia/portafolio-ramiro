import countdown from "./modulos/count_down.js";
import hideAlert from "./modulos/hide_alert_jobs.js";
import contactFormValidation from "./modulos/validacion_form.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault("");
  countdown("countdown", "May 3, 2021", "¡Hoy es mi cumpleaños yeah!");
  hideAlert();
  contactFormValidation();
});
