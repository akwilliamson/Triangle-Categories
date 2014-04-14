var Triangle = {
  invalid: function() {
    if (this.sideOne >= this.sideTwo + this.sideThree || this.sideTwo >= this.sideOne + this.sideThree || this.sideThree >= this.sideOne + this.sideTwo) {
      return true;
    }
  },

  type: function() {
    if (this.sideOne === this.sideTwo && this.sideOne === this.sideThree) {
      return "equilateral";
    } else if (this.sideOne === this.sideTwo || this.sideTwo === this.sideThree || this.sideOne === this.sideThree) {
      return "isosceles";
    } else if (this.sideOne !== this.sideTwo && this.sideTwo !== this.sideThree && this.sideOne !== this.sideThree) {
      return "scalene";
    }
  },

  list: function() {
    return this.sideOne + ", " + this.sideTwo + ", " + this.sideThree;
  }
};

$(document).ready(function() {
  $("form#triangle-sides").submit(function(event) {
    event.preventDefault();

    var inputtedSideOne = $("input#side-one").val();
    var inputtedSideTwo = $("input#side-two").val();
    var inputtedSideThree = $("input#side-three").val();

    var newTriangle = Object.create(Triangle);
    newTriangle.sideOne = inputtedSideOne;
    newTriangle.sideTwo = inputtedSideTwo;
    newTriangle.sideThree = inputtedSideThree;

    if (newTriangle.invalid() === true) {
      alert("Enter the right size dummy!");
    } else if (newTriangle.type() === "equilateral") {
      $('ul#equilateral').append("<li>" + newTriangle.list() + "</li>");
    } else if (newTriangle.type() === "isosceles") {
      $('ul#isosceles').append("<li>" + newTriangle.list() + "</li>");
    } else if (newTriangle.type() === "scalene") {
      $('ul#scalene').append("<li>" + newTriangle.list() + "</li>");
    }
    this.reset();
  });
});















