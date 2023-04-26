var express = require("express");
var router = express.Router();

const mondayResponses = ["Carta", "Plastica"];

/* GET home page. */
router.get("/recycle", function (req, res, next) {
  const day = new Date().getDay();
  switch (day) {
    case 0 || 2 || 4:
      res.json("Umido");
      break;
    case 1:
      const weekNumber = getWeekNumber(new Date());
      const responseIndex = weekNumber % 2; // Operatore modulo per alternare le risposte

      res.json(mondayResponses[responseIndex]);
      break;
    case 3:
      res.json("Plastica");
      break;
    case 5:
      res.json("Indifferenziato");
      break;
  }
});

// Funzione per ottenere il numero della settimana dell'anno
function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

module.exports = router;
