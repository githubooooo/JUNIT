class Vector2 {
  constructor(x = 0, y = 0) {
    Vector2.prototype.isVector2 = true;

    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;

    return this;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;

    return this;
  }

  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;

    return this;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;

    return this;
  }

  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;

    return this;
  }

  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;

    return this;
  }

  divide(v) {
    this.x /= v.x;
    this.y /= v.y;

    return this;
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  cross(v) {
    return this.x * v.y - this.y * v.x;
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

}

module.exports = Vector2;
