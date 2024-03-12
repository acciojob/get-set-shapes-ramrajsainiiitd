//complete this code
class Rectangle {
  constructor(width, height) 
  {
    this._width = width;
    this._height = height;
  }

  get getWidth() 
  {
    return this._width;
  }
  get getHeight() 
  {
    return this._height;
  }
  getArea() 
  {
    let area = this._height * this._width;
    return area;
  }
}

class Square extends Rectangle {
  constructor(_width) 
  {
    super(_width, _width);
  }
  getPerimeter() 
  {
    return 4 * this._width;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
