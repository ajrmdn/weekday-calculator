import { DateCalculator } from './weekday-calculator.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function () {

  $('#dateForm').submit(function (event) {
    event.preventDefault();
    const userDay = $('#dayInput').val();
    const userMonth = $('#monthInput').val();
    const userYear = $('#yearInput').val();

    const stringLiteral = userMonth + ' ' + userDay + ', ' + userYear;
    const finalDay = new DateCalculator(stringLiteral);

    $('.output').text(finalDay.returnDay());
  });
});
