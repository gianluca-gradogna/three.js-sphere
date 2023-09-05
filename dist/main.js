var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __vite_style__ = document.createElement("style");
__vite_style__.innerHTML = ".tp-dfwv {\n    z-index: 1000;\n}";
document.head.appendChild(__vite_style__);
(function(f) {
  typeof define === "function" && define.amd ? define(["https://cdn.jsdelivr.net/npm/tweakpane@4.0.0/dist/tweakpane.min.js"], f) : f();
})(function() {
  "use strict";
  var style = "";
  /**
  * @license
  * Copyright 2010-2023 Three.js Authors
  * SPDX-License-Identifier: MIT
  */
  const REVISION = "152";
  const FrontSide = 0;
  const BackSide = 1;
  const NormalBlending = 1;
  const AddEquation = 100;
  const SrcAlphaFactor = 204;
  const OneMinusSrcAlphaFactor = 205;
  const LessEqualDepth = 3;
  const MultiplyOperation = 0;
  const UVMapping = 300;
  const RepeatWrapping = 1e3;
  const ClampToEdgeWrapping = 1001;
  const MirroredRepeatWrapping = 1002;
  const LinearFilter = 1006;
  const LinearMipmapLinearFilter = 1008;
  const UnsignedByteType = 1009;
  const RGBAFormat = 1023;
  const LinearEncoding = 3e3;
  const sRGBEncoding = 3001;
  const TangentSpaceNormalMap = 0;
  const NoColorSpace = "";
  const SRGBColorSpace = "srgb";
  const LinearSRGBColorSpace = "srgb-linear";
  const DisplayP3ColorSpace = "display-p3";
  const KeepStencilOp = 7680;
  const AlwaysStencilFunc = 519;
  const StaticDrawUsage = 35044;
  class EventDispatcher {
    addEventListener(type, listener) {
      if (this._listeners === void 0)
        this._listeners = {};
      const listeners = this._listeners;
      if (listeners[type] === void 0) {
        listeners[type] = [];
      }
      if (listeners[type].indexOf(listener) === -1) {
        listeners[type].push(listener);
      }
    }
    hasEventListener(type, listener) {
      if (this._listeners === void 0)
        return false;
      const listeners = this._listeners;
      return listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1;
    }
    removeEventListener(type, listener) {
      if (this._listeners === void 0)
        return;
      const listeners = this._listeners;
      const listenerArray = listeners[type];
      if (listenerArray !== void 0) {
        const index = listenerArray.indexOf(listener);
        if (index !== -1) {
          listenerArray.splice(index, 1);
        }
      }
    }
    dispatchEvent(event) {
      if (this._listeners === void 0)
        return;
      const listeners = this._listeners;
      const listenerArray = listeners[event.type];
      if (listenerArray !== void 0) {
        event.target = this;
        const array = listenerArray.slice(0);
        for (let i = 0, l = array.length; i < l; i++) {
          array[i].call(this, event);
        }
        event.target = null;
      }
    }
  }
  const _lut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
  function generateUUID() {
    const d0 = Math.random() * 4294967295 | 0;
    const d1 = Math.random() * 4294967295 | 0;
    const d2 = Math.random() * 4294967295 | 0;
    const d3 = Math.random() * 4294967295 | 0;
    const uuid = _lut[d0 & 255] + _lut[d0 >> 8 & 255] + _lut[d0 >> 16 & 255] + _lut[d0 >> 24 & 255] + "-" + _lut[d1 & 255] + _lut[d1 >> 8 & 255] + "-" + _lut[d1 >> 16 & 15 | 64] + _lut[d1 >> 24 & 255] + "-" + _lut[d2 & 63 | 128] + _lut[d2 >> 8 & 255] + "-" + _lut[d2 >> 16 & 255] + _lut[d2 >> 24 & 255] + _lut[d3 & 255] + _lut[d3 >> 8 & 255] + _lut[d3 >> 16 & 255] + _lut[d3 >> 24 & 255];
    return uuid.toLowerCase();
  }
  function clamp$1(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  function euclideanModulo(n, m) {
    return (n % m + m) % m;
  }
  function lerp(x, y, t) {
    return (1 - t) * x + t * y;
  }
  function denormalize(value, array) {
    switch (array.constructor) {
      case Float32Array:
        return value;
      case Uint16Array:
        return value / 65535;
      case Uint8Array:
        return value / 255;
      case Int16Array:
        return Math.max(value / 32767, -1);
      case Int8Array:
        return Math.max(value / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function normalize$1(value, array) {
    switch (array.constructor) {
      case Float32Array:
        return value;
      case Uint16Array:
        return Math.round(value * 65535);
      case Uint8Array:
        return Math.round(value * 255);
      case Int16Array:
        return Math.round(value * 32767);
      case Int8Array:
        return Math.round(value * 127);
      default:
        throw new Error("Invalid component type.");
    }
  }
  class Vector2 {
    constructor(x = 0, y = 0) {
      Vector2.prototype.isVector2 = true;
      this.x = x;
      this.y = y;
    }
    get width() {
      return this.x;
    }
    set width(value) {
      this.x = value;
    }
    get height() {
      return this.y;
    }
    set height(value) {
      this.y = value;
    }
    set(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }
    setScalar(scalar) {
      this.x = scalar;
      this.y = scalar;
      return this;
    }
    setX(x) {
      this.x = x;
      return this;
    }
    setY(y) {
      this.y = y;
      return this;
    }
    setComponent(index, value) {
      switch (index) {
        case 0:
          this.x = value;
          break;
        case 1:
          this.y = value;
          break;
        default:
          throw new Error("index is out of range: " + index);
      }
      return this;
    }
    getComponent(index) {
      switch (index) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + index);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      return this;
    }
    add(v) {
      this.x += v.x;
      this.y += v.y;
      return this;
    }
    addScalar(s) {
      this.x += s;
      this.y += s;
      return this;
    }
    addVectors(a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      return this;
    }
    addScaledVector(v, s) {
      this.x += v.x * s;
      this.y += v.y * s;
      return this;
    }
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      return this;
    }
    subScalar(s) {
      this.x -= s;
      this.y -= s;
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
    multiplyScalar(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      return this;
    }
    divide(v) {
      this.x /= v.x;
      this.y /= v.y;
      return this;
    }
    divideScalar(scalar) {
      return this.multiplyScalar(1 / scalar);
    }
    applyMatrix3(m) {
      const x = this.x, y = this.y;
      const e = m.elements;
      this.x = e[0] * x + e[3] * y + e[6];
      this.y = e[1] * x + e[4] * y + e[7];
      return this;
    }
    min(v) {
      this.x = Math.min(this.x, v.x);
      this.y = Math.min(this.y, v.y);
      return this;
    }
    max(v) {
      this.x = Math.max(this.x, v.x);
      this.y = Math.max(this.y, v.y);
      return this;
    }
    clamp(min, max) {
      this.x = Math.max(min.x, Math.min(max.x, this.x));
      this.y = Math.max(min.y, Math.min(max.y, this.y));
      return this;
    }
    clampScalar(minVal, maxVal) {
      this.x = Math.max(minVal, Math.min(maxVal, this.x));
      this.y = Math.max(minVal, Math.min(maxVal, this.y));
      return this;
    }
    clampLength(min, max) {
      const length = this.length();
      return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
    }
    floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    }
    ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    }
    round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    }
    roundToZero() {
      this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
      this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
      return this;
    }
    negate() {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    }
    dot(v) {
      return this.x * v.x + this.y * v.y;
    }
    cross(v) {
      return this.x * v.y - this.y * v.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      const angle = Math.atan2(-this.y, -this.x) + Math.PI;
      return angle;
    }
    angleTo(v) {
      const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
      if (denominator === 0)
        return Math.PI / 2;
      const theta = this.dot(v) / denominator;
      return Math.acos(clamp$1(theta, -1, 1));
    }
    distanceTo(v) {
      return Math.sqrt(this.distanceToSquared(v));
    }
    distanceToSquared(v) {
      const dx = this.x - v.x, dy = this.y - v.y;
      return dx * dx + dy * dy;
    }
    manhattanDistanceTo(v) {
      return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
    }
    setLength(length) {
      return this.normalize().multiplyScalar(length);
    }
    lerp(v, alpha) {
      this.x += (v.x - this.x) * alpha;
      this.y += (v.y - this.y) * alpha;
      return this;
    }
    lerpVectors(v1, v2, alpha) {
      this.x = v1.x + (v2.x - v1.x) * alpha;
      this.y = v1.y + (v2.y - v1.y) * alpha;
      return this;
    }
    equals(v) {
      return v.x === this.x && v.y === this.y;
    }
    fromArray(array, offset = 0) {
      this.x = array[offset];
      this.y = array[offset + 1];
      return this;
    }
    toArray(array = [], offset = 0) {
      array[offset] = this.x;
      array[offset + 1] = this.y;
      return array;
    }
    fromBufferAttribute(attribute, index) {
      this.x = attribute.getX(index);
      this.y = attribute.getY(index);
      return this;
    }
    rotateAround(center, angle) {
      const c = Math.cos(angle), s = Math.sin(angle);
      const x = this.x - center.x;
      const y = this.y - center.y;
      this.x = x * c - y * s + center.x;
      this.y = x * s + y * c + center.y;
      return this;
    }
    random() {
      this.x = Math.random();
      this.y = Math.random();
      return this;
    }
    *[Symbol.iterator]() {
      yield this.x;
      yield this.y;
    }
  }
  class Matrix3 {
    constructor() {
      Matrix3.prototype.isMatrix3 = true;
      this.elements = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ];
    }
    set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
      const te = this.elements;
      te[0] = n11;
      te[1] = n21;
      te[2] = n31;
      te[3] = n12;
      te[4] = n22;
      te[5] = n32;
      te[6] = n13;
      te[7] = n23;
      te[8] = n33;
      return this;
    }
    identity() {
      this.set(
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      );
      return this;
    }
    copy(m) {
      const te = this.elements;
      const me = m.elements;
      te[0] = me[0];
      te[1] = me[1];
      te[2] = me[2];
      te[3] = me[3];
      te[4] = me[4];
      te[5] = me[5];
      te[6] = me[6];
      te[7] = me[7];
      te[8] = me[8];
      return this;
    }
    extractBasis(xAxis, yAxis, zAxis) {
      xAxis.setFromMatrix3Column(this, 0);
      yAxis.setFromMatrix3Column(this, 1);
      zAxis.setFromMatrix3Column(this, 2);
      return this;
    }
    setFromMatrix4(m) {
      const me = m.elements;
      this.set(
        me[0],
        me[4],
        me[8],
        me[1],
        me[5],
        me[9],
        me[2],
        me[6],
        me[10]
      );
      return this;
    }
    multiply(m) {
      return this.multiplyMatrices(this, m);
    }
    premultiply(m) {
      return this.multiplyMatrices(m, this);
    }
    multiplyMatrices(a, b) {
      const ae = a.elements;
      const be = b.elements;
      const te = this.elements;
      const a11 = ae[0], a12 = ae[3], a13 = ae[6];
      const a21 = ae[1], a22 = ae[4], a23 = ae[7];
      const a31 = ae[2], a32 = ae[5], a33 = ae[8];
      const b11 = be[0], b12 = be[3], b13 = be[6];
      const b21 = be[1], b22 = be[4], b23 = be[7];
      const b31 = be[2], b32 = be[5], b33 = be[8];
      te[0] = a11 * b11 + a12 * b21 + a13 * b31;
      te[3] = a11 * b12 + a12 * b22 + a13 * b32;
      te[6] = a11 * b13 + a12 * b23 + a13 * b33;
      te[1] = a21 * b11 + a22 * b21 + a23 * b31;
      te[4] = a21 * b12 + a22 * b22 + a23 * b32;
      te[7] = a21 * b13 + a22 * b23 + a23 * b33;
      te[2] = a31 * b11 + a32 * b21 + a33 * b31;
      te[5] = a31 * b12 + a32 * b22 + a33 * b32;
      te[8] = a31 * b13 + a32 * b23 + a33 * b33;
      return this;
    }
    multiplyScalar(s) {
      const te = this.elements;
      te[0] *= s;
      te[3] *= s;
      te[6] *= s;
      te[1] *= s;
      te[4] *= s;
      te[7] *= s;
      te[2] *= s;
      te[5] *= s;
      te[8] *= s;
      return this;
    }
    determinant() {
      const te = this.elements;
      const a = te[0], b = te[1], c = te[2], d = te[3], e = te[4], f = te[5], g = te[6], h = te[7], i = te[8];
      return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
    }
    invert() {
      const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n12 = te[3], n22 = te[4], n32 = te[5], n13 = te[6], n23 = te[7], n33 = te[8], t11 = n33 * n22 - n32 * n23, t12 = n32 * n13 - n33 * n12, t13 = n23 * n12 - n22 * n13, det = n11 * t11 + n21 * t12 + n31 * t13;
      if (det === 0)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const detInv = 1 / det;
      te[0] = t11 * detInv;
      te[1] = (n31 * n23 - n33 * n21) * detInv;
      te[2] = (n32 * n21 - n31 * n22) * detInv;
      te[3] = t12 * detInv;
      te[4] = (n33 * n11 - n31 * n13) * detInv;
      te[5] = (n31 * n12 - n32 * n11) * detInv;
      te[6] = t13 * detInv;
      te[7] = (n21 * n13 - n23 * n11) * detInv;
      te[8] = (n22 * n11 - n21 * n12) * detInv;
      return this;
    }
    transpose() {
      let tmp;
      const m = this.elements;
      tmp = m[1];
      m[1] = m[3];
      m[3] = tmp;
      tmp = m[2];
      m[2] = m[6];
      m[6] = tmp;
      tmp = m[5];
      m[5] = m[7];
      m[7] = tmp;
      return this;
    }
    getNormalMatrix(matrix4) {
      return this.setFromMatrix4(matrix4).invert().transpose();
    }
    transposeIntoArray(r) {
      const m = this.elements;
      r[0] = m[0];
      r[1] = m[3];
      r[2] = m[6];
      r[3] = m[1];
      r[4] = m[4];
      r[5] = m[7];
      r[6] = m[2];
      r[7] = m[5];
      r[8] = m[8];
      return this;
    }
    setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
      const c = Math.cos(rotation);
      const s = Math.sin(rotation);
      this.set(
        sx * c,
        sx * s,
        -sx * (c * cx + s * cy) + cx + tx,
        -sy * s,
        sy * c,
        -sy * (-s * cx + c * cy) + cy + ty,
        0,
        0,
        1
      );
      return this;
    }
    scale(sx, sy) {
      this.premultiply(_m3.makeScale(sx, sy));
      return this;
    }
    rotate(theta) {
      this.premultiply(_m3.makeRotation(-theta));
      return this;
    }
    translate(tx, ty) {
      this.premultiply(_m3.makeTranslation(tx, ty));
      return this;
    }
    makeTranslation(x, y) {
      this.set(
        1,
        0,
        x,
        0,
        1,
        y,
        0,
        0,
        1
      );
      return this;
    }
    makeRotation(theta) {
      const c = Math.cos(theta);
      const s = Math.sin(theta);
      this.set(
        c,
        -s,
        0,
        s,
        c,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeScale(x, y) {
      this.set(
        x,
        0,
        0,
        0,
        y,
        0,
        0,
        0,
        1
      );
      return this;
    }
    equals(matrix) {
      const te = this.elements;
      const me = matrix.elements;
      for (let i = 0; i < 9; i++) {
        if (te[i] !== me[i])
          return false;
      }
      return true;
    }
    fromArray(array, offset = 0) {
      for (let i = 0; i < 9; i++) {
        this.elements[i] = array[i + offset];
      }
      return this;
    }
    toArray(array = [], offset = 0) {
      const te = this.elements;
      array[offset] = te[0];
      array[offset + 1] = te[1];
      array[offset + 2] = te[2];
      array[offset + 3] = te[3];
      array[offset + 4] = te[4];
      array[offset + 5] = te[5];
      array[offset + 6] = te[6];
      array[offset + 7] = te[7];
      array[offset + 8] = te[8];
      return array;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  const _m3 = /* @__PURE__ */ new Matrix3();
  function arrayNeedsUint32(array) {
    for (let i = array.length - 1; i >= 0; --i) {
      if (array[i] >= 65535)
        return true;
    }
    return false;
  }
  function createElementNS(name) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", name);
  }
  const _cache = {};
  function warnOnce(message) {
    if (message in _cache)
      return;
    _cache[message] = true;
    console.warn(message);
  }
  function SRGBToLinear(c) {
    return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
  }
  function LinearToSRGB(c) {
    return c < 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
  }
  const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = /* @__PURE__ */ new Matrix3().fromArray([
    0.8224621,
    0.0331941,
    0.0170827,
    0.177538,
    0.9668058,
    0.0723974,
    -1e-7,
    1e-7,
    0.9105199
  ]);
  const LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = /* @__PURE__ */ new Matrix3().fromArray([
    1.2249401,
    -0.0420569,
    -0.0196376,
    -0.2249404,
    1.0420571,
    -0.0786361,
    1e-7,
    0,
    1.0982735
  ]);
  function DisplayP3ToLinearSRGB(color) {
    return color.convertSRGBToLinear().applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB);
  }
  function LinearSRGBToDisplayP3(color) {
    return color.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3).convertLinearToSRGB();
  }
  const TO_LINEAR = {
    [LinearSRGBColorSpace]: (color) => color,
    [SRGBColorSpace]: (color) => color.convertSRGBToLinear(),
    [DisplayP3ColorSpace]: DisplayP3ToLinearSRGB
  };
  const FROM_LINEAR = {
    [LinearSRGBColorSpace]: (color) => color,
    [SRGBColorSpace]: (color) => color.convertLinearToSRGB(),
    [DisplayP3ColorSpace]: LinearSRGBToDisplayP3
  };
  const ColorManagement = {
    enabled: true,
    get legacyMode() {
      console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150.");
      return !this.enabled;
    },
    set legacyMode(legacyMode) {
      console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150.");
      this.enabled = !legacyMode;
    },
    get workingColorSpace() {
      return LinearSRGBColorSpace;
    },
    set workingColorSpace(colorSpace) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function(color, sourceColorSpace, targetColorSpace) {
      if (this.enabled === false || sourceColorSpace === targetColorSpace || !sourceColorSpace || !targetColorSpace) {
        return color;
      }
      const sourceToLinear = TO_LINEAR[sourceColorSpace];
      const targetFromLinear = FROM_LINEAR[targetColorSpace];
      if (sourceToLinear === void 0 || targetFromLinear === void 0) {
        throw new Error(`Unsupported color space conversion, "${sourceColorSpace}" to "${targetColorSpace}".`);
      }
      return targetFromLinear(sourceToLinear(color));
    },
    fromWorkingColorSpace: function(color, targetColorSpace) {
      return this.convert(color, this.workingColorSpace, targetColorSpace);
    },
    toWorkingColorSpace: function(color, sourceColorSpace) {
      return this.convert(color, sourceColorSpace, this.workingColorSpace);
    }
  };
  let _canvas;
  class ImageUtils {
    static getDataURL(image) {
      if (/^data:/i.test(image.src)) {
        return image.src;
      }
      if (typeof HTMLCanvasElement === "undefined") {
        return image.src;
      }
      let canvas;
      if (image instanceof HTMLCanvasElement) {
        canvas = image;
      } else {
        if (_canvas === void 0)
          _canvas = createElementNS("canvas");
        _canvas.width = image.width;
        _canvas.height = image.height;
        const context = _canvas.getContext("2d");
        if (image instanceof ImageData) {
          context.putImageData(image, 0, 0);
        } else {
          context.drawImage(image, 0, 0, image.width, image.height);
        }
        canvas = _canvas;
      }
      if (canvas.width > 2048 || canvas.height > 2048) {
        console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", image);
        return canvas.toDataURL("image/jpeg", 0.6);
      } else {
        return canvas.toDataURL("image/png");
      }
    }
    static sRGBToLinear(image) {
      if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
        const canvas = createElementNS("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        const imageData = context.getImageData(0, 0, image.width, image.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i++) {
          data[i] = SRGBToLinear(data[i] / 255) * 255;
        }
        context.putImageData(imageData, 0, 0);
        return canvas;
      } else if (image.data) {
        const data = image.data.slice(0);
        for (let i = 0; i < data.length; i++) {
          if (data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
            data[i] = Math.floor(SRGBToLinear(data[i] / 255) * 255);
          } else {
            data[i] = SRGBToLinear(data[i]);
          }
        }
        return {
          data,
          width: image.width,
          height: image.height
        };
      } else {
        console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.");
        return image;
      }
    }
  }
  class Source {
    constructor(data = null) {
      this.isSource = true;
      this.uuid = generateUUID();
      this.data = data;
      this.version = 0;
    }
    set needsUpdate(value) {
      if (value === true)
        this.version++;
    }
    toJSON(meta) {
      const isRootObject = meta === void 0 || typeof meta === "string";
      if (!isRootObject && meta.images[this.uuid] !== void 0) {
        return meta.images[this.uuid];
      }
      const output = {
        uuid: this.uuid,
        url: ""
      };
      const data = this.data;
      if (data !== null) {
        let url;
        if (Array.isArray(data)) {
          url = [];
          for (let i = 0, l = data.length; i < l; i++) {
            if (data[i].isDataTexture) {
              url.push(serializeImage(data[i].image));
            } else {
              url.push(serializeImage(data[i]));
            }
          }
        } else {
          url = serializeImage(data);
        }
        output.url = url;
      }
      if (!isRootObject) {
        meta.images[this.uuid] = output;
      }
      return output;
    }
  }
  function serializeImage(image) {
    if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
      return ImageUtils.getDataURL(image);
    } else {
      if (image.data) {
        return {
          data: Array.from(image.data),
          width: image.width,
          height: image.height,
          type: image.data.constructor.name
        };
      } else {
        console.warn("THREE.Texture: Unable to serialize Texture.");
        return {};
      }
    }
  }
  let textureId = 0;
  class Texture extends EventDispatcher {
    constructor(image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = Texture.DEFAULT_ANISOTROPY, colorSpace = NoColorSpace) {
      super();
      this.isTexture = true;
      Object.defineProperty(this, "id", { value: textureId++ });
      this.uuid = generateUUID();
      this.name = "";
      this.source = new Source(image);
      this.mipmaps = [];
      this.mapping = mapping;
      this.channel = 0;
      this.wrapS = wrapS;
      this.wrapT = wrapT;
      this.magFilter = magFilter;
      this.minFilter = minFilter;
      this.anisotropy = anisotropy;
      this.format = format;
      this.internalFormat = null;
      this.type = type;
      this.offset = new Vector2(0, 0);
      this.repeat = new Vector2(1, 1);
      this.center = new Vector2(0, 0);
      this.rotation = 0;
      this.matrixAutoUpdate = true;
      this.matrix = new Matrix3();
      this.generateMipmaps = true;
      this.premultiplyAlpha = false;
      this.flipY = true;
      this.unpackAlignment = 4;
      if (typeof colorSpace === "string") {
        this.colorSpace = colorSpace;
      } else {
        warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace.");
        this.colorSpace = colorSpace === sRGBEncoding ? SRGBColorSpace : NoColorSpace;
      }
      this.userData = {};
      this.version = 0;
      this.onUpdate = null;
      this.isRenderTargetTexture = false;
      this.needsPMREMUpdate = false;
    }
    get image() {
      return this.source.data;
    }
    set image(value = null) {
      this.source.data = value;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(source) {
      this.name = source.name;
      this.source = source.source;
      this.mipmaps = source.mipmaps.slice(0);
      this.mapping = source.mapping;
      this.channel = source.channel;
      this.wrapS = source.wrapS;
      this.wrapT = source.wrapT;
      this.magFilter = source.magFilter;
      this.minFilter = source.minFilter;
      this.anisotropy = source.anisotropy;
      this.format = source.format;
      this.internalFormat = source.internalFormat;
      this.type = source.type;
      this.offset.copy(source.offset);
      this.repeat.copy(source.repeat);
      this.center.copy(source.center);
      this.rotation = source.rotation;
      this.matrixAutoUpdate = source.matrixAutoUpdate;
      this.matrix.copy(source.matrix);
      this.generateMipmaps = source.generateMipmaps;
      this.premultiplyAlpha = source.premultiplyAlpha;
      this.flipY = source.flipY;
      this.unpackAlignment = source.unpackAlignment;
      this.colorSpace = source.colorSpace;
      this.userData = JSON.parse(JSON.stringify(source.userData));
      this.needsUpdate = true;
      return this;
    }
    toJSON(meta) {
      const isRootObject = meta === void 0 || typeof meta === "string";
      if (!isRootObject && meta.textures[this.uuid] !== void 0) {
        return meta.textures[this.uuid];
      }
      const output = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(meta).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        colorSpace: this.colorSpace,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };
      if (Object.keys(this.userData).length > 0)
        output.userData = this.userData;
      if (!isRootObject) {
        meta.textures[this.uuid] = output;
      }
      return output;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(uv) {
      if (this.mapping !== UVMapping)
        return uv;
      uv.applyMatrix3(this.matrix);
      if (uv.x < 0 || uv.x > 1) {
        switch (this.wrapS) {
          case RepeatWrapping:
            uv.x = uv.x - Math.floor(uv.x);
            break;
          case ClampToEdgeWrapping:
            uv.x = uv.x < 0 ? 0 : 1;
            break;
          case MirroredRepeatWrapping:
            if (Math.abs(Math.floor(uv.x) % 2) === 1) {
              uv.x = Math.ceil(uv.x) - uv.x;
            } else {
              uv.x = uv.x - Math.floor(uv.x);
            }
            break;
        }
      }
      if (uv.y < 0 || uv.y > 1) {
        switch (this.wrapT) {
          case RepeatWrapping:
            uv.y = uv.y - Math.floor(uv.y);
            break;
          case ClampToEdgeWrapping:
            uv.y = uv.y < 0 ? 0 : 1;
            break;
          case MirroredRepeatWrapping:
            if (Math.abs(Math.floor(uv.y) % 2) === 1) {
              uv.y = Math.ceil(uv.y) - uv.y;
            } else {
              uv.y = uv.y - Math.floor(uv.y);
            }
            break;
        }
      }
      if (this.flipY) {
        uv.y = 1 - uv.y;
      }
      return uv;
    }
    set needsUpdate(value) {
      if (value === true) {
        this.version++;
        this.source.needsUpdate = true;
      }
    }
    get encoding() {
      warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace.");
      return this.colorSpace === SRGBColorSpace ? sRGBEncoding : LinearEncoding;
    }
    set encoding(encoding) {
      warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace.");
      this.colorSpace = encoding === sRGBEncoding ? SRGBColorSpace : NoColorSpace;
    }
  }
  Texture.DEFAULT_IMAGE = null;
  Texture.DEFAULT_MAPPING = UVMapping;
  Texture.DEFAULT_ANISOTROPY = 1;
  class Quaternion {
    constructor(x = 0, y = 0, z = 0, w = 1) {
      this.isQuaternion = true;
      this._x = x;
      this._y = y;
      this._z = z;
      this._w = w;
    }
    static slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
      let x0 = src0[srcOffset0 + 0], y0 = src0[srcOffset0 + 1], z0 = src0[srcOffset0 + 2], w0 = src0[srcOffset0 + 3];
      const x1 = src1[srcOffset1 + 0], y1 = src1[srcOffset1 + 1], z1 = src1[srcOffset1 + 2], w1 = src1[srcOffset1 + 3];
      if (t === 0) {
        dst[dstOffset + 0] = x0;
        dst[dstOffset + 1] = y0;
        dst[dstOffset + 2] = z0;
        dst[dstOffset + 3] = w0;
        return;
      }
      if (t === 1) {
        dst[dstOffset + 0] = x1;
        dst[dstOffset + 1] = y1;
        dst[dstOffset + 2] = z1;
        dst[dstOffset + 3] = w1;
        return;
      }
      if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
        let s = 1 - t;
        const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1, dir = cos >= 0 ? 1 : -1, sqrSin = 1 - cos * cos;
        if (sqrSin > Number.EPSILON) {
          const sin = Math.sqrt(sqrSin), len = Math.atan2(sin, cos * dir);
          s = Math.sin(s * len) / sin;
          t = Math.sin(t * len) / sin;
        }
        const tDir = t * dir;
        x0 = x0 * s + x1 * tDir;
        y0 = y0 * s + y1 * tDir;
        z0 = z0 * s + z1 * tDir;
        w0 = w0 * s + w1 * tDir;
        if (s === 1 - t) {
          const f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
          x0 *= f;
          y0 *= f;
          z0 *= f;
          w0 *= f;
        }
      }
      dst[dstOffset] = x0;
      dst[dstOffset + 1] = y0;
      dst[dstOffset + 2] = z0;
      dst[dstOffset + 3] = w0;
    }
    static multiplyQuaternionsFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1) {
      const x0 = src0[srcOffset0];
      const y0 = src0[srcOffset0 + 1];
      const z0 = src0[srcOffset0 + 2];
      const w0 = src0[srcOffset0 + 3];
      const x1 = src1[srcOffset1];
      const y1 = src1[srcOffset1 + 1];
      const z1 = src1[srcOffset1 + 2];
      const w1 = src1[srcOffset1 + 3];
      dst[dstOffset] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
      dst[dstOffset + 1] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
      dst[dstOffset + 2] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
      dst[dstOffset + 3] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;
      return dst;
    }
    get x() {
      return this._x;
    }
    set x(value) {
      this._x = value;
      this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(value) {
      this._y = value;
      this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(value) {
      this._z = value;
      this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(value) {
      this._w = value;
      this._onChangeCallback();
    }
    set(x, y, z, w) {
      this._x = x;
      this._y = y;
      this._z = z;
      this._w = w;
      this._onChangeCallback();
      return this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(quaternion) {
      this._x = quaternion.x;
      this._y = quaternion.y;
      this._z = quaternion.z;
      this._w = quaternion.w;
      this._onChangeCallback();
      return this;
    }
    setFromEuler(euler, update) {
      const x = euler._x, y = euler._y, z = euler._z, order = euler._order;
      const cos = Math.cos;
      const sin = Math.sin;
      const c1 = cos(x / 2);
      const c2 = cos(y / 2);
      const c3 = cos(z / 2);
      const s1 = sin(x / 2);
      const s2 = sin(y / 2);
      const s3 = sin(z / 2);
      switch (order) {
        case "XYZ":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "YXZ":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        case "ZXY":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "ZYX":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        case "YZX":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "XZY":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + order);
      }
      if (update !== false)
        this._onChangeCallback();
      return this;
    }
    setFromAxisAngle(axis, angle) {
      const halfAngle = angle / 2, s = Math.sin(halfAngle);
      this._x = axis.x * s;
      this._y = axis.y * s;
      this._z = axis.z * s;
      this._w = Math.cos(halfAngle);
      this._onChangeCallback();
      return this;
    }
    setFromRotationMatrix(m) {
      const te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10], trace = m11 + m22 + m33;
      if (trace > 0) {
        const s = 0.5 / Math.sqrt(trace + 1);
        this._w = 0.25 / s;
        this._x = (m32 - m23) * s;
        this._y = (m13 - m31) * s;
        this._z = (m21 - m12) * s;
      } else if (m11 > m22 && m11 > m33) {
        const s = 2 * Math.sqrt(1 + m11 - m22 - m33);
        this._w = (m32 - m23) / s;
        this._x = 0.25 * s;
        this._y = (m12 + m21) / s;
        this._z = (m13 + m31) / s;
      } else if (m22 > m33) {
        const s = 2 * Math.sqrt(1 + m22 - m11 - m33);
        this._w = (m13 - m31) / s;
        this._x = (m12 + m21) / s;
        this._y = 0.25 * s;
        this._z = (m23 + m32) / s;
      } else {
        const s = 2 * Math.sqrt(1 + m33 - m11 - m22);
        this._w = (m21 - m12) / s;
        this._x = (m13 + m31) / s;
        this._y = (m23 + m32) / s;
        this._z = 0.25 * s;
      }
      this._onChangeCallback();
      return this;
    }
    setFromUnitVectors(vFrom, vTo) {
      let r = vFrom.dot(vTo) + 1;
      if (r < Number.EPSILON) {
        r = 0;
        if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
          this._x = -vFrom.y;
          this._y = vFrom.x;
          this._z = 0;
          this._w = r;
        } else {
          this._x = 0;
          this._y = -vFrom.z;
          this._z = vFrom.y;
          this._w = r;
        }
      } else {
        this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
        this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
        this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
        this._w = r;
      }
      return this.normalize();
    }
    angleTo(q) {
      return 2 * Math.acos(Math.abs(clamp$1(this.dot(q), -1, 1)));
    }
    rotateTowards(q, step) {
      const angle = this.angleTo(q);
      if (angle === 0)
        return this;
      const t = Math.min(1, step / angle);
      this.slerp(q, t);
      return this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      this._x *= -1;
      this._y *= -1;
      this._z *= -1;
      this._onChangeCallback();
      return this;
    }
    dot(v) {
      return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let l = this.length();
      if (l === 0) {
        this._x = 0;
        this._y = 0;
        this._z = 0;
        this._w = 1;
      } else {
        l = 1 / l;
        this._x = this._x * l;
        this._y = this._y * l;
        this._z = this._z * l;
        this._w = this._w * l;
      }
      this._onChangeCallback();
      return this;
    }
    multiply(q) {
      return this.multiplyQuaternions(this, q);
    }
    premultiply(q) {
      return this.multiplyQuaternions(q, this);
    }
    multiplyQuaternions(a, b) {
      const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
      const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;
      this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
      this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
      this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
      this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
      this._onChangeCallback();
      return this;
    }
    slerp(qb, t) {
      if (t === 0)
        return this;
      if (t === 1)
        return this.copy(qb);
      const x = this._x, y = this._y, z = this._z, w = this._w;
      let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;
      if (cosHalfTheta < 0) {
        this._w = -qb._w;
        this._x = -qb._x;
        this._y = -qb._y;
        this._z = -qb._z;
        cosHalfTheta = -cosHalfTheta;
      } else {
        this.copy(qb);
      }
      if (cosHalfTheta >= 1) {
        this._w = w;
        this._x = x;
        this._y = y;
        this._z = z;
        return this;
      }
      const sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;
      if (sqrSinHalfTheta <= Number.EPSILON) {
        const s = 1 - t;
        this._w = s * w + t * this._w;
        this._x = s * x + t * this._x;
        this._y = s * y + t * this._y;
        this._z = s * z + t * this._z;
        this.normalize();
        this._onChangeCallback();
        return this;
      }
      const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
      const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
      const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta, ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
      this._w = w * ratioA + this._w * ratioB;
      this._x = x * ratioA + this._x * ratioB;
      this._y = y * ratioA + this._y * ratioB;
      this._z = z * ratioA + this._z * ratioB;
      this._onChangeCallback();
      return this;
    }
    slerpQuaternions(qa, qb, t) {
      return this.copy(qa).slerp(qb, t);
    }
    random() {
      const u1 = Math.random();
      const sqrt1u1 = Math.sqrt(1 - u1);
      const sqrtu1 = Math.sqrt(u1);
      const u2 = 2 * Math.PI * Math.random();
      const u3 = 2 * Math.PI * Math.random();
      return this.set(
        sqrt1u1 * Math.cos(u2),
        sqrtu1 * Math.sin(u3),
        sqrtu1 * Math.cos(u3),
        sqrt1u1 * Math.sin(u2)
      );
    }
    equals(quaternion) {
      return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
    }
    fromArray(array, offset = 0) {
      this._x = array[offset];
      this._y = array[offset + 1];
      this._z = array[offset + 2];
      this._w = array[offset + 3];
      this._onChangeCallback();
      return this;
    }
    toArray(array = [], offset = 0) {
      array[offset] = this._x;
      array[offset + 1] = this._y;
      array[offset + 2] = this._z;
      array[offset + 3] = this._w;
      return array;
    }
    fromBufferAttribute(attribute, index) {
      this._x = attribute.getX(index);
      this._y = attribute.getY(index);
      this._z = attribute.getZ(index);
      this._w = attribute.getW(index);
      return this;
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(callback) {
      this._onChangeCallback = callback;
      return this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x;
      yield this._y;
      yield this._z;
      yield this._w;
    }
  }
  class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
      Vector3.prototype.isVector3 = true;
      this.x = x;
      this.y = y;
      this.z = z;
    }
    set(x, y, z) {
      if (z === void 0)
        z = this.z;
      this.x = x;
      this.y = y;
      this.z = z;
      return this;
    }
    setScalar(scalar) {
      this.x = scalar;
      this.y = scalar;
      this.z = scalar;
      return this;
    }
    setX(x) {
      this.x = x;
      return this;
    }
    setY(y) {
      this.y = y;
      return this;
    }
    setZ(z) {
      this.z = z;
      return this;
    }
    setComponent(index, value) {
      switch (index) {
        case 0:
          this.x = value;
          break;
        case 1:
          this.y = value;
          break;
        case 2:
          this.z = value;
          break;
        default:
          throw new Error("index is out of range: " + index);
      }
      return this;
    }
    getComponent(index) {
      switch (index) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + index);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      this.z = v.z;
      return this;
    }
    add(v) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
      return this;
    }
    addScalar(s) {
      this.x += s;
      this.y += s;
      this.z += s;
      return this;
    }
    addVectors(a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      this.z = a.z + b.z;
      return this;
    }
    addScaledVector(v, s) {
      this.x += v.x * s;
      this.y += v.y * s;
      this.z += v.z * s;
      return this;
    }
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
      return this;
    }
    subScalar(s) {
      this.x -= s;
      this.y -= s;
      this.z -= s;
      return this;
    }
    subVectors(a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      this.z = a.z - b.z;
      return this;
    }
    multiply(v) {
      this.x *= v.x;
      this.y *= v.y;
      this.z *= v.z;
      return this;
    }
    multiplyScalar(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      return this;
    }
    multiplyVectors(a, b) {
      this.x = a.x * b.x;
      this.y = a.y * b.y;
      this.z = a.z * b.z;
      return this;
    }
    applyEuler(euler) {
      return this.applyQuaternion(_quaternion$4.setFromEuler(euler));
    }
    applyAxisAngle(axis, angle) {
      return this.applyQuaternion(_quaternion$4.setFromAxisAngle(axis, angle));
    }
    applyMatrix3(m) {
      const x = this.x, y = this.y, z = this.z;
      const e = m.elements;
      this.x = e[0] * x + e[3] * y + e[6] * z;
      this.y = e[1] * x + e[4] * y + e[7] * z;
      this.z = e[2] * x + e[5] * y + e[8] * z;
      return this;
    }
    applyNormalMatrix(m) {
      return this.applyMatrix3(m).normalize();
    }
    applyMatrix4(m) {
      const x = this.x, y = this.y, z = this.z;
      const e = m.elements;
      const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
      this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
      this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
      this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
      return this;
    }
    applyQuaternion(q) {
      const x = this.x, y = this.y, z = this.z;
      const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
      const ix = qw * x + qy * z - qz * y;
      const iy = qw * y + qz * x - qx * z;
      const iz = qw * z + qx * y - qy * x;
      const iw = -qx * x - qy * y - qz * z;
      this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
      this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
      this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
      return this;
    }
    project(camera) {
      return this.applyMatrix4(camera.matrixWorldInverse).applyMatrix4(camera.projectionMatrix);
    }
    unproject(camera) {
      return this.applyMatrix4(camera.projectionMatrixInverse).applyMatrix4(camera.matrixWorld);
    }
    transformDirection(m) {
      const x = this.x, y = this.y, z = this.z;
      const e = m.elements;
      this.x = e[0] * x + e[4] * y + e[8] * z;
      this.y = e[1] * x + e[5] * y + e[9] * z;
      this.z = e[2] * x + e[6] * y + e[10] * z;
      return this.normalize();
    }
    divide(v) {
      this.x /= v.x;
      this.y /= v.y;
      this.z /= v.z;
      return this;
    }
    divideScalar(scalar) {
      return this.multiplyScalar(1 / scalar);
    }
    min(v) {
      this.x = Math.min(this.x, v.x);
      this.y = Math.min(this.y, v.y);
      this.z = Math.min(this.z, v.z);
      return this;
    }
    max(v) {
      this.x = Math.max(this.x, v.x);
      this.y = Math.max(this.y, v.y);
      this.z = Math.max(this.z, v.z);
      return this;
    }
    clamp(min, max) {
      this.x = Math.max(min.x, Math.min(max.x, this.x));
      this.y = Math.max(min.y, Math.min(max.y, this.y));
      this.z = Math.max(min.z, Math.min(max.z, this.z));
      return this;
    }
    clampScalar(minVal, maxVal) {
      this.x = Math.max(minVal, Math.min(maxVal, this.x));
      this.y = Math.max(minVal, Math.min(maxVal, this.y));
      this.z = Math.max(minVal, Math.min(maxVal, this.z));
      return this;
    }
    clampLength(min, max) {
      const length = this.length();
      return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
    }
    floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      return this;
    }
    ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      return this;
    }
    round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      return this;
    }
    roundToZero() {
      this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
      this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
      this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
      return this;
    }
    negate() {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      return this;
    }
    dot(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(length) {
      return this.normalize().multiplyScalar(length);
    }
    lerp(v, alpha) {
      this.x += (v.x - this.x) * alpha;
      this.y += (v.y - this.y) * alpha;
      this.z += (v.z - this.z) * alpha;
      return this;
    }
    lerpVectors(v1, v2, alpha) {
      this.x = v1.x + (v2.x - v1.x) * alpha;
      this.y = v1.y + (v2.y - v1.y) * alpha;
      this.z = v1.z + (v2.z - v1.z) * alpha;
      return this;
    }
    cross(v) {
      return this.crossVectors(this, v);
    }
    crossVectors(a, b) {
      const ax = a.x, ay = a.y, az = a.z;
      const bx = b.x, by = b.y, bz = b.z;
      this.x = ay * bz - az * by;
      this.y = az * bx - ax * bz;
      this.z = ax * by - ay * bx;
      return this;
    }
    projectOnVector(v) {
      const denominator = v.lengthSq();
      if (denominator === 0)
        return this.set(0, 0, 0);
      const scalar = v.dot(this) / denominator;
      return this.copy(v).multiplyScalar(scalar);
    }
    projectOnPlane(planeNormal) {
      _vector$b.copy(this).projectOnVector(planeNormal);
      return this.sub(_vector$b);
    }
    reflect(normal) {
      return this.sub(_vector$b.copy(normal).multiplyScalar(2 * this.dot(normal)));
    }
    angleTo(v) {
      const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
      if (denominator === 0)
        return Math.PI / 2;
      const theta = this.dot(v) / denominator;
      return Math.acos(clamp$1(theta, -1, 1));
    }
    distanceTo(v) {
      return Math.sqrt(this.distanceToSquared(v));
    }
    distanceToSquared(v) {
      const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
      return dx * dx + dy * dy + dz * dz;
    }
    manhattanDistanceTo(v) {
      return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
    }
    setFromSpherical(s) {
      return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
    }
    setFromSphericalCoords(radius, phi, theta) {
      const sinPhiRadius = Math.sin(phi) * radius;
      this.x = sinPhiRadius * Math.sin(theta);
      this.y = Math.cos(phi) * radius;
      this.z = sinPhiRadius * Math.cos(theta);
      return this;
    }
    setFromCylindrical(c) {
      return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
    }
    setFromCylindricalCoords(radius, theta, y) {
      this.x = radius * Math.sin(theta);
      this.y = y;
      this.z = radius * Math.cos(theta);
      return this;
    }
    setFromMatrixPosition(m) {
      const e = m.elements;
      this.x = e[12];
      this.y = e[13];
      this.z = e[14];
      return this;
    }
    setFromMatrixScale(m) {
      const sx = this.setFromMatrixColumn(m, 0).length();
      const sy = this.setFromMatrixColumn(m, 1).length();
      const sz = this.setFromMatrixColumn(m, 2).length();
      this.x = sx;
      this.y = sy;
      this.z = sz;
      return this;
    }
    setFromMatrixColumn(m, index) {
      return this.fromArray(m.elements, index * 4);
    }
    setFromMatrix3Column(m, index) {
      return this.fromArray(m.elements, index * 3);
    }
    setFromEuler(e) {
      this.x = e._x;
      this.y = e._y;
      this.z = e._z;
      return this;
    }
    setFromColor(c) {
      this.x = c.r;
      this.y = c.g;
      this.z = c.b;
      return this;
    }
    equals(v) {
      return v.x === this.x && v.y === this.y && v.z === this.z;
    }
    fromArray(array, offset = 0) {
      this.x = array[offset];
      this.y = array[offset + 1];
      this.z = array[offset + 2];
      return this;
    }
    toArray(array = [], offset = 0) {
      array[offset] = this.x;
      array[offset + 1] = this.y;
      array[offset + 2] = this.z;
      return array;
    }
    fromBufferAttribute(attribute, index) {
      this.x = attribute.getX(index);
      this.y = attribute.getY(index);
      this.z = attribute.getZ(index);
      return this;
    }
    random() {
      this.x = Math.random();
      this.y = Math.random();
      this.z = Math.random();
      return this;
    }
    randomDirection() {
      const u = (Math.random() - 0.5) * 2;
      const t = Math.random() * Math.PI * 2;
      const f = Math.sqrt(1 - u ** 2);
      this.x = f * Math.cos(t);
      this.y = f * Math.sin(t);
      this.z = u;
      return this;
    }
    *[Symbol.iterator]() {
      yield this.x;
      yield this.y;
      yield this.z;
    }
  }
  const _vector$b = /* @__PURE__ */ new Vector3();
  const _quaternion$4 = /* @__PURE__ */ new Quaternion();
  class Box3 {
    constructor(min = new Vector3(Infinity, Infinity, Infinity), max = new Vector3(-Infinity, -Infinity, -Infinity)) {
      this.isBox3 = true;
      this.min = min;
      this.max = max;
    }
    set(min, max) {
      this.min.copy(min);
      this.max.copy(max);
      return this;
    }
    setFromArray(array) {
      this.makeEmpty();
      for (let i = 0, il = array.length; i < il; i += 3) {
        this.expandByPoint(_vector$a.fromArray(array, i));
      }
      return this;
    }
    setFromBufferAttribute(attribute) {
      this.makeEmpty();
      for (let i = 0, il = attribute.count; i < il; i++) {
        this.expandByPoint(_vector$a.fromBufferAttribute(attribute, i));
      }
      return this;
    }
    setFromPoints(points) {
      this.makeEmpty();
      for (let i = 0, il = points.length; i < il; i++) {
        this.expandByPoint(points[i]);
      }
      return this;
    }
    setFromCenterAndSize(center, size) {
      const halfSize = _vector$a.copy(size).multiplyScalar(0.5);
      this.min.copy(center).sub(halfSize);
      this.max.copy(center).add(halfSize);
      return this;
    }
    setFromObject(object, precise = false) {
      this.makeEmpty();
      return this.expandByObject(object, precise);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(box) {
      this.min.copy(box.min);
      this.max.copy(box.max);
      return this;
    }
    makeEmpty() {
      this.min.x = this.min.y = this.min.z = Infinity;
      this.max.x = this.max.y = this.max.z = -Infinity;
      return this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(target) {
      return this.isEmpty() ? target.set(0, 0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(target) {
      return this.isEmpty() ? target.set(0, 0, 0) : target.subVectors(this.max, this.min);
    }
    expandByPoint(point) {
      this.min.min(point);
      this.max.max(point);
      return this;
    }
    expandByVector(vector) {
      this.min.sub(vector);
      this.max.add(vector);
      return this;
    }
    expandByScalar(scalar) {
      this.min.addScalar(-scalar);
      this.max.addScalar(scalar);
      return this;
    }
    expandByObject(object, precise = false) {
      object.updateWorldMatrix(false, false);
      if (object.boundingBox !== void 0) {
        if (object.boundingBox === null) {
          object.computeBoundingBox();
        }
        _box$3.copy(object.boundingBox);
        _box$3.applyMatrix4(object.matrixWorld);
        this.union(_box$3);
      } else {
        const geometry = object.geometry;
        if (geometry !== void 0) {
          if (precise && geometry.attributes !== void 0 && geometry.attributes.position !== void 0) {
            const position = geometry.attributes.position;
            for (let i = 0, l = position.count; i < l; i++) {
              _vector$a.fromBufferAttribute(position, i).applyMatrix4(object.matrixWorld);
              this.expandByPoint(_vector$a);
            }
          } else {
            if (geometry.boundingBox === null) {
              geometry.computeBoundingBox();
            }
            _box$3.copy(geometry.boundingBox);
            _box$3.applyMatrix4(object.matrixWorld);
            this.union(_box$3);
          }
        }
      }
      const children = object.children;
      for (let i = 0, l = children.length; i < l; i++) {
        this.expandByObject(children[i], precise);
      }
      return this;
    }
    containsPoint(point) {
      return point.x < this.min.x || point.x > this.max.x || point.y < this.min.y || point.y > this.max.y || point.z < this.min.z || point.z > this.max.z ? false : true;
    }
    containsBox(box) {
      return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y && this.min.z <= box.min.z && box.max.z <= this.max.z;
    }
    getParameter(point, target) {
      return target.set(
        (point.x - this.min.x) / (this.max.x - this.min.x),
        (point.y - this.min.y) / (this.max.y - this.min.y),
        (point.z - this.min.z) / (this.max.z - this.min.z)
      );
    }
    intersectsBox(box) {
      return box.max.x < this.min.x || box.min.x > this.max.x || box.max.y < this.min.y || box.min.y > this.max.y || box.max.z < this.min.z || box.min.z > this.max.z ? false : true;
    }
    intersectsSphere(sphere) {
      this.clampPoint(sphere.center, _vector$a);
      return _vector$a.distanceToSquared(sphere.center) <= sphere.radius * sphere.radius;
    }
    intersectsPlane(plane) {
      let min, max;
      if (plane.normal.x > 0) {
        min = plane.normal.x * this.min.x;
        max = plane.normal.x * this.max.x;
      } else {
        min = plane.normal.x * this.max.x;
        max = plane.normal.x * this.min.x;
      }
      if (plane.normal.y > 0) {
        min += plane.normal.y * this.min.y;
        max += plane.normal.y * this.max.y;
      } else {
        min += plane.normal.y * this.max.y;
        max += plane.normal.y * this.min.y;
      }
      if (plane.normal.z > 0) {
        min += plane.normal.z * this.min.z;
        max += plane.normal.z * this.max.z;
      } else {
        min += plane.normal.z * this.max.z;
        max += plane.normal.z * this.min.z;
      }
      return min <= -plane.constant && max >= -plane.constant;
    }
    intersectsTriangle(triangle) {
      if (this.isEmpty()) {
        return false;
      }
      this.getCenter(_center);
      _extents.subVectors(this.max, _center);
      _v0$2.subVectors(triangle.a, _center);
      _v1$7.subVectors(triangle.b, _center);
      _v2$4.subVectors(triangle.c, _center);
      _f0.subVectors(_v1$7, _v0$2);
      _f1.subVectors(_v2$4, _v1$7);
      _f2.subVectors(_v0$2, _v2$4);
      let axes = [
        0,
        -_f0.z,
        _f0.y,
        0,
        -_f1.z,
        _f1.y,
        0,
        -_f2.z,
        _f2.y,
        _f0.z,
        0,
        -_f0.x,
        _f1.z,
        0,
        -_f1.x,
        _f2.z,
        0,
        -_f2.x,
        -_f0.y,
        _f0.x,
        0,
        -_f1.y,
        _f1.x,
        0,
        -_f2.y,
        _f2.x,
        0
      ];
      if (!satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents)) {
        return false;
      }
      axes = [1, 0, 0, 0, 1, 0, 0, 0, 1];
      if (!satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents)) {
        return false;
      }
      _triangleNormal.crossVectors(_f0, _f1);
      axes = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z];
      return satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents);
    }
    clampPoint(point, target) {
      return target.copy(point).clamp(this.min, this.max);
    }
    distanceToPoint(point) {
      return this.clampPoint(point, _vector$a).distanceTo(point);
    }
    getBoundingSphere(target) {
      if (this.isEmpty()) {
        target.makeEmpty();
      } else {
        this.getCenter(target.center);
        target.radius = this.getSize(_vector$a).length() * 0.5;
      }
      return target;
    }
    intersect(box) {
      this.min.max(box.min);
      this.max.min(box.max);
      if (this.isEmpty())
        this.makeEmpty();
      return this;
    }
    union(box) {
      this.min.min(box.min);
      this.max.max(box.max);
      return this;
    }
    applyMatrix4(matrix) {
      if (this.isEmpty())
        return this;
      _points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix);
      _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix);
      _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix);
      _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix);
      _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix);
      _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix);
      _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix);
      _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix);
      this.setFromPoints(_points);
      return this;
    }
    translate(offset) {
      this.min.add(offset);
      this.max.add(offset);
      return this;
    }
    equals(box) {
      return box.min.equals(this.min) && box.max.equals(this.max);
    }
  }
  const _points = [
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3()
  ];
  const _vector$a = /* @__PURE__ */ new Vector3();
  const _box$3 = /* @__PURE__ */ new Box3();
  const _v0$2 = /* @__PURE__ */ new Vector3();
  const _v1$7 = /* @__PURE__ */ new Vector3();
  const _v2$4 = /* @__PURE__ */ new Vector3();
  const _f0 = /* @__PURE__ */ new Vector3();
  const _f1 = /* @__PURE__ */ new Vector3();
  const _f2 = /* @__PURE__ */ new Vector3();
  const _center = /* @__PURE__ */ new Vector3();
  const _extents = /* @__PURE__ */ new Vector3();
  const _triangleNormal = /* @__PURE__ */ new Vector3();
  const _testAxis = /* @__PURE__ */ new Vector3();
  function satForAxes(axes, v0, v1, v2, extents) {
    for (let i = 0, j = axes.length - 3; i <= j; i += 3) {
      _testAxis.fromArray(axes, i);
      const r = extents.x * Math.abs(_testAxis.x) + extents.y * Math.abs(_testAxis.y) + extents.z * Math.abs(_testAxis.z);
      const p0 = v0.dot(_testAxis);
      const p1 = v1.dot(_testAxis);
      const p2 = v2.dot(_testAxis);
      if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
        return false;
      }
    }
    return true;
  }
  const _box$2 = /* @__PURE__ */ new Box3();
  const _v1$6 = /* @__PURE__ */ new Vector3();
  const _v2$3 = /* @__PURE__ */ new Vector3();
  class Sphere {
    constructor(center = new Vector3(), radius = -1) {
      this.center = center;
      this.radius = radius;
    }
    set(center, radius) {
      this.center.copy(center);
      this.radius = radius;
      return this;
    }
    setFromPoints(points, optionalCenter) {
      const center = this.center;
      if (optionalCenter !== void 0) {
        center.copy(optionalCenter);
      } else {
        _box$2.setFromPoints(points).getCenter(center);
      }
      let maxRadiusSq = 0;
      for (let i = 0, il = points.length; i < il; i++) {
        maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(points[i]));
      }
      this.radius = Math.sqrt(maxRadiusSq);
      return this;
    }
    copy(sphere) {
      this.center.copy(sphere.center);
      this.radius = sphere.radius;
      return this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      this.center.set(0, 0, 0);
      this.radius = -1;
      return this;
    }
    containsPoint(point) {
      return point.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(point) {
      return point.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(sphere) {
      const radiusSum = this.radius + sphere.radius;
      return sphere.center.distanceToSquared(this.center) <= radiusSum * radiusSum;
    }
    intersectsBox(box) {
      return box.intersectsSphere(this);
    }
    intersectsPlane(plane) {
      return Math.abs(plane.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(point, target) {
      const deltaLengthSq = this.center.distanceToSquared(point);
      target.copy(point);
      if (deltaLengthSq > this.radius * this.radius) {
        target.sub(this.center).normalize();
        target.multiplyScalar(this.radius).add(this.center);
      }
      return target;
    }
    getBoundingBox(target) {
      if (this.isEmpty()) {
        target.makeEmpty();
        return target;
      }
      target.set(this.center, this.center);
      target.expandByScalar(this.radius);
      return target;
    }
    applyMatrix4(matrix) {
      this.center.applyMatrix4(matrix);
      this.radius = this.radius * matrix.getMaxScaleOnAxis();
      return this;
    }
    translate(offset) {
      this.center.add(offset);
      return this;
    }
    expandByPoint(point) {
      if (this.isEmpty()) {
        this.center.copy(point);
        this.radius = 0;
        return this;
      }
      _v1$6.subVectors(point, this.center);
      const lengthSq = _v1$6.lengthSq();
      if (lengthSq > this.radius * this.radius) {
        const length = Math.sqrt(lengthSq);
        const delta = (length - this.radius) * 0.5;
        this.center.addScaledVector(_v1$6, delta / length);
        this.radius += delta;
      }
      return this;
    }
    union(sphere) {
      if (sphere.isEmpty()) {
        return this;
      }
      if (this.isEmpty()) {
        this.copy(sphere);
        return this;
      }
      if (this.center.equals(sphere.center) === true) {
        this.radius = Math.max(this.radius, sphere.radius);
      } else {
        _v2$3.subVectors(sphere.center, this.center).setLength(sphere.radius);
        this.expandByPoint(_v1$6.copy(sphere.center).add(_v2$3));
        this.expandByPoint(_v1$6.copy(sphere.center).sub(_v2$3));
      }
      return this;
    }
    equals(sphere) {
      return sphere.center.equals(this.center) && sphere.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const _vector$9 = /* @__PURE__ */ new Vector3();
  const _segCenter = /* @__PURE__ */ new Vector3();
  const _segDir = /* @__PURE__ */ new Vector3();
  const _diff = /* @__PURE__ */ new Vector3();
  const _edge1 = /* @__PURE__ */ new Vector3();
  const _edge2 = /* @__PURE__ */ new Vector3();
  const _normal$1 = /* @__PURE__ */ new Vector3();
  class Ray {
    constructor(origin = new Vector3(), direction = new Vector3(0, 0, -1)) {
      this.origin = origin;
      this.direction = direction;
    }
    set(origin, direction) {
      this.origin.copy(origin);
      this.direction.copy(direction);
      return this;
    }
    copy(ray) {
      this.origin.copy(ray.origin);
      this.direction.copy(ray.direction);
      return this;
    }
    at(t, target) {
      return target.copy(this.origin).addScaledVector(this.direction, t);
    }
    lookAt(v) {
      this.direction.copy(v).sub(this.origin).normalize();
      return this;
    }
    recast(t) {
      this.origin.copy(this.at(t, _vector$9));
      return this;
    }
    closestPointToPoint(point, target) {
      target.subVectors(point, this.origin);
      const directionDistance = target.dot(this.direction);
      if (directionDistance < 0) {
        return target.copy(this.origin);
      }
      return target.copy(this.origin).addScaledVector(this.direction, directionDistance);
    }
    distanceToPoint(point) {
      return Math.sqrt(this.distanceSqToPoint(point));
    }
    distanceSqToPoint(point) {
      const directionDistance = _vector$9.subVectors(point, this.origin).dot(this.direction);
      if (directionDistance < 0) {
        return this.origin.distanceToSquared(point);
      }
      _vector$9.copy(this.origin).addScaledVector(this.direction, directionDistance);
      return _vector$9.distanceToSquared(point);
    }
    distanceSqToSegment(v0, v1, optionalPointOnRay, optionalPointOnSegment) {
      _segCenter.copy(v0).add(v1).multiplyScalar(0.5);
      _segDir.copy(v1).sub(v0).normalize();
      _diff.copy(this.origin).sub(_segCenter);
      const segExtent = v0.distanceTo(v1) * 0.5;
      const a01 = -this.direction.dot(_segDir);
      const b0 = _diff.dot(this.direction);
      const b1 = -_diff.dot(_segDir);
      const c = _diff.lengthSq();
      const det = Math.abs(1 - a01 * a01);
      let s0, s1, sqrDist, extDet;
      if (det > 0) {
        s0 = a01 * b1 - b0;
        s1 = a01 * b0 - b1;
        extDet = segExtent * det;
        if (s0 >= 0) {
          if (s1 >= -extDet) {
            if (s1 <= extDet) {
              const invDet = 1 / det;
              s0 *= invDet;
              s1 *= invDet;
              sqrDist = s0 * (s0 + a01 * s1 + 2 * b0) + s1 * (a01 * s0 + s1 + 2 * b1) + c;
            } else {
              s1 = segExtent;
              s0 = Math.max(0, -(a01 * s1 + b0));
              sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
            }
          } else {
            s1 = -segExtent;
            s0 = Math.max(0, -(a01 * s1 + b0));
            sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
          }
        } else {
          if (s1 <= -extDet) {
            s0 = Math.max(0, -(-a01 * segExtent + b0));
            s1 = s0 > 0 ? -segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
            sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
          } else if (s1 <= extDet) {
            s0 = 0;
            s1 = Math.min(Math.max(-segExtent, -b1), segExtent);
            sqrDist = s1 * (s1 + 2 * b1) + c;
          } else {
            s0 = Math.max(0, -(a01 * segExtent + b0));
            s1 = s0 > 0 ? segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
            sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
          }
        }
      } else {
        s1 = a01 > 0 ? -segExtent : segExtent;
        s0 = Math.max(0, -(a01 * s1 + b0));
        sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
      }
      if (optionalPointOnRay) {
        optionalPointOnRay.copy(this.origin).addScaledVector(this.direction, s0);
      }
      if (optionalPointOnSegment) {
        optionalPointOnSegment.copy(_segCenter).addScaledVector(_segDir, s1);
      }
      return sqrDist;
    }
    intersectSphere(sphere, target) {
      _vector$9.subVectors(sphere.center, this.origin);
      const tca = _vector$9.dot(this.direction);
      const d2 = _vector$9.dot(_vector$9) - tca * tca;
      const radius2 = sphere.radius * sphere.radius;
      if (d2 > radius2)
        return null;
      const thc = Math.sqrt(radius2 - d2);
      const t0 = tca - thc;
      const t1 = tca + thc;
      if (t1 < 0)
        return null;
      if (t0 < 0)
        return this.at(t1, target);
      return this.at(t0, target);
    }
    intersectsSphere(sphere) {
      return this.distanceSqToPoint(sphere.center) <= sphere.radius * sphere.radius;
    }
    distanceToPlane(plane) {
      const denominator = plane.normal.dot(this.direction);
      if (denominator === 0) {
        if (plane.distanceToPoint(this.origin) === 0) {
          return 0;
        }
        return null;
      }
      const t = -(this.origin.dot(plane.normal) + plane.constant) / denominator;
      return t >= 0 ? t : null;
    }
    intersectPlane(plane, target) {
      const t = this.distanceToPlane(plane);
      if (t === null) {
        return null;
      }
      return this.at(t, target);
    }
    intersectsPlane(plane) {
      const distToPoint = plane.distanceToPoint(this.origin);
      if (distToPoint === 0) {
        return true;
      }
      const denominator = plane.normal.dot(this.direction);
      if (denominator * distToPoint < 0) {
        return true;
      }
      return false;
    }
    intersectBox(box, target) {
      let tmin, tmax, tymin, tymax, tzmin, tzmax;
      const invdirx = 1 / this.direction.x, invdiry = 1 / this.direction.y, invdirz = 1 / this.direction.z;
      const origin = this.origin;
      if (invdirx >= 0) {
        tmin = (box.min.x - origin.x) * invdirx;
        tmax = (box.max.x - origin.x) * invdirx;
      } else {
        tmin = (box.max.x - origin.x) * invdirx;
        tmax = (box.min.x - origin.x) * invdirx;
      }
      if (invdiry >= 0) {
        tymin = (box.min.y - origin.y) * invdiry;
        tymax = (box.max.y - origin.y) * invdiry;
      } else {
        tymin = (box.max.y - origin.y) * invdiry;
        tymax = (box.min.y - origin.y) * invdiry;
      }
      if (tmin > tymax || tymin > tmax)
        return null;
      if (tymin > tmin || isNaN(tmin))
        tmin = tymin;
      if (tymax < tmax || isNaN(tmax))
        tmax = tymax;
      if (invdirz >= 0) {
        tzmin = (box.min.z - origin.z) * invdirz;
        tzmax = (box.max.z - origin.z) * invdirz;
      } else {
        tzmin = (box.max.z - origin.z) * invdirz;
        tzmax = (box.min.z - origin.z) * invdirz;
      }
      if (tmin > tzmax || tzmin > tmax)
        return null;
      if (tzmin > tmin || tmin !== tmin)
        tmin = tzmin;
      if (tzmax < tmax || tmax !== tmax)
        tmax = tzmax;
      if (tmax < 0)
        return null;
      return this.at(tmin >= 0 ? tmin : tmax, target);
    }
    intersectsBox(box) {
      return this.intersectBox(box, _vector$9) !== null;
    }
    intersectTriangle(a, b, c, backfaceCulling, target) {
      _edge1.subVectors(b, a);
      _edge2.subVectors(c, a);
      _normal$1.crossVectors(_edge1, _edge2);
      let DdN = this.direction.dot(_normal$1);
      let sign;
      if (DdN > 0) {
        if (backfaceCulling)
          return null;
        sign = 1;
      } else if (DdN < 0) {
        sign = -1;
        DdN = -DdN;
      } else {
        return null;
      }
      _diff.subVectors(this.origin, a);
      const DdQxE2 = sign * this.direction.dot(_edge2.crossVectors(_diff, _edge2));
      if (DdQxE2 < 0) {
        return null;
      }
      const DdE1xQ = sign * this.direction.dot(_edge1.cross(_diff));
      if (DdE1xQ < 0) {
        return null;
      }
      if (DdQxE2 + DdE1xQ > DdN) {
        return null;
      }
      const QdN = -sign * _diff.dot(_normal$1);
      if (QdN < 0) {
        return null;
      }
      return this.at(QdN / DdN, target);
    }
    applyMatrix4(matrix4) {
      this.origin.applyMatrix4(matrix4);
      this.direction.transformDirection(matrix4);
      return this;
    }
    equals(ray) {
      return ray.origin.equals(this.origin) && ray.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class Matrix4 {
    constructor() {
      Matrix4.prototype.isMatrix4 = true;
      this.elements = [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ];
    }
    set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
      const te = this.elements;
      te[0] = n11;
      te[4] = n12;
      te[8] = n13;
      te[12] = n14;
      te[1] = n21;
      te[5] = n22;
      te[9] = n23;
      te[13] = n24;
      te[2] = n31;
      te[6] = n32;
      te[10] = n33;
      te[14] = n34;
      te[3] = n41;
      te[7] = n42;
      te[11] = n43;
      te[15] = n44;
      return this;
    }
    identity() {
      this.set(
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    clone() {
      return new Matrix4().fromArray(this.elements);
    }
    copy(m) {
      const te = this.elements;
      const me = m.elements;
      te[0] = me[0];
      te[1] = me[1];
      te[2] = me[2];
      te[3] = me[3];
      te[4] = me[4];
      te[5] = me[5];
      te[6] = me[6];
      te[7] = me[7];
      te[8] = me[8];
      te[9] = me[9];
      te[10] = me[10];
      te[11] = me[11];
      te[12] = me[12];
      te[13] = me[13];
      te[14] = me[14];
      te[15] = me[15];
      return this;
    }
    copyPosition(m) {
      const te = this.elements, me = m.elements;
      te[12] = me[12];
      te[13] = me[13];
      te[14] = me[14];
      return this;
    }
    setFromMatrix3(m) {
      const me = m.elements;
      this.set(
        me[0],
        me[3],
        me[6],
        0,
        me[1],
        me[4],
        me[7],
        0,
        me[2],
        me[5],
        me[8],
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    extractBasis(xAxis, yAxis, zAxis) {
      xAxis.setFromMatrixColumn(this, 0);
      yAxis.setFromMatrixColumn(this, 1);
      zAxis.setFromMatrixColumn(this, 2);
      return this;
    }
    makeBasis(xAxis, yAxis, zAxis) {
      this.set(
        xAxis.x,
        yAxis.x,
        zAxis.x,
        0,
        xAxis.y,
        yAxis.y,
        zAxis.y,
        0,
        xAxis.z,
        yAxis.z,
        zAxis.z,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    extractRotation(m) {
      const te = this.elements;
      const me = m.elements;
      const scaleX = 1 / _v1$5.setFromMatrixColumn(m, 0).length();
      const scaleY = 1 / _v1$5.setFromMatrixColumn(m, 1).length();
      const scaleZ = 1 / _v1$5.setFromMatrixColumn(m, 2).length();
      te[0] = me[0] * scaleX;
      te[1] = me[1] * scaleX;
      te[2] = me[2] * scaleX;
      te[3] = 0;
      te[4] = me[4] * scaleY;
      te[5] = me[5] * scaleY;
      te[6] = me[6] * scaleY;
      te[7] = 0;
      te[8] = me[8] * scaleZ;
      te[9] = me[9] * scaleZ;
      te[10] = me[10] * scaleZ;
      te[11] = 0;
      te[12] = 0;
      te[13] = 0;
      te[14] = 0;
      te[15] = 1;
      return this;
    }
    makeRotationFromEuler(euler) {
      const te = this.elements;
      const x = euler.x, y = euler.y, z = euler.z;
      const a = Math.cos(x), b = Math.sin(x);
      const c = Math.cos(y), d = Math.sin(y);
      const e = Math.cos(z), f = Math.sin(z);
      if (euler.order === "XYZ") {
        const ae = a * e, af = a * f, be = b * e, bf = b * f;
        te[0] = c * e;
        te[4] = -c * f;
        te[8] = d;
        te[1] = af + be * d;
        te[5] = ae - bf * d;
        te[9] = -b * c;
        te[2] = bf - ae * d;
        te[6] = be + af * d;
        te[10] = a * c;
      } else if (euler.order === "YXZ") {
        const ce = c * e, cf = c * f, de = d * e, df = d * f;
        te[0] = ce + df * b;
        te[4] = de * b - cf;
        te[8] = a * d;
        te[1] = a * f;
        te[5] = a * e;
        te[9] = -b;
        te[2] = cf * b - de;
        te[6] = df + ce * b;
        te[10] = a * c;
      } else if (euler.order === "ZXY") {
        const ce = c * e, cf = c * f, de = d * e, df = d * f;
        te[0] = ce - df * b;
        te[4] = -a * f;
        te[8] = de + cf * b;
        te[1] = cf + de * b;
        te[5] = a * e;
        te[9] = df - ce * b;
        te[2] = -a * d;
        te[6] = b;
        te[10] = a * c;
      } else if (euler.order === "ZYX") {
        const ae = a * e, af = a * f, be = b * e, bf = b * f;
        te[0] = c * e;
        te[4] = be * d - af;
        te[8] = ae * d + bf;
        te[1] = c * f;
        te[5] = bf * d + ae;
        te[9] = af * d - be;
        te[2] = -d;
        te[6] = b * c;
        te[10] = a * c;
      } else if (euler.order === "YZX") {
        const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
        te[0] = c * e;
        te[4] = bd - ac * f;
        te[8] = bc * f + ad;
        te[1] = f;
        te[5] = a * e;
        te[9] = -b * e;
        te[2] = -d * e;
        te[6] = ad * f + bc;
        te[10] = ac - bd * f;
      } else if (euler.order === "XZY") {
        const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
        te[0] = c * e;
        te[4] = -f;
        te[8] = d * e;
        te[1] = ac * f + bd;
        te[5] = a * e;
        te[9] = ad * f - bc;
        te[2] = bc * f - ad;
        te[6] = b * e;
        te[10] = bd * f + ac;
      }
      te[3] = 0;
      te[7] = 0;
      te[11] = 0;
      te[12] = 0;
      te[13] = 0;
      te[14] = 0;
      te[15] = 1;
      return this;
    }
    makeRotationFromQuaternion(q) {
      return this.compose(_zero, q, _one);
    }
    lookAt(eye, target, up) {
      const te = this.elements;
      _z.subVectors(eye, target);
      if (_z.lengthSq() === 0) {
        _z.z = 1;
      }
      _z.normalize();
      _x.crossVectors(up, _z);
      if (_x.lengthSq() === 0) {
        if (Math.abs(up.z) === 1) {
          _z.x += 1e-4;
        } else {
          _z.z += 1e-4;
        }
        _z.normalize();
        _x.crossVectors(up, _z);
      }
      _x.normalize();
      _y.crossVectors(_z, _x);
      te[0] = _x.x;
      te[4] = _y.x;
      te[8] = _z.x;
      te[1] = _x.y;
      te[5] = _y.y;
      te[9] = _z.y;
      te[2] = _x.z;
      te[6] = _y.z;
      te[10] = _z.z;
      return this;
    }
    multiply(m) {
      return this.multiplyMatrices(this, m);
    }
    premultiply(m) {
      return this.multiplyMatrices(m, this);
    }
    multiplyMatrices(a, b) {
      const ae = a.elements;
      const be = b.elements;
      const te = this.elements;
      const a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
      const a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
      const a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
      const a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];
      const b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12];
      const b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13];
      const b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14];
      const b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15];
      te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
      te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
      te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
      te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
      te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
      te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
      te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
      te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
      te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
      te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
      te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
      te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
      te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
      te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
      te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
      te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
      return this;
    }
    multiplyScalar(s) {
      const te = this.elements;
      te[0] *= s;
      te[4] *= s;
      te[8] *= s;
      te[12] *= s;
      te[1] *= s;
      te[5] *= s;
      te[9] *= s;
      te[13] *= s;
      te[2] *= s;
      te[6] *= s;
      te[10] *= s;
      te[14] *= s;
      te[3] *= s;
      te[7] *= s;
      te[11] *= s;
      te[15] *= s;
      return this;
    }
    determinant() {
      const te = this.elements;
      const n11 = te[0], n12 = te[4], n13 = te[8], n14 = te[12];
      const n21 = te[1], n22 = te[5], n23 = te[9], n24 = te[13];
      const n31 = te[2], n32 = te[6], n33 = te[10], n34 = te[14];
      const n41 = te[3], n42 = te[7], n43 = te[11], n44 = te[15];
      return n41 * (+n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34) + n42 * (+n11 * n23 * n34 - n11 * n24 * n33 + n14 * n21 * n33 - n13 * n21 * n34 + n13 * n24 * n31 - n14 * n23 * n31) + n43 * (+n11 * n24 * n32 - n11 * n22 * n34 - n14 * n21 * n32 + n12 * n21 * n34 + n14 * n22 * n31 - n12 * n24 * n31) + n44 * (-n13 * n22 * n31 - n11 * n23 * n32 + n11 * n22 * n33 + n13 * n21 * n32 - n12 * n21 * n33 + n12 * n23 * n31);
    }
    transpose() {
      const te = this.elements;
      let tmp;
      tmp = te[1];
      te[1] = te[4];
      te[4] = tmp;
      tmp = te[2];
      te[2] = te[8];
      te[8] = tmp;
      tmp = te[6];
      te[6] = te[9];
      te[9] = tmp;
      tmp = te[3];
      te[3] = te[12];
      te[12] = tmp;
      tmp = te[7];
      te[7] = te[13];
      te[13] = tmp;
      tmp = te[11];
      te[11] = te[14];
      te[14] = tmp;
      return this;
    }
    setPosition(x, y, z) {
      const te = this.elements;
      if (x.isVector3) {
        te[12] = x.x;
        te[13] = x.y;
        te[14] = x.z;
      } else {
        te[12] = x;
        te[13] = y;
        te[14] = z;
      }
      return this;
    }
    invert() {
      const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n41 = te[3], n12 = te[4], n22 = te[5], n32 = te[6], n42 = te[7], n13 = te[8], n23 = te[9], n33 = te[10], n43 = te[11], n14 = te[12], n24 = te[13], n34 = te[14], n44 = te[15], t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44, t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44, t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44, t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
      const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
      if (det === 0)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const detInv = 1 / det;
      te[0] = t11 * detInv;
      te[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
      te[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
      te[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;
      te[4] = t12 * detInv;
      te[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
      te[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
      te[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;
      te[8] = t13 * detInv;
      te[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
      te[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
      te[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;
      te[12] = t14 * detInv;
      te[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
      te[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
      te[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;
      return this;
    }
    scale(v) {
      const te = this.elements;
      const x = v.x, y = v.y, z = v.z;
      te[0] *= x;
      te[4] *= y;
      te[8] *= z;
      te[1] *= x;
      te[5] *= y;
      te[9] *= z;
      te[2] *= x;
      te[6] *= y;
      te[10] *= z;
      te[3] *= x;
      te[7] *= y;
      te[11] *= z;
      return this;
    }
    getMaxScaleOnAxis() {
      const te = this.elements;
      const scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
      const scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
      const scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
      return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
    }
    makeTranslation(x, y, z) {
      this.set(
        1,
        0,
        0,
        x,
        0,
        1,
        0,
        y,
        0,
        0,
        1,
        z,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeRotationX(theta) {
      const c = Math.cos(theta), s = Math.sin(theta);
      this.set(
        1,
        0,
        0,
        0,
        0,
        c,
        -s,
        0,
        0,
        s,
        c,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeRotationY(theta) {
      const c = Math.cos(theta), s = Math.sin(theta);
      this.set(
        c,
        0,
        s,
        0,
        0,
        1,
        0,
        0,
        -s,
        0,
        c,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeRotationZ(theta) {
      const c = Math.cos(theta), s = Math.sin(theta);
      this.set(
        c,
        -s,
        0,
        0,
        s,
        c,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeRotationAxis(axis, angle) {
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      const t = 1 - c;
      const x = axis.x, y = axis.y, z = axis.z;
      const tx = t * x, ty = t * y;
      this.set(
        tx * x + c,
        tx * y - s * z,
        tx * z + s * y,
        0,
        tx * y + s * z,
        ty * y + c,
        ty * z - s * x,
        0,
        tx * z - s * y,
        ty * z + s * x,
        t * z * z + c,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeScale(x, y, z) {
      this.set(
        x,
        0,
        0,
        0,
        0,
        y,
        0,
        0,
        0,
        0,
        z,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeShear(xy, xz, yx, yz, zx, zy) {
      this.set(
        1,
        yx,
        zx,
        0,
        xy,
        1,
        zy,
        0,
        xz,
        yz,
        1,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    compose(position, quaternion, scale) {
      const te = this.elements;
      const x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
      const x2 = x + x, y2 = y + y, z2 = z + z;
      const xx = x * x2, xy = x * y2, xz = x * z2;
      const yy = y * y2, yz = y * z2, zz = z * z2;
      const wx = w * x2, wy = w * y2, wz = w * z2;
      const sx = scale.x, sy = scale.y, sz = scale.z;
      te[0] = (1 - (yy + zz)) * sx;
      te[1] = (xy + wz) * sx;
      te[2] = (xz - wy) * sx;
      te[3] = 0;
      te[4] = (xy - wz) * sy;
      te[5] = (1 - (xx + zz)) * sy;
      te[6] = (yz + wx) * sy;
      te[7] = 0;
      te[8] = (xz + wy) * sz;
      te[9] = (yz - wx) * sz;
      te[10] = (1 - (xx + yy)) * sz;
      te[11] = 0;
      te[12] = position.x;
      te[13] = position.y;
      te[14] = position.z;
      te[15] = 1;
      return this;
    }
    decompose(position, quaternion, scale) {
      const te = this.elements;
      let sx = _v1$5.set(te[0], te[1], te[2]).length();
      const sy = _v1$5.set(te[4], te[5], te[6]).length();
      const sz = _v1$5.set(te[8], te[9], te[10]).length();
      const det = this.determinant();
      if (det < 0)
        sx = -sx;
      position.x = te[12];
      position.y = te[13];
      position.z = te[14];
      _m1$2.copy(this);
      const invSX = 1 / sx;
      const invSY = 1 / sy;
      const invSZ = 1 / sz;
      _m1$2.elements[0] *= invSX;
      _m1$2.elements[1] *= invSX;
      _m1$2.elements[2] *= invSX;
      _m1$2.elements[4] *= invSY;
      _m1$2.elements[5] *= invSY;
      _m1$2.elements[6] *= invSY;
      _m1$2.elements[8] *= invSZ;
      _m1$2.elements[9] *= invSZ;
      _m1$2.elements[10] *= invSZ;
      quaternion.setFromRotationMatrix(_m1$2);
      scale.x = sx;
      scale.y = sy;
      scale.z = sz;
      return this;
    }
    makePerspective(left, right, top, bottom, near, far) {
      const te = this.elements;
      const x = 2 * near / (right - left);
      const y = 2 * near / (top - bottom);
      const a = (right + left) / (right - left);
      const b = (top + bottom) / (top - bottom);
      const c = -(far + near) / (far - near);
      const d = -2 * far * near / (far - near);
      te[0] = x;
      te[4] = 0;
      te[8] = a;
      te[12] = 0;
      te[1] = 0;
      te[5] = y;
      te[9] = b;
      te[13] = 0;
      te[2] = 0;
      te[6] = 0;
      te[10] = c;
      te[14] = d;
      te[3] = 0;
      te[7] = 0;
      te[11] = -1;
      te[15] = 0;
      return this;
    }
    makeOrthographic(left, right, top, bottom, near, far) {
      const te = this.elements;
      const w = 1 / (right - left);
      const h = 1 / (top - bottom);
      const p = 1 / (far - near);
      const x = (right + left) * w;
      const y = (top + bottom) * h;
      const z = (far + near) * p;
      te[0] = 2 * w;
      te[4] = 0;
      te[8] = 0;
      te[12] = -x;
      te[1] = 0;
      te[5] = 2 * h;
      te[9] = 0;
      te[13] = -y;
      te[2] = 0;
      te[6] = 0;
      te[10] = -2 * p;
      te[14] = -z;
      te[3] = 0;
      te[7] = 0;
      te[11] = 0;
      te[15] = 1;
      return this;
    }
    equals(matrix) {
      const te = this.elements;
      const me = matrix.elements;
      for (let i = 0; i < 16; i++) {
        if (te[i] !== me[i])
          return false;
      }
      return true;
    }
    fromArray(array, offset = 0) {
      for (let i = 0; i < 16; i++) {
        this.elements[i] = array[i + offset];
      }
      return this;
    }
    toArray(array = [], offset = 0) {
      const te = this.elements;
      array[offset] = te[0];
      array[offset + 1] = te[1];
      array[offset + 2] = te[2];
      array[offset + 3] = te[3];
      array[offset + 4] = te[4];
      array[offset + 5] = te[5];
      array[offset + 6] = te[6];
      array[offset + 7] = te[7];
      array[offset + 8] = te[8];
      array[offset + 9] = te[9];
      array[offset + 10] = te[10];
      array[offset + 11] = te[11];
      array[offset + 12] = te[12];
      array[offset + 13] = te[13];
      array[offset + 14] = te[14];
      array[offset + 15] = te[15];
      return array;
    }
  }
  const _v1$5 = /* @__PURE__ */ new Vector3();
  const _m1$2 = /* @__PURE__ */ new Matrix4();
  const _zero = /* @__PURE__ */ new Vector3(0, 0, 0);
  const _one = /* @__PURE__ */ new Vector3(1, 1, 1);
  const _x = /* @__PURE__ */ new Vector3();
  const _y = /* @__PURE__ */ new Vector3();
  const _z = /* @__PURE__ */ new Vector3();
  const _matrix = /* @__PURE__ */ new Matrix4();
  const _quaternion$3 = /* @__PURE__ */ new Quaternion();
  class Euler {
    constructor(x = 0, y = 0, z = 0, order = Euler.DEFAULT_ORDER) {
      this.isEuler = true;
      this._x = x;
      this._y = y;
      this._z = z;
      this._order = order;
    }
    get x() {
      return this._x;
    }
    set x(value) {
      this._x = value;
      this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(value) {
      this._y = value;
      this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(value) {
      this._z = value;
      this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(value) {
      this._order = value;
      this._onChangeCallback();
    }
    set(x, y, z, order = this._order) {
      this._x = x;
      this._y = y;
      this._z = z;
      this._order = order;
      this._onChangeCallback();
      return this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(euler) {
      this._x = euler._x;
      this._y = euler._y;
      this._z = euler._z;
      this._order = euler._order;
      this._onChangeCallback();
      return this;
    }
    setFromRotationMatrix(m, order = this._order, update = true) {
      const te = m.elements;
      const m11 = te[0], m12 = te[4], m13 = te[8];
      const m21 = te[1], m22 = te[5], m23 = te[9];
      const m31 = te[2], m32 = te[6], m33 = te[10];
      switch (order) {
        case "XYZ":
          this._y = Math.asin(clamp$1(m13, -1, 1));
          if (Math.abs(m13) < 0.9999999) {
            this._x = Math.atan2(-m23, m33);
            this._z = Math.atan2(-m12, m11);
          } else {
            this._x = Math.atan2(m32, m22);
            this._z = 0;
          }
          break;
        case "YXZ":
          this._x = Math.asin(-clamp$1(m23, -1, 1));
          if (Math.abs(m23) < 0.9999999) {
            this._y = Math.atan2(m13, m33);
            this._z = Math.atan2(m21, m22);
          } else {
            this._y = Math.atan2(-m31, m11);
            this._z = 0;
          }
          break;
        case "ZXY":
          this._x = Math.asin(clamp$1(m32, -1, 1));
          if (Math.abs(m32) < 0.9999999) {
            this._y = Math.atan2(-m31, m33);
            this._z = Math.atan2(-m12, m22);
          } else {
            this._y = 0;
            this._z = Math.atan2(m21, m11);
          }
          break;
        case "ZYX":
          this._y = Math.asin(-clamp$1(m31, -1, 1));
          if (Math.abs(m31) < 0.9999999) {
            this._x = Math.atan2(m32, m33);
            this._z = Math.atan2(m21, m11);
          } else {
            this._x = 0;
            this._z = Math.atan2(-m12, m22);
          }
          break;
        case "YZX":
          this._z = Math.asin(clamp$1(m21, -1, 1));
          if (Math.abs(m21) < 0.9999999) {
            this._x = Math.atan2(-m23, m22);
            this._y = Math.atan2(-m31, m11);
          } else {
            this._x = 0;
            this._y = Math.atan2(m13, m33);
          }
          break;
        case "XZY":
          this._z = Math.asin(-clamp$1(m12, -1, 1));
          if (Math.abs(m12) < 0.9999999) {
            this._x = Math.atan2(m32, m22);
            this._y = Math.atan2(m13, m11);
          } else {
            this._x = Math.atan2(-m23, m33);
            this._y = 0;
          }
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + order);
      }
      this._order = order;
      if (update === true)
        this._onChangeCallback();
      return this;
    }
    setFromQuaternion(q, order, update) {
      _matrix.makeRotationFromQuaternion(q);
      return this.setFromRotationMatrix(_matrix, order, update);
    }
    setFromVector3(v, order = this._order) {
      return this.set(v.x, v.y, v.z, order);
    }
    reorder(newOrder) {
      _quaternion$3.setFromEuler(this);
      return this.setFromQuaternion(_quaternion$3, newOrder);
    }
    equals(euler) {
      return euler._x === this._x && euler._y === this._y && euler._z === this._z && euler._order === this._order;
    }
    fromArray(array) {
      this._x = array[0];
      this._y = array[1];
      this._z = array[2];
      if (array[3] !== void 0)
        this._order = array[3];
      this._onChangeCallback();
      return this;
    }
    toArray(array = [], offset = 0) {
      array[offset] = this._x;
      array[offset + 1] = this._y;
      array[offset + 2] = this._z;
      array[offset + 3] = this._order;
      return array;
    }
    _onChange(callback) {
      this._onChangeCallback = callback;
      return this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x;
      yield this._y;
      yield this._z;
      yield this._order;
    }
  }
  Euler.DEFAULT_ORDER = "XYZ";
  class Layers {
    constructor() {
      this.mask = 1 | 0;
    }
    set(channel) {
      this.mask = (1 << channel | 0) >>> 0;
    }
    enable(channel) {
      this.mask |= 1 << channel | 0;
    }
    enableAll() {
      this.mask = 4294967295 | 0;
    }
    toggle(channel) {
      this.mask ^= 1 << channel | 0;
    }
    disable(channel) {
      this.mask &= ~(1 << channel | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(layers) {
      return (this.mask & layers.mask) !== 0;
    }
    isEnabled(channel) {
      return (this.mask & (1 << channel | 0)) !== 0;
    }
  }
  let _object3DId = 0;
  const _v1$4 = /* @__PURE__ */ new Vector3();
  const _q1 = /* @__PURE__ */ new Quaternion();
  const _m1$1 = /* @__PURE__ */ new Matrix4();
  const _target = /* @__PURE__ */ new Vector3();
  const _position$3 = /* @__PURE__ */ new Vector3();
  const _scale$2 = /* @__PURE__ */ new Vector3();
  const _quaternion$2 = /* @__PURE__ */ new Quaternion();
  const _xAxis = /* @__PURE__ */ new Vector3(1, 0, 0);
  const _yAxis = /* @__PURE__ */ new Vector3(0, 1, 0);
  const _zAxis = /* @__PURE__ */ new Vector3(0, 0, 1);
  const _addedEvent = { type: "added" };
  const _removedEvent = { type: "removed" };
  class Object3D extends EventDispatcher {
    constructor() {
      super();
      this.isObject3D = true;
      Object.defineProperty(this, "id", { value: _object3DId++ });
      this.uuid = generateUUID();
      this.name = "";
      this.type = "Object3D";
      this.parent = null;
      this.children = [];
      this.up = Object3D.DEFAULT_UP.clone();
      const position = new Vector3();
      const rotation = new Euler();
      const quaternion = new Quaternion();
      const scale = new Vector3(1, 1, 1);
      function onRotationChange() {
        quaternion.setFromEuler(rotation, false);
      }
      function onQuaternionChange() {
        rotation.setFromQuaternion(quaternion, void 0, false);
      }
      rotation._onChange(onRotationChange);
      quaternion._onChange(onQuaternionChange);
      Object.defineProperties(this, {
        position: {
          configurable: true,
          enumerable: true,
          value: position
        },
        rotation: {
          configurable: true,
          enumerable: true,
          value: rotation
        },
        quaternion: {
          configurable: true,
          enumerable: true,
          value: quaternion
        },
        scale: {
          configurable: true,
          enumerable: true,
          value: scale
        },
        modelViewMatrix: {
          value: new Matrix4()
        },
        normalMatrix: {
          value: new Matrix3()
        }
      });
      this.matrix = new Matrix4();
      this.matrixWorld = new Matrix4();
      this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE;
      this.matrixWorldNeedsUpdate = false;
      this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE;
      this.layers = new Layers();
      this.visible = true;
      this.castShadow = false;
      this.receiveShadow = false;
      this.frustumCulled = true;
      this.renderOrder = 0;
      this.animations = [];
      this.userData = {};
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(matrix) {
      if (this.matrixAutoUpdate)
        this.updateMatrix();
      this.matrix.premultiply(matrix);
      this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(q) {
      this.quaternion.premultiply(q);
      return this;
    }
    setRotationFromAxisAngle(axis, angle) {
      this.quaternion.setFromAxisAngle(axis, angle);
    }
    setRotationFromEuler(euler) {
      this.quaternion.setFromEuler(euler, true);
    }
    setRotationFromMatrix(m) {
      this.quaternion.setFromRotationMatrix(m);
    }
    setRotationFromQuaternion(q) {
      this.quaternion.copy(q);
    }
    rotateOnAxis(axis, angle) {
      _q1.setFromAxisAngle(axis, angle);
      this.quaternion.multiply(_q1);
      return this;
    }
    rotateOnWorldAxis(axis, angle) {
      _q1.setFromAxisAngle(axis, angle);
      this.quaternion.premultiply(_q1);
      return this;
    }
    rotateX(angle) {
      return this.rotateOnAxis(_xAxis, angle);
    }
    rotateY(angle) {
      return this.rotateOnAxis(_yAxis, angle);
    }
    rotateZ(angle) {
      return this.rotateOnAxis(_zAxis, angle);
    }
    translateOnAxis(axis, distance) {
      _v1$4.copy(axis).applyQuaternion(this.quaternion);
      this.position.add(_v1$4.multiplyScalar(distance));
      return this;
    }
    translateX(distance) {
      return this.translateOnAxis(_xAxis, distance);
    }
    translateY(distance) {
      return this.translateOnAxis(_yAxis, distance);
    }
    translateZ(distance) {
      return this.translateOnAxis(_zAxis, distance);
    }
    localToWorld(vector) {
      this.updateWorldMatrix(true, false);
      return vector.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(vector) {
      this.updateWorldMatrix(true, false);
      return vector.applyMatrix4(_m1$1.copy(this.matrixWorld).invert());
    }
    lookAt(x, y, z) {
      if (x.isVector3) {
        _target.copy(x);
      } else {
        _target.set(x, y, z);
      }
      const parent = this.parent;
      this.updateWorldMatrix(true, false);
      _position$3.setFromMatrixPosition(this.matrixWorld);
      if (this.isCamera || this.isLight) {
        _m1$1.lookAt(_position$3, _target, this.up);
      } else {
        _m1$1.lookAt(_target, _position$3, this.up);
      }
      this.quaternion.setFromRotationMatrix(_m1$1);
      if (parent) {
        _m1$1.extractRotation(parent.matrixWorld);
        _q1.setFromRotationMatrix(_m1$1);
        this.quaternion.premultiply(_q1.invert());
      }
    }
    add(object) {
      if (arguments.length > 1) {
        for (let i = 0; i < arguments.length; i++) {
          this.add(arguments[i]);
        }
        return this;
      }
      if (object === this) {
        console.error("THREE.Object3D.add: object can't be added as a child of itself.", object);
        return this;
      }
      if (object && object.isObject3D) {
        if (object.parent !== null) {
          object.parent.remove(object);
        }
        object.parent = this;
        this.children.push(object);
        object.dispatchEvent(_addedEvent);
      } else {
        console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", object);
      }
      return this;
    }
    remove(object) {
      if (arguments.length > 1) {
        for (let i = 0; i < arguments.length; i++) {
          this.remove(arguments[i]);
        }
        return this;
      }
      const index = this.children.indexOf(object);
      if (index !== -1) {
        object.parent = null;
        this.children.splice(index, 1);
        object.dispatchEvent(_removedEvent);
      }
      return this;
    }
    removeFromParent() {
      const parent = this.parent;
      if (parent !== null) {
        parent.remove(this);
      }
      return this;
    }
    clear() {
      for (let i = 0; i < this.children.length; i++) {
        const object = this.children[i];
        object.parent = null;
        object.dispatchEvent(_removedEvent);
      }
      this.children.length = 0;
      return this;
    }
    attach(object) {
      this.updateWorldMatrix(true, false);
      _m1$1.copy(this.matrixWorld).invert();
      if (object.parent !== null) {
        object.parent.updateWorldMatrix(true, false);
        _m1$1.multiply(object.parent.matrixWorld);
      }
      object.applyMatrix4(_m1$1);
      this.add(object);
      object.updateWorldMatrix(false, true);
      return this;
    }
    getObjectById(id) {
      return this.getObjectByProperty("id", id);
    }
    getObjectByName(name) {
      return this.getObjectByProperty("name", name);
    }
    getObjectByProperty(name, value) {
      if (this[name] === value)
        return this;
      for (let i = 0, l = this.children.length; i < l; i++) {
        const child = this.children[i];
        const object = child.getObjectByProperty(name, value);
        if (object !== void 0) {
          return object;
        }
      }
      return void 0;
    }
    getObjectsByProperty(name, value) {
      let result = [];
      if (this[name] === value)
        result.push(this);
      for (let i = 0, l = this.children.length; i < l; i++) {
        const childResult = this.children[i].getObjectsByProperty(name, value);
        if (childResult.length > 0) {
          result = result.concat(childResult);
        }
      }
      return result;
    }
    getWorldPosition(target) {
      this.updateWorldMatrix(true, false);
      return target.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(target) {
      this.updateWorldMatrix(true, false);
      this.matrixWorld.decompose(_position$3, target, _scale$2);
      return target;
    }
    getWorldScale(target) {
      this.updateWorldMatrix(true, false);
      this.matrixWorld.decompose(_position$3, _quaternion$2, target);
      return target;
    }
    getWorldDirection(target) {
      this.updateWorldMatrix(true, false);
      const e = this.matrixWorld.elements;
      return target.set(e[8], e[9], e[10]).normalize();
    }
    raycast() {
    }
    traverse(callback) {
      callback(this);
      const children = this.children;
      for (let i = 0, l = children.length; i < l; i++) {
        children[i].traverse(callback);
      }
    }
    traverseVisible(callback) {
      if (this.visible === false)
        return;
      callback(this);
      const children = this.children;
      for (let i = 0, l = children.length; i < l; i++) {
        children[i].traverseVisible(callback);
      }
    }
    traverseAncestors(callback) {
      const parent = this.parent;
      if (parent !== null) {
        callback(parent);
        parent.traverseAncestors(callback);
      }
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale);
      this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(force) {
      if (this.matrixAutoUpdate)
        this.updateMatrix();
      if (this.matrixWorldNeedsUpdate || force) {
        if (this.parent === null) {
          this.matrixWorld.copy(this.matrix);
        } else {
          this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
        }
        this.matrixWorldNeedsUpdate = false;
        force = true;
      }
      const children = this.children;
      for (let i = 0, l = children.length; i < l; i++) {
        const child = children[i];
        if (child.matrixWorldAutoUpdate === true || force === true) {
          child.updateMatrixWorld(force);
        }
      }
    }
    updateWorldMatrix(updateParents, updateChildren) {
      const parent = this.parent;
      if (updateParents === true && parent !== null && parent.matrixWorldAutoUpdate === true) {
        parent.updateWorldMatrix(true, false);
      }
      if (this.matrixAutoUpdate)
        this.updateMatrix();
      if (this.parent === null) {
        this.matrixWorld.copy(this.matrix);
      } else {
        this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
      }
      if (updateChildren === true) {
        const children = this.children;
        for (let i = 0, l = children.length; i < l; i++) {
          const child = children[i];
          if (child.matrixWorldAutoUpdate === true) {
            child.updateWorldMatrix(false, true);
          }
        }
      }
    }
    toJSON(meta) {
      const isRootObject = meta === void 0 || typeof meta === "string";
      const output = {};
      if (isRootObject) {
        meta = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {},
          nodes: {}
        };
        output.metadata = {
          version: 4.5,
          type: "Object",
          generator: "Object3D.toJSON"
        };
      }
      const object = {};
      object.uuid = this.uuid;
      object.type = this.type;
      if (this.name !== "")
        object.name = this.name;
      if (this.castShadow === true)
        object.castShadow = true;
      if (this.receiveShadow === true)
        object.receiveShadow = true;
      if (this.visible === false)
        object.visible = false;
      if (this.frustumCulled === false)
        object.frustumCulled = false;
      if (this.renderOrder !== 0)
        object.renderOrder = this.renderOrder;
      if (Object.keys(this.userData).length > 0)
        object.userData = this.userData;
      object.layers = this.layers.mask;
      object.matrix = this.matrix.toArray();
      object.up = this.up.toArray();
      if (this.matrixAutoUpdate === false)
        object.matrixAutoUpdate = false;
      if (this.isInstancedMesh) {
        object.type = "InstancedMesh";
        object.count = this.count;
        object.instanceMatrix = this.instanceMatrix.toJSON();
        if (this.instanceColor !== null)
          object.instanceColor = this.instanceColor.toJSON();
      }
      function serialize(library, element) {
        if (library[element.uuid] === void 0) {
          library[element.uuid] = element.toJSON(meta);
        }
        return element.uuid;
      }
      if (this.isScene) {
        if (this.background) {
          if (this.background.isColor) {
            object.background = this.background.toJSON();
          } else if (this.background.isTexture) {
            object.background = this.background.toJSON(meta).uuid;
          }
        }
        if (this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true) {
          object.environment = this.environment.toJSON(meta).uuid;
        }
      } else if (this.isMesh || this.isLine || this.isPoints) {
        object.geometry = serialize(meta.geometries, this.geometry);
        const parameters = this.geometry.parameters;
        if (parameters !== void 0 && parameters.shapes !== void 0) {
          const shapes = parameters.shapes;
          if (Array.isArray(shapes)) {
            for (let i = 0, l = shapes.length; i < l; i++) {
              const shape = shapes[i];
              serialize(meta.shapes, shape);
            }
          } else {
            serialize(meta.shapes, shapes);
          }
        }
      }
      if (this.isSkinnedMesh) {
        object.bindMode = this.bindMode;
        object.bindMatrix = this.bindMatrix.toArray();
        if (this.skeleton !== void 0) {
          serialize(meta.skeletons, this.skeleton);
          object.skeleton = this.skeleton.uuid;
        }
      }
      if (this.material !== void 0) {
        if (Array.isArray(this.material)) {
          const uuids = [];
          for (let i = 0, l = this.material.length; i < l; i++) {
            uuids.push(serialize(meta.materials, this.material[i]));
          }
          object.material = uuids;
        } else {
          object.material = serialize(meta.materials, this.material);
        }
      }
      if (this.children.length > 0) {
        object.children = [];
        for (let i = 0; i < this.children.length; i++) {
          object.children.push(this.children[i].toJSON(meta).object);
        }
      }
      if (this.animations.length > 0) {
        object.animations = [];
        for (let i = 0; i < this.animations.length; i++) {
          const animation = this.animations[i];
          object.animations.push(serialize(meta.animations, animation));
        }
      }
      if (isRootObject) {
        const geometries = extractFromCache(meta.geometries);
        const materials = extractFromCache(meta.materials);
        const textures = extractFromCache(meta.textures);
        const images = extractFromCache(meta.images);
        const shapes = extractFromCache(meta.shapes);
        const skeletons = extractFromCache(meta.skeletons);
        const animations = extractFromCache(meta.animations);
        const nodes = extractFromCache(meta.nodes);
        if (geometries.length > 0)
          output.geometries = geometries;
        if (materials.length > 0)
          output.materials = materials;
        if (textures.length > 0)
          output.textures = textures;
        if (images.length > 0)
          output.images = images;
        if (shapes.length > 0)
          output.shapes = shapes;
        if (skeletons.length > 0)
          output.skeletons = skeletons;
        if (animations.length > 0)
          output.animations = animations;
        if (nodes.length > 0)
          output.nodes = nodes;
      }
      output.object = object;
      return output;
      function extractFromCache(cache) {
        const values = [];
        for (const key in cache) {
          const data = cache[key];
          delete data.metadata;
          values.push(data);
        }
        return values;
      }
    }
    clone(recursive) {
      return new this.constructor().copy(this, recursive);
    }
    copy(source, recursive = true) {
      this.name = source.name;
      this.up.copy(source.up);
      this.position.copy(source.position);
      this.rotation.order = source.rotation.order;
      this.quaternion.copy(source.quaternion);
      this.scale.copy(source.scale);
      this.matrix.copy(source.matrix);
      this.matrixWorld.copy(source.matrixWorld);
      this.matrixAutoUpdate = source.matrixAutoUpdate;
      this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;
      this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;
      this.layers.mask = source.layers.mask;
      this.visible = source.visible;
      this.castShadow = source.castShadow;
      this.receiveShadow = source.receiveShadow;
      this.frustumCulled = source.frustumCulled;
      this.renderOrder = source.renderOrder;
      this.animations = source.animations;
      this.userData = JSON.parse(JSON.stringify(source.userData));
      if (recursive === true) {
        for (let i = 0; i < source.children.length; i++) {
          const child = source.children[i];
          this.add(child.clone());
        }
      }
      return this;
    }
  }
  Object3D.DEFAULT_UP = /* @__PURE__ */ new Vector3(0, 1, 0);
  Object3D.DEFAULT_MATRIX_AUTO_UPDATE = true;
  Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
  const _v0$1 = /* @__PURE__ */ new Vector3();
  const _v1$3 = /* @__PURE__ */ new Vector3();
  const _v2$2 = /* @__PURE__ */ new Vector3();
  const _v3$1 = /* @__PURE__ */ new Vector3();
  const _vab = /* @__PURE__ */ new Vector3();
  const _vac = /* @__PURE__ */ new Vector3();
  const _vbc = /* @__PURE__ */ new Vector3();
  const _vap = /* @__PURE__ */ new Vector3();
  const _vbp = /* @__PURE__ */ new Vector3();
  const _vcp = /* @__PURE__ */ new Vector3();
  let warnedGetUV = false;
  class Triangle {
    constructor(a = new Vector3(), b = new Vector3(), c = new Vector3()) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
    static getNormal(a, b, c, target) {
      target.subVectors(c, b);
      _v0$1.subVectors(a, b);
      target.cross(_v0$1);
      const targetLengthSq = target.lengthSq();
      if (targetLengthSq > 0) {
        return target.multiplyScalar(1 / Math.sqrt(targetLengthSq));
      }
      return target.set(0, 0, 0);
    }
    static getBarycoord(point, a, b, c, target) {
      _v0$1.subVectors(c, a);
      _v1$3.subVectors(b, a);
      _v2$2.subVectors(point, a);
      const dot00 = _v0$1.dot(_v0$1);
      const dot01 = _v0$1.dot(_v1$3);
      const dot02 = _v0$1.dot(_v2$2);
      const dot11 = _v1$3.dot(_v1$3);
      const dot12 = _v1$3.dot(_v2$2);
      const denom = dot00 * dot11 - dot01 * dot01;
      if (denom === 0) {
        return target.set(-2, -1, -1);
      }
      const invDenom = 1 / denom;
      const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
      const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
      return target.set(1 - u - v, v, u);
    }
    static containsPoint(point, a, b, c) {
      this.getBarycoord(point, a, b, c, _v3$1);
      return _v3$1.x >= 0 && _v3$1.y >= 0 && _v3$1.x + _v3$1.y <= 1;
    }
    static getUV(point, p1, p2, p3, uv1, uv2, uv3, target) {
      if (warnedGetUV === false) {
        console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().");
        warnedGetUV = true;
      }
      return this.getInterpolation(point, p1, p2, p3, uv1, uv2, uv3, target);
    }
    static getInterpolation(point, p1, p2, p3, v1, v2, v3, target) {
      this.getBarycoord(point, p1, p2, p3, _v3$1);
      target.setScalar(0);
      target.addScaledVector(v1, _v3$1.x);
      target.addScaledVector(v2, _v3$1.y);
      target.addScaledVector(v3, _v3$1.z);
      return target;
    }
    static isFrontFacing(a, b, c, direction) {
      _v0$1.subVectors(c, b);
      _v1$3.subVectors(a, b);
      return _v0$1.cross(_v1$3).dot(direction) < 0 ? true : false;
    }
    set(a, b, c) {
      this.a.copy(a);
      this.b.copy(b);
      this.c.copy(c);
      return this;
    }
    setFromPointsAndIndices(points, i0, i1, i2) {
      this.a.copy(points[i0]);
      this.b.copy(points[i1]);
      this.c.copy(points[i2]);
      return this;
    }
    setFromAttributeAndIndices(attribute, i0, i1, i2) {
      this.a.fromBufferAttribute(attribute, i0);
      this.b.fromBufferAttribute(attribute, i1);
      this.c.fromBufferAttribute(attribute, i2);
      return this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(triangle) {
      this.a.copy(triangle.a);
      this.b.copy(triangle.b);
      this.c.copy(triangle.c);
      return this;
    }
    getArea() {
      _v0$1.subVectors(this.c, this.b);
      _v1$3.subVectors(this.a, this.b);
      return _v0$1.cross(_v1$3).length() * 0.5;
    }
    getMidpoint(target) {
      return target.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(target) {
      return Triangle.getNormal(this.a, this.b, this.c, target);
    }
    getPlane(target) {
      return target.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(point, target) {
      return Triangle.getBarycoord(point, this.a, this.b, this.c, target);
    }
    getUV(point, uv1, uv2, uv3, target) {
      if (warnedGetUV === false) {
        console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().");
        warnedGetUV = true;
      }
      return Triangle.getInterpolation(point, this.a, this.b, this.c, uv1, uv2, uv3, target);
    }
    getInterpolation(point, v1, v2, v3, target) {
      return Triangle.getInterpolation(point, this.a, this.b, this.c, v1, v2, v3, target);
    }
    containsPoint(point) {
      return Triangle.containsPoint(point, this.a, this.b, this.c);
    }
    isFrontFacing(direction) {
      return Triangle.isFrontFacing(this.a, this.b, this.c, direction);
    }
    intersectsBox(box) {
      return box.intersectsTriangle(this);
    }
    closestPointToPoint(p, target) {
      const a = this.a, b = this.b, c = this.c;
      let v, w;
      _vab.subVectors(b, a);
      _vac.subVectors(c, a);
      _vap.subVectors(p, a);
      const d1 = _vab.dot(_vap);
      const d2 = _vac.dot(_vap);
      if (d1 <= 0 && d2 <= 0) {
        return target.copy(a);
      }
      _vbp.subVectors(p, b);
      const d3 = _vab.dot(_vbp);
      const d4 = _vac.dot(_vbp);
      if (d3 >= 0 && d4 <= d3) {
        return target.copy(b);
      }
      const vc = d1 * d4 - d3 * d2;
      if (vc <= 0 && d1 >= 0 && d3 <= 0) {
        v = d1 / (d1 - d3);
        return target.copy(a).addScaledVector(_vab, v);
      }
      _vcp.subVectors(p, c);
      const d5 = _vab.dot(_vcp);
      const d6 = _vac.dot(_vcp);
      if (d6 >= 0 && d5 <= d6) {
        return target.copy(c);
      }
      const vb = d5 * d2 - d1 * d6;
      if (vb <= 0 && d2 >= 0 && d6 <= 0) {
        w = d2 / (d2 - d6);
        return target.copy(a).addScaledVector(_vac, w);
      }
      const va = d3 * d6 - d5 * d4;
      if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) {
        _vbc.subVectors(c, b);
        w = (d4 - d3) / (d4 - d3 + (d5 - d6));
        return target.copy(b).addScaledVector(_vbc, w);
      }
      const denom = 1 / (va + vb + vc);
      v = vb * denom;
      w = vc * denom;
      return target.copy(a).addScaledVector(_vab, v).addScaledVector(_vac, w);
    }
    equals(triangle) {
      return triangle.a.equals(this.a) && triangle.b.equals(this.b) && triangle.c.equals(this.c);
    }
  }
  let materialId = 0;
  class Material extends EventDispatcher {
    constructor() {
      super();
      this.isMaterial = true;
      Object.defineProperty(this, "id", { value: materialId++ });
      this.uuid = generateUUID();
      this.name = "";
      this.type = "Material";
      this.blending = NormalBlending;
      this.side = FrontSide;
      this.vertexColors = false;
      this.opacity = 1;
      this.transparent = false;
      this.blendSrc = SrcAlphaFactor;
      this.blendDst = OneMinusSrcAlphaFactor;
      this.blendEquation = AddEquation;
      this.blendSrcAlpha = null;
      this.blendDstAlpha = null;
      this.blendEquationAlpha = null;
      this.depthFunc = LessEqualDepth;
      this.depthTest = true;
      this.depthWrite = true;
      this.stencilWriteMask = 255;
      this.stencilFunc = AlwaysStencilFunc;
      this.stencilRef = 0;
      this.stencilFuncMask = 255;
      this.stencilFail = KeepStencilOp;
      this.stencilZFail = KeepStencilOp;
      this.stencilZPass = KeepStencilOp;
      this.stencilWrite = false;
      this.clippingPlanes = null;
      this.clipIntersection = false;
      this.clipShadows = false;
      this.shadowSide = null;
      this.colorWrite = true;
      this.precision = null;
      this.polygonOffset = false;
      this.polygonOffsetFactor = 0;
      this.polygonOffsetUnits = 0;
      this.dithering = false;
      this.alphaToCoverage = false;
      this.premultipliedAlpha = false;
      this.forceSinglePass = false;
      this.visible = true;
      this.toneMapped = true;
      this.userData = {};
      this.version = 0;
      this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(value) {
      if (this._alphaTest > 0 !== value > 0) {
        this.version++;
      }
      this._alphaTest = value;
    }
    onBuild() {
    }
    onBeforeRender() {
    }
    onBeforeCompile() {
    }
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(values) {
      if (values === void 0)
        return;
      for (const key in values) {
        const newValue = values[key];
        if (newValue === void 0) {
          console.warn(`THREE.Material: parameter '${key}' has value of undefined.`);
          continue;
        }
        const currentValue = this[key];
        if (currentValue === void 0) {
          console.warn(`THREE.Material: '${key}' is not a property of THREE.${this.type}.`);
          continue;
        }
        if (currentValue && currentValue.isColor) {
          currentValue.set(newValue);
        } else if (currentValue && currentValue.isVector3 && (newValue && newValue.isVector3)) {
          currentValue.copy(newValue);
        } else {
          this[key] = newValue;
        }
      }
    }
    toJSON(meta) {
      const isRootObject = meta === void 0 || typeof meta === "string";
      if (isRootObject) {
        meta = {
          textures: {},
          images: {}
        };
      }
      const data = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON"
        }
      };
      data.uuid = this.uuid;
      data.type = this.type;
      if (this.name !== "")
        data.name = this.name;
      if (this.color && this.color.isColor)
        data.color = this.color.getHex();
      if (this.roughness !== void 0)
        data.roughness = this.roughness;
      if (this.metalness !== void 0)
        data.metalness = this.metalness;
      if (this.sheen !== void 0)
        data.sheen = this.sheen;
      if (this.sheenColor && this.sheenColor.isColor)
        data.sheenColor = this.sheenColor.getHex();
      if (this.sheenRoughness !== void 0)
        data.sheenRoughness = this.sheenRoughness;
      if (this.emissive && this.emissive.isColor)
        data.emissive = this.emissive.getHex();
      if (this.emissiveIntensity && this.emissiveIntensity !== 1)
        data.emissiveIntensity = this.emissiveIntensity;
      if (this.specular && this.specular.isColor)
        data.specular = this.specular.getHex();
      if (this.specularIntensity !== void 0)
        data.specularIntensity = this.specularIntensity;
      if (this.specularColor && this.specularColor.isColor)
        data.specularColor = this.specularColor.getHex();
      if (this.shininess !== void 0)
        data.shininess = this.shininess;
      if (this.clearcoat !== void 0)
        data.clearcoat = this.clearcoat;
      if (this.clearcoatRoughness !== void 0)
        data.clearcoatRoughness = this.clearcoatRoughness;
      if (this.clearcoatMap && this.clearcoatMap.isTexture) {
        data.clearcoatMap = this.clearcoatMap.toJSON(meta).uuid;
      }
      if (this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture) {
        data.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(meta).uuid;
      }
      if (this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture) {
        data.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(meta).uuid;
        data.clearcoatNormalScale = this.clearcoatNormalScale.toArray();
      }
      if (this.iridescence !== void 0)
        data.iridescence = this.iridescence;
      if (this.iridescenceIOR !== void 0)
        data.iridescenceIOR = this.iridescenceIOR;
      if (this.iridescenceThicknessRange !== void 0)
        data.iridescenceThicknessRange = this.iridescenceThicknessRange;
      if (this.iridescenceMap && this.iridescenceMap.isTexture) {
        data.iridescenceMap = this.iridescenceMap.toJSON(meta).uuid;
      }
      if (this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture) {
        data.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(meta).uuid;
      }
      if (this.map && this.map.isTexture)
        data.map = this.map.toJSON(meta).uuid;
      if (this.matcap && this.matcap.isTexture)
        data.matcap = this.matcap.toJSON(meta).uuid;
      if (this.alphaMap && this.alphaMap.isTexture)
        data.alphaMap = this.alphaMap.toJSON(meta).uuid;
      if (this.lightMap && this.lightMap.isTexture) {
        data.lightMap = this.lightMap.toJSON(meta).uuid;
        data.lightMapIntensity = this.lightMapIntensity;
      }
      if (this.aoMap && this.aoMap.isTexture) {
        data.aoMap = this.aoMap.toJSON(meta).uuid;
        data.aoMapIntensity = this.aoMapIntensity;
      }
      if (this.bumpMap && this.bumpMap.isTexture) {
        data.bumpMap = this.bumpMap.toJSON(meta).uuid;
        data.bumpScale = this.bumpScale;
      }
      if (this.normalMap && this.normalMap.isTexture) {
        data.normalMap = this.normalMap.toJSON(meta).uuid;
        data.normalMapType = this.normalMapType;
        data.normalScale = this.normalScale.toArray();
      }
      if (this.displacementMap && this.displacementMap.isTexture) {
        data.displacementMap = this.displacementMap.toJSON(meta).uuid;
        data.displacementScale = this.displacementScale;
        data.displacementBias = this.displacementBias;
      }
      if (this.roughnessMap && this.roughnessMap.isTexture)
        data.roughnessMap = this.roughnessMap.toJSON(meta).uuid;
      if (this.metalnessMap && this.metalnessMap.isTexture)
        data.metalnessMap = this.metalnessMap.toJSON(meta).uuid;
      if (this.emissiveMap && this.emissiveMap.isTexture)
        data.emissiveMap = this.emissiveMap.toJSON(meta).uuid;
      if (this.specularMap && this.specularMap.isTexture)
        data.specularMap = this.specularMap.toJSON(meta).uuid;
      if (this.specularIntensityMap && this.specularIntensityMap.isTexture)
        data.specularIntensityMap = this.specularIntensityMap.toJSON(meta).uuid;
      if (this.specularColorMap && this.specularColorMap.isTexture)
        data.specularColorMap = this.specularColorMap.toJSON(meta).uuid;
      if (this.envMap && this.envMap.isTexture) {
        data.envMap = this.envMap.toJSON(meta).uuid;
        if (this.combine !== void 0)
          data.combine = this.combine;
      }
      if (this.envMapIntensity !== void 0)
        data.envMapIntensity = this.envMapIntensity;
      if (this.reflectivity !== void 0)
        data.reflectivity = this.reflectivity;
      if (this.refractionRatio !== void 0)
        data.refractionRatio = this.refractionRatio;
      if (this.gradientMap && this.gradientMap.isTexture) {
        data.gradientMap = this.gradientMap.toJSON(meta).uuid;
      }
      if (this.transmission !== void 0)
        data.transmission = this.transmission;
      if (this.transmissionMap && this.transmissionMap.isTexture)
        data.transmissionMap = this.transmissionMap.toJSON(meta).uuid;
      if (this.thickness !== void 0)
        data.thickness = this.thickness;
      if (this.thicknessMap && this.thicknessMap.isTexture)
        data.thicknessMap = this.thicknessMap.toJSON(meta).uuid;
      if (this.attenuationDistance !== void 0 && this.attenuationDistance !== Infinity)
        data.attenuationDistance = this.attenuationDistance;
      if (this.attenuationColor !== void 0)
        data.attenuationColor = this.attenuationColor.getHex();
      if (this.size !== void 0)
        data.size = this.size;
      if (this.shadowSide !== null)
        data.shadowSide = this.shadowSide;
      if (this.sizeAttenuation !== void 0)
        data.sizeAttenuation = this.sizeAttenuation;
      if (this.blending !== NormalBlending)
        data.blending = this.blending;
      if (this.side !== FrontSide)
        data.side = this.side;
      if (this.vertexColors)
        data.vertexColors = true;
      if (this.opacity < 1)
        data.opacity = this.opacity;
      if (this.transparent === true)
        data.transparent = this.transparent;
      data.depthFunc = this.depthFunc;
      data.depthTest = this.depthTest;
      data.depthWrite = this.depthWrite;
      data.colorWrite = this.colorWrite;
      data.stencilWrite = this.stencilWrite;
      data.stencilWriteMask = this.stencilWriteMask;
      data.stencilFunc = this.stencilFunc;
      data.stencilRef = this.stencilRef;
      data.stencilFuncMask = this.stencilFuncMask;
      data.stencilFail = this.stencilFail;
      data.stencilZFail = this.stencilZFail;
      data.stencilZPass = this.stencilZPass;
      if (this.rotation !== void 0 && this.rotation !== 0)
        data.rotation = this.rotation;
      if (this.polygonOffset === true)
        data.polygonOffset = true;
      if (this.polygonOffsetFactor !== 0)
        data.polygonOffsetFactor = this.polygonOffsetFactor;
      if (this.polygonOffsetUnits !== 0)
        data.polygonOffsetUnits = this.polygonOffsetUnits;
      if (this.linewidth !== void 0 && this.linewidth !== 1)
        data.linewidth = this.linewidth;
      if (this.dashSize !== void 0)
        data.dashSize = this.dashSize;
      if (this.gapSize !== void 0)
        data.gapSize = this.gapSize;
      if (this.scale !== void 0)
        data.scale = this.scale;
      if (this.dithering === true)
        data.dithering = true;
      if (this.alphaTest > 0)
        data.alphaTest = this.alphaTest;
      if (this.alphaToCoverage === true)
        data.alphaToCoverage = this.alphaToCoverage;
      if (this.premultipliedAlpha === true)
        data.premultipliedAlpha = this.premultipliedAlpha;
      if (this.forceSinglePass === true)
        data.forceSinglePass = this.forceSinglePass;
      if (this.wireframe === true)
        data.wireframe = this.wireframe;
      if (this.wireframeLinewidth > 1)
        data.wireframeLinewidth = this.wireframeLinewidth;
      if (this.wireframeLinecap !== "round")
        data.wireframeLinecap = this.wireframeLinecap;
      if (this.wireframeLinejoin !== "round")
        data.wireframeLinejoin = this.wireframeLinejoin;
      if (this.flatShading === true)
        data.flatShading = this.flatShading;
      if (this.visible === false)
        data.visible = false;
      if (this.toneMapped === false)
        data.toneMapped = false;
      if (this.fog === false)
        data.fog = false;
      if (Object.keys(this.userData).length > 0)
        data.userData = this.userData;
      function extractFromCache(cache) {
        const values = [];
        for (const key in cache) {
          const data2 = cache[key];
          delete data2.metadata;
          values.push(data2);
        }
        return values;
      }
      if (isRootObject) {
        const textures = extractFromCache(meta.textures);
        const images = extractFromCache(meta.images);
        if (textures.length > 0)
          data.textures = textures;
        if (images.length > 0)
          data.images = images;
      }
      return data;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(source) {
      this.name = source.name;
      this.blending = source.blending;
      this.side = source.side;
      this.vertexColors = source.vertexColors;
      this.opacity = source.opacity;
      this.transparent = source.transparent;
      this.blendSrc = source.blendSrc;
      this.blendDst = source.blendDst;
      this.blendEquation = source.blendEquation;
      this.blendSrcAlpha = source.blendSrcAlpha;
      this.blendDstAlpha = source.blendDstAlpha;
      this.blendEquationAlpha = source.blendEquationAlpha;
      this.depthFunc = source.depthFunc;
      this.depthTest = source.depthTest;
      this.depthWrite = source.depthWrite;
      this.stencilWriteMask = source.stencilWriteMask;
      this.stencilFunc = source.stencilFunc;
      this.stencilRef = source.stencilRef;
      this.stencilFuncMask = source.stencilFuncMask;
      this.stencilFail = source.stencilFail;
      this.stencilZFail = source.stencilZFail;
      this.stencilZPass = source.stencilZPass;
      this.stencilWrite = source.stencilWrite;
      const srcPlanes = source.clippingPlanes;
      let dstPlanes = null;
      if (srcPlanes !== null) {
        const n = srcPlanes.length;
        dstPlanes = new Array(n);
        for (let i = 0; i !== n; ++i) {
          dstPlanes[i] = srcPlanes[i].clone();
        }
      }
      this.clippingPlanes = dstPlanes;
      this.clipIntersection = source.clipIntersection;
      this.clipShadows = source.clipShadows;
      this.shadowSide = source.shadowSide;
      this.colorWrite = source.colorWrite;
      this.precision = source.precision;
      this.polygonOffset = source.polygonOffset;
      this.polygonOffsetFactor = source.polygonOffsetFactor;
      this.polygonOffsetUnits = source.polygonOffsetUnits;
      this.dithering = source.dithering;
      this.alphaTest = source.alphaTest;
      this.alphaToCoverage = source.alphaToCoverage;
      this.premultipliedAlpha = source.premultipliedAlpha;
      this.forceSinglePass = source.forceSinglePass;
      this.visible = source.visible;
      this.toneMapped = source.toneMapped;
      this.userData = JSON.parse(JSON.stringify(source.userData));
      return this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(value) {
      if (value === true)
        this.version++;
    }
  }
  const _colorKeywords = {
    "aliceblue": 15792383,
    "antiquewhite": 16444375,
    "aqua": 65535,
    "aquamarine": 8388564,
    "azure": 15794175,
    "beige": 16119260,
    "bisque": 16770244,
    "black": 0,
    "blanchedalmond": 16772045,
    "blue": 255,
    "blueviolet": 9055202,
    "brown": 10824234,
    "burlywood": 14596231,
    "cadetblue": 6266528,
    "chartreuse": 8388352,
    "chocolate": 13789470,
    "coral": 16744272,
    "cornflowerblue": 6591981,
    "cornsilk": 16775388,
    "crimson": 14423100,
    "cyan": 65535,
    "darkblue": 139,
    "darkcyan": 35723,
    "darkgoldenrod": 12092939,
    "darkgray": 11119017,
    "darkgreen": 25600,
    "darkgrey": 11119017,
    "darkkhaki": 12433259,
    "darkmagenta": 9109643,
    "darkolivegreen": 5597999,
    "darkorange": 16747520,
    "darkorchid": 10040012,
    "darkred": 9109504,
    "darksalmon": 15308410,
    "darkseagreen": 9419919,
    "darkslateblue": 4734347,
    "darkslategray": 3100495,
    "darkslategrey": 3100495,
    "darkturquoise": 52945,
    "darkviolet": 9699539,
    "deeppink": 16716947,
    "deepskyblue": 49151,
    "dimgray": 6908265,
    "dimgrey": 6908265,
    "dodgerblue": 2003199,
    "firebrick": 11674146,
    "floralwhite": 16775920,
    "forestgreen": 2263842,
    "fuchsia": 16711935,
    "gainsboro": 14474460,
    "ghostwhite": 16316671,
    "gold": 16766720,
    "goldenrod": 14329120,
    "gray": 8421504,
    "green": 32768,
    "greenyellow": 11403055,
    "grey": 8421504,
    "honeydew": 15794160,
    "hotpink": 16738740,
    "indianred": 13458524,
    "indigo": 4915330,
    "ivory": 16777200,
    "khaki": 15787660,
    "lavender": 15132410,
    "lavenderblush": 16773365,
    "lawngreen": 8190976,
    "lemonchiffon": 16775885,
    "lightblue": 11393254,
    "lightcoral": 15761536,
    "lightcyan": 14745599,
    "lightgoldenrodyellow": 16448210,
    "lightgray": 13882323,
    "lightgreen": 9498256,
    "lightgrey": 13882323,
    "lightpink": 16758465,
    "lightsalmon": 16752762,
    "lightseagreen": 2142890,
    "lightskyblue": 8900346,
    "lightslategray": 7833753,
    "lightslategrey": 7833753,
    "lightsteelblue": 11584734,
    "lightyellow": 16777184,
    "lime": 65280,
    "limegreen": 3329330,
    "linen": 16445670,
    "magenta": 16711935,
    "maroon": 8388608,
    "mediumaquamarine": 6737322,
    "mediumblue": 205,
    "mediumorchid": 12211667,
    "mediumpurple": 9662683,
    "mediumseagreen": 3978097,
    "mediumslateblue": 8087790,
    "mediumspringgreen": 64154,
    "mediumturquoise": 4772300,
    "mediumvioletred": 13047173,
    "midnightblue": 1644912,
    "mintcream": 16121850,
    "mistyrose": 16770273,
    "moccasin": 16770229,
    "navajowhite": 16768685,
    "navy": 128,
    "oldlace": 16643558,
    "olive": 8421376,
    "olivedrab": 7048739,
    "orange": 16753920,
    "orangered": 16729344,
    "orchid": 14315734,
    "palegoldenrod": 15657130,
    "palegreen": 10025880,
    "paleturquoise": 11529966,
    "palevioletred": 14381203,
    "papayawhip": 16773077,
    "peachpuff": 16767673,
    "peru": 13468991,
    "pink": 16761035,
    "plum": 14524637,
    "powderblue": 11591910,
    "purple": 8388736,
    "rebeccapurple": 6697881,
    "red": 16711680,
    "rosybrown": 12357519,
    "royalblue": 4286945,
    "saddlebrown": 9127187,
    "salmon": 16416882,
    "sandybrown": 16032864,
    "seagreen": 3050327,
    "seashell": 16774638,
    "sienna": 10506797,
    "silver": 12632256,
    "skyblue": 8900331,
    "slateblue": 6970061,
    "slategray": 7372944,
    "slategrey": 7372944,
    "snow": 16775930,
    "springgreen": 65407,
    "steelblue": 4620980,
    "tan": 13808780,
    "teal": 32896,
    "thistle": 14204888,
    "tomato": 16737095,
    "turquoise": 4251856,
    "violet": 15631086,
    "wheat": 16113331,
    "white": 16777215,
    "whitesmoke": 16119285,
    "yellow": 16776960,
    "yellowgreen": 10145074
  };
  const _hslA = { h: 0, s: 0, l: 0 };
  const _hslB = { h: 0, s: 0, l: 0 };
  function hue2rgb(p, q, t) {
    if (t < 0)
      t += 1;
    if (t > 1)
      t -= 1;
    if (t < 1 / 6)
      return p + (q - p) * 6 * t;
    if (t < 1 / 2)
      return q;
    if (t < 2 / 3)
      return p + (q - p) * 6 * (2 / 3 - t);
    return p;
  }
  class Color {
    constructor(r, g, b) {
      this.isColor = true;
      this.r = 1;
      this.g = 1;
      this.b = 1;
      if (g === void 0 && b === void 0) {
        return this.set(r);
      }
      return this.setRGB(r, g, b);
    }
    set(value) {
      if (value && value.isColor) {
        this.copy(value);
      } else if (typeof value === "number") {
        this.setHex(value);
      } else if (typeof value === "string") {
        this.setStyle(value);
      }
      return this;
    }
    setScalar(scalar) {
      this.r = scalar;
      this.g = scalar;
      this.b = scalar;
      return this;
    }
    setHex(hex, colorSpace = SRGBColorSpace) {
      hex = Math.floor(hex);
      this.r = (hex >> 16 & 255) / 255;
      this.g = (hex >> 8 & 255) / 255;
      this.b = (hex & 255) / 255;
      ColorManagement.toWorkingColorSpace(this, colorSpace);
      return this;
    }
    setRGB(r, g, b, colorSpace = ColorManagement.workingColorSpace) {
      this.r = r;
      this.g = g;
      this.b = b;
      ColorManagement.toWorkingColorSpace(this, colorSpace);
      return this;
    }
    setHSL(h, s, l, colorSpace = ColorManagement.workingColorSpace) {
      h = euclideanModulo(h, 1);
      s = clamp$1(s, 0, 1);
      l = clamp$1(l, 0, 1);
      if (s === 0) {
        this.r = this.g = this.b = l;
      } else {
        const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
        const q = 2 * l - p;
        this.r = hue2rgb(q, p, h + 1 / 3);
        this.g = hue2rgb(q, p, h);
        this.b = hue2rgb(q, p, h - 1 / 3);
      }
      ColorManagement.toWorkingColorSpace(this, colorSpace);
      return this;
    }
    setStyle(style2, colorSpace = SRGBColorSpace) {
      function handleAlpha(string) {
        if (string === void 0)
          return;
        if (parseFloat(string) < 1) {
          console.warn("THREE.Color: Alpha component of " + style2 + " will be ignored.");
        }
      }
      let m;
      if (m = /^(\w+)\(([^\)]*)\)/.exec(style2)) {
        let color;
        const name = m[1];
        const components = m[2];
        switch (name) {
          case "rgb":
          case "rgba":
            if (color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
              handleAlpha(color[4]);
              return this.setRGB(
                Math.min(255, parseInt(color[1], 10)) / 255,
                Math.min(255, parseInt(color[2], 10)) / 255,
                Math.min(255, parseInt(color[3], 10)) / 255,
                colorSpace
              );
            }
            if (color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
              handleAlpha(color[4]);
              return this.setRGB(
                Math.min(100, parseInt(color[1], 10)) / 100,
                Math.min(100, parseInt(color[2], 10)) / 100,
                Math.min(100, parseInt(color[3], 10)) / 100,
                colorSpace
              );
            }
            break;
          case "hsl":
          case "hsla":
            if (color = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
              handleAlpha(color[4]);
              return this.setHSL(
                parseFloat(color[1]) / 360,
                parseFloat(color[2]) / 100,
                parseFloat(color[3]) / 100,
                colorSpace
              );
            }
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + style2);
        }
      } else if (m = /^\#([A-Fa-f\d]+)$/.exec(style2)) {
        const hex = m[1];
        const size = hex.length;
        if (size === 3) {
          return this.setRGB(
            parseInt(hex.charAt(0), 16) / 15,
            parseInt(hex.charAt(1), 16) / 15,
            parseInt(hex.charAt(2), 16) / 15,
            colorSpace
          );
        } else if (size === 6) {
          return this.setHex(parseInt(hex, 16), colorSpace);
        } else {
          console.warn("THREE.Color: Invalid hex color " + style2);
        }
      } else if (style2 && style2.length > 0) {
        return this.setColorName(style2, colorSpace);
      }
      return this;
    }
    setColorName(style2, colorSpace = SRGBColorSpace) {
      const hex = _colorKeywords[style2.toLowerCase()];
      if (hex !== void 0) {
        this.setHex(hex, colorSpace);
      } else {
        console.warn("THREE.Color: Unknown color " + style2);
      }
      return this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(color) {
      this.r = color.r;
      this.g = color.g;
      this.b = color.b;
      return this;
    }
    copySRGBToLinear(color) {
      this.r = SRGBToLinear(color.r);
      this.g = SRGBToLinear(color.g);
      this.b = SRGBToLinear(color.b);
      return this;
    }
    copyLinearToSRGB(color) {
      this.r = LinearToSRGB(color.r);
      this.g = LinearToSRGB(color.g);
      this.b = LinearToSRGB(color.b);
      return this;
    }
    convertSRGBToLinear() {
      this.copySRGBToLinear(this);
      return this;
    }
    convertLinearToSRGB() {
      this.copyLinearToSRGB(this);
      return this;
    }
    getHex(colorSpace = SRGBColorSpace) {
      ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
      return Math.round(clamp$1(_color.r * 255, 0, 255)) * 65536 + Math.round(clamp$1(_color.g * 255, 0, 255)) * 256 + Math.round(clamp$1(_color.b * 255, 0, 255));
    }
    getHexString(colorSpace = SRGBColorSpace) {
      return ("000000" + this.getHex(colorSpace).toString(16)).slice(-6);
    }
    getHSL(target, colorSpace = ColorManagement.workingColorSpace) {
      ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
      const r = _color.r, g = _color.g, b = _color.b;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let hue, saturation;
      const lightness = (min + max) / 2;
      if (min === max) {
        hue = 0;
        saturation = 0;
      } else {
        const delta = max - min;
        saturation = lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);
        switch (max) {
          case r:
            hue = (g - b) / delta + (g < b ? 6 : 0);
            break;
          case g:
            hue = (b - r) / delta + 2;
            break;
          case b:
            hue = (r - g) / delta + 4;
            break;
        }
        hue /= 6;
      }
      target.h = hue;
      target.s = saturation;
      target.l = lightness;
      return target;
    }
    getRGB(target, colorSpace = ColorManagement.workingColorSpace) {
      ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
      target.r = _color.r;
      target.g = _color.g;
      target.b = _color.b;
      return target;
    }
    getStyle(colorSpace = SRGBColorSpace) {
      ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
      const r = _color.r, g = _color.g, b = _color.b;
      if (colorSpace !== SRGBColorSpace) {
        return `color(${colorSpace} ${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)})`;
      }
      return `rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)})`;
    }
    offsetHSL(h, s, l) {
      this.getHSL(_hslA);
      _hslA.h += h;
      _hslA.s += s;
      _hslA.l += l;
      this.setHSL(_hslA.h, _hslA.s, _hslA.l);
      return this;
    }
    add(color) {
      this.r += color.r;
      this.g += color.g;
      this.b += color.b;
      return this;
    }
    addColors(color1, color2) {
      this.r = color1.r + color2.r;
      this.g = color1.g + color2.g;
      this.b = color1.b + color2.b;
      return this;
    }
    addScalar(s) {
      this.r += s;
      this.g += s;
      this.b += s;
      return this;
    }
    sub(color) {
      this.r = Math.max(0, this.r - color.r);
      this.g = Math.max(0, this.g - color.g);
      this.b = Math.max(0, this.b - color.b);
      return this;
    }
    multiply(color) {
      this.r *= color.r;
      this.g *= color.g;
      this.b *= color.b;
      return this;
    }
    multiplyScalar(s) {
      this.r *= s;
      this.g *= s;
      this.b *= s;
      return this;
    }
    lerp(color, alpha) {
      this.r += (color.r - this.r) * alpha;
      this.g += (color.g - this.g) * alpha;
      this.b += (color.b - this.b) * alpha;
      return this;
    }
    lerpColors(color1, color2, alpha) {
      this.r = color1.r + (color2.r - color1.r) * alpha;
      this.g = color1.g + (color2.g - color1.g) * alpha;
      this.b = color1.b + (color2.b - color1.b) * alpha;
      return this;
    }
    lerpHSL(color, alpha) {
      this.getHSL(_hslA);
      color.getHSL(_hslB);
      const h = lerp(_hslA.h, _hslB.h, alpha);
      const s = lerp(_hslA.s, _hslB.s, alpha);
      const l = lerp(_hslA.l, _hslB.l, alpha);
      this.setHSL(h, s, l);
      return this;
    }
    setFromVector3(v) {
      this.r = v.x;
      this.g = v.y;
      this.b = v.z;
      return this;
    }
    applyMatrix3(m) {
      const r = this.r, g = this.g, b = this.b;
      const e = m.elements;
      this.r = e[0] * r + e[3] * g + e[6] * b;
      this.g = e[1] * r + e[4] * g + e[7] * b;
      this.b = e[2] * r + e[5] * g + e[8] * b;
      return this;
    }
    equals(c) {
      return c.r === this.r && c.g === this.g && c.b === this.b;
    }
    fromArray(array, offset = 0) {
      this.r = array[offset];
      this.g = array[offset + 1];
      this.b = array[offset + 2];
      return this;
    }
    toArray(array = [], offset = 0) {
      array[offset] = this.r;
      array[offset + 1] = this.g;
      array[offset + 2] = this.b;
      return array;
    }
    fromBufferAttribute(attribute, index) {
      this.r = attribute.getX(index);
      this.g = attribute.getY(index);
      this.b = attribute.getZ(index);
      return this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r;
      yield this.g;
      yield this.b;
    }
  }
  const _color = /* @__PURE__ */ new Color();
  Color.NAMES = _colorKeywords;
  class MeshBasicMaterial extends Material {
    constructor(parameters) {
      super();
      this.isMeshBasicMaterial = true;
      this.type = "MeshBasicMaterial";
      this.color = new Color(16777215);
      this.map = null;
      this.lightMap = null;
      this.lightMapIntensity = 1;
      this.aoMap = null;
      this.aoMapIntensity = 1;
      this.specularMap = null;
      this.alphaMap = null;
      this.envMap = null;
      this.combine = MultiplyOperation;
      this.reflectivity = 1;
      this.refractionRatio = 0.98;
      this.wireframe = false;
      this.wireframeLinewidth = 1;
      this.wireframeLinecap = "round";
      this.wireframeLinejoin = "round";
      this.fog = true;
      this.setValues(parameters);
    }
    copy(source) {
      super.copy(source);
      this.color.copy(source.color);
      this.map = source.map;
      this.lightMap = source.lightMap;
      this.lightMapIntensity = source.lightMapIntensity;
      this.aoMap = source.aoMap;
      this.aoMapIntensity = source.aoMapIntensity;
      this.specularMap = source.specularMap;
      this.alphaMap = source.alphaMap;
      this.envMap = source.envMap;
      this.combine = source.combine;
      this.reflectivity = source.reflectivity;
      this.refractionRatio = source.refractionRatio;
      this.wireframe = source.wireframe;
      this.wireframeLinewidth = source.wireframeLinewidth;
      this.wireframeLinecap = source.wireframeLinecap;
      this.wireframeLinejoin = source.wireframeLinejoin;
      this.fog = source.fog;
      return this;
    }
  }
  const _vector$8 = /* @__PURE__ */ new Vector3();
  const _vector2$1 = /* @__PURE__ */ new Vector2();
  class BufferAttribute {
    constructor(array, itemSize, normalized = false) {
      if (Array.isArray(array)) {
        throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      }
      this.isBufferAttribute = true;
      this.name = "";
      this.array = array;
      this.itemSize = itemSize;
      this.count = array !== void 0 ? array.length / itemSize : 0;
      this.normalized = normalized;
      this.usage = StaticDrawUsage;
      this.updateRange = { offset: 0, count: -1 };
      this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(value) {
      if (value === true)
        this.version++;
    }
    setUsage(value) {
      this.usage = value;
      return this;
    }
    copy(source) {
      this.name = source.name;
      this.array = new source.array.constructor(source.array);
      this.itemSize = source.itemSize;
      this.count = source.count;
      this.normalized = source.normalized;
      this.usage = source.usage;
      return this;
    }
    copyAt(index1, attribute, index2) {
      index1 *= this.itemSize;
      index2 *= attribute.itemSize;
      for (let i = 0, l = this.itemSize; i < l; i++) {
        this.array[index1 + i] = attribute.array[index2 + i];
      }
      return this;
    }
    copyArray(array) {
      this.array.set(array);
      return this;
    }
    applyMatrix3(m) {
      if (this.itemSize === 2) {
        for (let i = 0, l = this.count; i < l; i++) {
          _vector2$1.fromBufferAttribute(this, i);
          _vector2$1.applyMatrix3(m);
          this.setXY(i, _vector2$1.x, _vector2$1.y);
        }
      } else if (this.itemSize === 3) {
        for (let i = 0, l = this.count; i < l; i++) {
          _vector$8.fromBufferAttribute(this, i);
          _vector$8.applyMatrix3(m);
          this.setXYZ(i, _vector$8.x, _vector$8.y, _vector$8.z);
        }
      }
      return this;
    }
    applyMatrix4(m) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector$8.fromBufferAttribute(this, i);
        _vector$8.applyMatrix4(m);
        this.setXYZ(i, _vector$8.x, _vector$8.y, _vector$8.z);
      }
      return this;
    }
    applyNormalMatrix(m) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector$8.fromBufferAttribute(this, i);
        _vector$8.applyNormalMatrix(m);
        this.setXYZ(i, _vector$8.x, _vector$8.y, _vector$8.z);
      }
      return this;
    }
    transformDirection(m) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector$8.fromBufferAttribute(this, i);
        _vector$8.transformDirection(m);
        this.setXYZ(i, _vector$8.x, _vector$8.y, _vector$8.z);
      }
      return this;
    }
    set(value, offset = 0) {
      this.array.set(value, offset);
      return this;
    }
    getX(index) {
      let x = this.array[index * this.itemSize];
      if (this.normalized)
        x = denormalize(x, this.array);
      return x;
    }
    setX(index, x) {
      if (this.normalized)
        x = normalize$1(x, this.array);
      this.array[index * this.itemSize] = x;
      return this;
    }
    getY(index) {
      let y = this.array[index * this.itemSize + 1];
      if (this.normalized)
        y = denormalize(y, this.array);
      return y;
    }
    setY(index, y) {
      if (this.normalized)
        y = normalize$1(y, this.array);
      this.array[index * this.itemSize + 1] = y;
      return this;
    }
    getZ(index) {
      let z = this.array[index * this.itemSize + 2];
      if (this.normalized)
        z = denormalize(z, this.array);
      return z;
    }
    setZ(index, z) {
      if (this.normalized)
        z = normalize$1(z, this.array);
      this.array[index * this.itemSize + 2] = z;
      return this;
    }
    getW(index) {
      let w = this.array[index * this.itemSize + 3];
      if (this.normalized)
        w = denormalize(w, this.array);
      return w;
    }
    setW(index, w) {
      if (this.normalized)
        w = normalize$1(w, this.array);
      this.array[index * this.itemSize + 3] = w;
      return this;
    }
    setXY(index, x, y) {
      index *= this.itemSize;
      if (this.normalized) {
        x = normalize$1(x, this.array);
        y = normalize$1(y, this.array);
      }
      this.array[index + 0] = x;
      this.array[index + 1] = y;
      return this;
    }
    setXYZ(index, x, y, z) {
      index *= this.itemSize;
      if (this.normalized) {
        x = normalize$1(x, this.array);
        y = normalize$1(y, this.array);
        z = normalize$1(z, this.array);
      }
      this.array[index + 0] = x;
      this.array[index + 1] = y;
      this.array[index + 2] = z;
      return this;
    }
    setXYZW(index, x, y, z, w) {
      index *= this.itemSize;
      if (this.normalized) {
        x = normalize$1(x, this.array);
        y = normalize$1(y, this.array);
        z = normalize$1(z, this.array);
        w = normalize$1(w, this.array);
      }
      this.array[index + 0] = x;
      this.array[index + 1] = y;
      this.array[index + 2] = z;
      this.array[index + 3] = w;
      return this;
    }
    onUpload(callback) {
      this.onUploadCallback = callback;
      return this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const data = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized
      };
      if (this.name !== "")
        data.name = this.name;
      if (this.usage !== StaticDrawUsage)
        data.usage = this.usage;
      if (this.updateRange.offset !== 0 || this.updateRange.count !== -1)
        data.updateRange = this.updateRange;
      return data;
    }
    copyColorsArray() {
      console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
    }
    copyVector2sArray() {
      console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
    }
    copyVector3sArray() {
      console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
    }
    copyVector4sArray() {
      console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
    }
  }
  class Uint16BufferAttribute extends BufferAttribute {
    constructor(array, itemSize, normalized) {
      super(new Uint16Array(array), itemSize, normalized);
    }
  }
  class Uint32BufferAttribute extends BufferAttribute {
    constructor(array, itemSize, normalized) {
      super(new Uint32Array(array), itemSize, normalized);
    }
  }
  class Float32BufferAttribute extends BufferAttribute {
    constructor(array, itemSize, normalized) {
      super(new Float32Array(array), itemSize, normalized);
    }
  }
  let _id$1 = 0;
  const _m1 = /* @__PURE__ */ new Matrix4();
  const _obj = /* @__PURE__ */ new Object3D();
  const _offset = /* @__PURE__ */ new Vector3();
  const _box$1 = /* @__PURE__ */ new Box3();
  const _boxMorphTargets = /* @__PURE__ */ new Box3();
  const _vector$7 = /* @__PURE__ */ new Vector3();
  class BufferGeometry extends EventDispatcher {
    constructor() {
      super();
      this.isBufferGeometry = true;
      Object.defineProperty(this, "id", { value: _id$1++ });
      this.uuid = generateUUID();
      this.name = "";
      this.type = "BufferGeometry";
      this.index = null;
      this.attributes = {};
      this.morphAttributes = {};
      this.morphTargetsRelative = false;
      this.groups = [];
      this.boundingBox = null;
      this.boundingSphere = null;
      this.drawRange = { start: 0, count: Infinity };
      this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(index) {
      if (Array.isArray(index)) {
        this.index = new (arrayNeedsUint32(index) ? Uint32BufferAttribute : Uint16BufferAttribute)(index, 1);
      } else {
        this.index = index;
      }
      return this;
    }
    getAttribute(name) {
      return this.attributes[name];
    }
    setAttribute(name, attribute) {
      this.attributes[name] = attribute;
      return this;
    }
    deleteAttribute(name) {
      delete this.attributes[name];
      return this;
    }
    hasAttribute(name) {
      return this.attributes[name] !== void 0;
    }
    addGroup(start, count, materialIndex = 0) {
      this.groups.push({
        start,
        count,
        materialIndex
      });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(start, count) {
      this.drawRange.start = start;
      this.drawRange.count = count;
    }
    applyMatrix4(matrix) {
      const position = this.attributes.position;
      if (position !== void 0) {
        position.applyMatrix4(matrix);
        position.needsUpdate = true;
      }
      const normal = this.attributes.normal;
      if (normal !== void 0) {
        const normalMatrix = new Matrix3().getNormalMatrix(matrix);
        normal.applyNormalMatrix(normalMatrix);
        normal.needsUpdate = true;
      }
      const tangent = this.attributes.tangent;
      if (tangent !== void 0) {
        tangent.transformDirection(matrix);
        tangent.needsUpdate = true;
      }
      if (this.boundingBox !== null) {
        this.computeBoundingBox();
      }
      if (this.boundingSphere !== null) {
        this.computeBoundingSphere();
      }
      return this;
    }
    applyQuaternion(q) {
      _m1.makeRotationFromQuaternion(q);
      this.applyMatrix4(_m1);
      return this;
    }
    rotateX(angle) {
      _m1.makeRotationX(angle);
      this.applyMatrix4(_m1);
      return this;
    }
    rotateY(angle) {
      _m1.makeRotationY(angle);
      this.applyMatrix4(_m1);
      return this;
    }
    rotateZ(angle) {
      _m1.makeRotationZ(angle);
      this.applyMatrix4(_m1);
      return this;
    }
    translate(x, y, z) {
      _m1.makeTranslation(x, y, z);
      this.applyMatrix4(_m1);
      return this;
    }
    scale(x, y, z) {
      _m1.makeScale(x, y, z);
      this.applyMatrix4(_m1);
      return this;
    }
    lookAt(vector) {
      _obj.lookAt(vector);
      _obj.updateMatrix();
      this.applyMatrix4(_obj.matrix);
      return this;
    }
    center() {
      this.computeBoundingBox();
      this.boundingBox.getCenter(_offset).negate();
      this.translate(_offset.x, _offset.y, _offset.z);
      return this;
    }
    setFromPoints(points) {
      const position = [];
      for (let i = 0, l = points.length; i < l; i++) {
        const point = points[i];
        position.push(point.x, point.y, point.z || 0);
      }
      this.setAttribute("position", new Float32BufferAttribute(position, 3));
      return this;
    }
    computeBoundingBox() {
      if (this.boundingBox === null) {
        this.boundingBox = new Box3();
      }
      const position = this.attributes.position;
      const morphAttributesPosition = this.morphAttributes.position;
      if (position && position.isGLBufferAttribute) {
        console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this);
        this.boundingBox.set(
          new Vector3(-Infinity, -Infinity, -Infinity),
          new Vector3(Infinity, Infinity, Infinity)
        );
        return;
      }
      if (position !== void 0) {
        this.boundingBox.setFromBufferAttribute(position);
        if (morphAttributesPosition) {
          for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
            const morphAttribute = morphAttributesPosition[i];
            _box$1.setFromBufferAttribute(morphAttribute);
            if (this.morphTargetsRelative) {
              _vector$7.addVectors(this.boundingBox.min, _box$1.min);
              this.boundingBox.expandByPoint(_vector$7);
              _vector$7.addVectors(this.boundingBox.max, _box$1.max);
              this.boundingBox.expandByPoint(_vector$7);
            } else {
              this.boundingBox.expandByPoint(_box$1.min);
              this.boundingBox.expandByPoint(_box$1.max);
            }
          }
        }
      } else {
        this.boundingBox.makeEmpty();
      }
      if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
        console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeBoundingSphere() {
      if (this.boundingSphere === null) {
        this.boundingSphere = new Sphere();
      }
      const position = this.attributes.position;
      const morphAttributesPosition = this.morphAttributes.position;
      if (position && position.isGLBufferAttribute) {
        console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this);
        this.boundingSphere.set(new Vector3(), Infinity);
        return;
      }
      if (position) {
        const center = this.boundingSphere.center;
        _box$1.setFromBufferAttribute(position);
        if (morphAttributesPosition) {
          for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
            const morphAttribute = morphAttributesPosition[i];
            _boxMorphTargets.setFromBufferAttribute(morphAttribute);
            if (this.morphTargetsRelative) {
              _vector$7.addVectors(_box$1.min, _boxMorphTargets.min);
              _box$1.expandByPoint(_vector$7);
              _vector$7.addVectors(_box$1.max, _boxMorphTargets.max);
              _box$1.expandByPoint(_vector$7);
            } else {
              _box$1.expandByPoint(_boxMorphTargets.min);
              _box$1.expandByPoint(_boxMorphTargets.max);
            }
          }
        }
        _box$1.getCenter(center);
        let maxRadiusSq = 0;
        for (let i = 0, il = position.count; i < il; i++) {
          _vector$7.fromBufferAttribute(position, i);
          maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector$7));
        }
        if (morphAttributesPosition) {
          for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
            const morphAttribute = morphAttributesPosition[i];
            const morphTargetsRelative = this.morphTargetsRelative;
            for (let j = 0, jl = morphAttribute.count; j < jl; j++) {
              _vector$7.fromBufferAttribute(morphAttribute, j);
              if (morphTargetsRelative) {
                _offset.fromBufferAttribute(position, j);
                _vector$7.add(_offset);
              }
              maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector$7));
            }
          }
        }
        this.boundingSphere.radius = Math.sqrt(maxRadiusSq);
        if (isNaN(this.boundingSphere.radius)) {
          console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
        }
      }
    }
    computeTangents() {
      const index = this.index;
      const attributes = this.attributes;
      if (index === null || attributes.position === void 0 || attributes.normal === void 0 || attributes.uv === void 0) {
        console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
        return;
      }
      const indices = index.array;
      const positions = attributes.position.array;
      const normals = attributes.normal.array;
      const uvs = attributes.uv.array;
      const nVertices = positions.length / 3;
      if (this.hasAttribute("tangent") === false) {
        this.setAttribute("tangent", new BufferAttribute(new Float32Array(4 * nVertices), 4));
      }
      const tangents = this.getAttribute("tangent").array;
      const tan1 = [], tan2 = [];
      for (let i = 0; i < nVertices; i++) {
        tan1[i] = new Vector3();
        tan2[i] = new Vector3();
      }
      const vA = new Vector3(), vB = new Vector3(), vC = new Vector3(), uvA = new Vector2(), uvB = new Vector2(), uvC = new Vector2(), sdir = new Vector3(), tdir = new Vector3();
      function handleTriangle(a, b, c) {
        vA.fromArray(positions, a * 3);
        vB.fromArray(positions, b * 3);
        vC.fromArray(positions, c * 3);
        uvA.fromArray(uvs, a * 2);
        uvB.fromArray(uvs, b * 2);
        uvC.fromArray(uvs, c * 2);
        vB.sub(vA);
        vC.sub(vA);
        uvB.sub(uvA);
        uvC.sub(uvA);
        const r = 1 / (uvB.x * uvC.y - uvC.x * uvB.y);
        if (!isFinite(r))
          return;
        sdir.copy(vB).multiplyScalar(uvC.y).addScaledVector(vC, -uvB.y).multiplyScalar(r);
        tdir.copy(vC).multiplyScalar(uvB.x).addScaledVector(vB, -uvC.x).multiplyScalar(r);
        tan1[a].add(sdir);
        tan1[b].add(sdir);
        tan1[c].add(sdir);
        tan2[a].add(tdir);
        tan2[b].add(tdir);
        tan2[c].add(tdir);
      }
      let groups = this.groups;
      if (groups.length === 0) {
        groups = [{
          start: 0,
          count: indices.length
        }];
      }
      for (let i = 0, il = groups.length; i < il; ++i) {
        const group = groups[i];
        const start = group.start;
        const count = group.count;
        for (let j = start, jl = start + count; j < jl; j += 3) {
          handleTriangle(
            indices[j + 0],
            indices[j + 1],
            indices[j + 2]
          );
        }
      }
      const tmp = new Vector3(), tmp2 = new Vector3();
      const n = new Vector3(), n2 = new Vector3();
      function handleVertex(v) {
        n.fromArray(normals, v * 3);
        n2.copy(n);
        const t = tan1[v];
        tmp.copy(t);
        tmp.sub(n.multiplyScalar(n.dot(t))).normalize();
        tmp2.crossVectors(n2, t);
        const test = tmp2.dot(tan2[v]);
        const w = test < 0 ? -1 : 1;
        tangents[v * 4] = tmp.x;
        tangents[v * 4 + 1] = tmp.y;
        tangents[v * 4 + 2] = tmp.z;
        tangents[v * 4 + 3] = w;
      }
      for (let i = 0, il = groups.length; i < il; ++i) {
        const group = groups[i];
        const start = group.start;
        const count = group.count;
        for (let j = start, jl = start + count; j < jl; j += 3) {
          handleVertex(indices[j + 0]);
          handleVertex(indices[j + 1]);
          handleVertex(indices[j + 2]);
        }
      }
    }
    computeVertexNormals() {
      const index = this.index;
      const positionAttribute = this.getAttribute("position");
      if (positionAttribute !== void 0) {
        let normalAttribute = this.getAttribute("normal");
        if (normalAttribute === void 0) {
          normalAttribute = new BufferAttribute(new Float32Array(positionAttribute.count * 3), 3);
          this.setAttribute("normal", normalAttribute);
        } else {
          for (let i = 0, il = normalAttribute.count; i < il; i++) {
            normalAttribute.setXYZ(i, 0, 0, 0);
          }
        }
        const pA = new Vector3(), pB = new Vector3(), pC = new Vector3();
        const nA = new Vector3(), nB = new Vector3(), nC = new Vector3();
        const cb = new Vector3(), ab = new Vector3();
        if (index) {
          for (let i = 0, il = index.count; i < il; i += 3) {
            const vA = index.getX(i + 0);
            const vB = index.getX(i + 1);
            const vC = index.getX(i + 2);
            pA.fromBufferAttribute(positionAttribute, vA);
            pB.fromBufferAttribute(positionAttribute, vB);
            pC.fromBufferAttribute(positionAttribute, vC);
            cb.subVectors(pC, pB);
            ab.subVectors(pA, pB);
            cb.cross(ab);
            nA.fromBufferAttribute(normalAttribute, vA);
            nB.fromBufferAttribute(normalAttribute, vB);
            nC.fromBufferAttribute(normalAttribute, vC);
            nA.add(cb);
            nB.add(cb);
            nC.add(cb);
            normalAttribute.setXYZ(vA, nA.x, nA.y, nA.z);
            normalAttribute.setXYZ(vB, nB.x, nB.y, nB.z);
            normalAttribute.setXYZ(vC, nC.x, nC.y, nC.z);
          }
        } else {
          for (let i = 0, il = positionAttribute.count; i < il; i += 3) {
            pA.fromBufferAttribute(positionAttribute, i + 0);
            pB.fromBufferAttribute(positionAttribute, i + 1);
            pC.fromBufferAttribute(positionAttribute, i + 2);
            cb.subVectors(pC, pB);
            ab.subVectors(pA, pB);
            cb.cross(ab);
            normalAttribute.setXYZ(i + 0, cb.x, cb.y, cb.z);
            normalAttribute.setXYZ(i + 1, cb.x, cb.y, cb.z);
            normalAttribute.setXYZ(i + 2, cb.x, cb.y, cb.z);
          }
        }
        this.normalizeNormals();
        normalAttribute.needsUpdate = true;
      }
    }
    merge() {
      console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead.");
      return this;
    }
    normalizeNormals() {
      const normals = this.attributes.normal;
      for (let i = 0, il = normals.count; i < il; i++) {
        _vector$7.fromBufferAttribute(normals, i);
        _vector$7.normalize();
        normals.setXYZ(i, _vector$7.x, _vector$7.y, _vector$7.z);
      }
    }
    toNonIndexed() {
      function convertBufferAttribute(attribute, indices2) {
        const array = attribute.array;
        const itemSize = attribute.itemSize;
        const normalized = attribute.normalized;
        const array2 = new array.constructor(indices2.length * itemSize);
        let index = 0, index2 = 0;
        for (let i = 0, l = indices2.length; i < l; i++) {
          if (attribute.isInterleavedBufferAttribute) {
            index = indices2[i] * attribute.data.stride + attribute.offset;
          } else {
            index = indices2[i] * itemSize;
          }
          for (let j = 0; j < itemSize; j++) {
            array2[index2++] = array[index++];
          }
        }
        return new BufferAttribute(array2, itemSize, normalized);
      }
      if (this.index === null) {
        console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.");
        return this;
      }
      const geometry2 = new BufferGeometry();
      const indices = this.index.array;
      const attributes = this.attributes;
      for (const name in attributes) {
        const attribute = attributes[name];
        const newAttribute = convertBufferAttribute(attribute, indices);
        geometry2.setAttribute(name, newAttribute);
      }
      const morphAttributes = this.morphAttributes;
      for (const name in morphAttributes) {
        const morphArray = [];
        const morphAttribute = morphAttributes[name];
        for (let i = 0, il = morphAttribute.length; i < il; i++) {
          const attribute = morphAttribute[i];
          const newAttribute = convertBufferAttribute(attribute, indices);
          morphArray.push(newAttribute);
        }
        geometry2.morphAttributes[name] = morphArray;
      }
      geometry2.morphTargetsRelative = this.morphTargetsRelative;
      const groups = this.groups;
      for (let i = 0, l = groups.length; i < l; i++) {
        const group = groups[i];
        geometry2.addGroup(group.start, group.count, group.materialIndex);
      }
      return geometry2;
    }
    toJSON() {
      const data = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      data.uuid = this.uuid;
      data.type = this.type;
      if (this.name !== "")
        data.name = this.name;
      if (Object.keys(this.userData).length > 0)
        data.userData = this.userData;
      if (this.parameters !== void 0) {
        const parameters = this.parameters;
        for (const key in parameters) {
          if (parameters[key] !== void 0)
            data[key] = parameters[key];
        }
        return data;
      }
      data.data = { attributes: {} };
      const index = this.index;
      if (index !== null) {
        data.data.index = {
          type: index.array.constructor.name,
          array: Array.prototype.slice.call(index.array)
        };
      }
      const attributes = this.attributes;
      for (const key in attributes) {
        const attribute = attributes[key];
        data.data.attributes[key] = attribute.toJSON(data.data);
      }
      const morphAttributes = {};
      let hasMorphAttributes = false;
      for (const key in this.morphAttributes) {
        const attributeArray = this.morphAttributes[key];
        const array = [];
        for (let i = 0, il = attributeArray.length; i < il; i++) {
          const attribute = attributeArray[i];
          array.push(attribute.toJSON(data.data));
        }
        if (array.length > 0) {
          morphAttributes[key] = array;
          hasMorphAttributes = true;
        }
      }
      if (hasMorphAttributes) {
        data.data.morphAttributes = morphAttributes;
        data.data.morphTargetsRelative = this.morphTargetsRelative;
      }
      const groups = this.groups;
      if (groups.length > 0) {
        data.data.groups = JSON.parse(JSON.stringify(groups));
      }
      const boundingSphere = this.boundingSphere;
      if (boundingSphere !== null) {
        data.data.boundingSphere = {
          center: boundingSphere.center.toArray(),
          radius: boundingSphere.radius
        };
      }
      return data;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(source) {
      this.index = null;
      this.attributes = {};
      this.morphAttributes = {};
      this.groups = [];
      this.boundingBox = null;
      this.boundingSphere = null;
      const data = {};
      this.name = source.name;
      const index = source.index;
      if (index !== null) {
        this.setIndex(index.clone(data));
      }
      const attributes = source.attributes;
      for (const name in attributes) {
        const attribute = attributes[name];
        this.setAttribute(name, attribute.clone(data));
      }
      const morphAttributes = source.morphAttributes;
      for (const name in morphAttributes) {
        const array = [];
        const morphAttribute = morphAttributes[name];
        for (let i = 0, l = morphAttribute.length; i < l; i++) {
          array.push(morphAttribute[i].clone(data));
        }
        this.morphAttributes[name] = array;
      }
      this.morphTargetsRelative = source.morphTargetsRelative;
      const groups = source.groups;
      for (let i = 0, l = groups.length; i < l; i++) {
        const group = groups[i];
        this.addGroup(group.start, group.count, group.materialIndex);
      }
      const boundingBox = source.boundingBox;
      if (boundingBox !== null) {
        this.boundingBox = boundingBox.clone();
      }
      const boundingSphere = source.boundingSphere;
      if (boundingSphere !== null) {
        this.boundingSphere = boundingSphere.clone();
      }
      this.drawRange.start = source.drawRange.start;
      this.drawRange.count = source.drawRange.count;
      this.userData = source.userData;
      return this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  const _inverseMatrix$2 = /* @__PURE__ */ new Matrix4();
  const _ray$2 = /* @__PURE__ */ new Ray();
  const _sphere$4 = /* @__PURE__ */ new Sphere();
  const _sphereHitAt = /* @__PURE__ */ new Vector3();
  const _vA$1 = /* @__PURE__ */ new Vector3();
  const _vB$1 = /* @__PURE__ */ new Vector3();
  const _vC$1 = /* @__PURE__ */ new Vector3();
  const _tempA = /* @__PURE__ */ new Vector3();
  const _morphA = /* @__PURE__ */ new Vector3();
  const _uvA$1 = /* @__PURE__ */ new Vector2();
  const _uvB$1 = /* @__PURE__ */ new Vector2();
  const _uvC$1 = /* @__PURE__ */ new Vector2();
  const _normalA = /* @__PURE__ */ new Vector3();
  const _normalB = /* @__PURE__ */ new Vector3();
  const _normalC = /* @__PURE__ */ new Vector3();
  const _intersectionPoint = /* @__PURE__ */ new Vector3();
  const _intersectionPointWorld = /* @__PURE__ */ new Vector3();
  class Mesh extends Object3D {
    constructor(geometry = new BufferGeometry(), material = new MeshBasicMaterial()) {
      super();
      this.isMesh = true;
      this.type = "Mesh";
      this.geometry = geometry;
      this.material = material;
      this.updateMorphTargets();
    }
    copy(source, recursive) {
      super.copy(source, recursive);
      if (source.morphTargetInfluences !== void 0) {
        this.morphTargetInfluences = source.morphTargetInfluences.slice();
      }
      if (source.morphTargetDictionary !== void 0) {
        this.morphTargetDictionary = Object.assign({}, source.morphTargetDictionary);
      }
      this.material = source.material;
      this.geometry = source.geometry;
      return this;
    }
    updateMorphTargets() {
      const geometry = this.geometry;
      const morphAttributes = geometry.morphAttributes;
      const keys = Object.keys(morphAttributes);
      if (keys.length > 0) {
        const morphAttribute = morphAttributes[keys[0]];
        if (morphAttribute !== void 0) {
          this.morphTargetInfluences = [];
          this.morphTargetDictionary = {};
          for (let m = 0, ml = morphAttribute.length; m < ml; m++) {
            const name = morphAttribute[m].name || String(m);
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[name] = m;
          }
        }
      }
    }
    getVertexPosition(index, target) {
      const geometry = this.geometry;
      const position = geometry.attributes.position;
      const morphPosition = geometry.morphAttributes.position;
      const morphTargetsRelative = geometry.morphTargetsRelative;
      target.fromBufferAttribute(position, index);
      const morphInfluences = this.morphTargetInfluences;
      if (morphPosition && morphInfluences) {
        _morphA.set(0, 0, 0);
        for (let i = 0, il = morphPosition.length; i < il; i++) {
          const influence = morphInfluences[i];
          const morphAttribute = morphPosition[i];
          if (influence === 0)
            continue;
          _tempA.fromBufferAttribute(morphAttribute, index);
          if (morphTargetsRelative) {
            _morphA.addScaledVector(_tempA, influence);
          } else {
            _morphA.addScaledVector(_tempA.sub(target), influence);
          }
        }
        target.add(_morphA);
      }
      return target;
    }
    raycast(raycaster, intersects) {
      const geometry = this.geometry;
      const material = this.material;
      const matrixWorld = this.matrixWorld;
      if (material === void 0)
        return;
      if (geometry.boundingSphere === null)
        geometry.computeBoundingSphere();
      _sphere$4.copy(geometry.boundingSphere);
      _sphere$4.applyMatrix4(matrixWorld);
      _ray$2.copy(raycaster.ray).recast(raycaster.near);
      if (_sphere$4.containsPoint(_ray$2.origin) === false) {
        if (_ray$2.intersectSphere(_sphere$4, _sphereHitAt) === null)
          return;
        if (_ray$2.origin.distanceToSquared(_sphereHitAt) > (raycaster.far - raycaster.near) ** 2)
          return;
      }
      _inverseMatrix$2.copy(matrixWorld).invert();
      _ray$2.copy(raycaster.ray).applyMatrix4(_inverseMatrix$2);
      if (geometry.boundingBox !== null) {
        if (_ray$2.intersectsBox(geometry.boundingBox) === false)
          return;
      }
      this._computeIntersections(raycaster, intersects);
    }
    _computeIntersections(raycaster, intersects) {
      let intersection;
      const geometry = this.geometry;
      const material = this.material;
      const index = geometry.index;
      const position = geometry.attributes.position;
      const uv = geometry.attributes.uv;
      const uv1 = geometry.attributes.uv1;
      const normal = geometry.attributes.normal;
      const groups = geometry.groups;
      const drawRange = geometry.drawRange;
      if (index !== null) {
        if (Array.isArray(material)) {
          for (let i = 0, il = groups.length; i < il; i++) {
            const group = groups[i];
            const groupMaterial = material[group.materialIndex];
            const start = Math.max(group.start, drawRange.start);
            const end = Math.min(index.count, Math.min(group.start + group.count, drawRange.start + drawRange.count));
            for (let j = start, jl = end; j < jl; j += 3) {
              const a = index.getX(j);
              const b = index.getX(j + 1);
              const c = index.getX(j + 2);
              intersection = checkGeometryIntersection(this, groupMaterial, raycaster, _ray$2, uv, uv1, normal, a, b, c);
              if (intersection) {
                intersection.faceIndex = Math.floor(j / 3);
                intersection.face.materialIndex = group.materialIndex;
                intersects.push(intersection);
              }
            }
          }
        } else {
          const start = Math.max(0, drawRange.start);
          const end = Math.min(index.count, drawRange.start + drawRange.count);
          for (let i = start, il = end; i < il; i += 3) {
            const a = index.getX(i);
            const b = index.getX(i + 1);
            const c = index.getX(i + 2);
            intersection = checkGeometryIntersection(this, material, raycaster, _ray$2, uv, uv1, normal, a, b, c);
            if (intersection) {
              intersection.faceIndex = Math.floor(i / 3);
              intersects.push(intersection);
            }
          }
        }
      } else if (position !== void 0) {
        if (Array.isArray(material)) {
          for (let i = 0, il = groups.length; i < il; i++) {
            const group = groups[i];
            const groupMaterial = material[group.materialIndex];
            const start = Math.max(group.start, drawRange.start);
            const end = Math.min(position.count, Math.min(group.start + group.count, drawRange.start + drawRange.count));
            for (let j = start, jl = end; j < jl; j += 3) {
              const a = j;
              const b = j + 1;
              const c = j + 2;
              intersection = checkGeometryIntersection(this, groupMaterial, raycaster, _ray$2, uv, uv1, normal, a, b, c);
              if (intersection) {
                intersection.faceIndex = Math.floor(j / 3);
                intersection.face.materialIndex = group.materialIndex;
                intersects.push(intersection);
              }
            }
          }
        } else {
          const start = Math.max(0, drawRange.start);
          const end = Math.min(position.count, drawRange.start + drawRange.count);
          for (let i = start, il = end; i < il; i += 3) {
            const a = i;
            const b = i + 1;
            const c = i + 2;
            intersection = checkGeometryIntersection(this, material, raycaster, _ray$2, uv, uv1, normal, a, b, c);
            if (intersection) {
              intersection.faceIndex = Math.floor(i / 3);
              intersects.push(intersection);
            }
          }
        }
      }
    }
  }
  function checkIntersection(object, material, raycaster, ray, pA, pB, pC, point) {
    let intersect;
    if (material.side === BackSide) {
      intersect = ray.intersectTriangle(pC, pB, pA, true, point);
    } else {
      intersect = ray.intersectTriangle(pA, pB, pC, material.side === FrontSide, point);
    }
    if (intersect === null)
      return null;
    _intersectionPointWorld.copy(point);
    _intersectionPointWorld.applyMatrix4(object.matrixWorld);
    const distance = raycaster.ray.origin.distanceTo(_intersectionPointWorld);
    if (distance < raycaster.near || distance > raycaster.far)
      return null;
    return {
      distance,
      point: _intersectionPointWorld.clone(),
      object
    };
  }
  function checkGeometryIntersection(object, material, raycaster, ray, uv, uv1, normal, a, b, c) {
    object.getVertexPosition(a, _vA$1);
    object.getVertexPosition(b, _vB$1);
    object.getVertexPosition(c, _vC$1);
    const intersection = checkIntersection(object, material, raycaster, ray, _vA$1, _vB$1, _vC$1, _intersectionPoint);
    if (intersection) {
      if (uv) {
        _uvA$1.fromBufferAttribute(uv, a);
        _uvB$1.fromBufferAttribute(uv, b);
        _uvC$1.fromBufferAttribute(uv, c);
        intersection.uv = Triangle.getInterpolation(_intersectionPoint, _vA$1, _vB$1, _vC$1, _uvA$1, _uvB$1, _uvC$1, new Vector2());
      }
      if (uv1) {
        _uvA$1.fromBufferAttribute(uv1, a);
        _uvB$1.fromBufferAttribute(uv1, b);
        _uvC$1.fromBufferAttribute(uv1, c);
        intersection.uv1 = Triangle.getInterpolation(_intersectionPoint, _vA$1, _vB$1, _vC$1, _uvA$1, _uvB$1, _uvC$1, new Vector2());
        intersection.uv2 = intersection.uv1;
      }
      if (normal) {
        _normalA.fromBufferAttribute(normal, a);
        _normalB.fromBufferAttribute(normal, b);
        _normalC.fromBufferAttribute(normal, c);
        intersection.normal = Triangle.getInterpolation(_intersectionPoint, _vA$1, _vB$1, _vC$1, _normalA, _normalB, _normalC, new Vector3());
        if (intersection.normal.dot(ray.direction) > 0) {
          intersection.normal.multiplyScalar(-1);
        }
      }
      const face = {
        a,
        b,
        c,
        normal: new Vector3(),
        materialIndex: 0
      };
      Triangle.getNormal(_vA$1, _vB$1, _vC$1, face.normal);
      intersection.face = face;
    }
    return intersection;
  }
  class PolyhedronGeometry extends BufferGeometry {
    constructor(vertices = [], indices = [], radius = 1, detail = 0) {
      super();
      this.type = "PolyhedronGeometry";
      this.parameters = {
        vertices,
        indices,
        radius,
        detail
      };
      const vertexBuffer = [];
      const uvBuffer = [];
      subdivide(detail);
      applyRadius(radius);
      generateUVs();
      this.setAttribute("position", new Float32BufferAttribute(vertexBuffer, 3));
      this.setAttribute("normal", new Float32BufferAttribute(vertexBuffer.slice(), 3));
      this.setAttribute("uv", new Float32BufferAttribute(uvBuffer, 2));
      if (detail === 0) {
        this.computeVertexNormals();
      } else {
        this.normalizeNormals();
      }
      function subdivide(detail2) {
        const a = new Vector3();
        const b = new Vector3();
        const c = new Vector3();
        for (let i = 0; i < indices.length; i += 3) {
          getVertexByIndex(indices[i + 0], a);
          getVertexByIndex(indices[i + 1], b);
          getVertexByIndex(indices[i + 2], c);
          subdivideFace(a, b, c, detail2);
        }
      }
      function subdivideFace(a, b, c, detail2) {
        const cols = detail2 + 1;
        const v = [];
        for (let i = 0; i <= cols; i++) {
          v[i] = [];
          const aj = a.clone().lerp(c, i / cols);
          const bj = b.clone().lerp(c, i / cols);
          const rows = cols - i;
          for (let j = 0; j <= rows; j++) {
            if (j === 0 && i === cols) {
              v[i][j] = aj;
            } else {
              v[i][j] = aj.clone().lerp(bj, j / rows);
            }
          }
        }
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < 2 * (cols - i) - 1; j++) {
            const k = Math.floor(j / 2);
            if (j % 2 === 0) {
              pushVertex(v[i][k + 1]);
              pushVertex(v[i + 1][k]);
              pushVertex(v[i][k]);
            } else {
              pushVertex(v[i][k + 1]);
              pushVertex(v[i + 1][k + 1]);
              pushVertex(v[i + 1][k]);
            }
          }
        }
      }
      function applyRadius(radius2) {
        const vertex = new Vector3();
        for (let i = 0; i < vertexBuffer.length; i += 3) {
          vertex.x = vertexBuffer[i + 0];
          vertex.y = vertexBuffer[i + 1];
          vertex.z = vertexBuffer[i + 2];
          vertex.normalize().multiplyScalar(radius2);
          vertexBuffer[i + 0] = vertex.x;
          vertexBuffer[i + 1] = vertex.y;
          vertexBuffer[i + 2] = vertex.z;
        }
      }
      function generateUVs() {
        const vertex = new Vector3();
        for (let i = 0; i < vertexBuffer.length; i += 3) {
          vertex.x = vertexBuffer[i + 0];
          vertex.y = vertexBuffer[i + 1];
          vertex.z = vertexBuffer[i + 2];
          const u = azimuth(vertex) / 2 / Math.PI + 0.5;
          const v = inclination(vertex) / Math.PI + 0.5;
          uvBuffer.push(u, 1 - v);
        }
        correctUVs();
        correctSeam();
      }
      function correctSeam() {
        for (let i = 0; i < uvBuffer.length; i += 6) {
          const x0 = uvBuffer[i + 0];
          const x1 = uvBuffer[i + 2];
          const x2 = uvBuffer[i + 4];
          const max = Math.max(x0, x1, x2);
          const min = Math.min(x0, x1, x2);
          if (max > 0.9 && min < 0.1) {
            if (x0 < 0.2)
              uvBuffer[i + 0] += 1;
            if (x1 < 0.2)
              uvBuffer[i + 2] += 1;
            if (x2 < 0.2)
              uvBuffer[i + 4] += 1;
          }
        }
      }
      function pushVertex(vertex) {
        vertexBuffer.push(vertex.x, vertex.y, vertex.z);
      }
      function getVertexByIndex(index, vertex) {
        const stride = index * 3;
        vertex.x = vertices[stride + 0];
        vertex.y = vertices[stride + 1];
        vertex.z = vertices[stride + 2];
      }
      function correctUVs() {
        const a = new Vector3();
        const b = new Vector3();
        const c = new Vector3();
        const centroid = new Vector3();
        const uvA = new Vector2();
        const uvB = new Vector2();
        const uvC = new Vector2();
        for (let i = 0, j = 0; i < vertexBuffer.length; i += 9, j += 6) {
          a.set(vertexBuffer[i + 0], vertexBuffer[i + 1], vertexBuffer[i + 2]);
          b.set(vertexBuffer[i + 3], vertexBuffer[i + 4], vertexBuffer[i + 5]);
          c.set(vertexBuffer[i + 6], vertexBuffer[i + 7], vertexBuffer[i + 8]);
          uvA.set(uvBuffer[j + 0], uvBuffer[j + 1]);
          uvB.set(uvBuffer[j + 2], uvBuffer[j + 3]);
          uvC.set(uvBuffer[j + 4], uvBuffer[j + 5]);
          centroid.copy(a).add(b).add(c).divideScalar(3);
          const azi = azimuth(centroid);
          correctUV(uvA, j + 0, a, azi);
          correctUV(uvB, j + 2, b, azi);
          correctUV(uvC, j + 4, c, azi);
        }
      }
      function correctUV(uv, stride, vector, azimuth2) {
        if (azimuth2 < 0 && uv.x === 1) {
          uvBuffer[stride] = uv.x - 1;
        }
        if (vector.x === 0 && vector.z === 0) {
          uvBuffer[stride] = azimuth2 / 2 / Math.PI + 0.5;
        }
      }
      function azimuth(vector) {
        return Math.atan2(vector.z, -vector.x);
      }
      function inclination(vector) {
        return Math.atan2(-vector.y, Math.sqrt(vector.x * vector.x + vector.z * vector.z));
      }
    }
    copy(source) {
      super.copy(source);
      this.parameters = Object.assign({}, source.parameters);
      return this;
    }
    static fromJSON(data) {
      return new PolyhedronGeometry(data.vertices, data.indices, data.radius, data.details);
    }
  }
  class IcosahedronGeometry extends PolyhedronGeometry {
    constructor(radius = 1, detail = 0) {
      const t = (1 + Math.sqrt(5)) / 2;
      const vertices = [
        -1,
        t,
        0,
        1,
        t,
        0,
        -1,
        -t,
        0,
        1,
        -t,
        0,
        0,
        -1,
        t,
        0,
        1,
        t,
        0,
        -1,
        -t,
        0,
        1,
        -t,
        t,
        0,
        -1,
        t,
        0,
        1,
        -t,
        0,
        -1,
        -t,
        0,
        1
      ];
      const indices = [
        0,
        11,
        5,
        0,
        5,
        1,
        0,
        1,
        7,
        0,
        7,
        10,
        0,
        10,
        11,
        1,
        5,
        9,
        5,
        11,
        4,
        11,
        10,
        2,
        10,
        7,
        6,
        7,
        1,
        8,
        3,
        9,
        4,
        3,
        4,
        2,
        3,
        2,
        6,
        3,
        6,
        8,
        3,
        8,
        9,
        4,
        9,
        5,
        2,
        4,
        11,
        6,
        2,
        10,
        8,
        6,
        7,
        9,
        8,
        1
      ];
      super(vertices, indices, radius, detail);
      this.type = "IcosahedronGeometry";
      this.parameters = {
        radius,
        detail
      };
    }
    static fromJSON(data) {
      return new IcosahedronGeometry(data.radius, data.detail);
    }
  }
  class MeshStandardMaterial extends Material {
    constructor(parameters) {
      super();
      this.isMeshStandardMaterial = true;
      this.defines = { "STANDARD": "" };
      this.type = "MeshStandardMaterial";
      this.color = new Color(16777215);
      this.roughness = 1;
      this.metalness = 0;
      this.map = null;
      this.lightMap = null;
      this.lightMapIntensity = 1;
      this.aoMap = null;
      this.aoMapIntensity = 1;
      this.emissive = new Color(0);
      this.emissiveIntensity = 1;
      this.emissiveMap = null;
      this.bumpMap = null;
      this.bumpScale = 1;
      this.normalMap = null;
      this.normalMapType = TangentSpaceNormalMap;
      this.normalScale = new Vector2(1, 1);
      this.displacementMap = null;
      this.displacementScale = 1;
      this.displacementBias = 0;
      this.roughnessMap = null;
      this.metalnessMap = null;
      this.alphaMap = null;
      this.envMap = null;
      this.envMapIntensity = 1;
      this.wireframe = false;
      this.wireframeLinewidth = 1;
      this.wireframeLinecap = "round";
      this.wireframeLinejoin = "round";
      this.flatShading = false;
      this.fog = true;
      this.setValues(parameters);
    }
    copy(source) {
      super.copy(source);
      this.defines = { "STANDARD": "" };
      this.color.copy(source.color);
      this.roughness = source.roughness;
      this.metalness = source.metalness;
      this.map = source.map;
      this.lightMap = source.lightMap;
      this.lightMapIntensity = source.lightMapIntensity;
      this.aoMap = source.aoMap;
      this.aoMapIntensity = source.aoMapIntensity;
      this.emissive.copy(source.emissive);
      this.emissiveMap = source.emissiveMap;
      this.emissiveIntensity = source.emissiveIntensity;
      this.bumpMap = source.bumpMap;
      this.bumpScale = source.bumpScale;
      this.normalMap = source.normalMap;
      this.normalMapType = source.normalMapType;
      this.normalScale.copy(source.normalScale);
      this.displacementMap = source.displacementMap;
      this.displacementScale = source.displacementScale;
      this.displacementBias = source.displacementBias;
      this.roughnessMap = source.roughnessMap;
      this.metalnessMap = source.metalnessMap;
      this.alphaMap = source.alphaMap;
      this.envMap = source.envMap;
      this.envMapIntensity = source.envMapIntensity;
      this.wireframe = source.wireframe;
      this.wireframeLinewidth = source.wireframeLinewidth;
      this.wireframeLinecap = source.wireframeLinecap;
      this.wireframeLinejoin = source.wireframeLinejoin;
      this.flatShading = source.flatShading;
      this.fog = source.fog;
      return this;
    }
  }
  const _RESERVED_CHARS_RE = "\\[\\]\\.:\\/";
  "[^" + _RESERVED_CHARS_RE.replace("\\.", "") + "]";
  if (typeof __THREE_DEVTOOLS__ !== "undefined") {
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
      revision: REVISION
    } }));
  }
  if (typeof window !== "undefined") {
    if (window.__THREE__) {
      console.warn("WARNING: Multiple instances of Three.js being imported.");
    } else {
      window.__THREE__ = REVISION;
    }
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  /*!
   * GSAP 3.9.1
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  }, _defaults = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  }, _suppressOverwrites, _bigNum$1 = 1e8, _tinyNum = 1 / _bigNum$1, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString2(value) {
    return typeof value === "string";
  }, _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  }, _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  }, _isUndefined = function _isUndefined2(value) {
    return typeof value === "undefined";
  }, _isObject = function _isObject2(value) {
    return typeof value === "object";
  }, _isNotFalse = function _isNotFalse2(value) {
    return value !== false;
  }, _windowExists$1 = function _windowExists2() {
    return typeof window !== "undefined";
  }, _isFuncOrString = function _isFuncOrString2(value) {
    return _isFunction(value) || _isString(value);
  }, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
  }, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i, _globalTimeline, _win$1, _coreInitted, _doc$1, _globals = {}, _installScope = {}, _coreReady, _install = function _install2(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  }, _missingPlugin = function _missingPlugin2(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  }, _warn = function _warn2(message, suppress) {
    return !suppress && console.warn(message);
  }, _addGlobal = function _addGlobal2(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  }, _emptyFunc = function _emptyFunc2() {
    return 0;
  }, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness2(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i = _harnessPlugins.length;
      while (i-- && !_harnessPlugins[i].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }
    return targets;
  }, _getCache = function _getCache2(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  }, _getProperty = function _getProperty2(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  }, _forEachName = function _forEachName2(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  }, _round = function _round2(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  }, _roundPrecise = function _roundPrecise2(value) {
    return Math.round(value * 1e7) / 1e7 || 0;
  }, _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
    var l = toFind.length, i = 0;
    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
    }
    return i < l;
  }, _lazyRender = function _lazyRender2() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  }, _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
    _lazyTweens.length && _lazyRender();
    animation.render(time, suppressEvents, force);
    _lazyTweens.length && _lazyRender();
  }, _numericIfPossible = function _numericIfPossible2(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  }, _passThrough = function _passThrough2(p) {
    return p;
  }, _setDefaults = function _setDefaults2(obj, defaults) {
    for (var p in defaults) {
      p in obj || (obj[p] = defaults[p]);
    }
    return obj;
  }, _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
    return function(obj, defaults) {
      for (var p in defaults) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
      }
    };
  }, _merge = function _merge2(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }
    return base;
  }, _mergeDeep = function _mergeDeep2(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
  }, _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy = {}, p;
    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }
    return copy;
  }, _inheritDefaults = function _inheritDefaults2(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  }, _arraysMatch = function _arraysMatch2(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while (match && i-- && a1[i] === a2[i]) {
    }
    return i < 0;
  }, _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t;
    if (sortBy) {
      t = child[sortBy];
      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  }, _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  }, _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
    child._act = 0;
  }, _uncache = function _uncache2(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  }, _recacheAncestors = function _recacheAncestors2(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  }, _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
  }, _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  }, _animationCycle = function _animationCycle2(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  }, _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  }, _setEnd = function _setEnd2(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  }, _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation);
    }
    return animation;
  }, _postAddChecks = function _postAddChecks2(timeline, child) {
    var t;
    if (child._time || child._initted && !child._dur) {
      t = _parentToChildTotalTime(timeline.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }
    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
      if (timeline._dur < timeline.duration()) {
        t = timeline;
        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }
      timeline._zTime = -_tinyNum;
    }
  }, _addToTimeline = function _addToTimeline2(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || _postAddChecks(timeline, child);
    return timeline;
  }, _scrollTrigger = function _scrollTrigger2(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  }, _attemptInitTween = function _attemptInitTween2(tween, totalTime, force, suppressEvents) {
    _initTween(tween, totalTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [totalTime, suppressEvents];
      return 1;
    }
  }, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
  }, _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  }, _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  }, _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  }, _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  }, _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  }, _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  }, _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum$1 ? recent.endTime(false) : animation._dur, i, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  }, _createTweenType = function _createTweenType2(type, params, timeline) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;
    if (type) {
      irVars = vars;
      parent = timeline;
      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  }, _conditionalReturn = function _conditionalReturn2(value, func) {
    return value || value === 0 ? func(value) : func;
  }, _clamp = function _clamp2(min, max, value) {
    return value < min ? min : value > max ? max : value;
  }, getUnit = function getUnit2(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : value.substr(v.index + v[0].length);
  }, clamp = function clamp2(min, max, value) {
    return _conditionalReturn(value, function(v) {
      return _clamp(min, max, v);
    });
  }, _slice = [].slice, _isArrayLike = function _isArrayLike2(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win$1;
  }, _flatten = function _flatten2(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function(value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  }, toArray = function toArray2(value, scope, leaveStrings) {
    return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc$1).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  }, selector = function selector2(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc$1.createElement("div") : value);
    };
  }, shuffle = function shuffle2(a) {
    return a.sort(function() {
      return 0.5 - Math.random();
    });
  }, distribute = function distribute2(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
      each: v
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: 0.5,
        edges: 0.5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function(i, target, a) {
      var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum$1])[1];
        if (!wrapAt) {
          max = -_bigNum$1;
          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
          }
          wrapAt--;
        }
        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
        originY = wrapAt === _bigNum$1 ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum$1;
        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }
      l = (distances[i] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  }, _roundModifier = function _roundModifier2(v) {
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function(raw) {
      var n = Math.round(parseFloat(raw) / v) * v * p;
      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  }, snap = function snap2(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum$1;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum$1, closest = 0, i = snapTo.length, dx, dy;
      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  }, random = function random2(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  }, pipe = function pipe2() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function(value) {
      return functions.reduce(function(v, f) {
        return f(v);
      }, value);
    };
  }, unitize = function unitize2(func, unit) {
    return function(value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  }, normalize = function normalize2(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  }, _wrapArray = function _wrapArray2(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
      return a[~~wrapper(index)];
    });
  }, wrap = function wrap2(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
      return (range + (value2 - min) % range) % range + min;
    });
  }, wrapYoyo = function wrapYoyo2(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
      value2 = (total + (value2 - min) % total) % total || 0;
      return min + (value2 > range ? total - value2 : value2);
    });
  }, _replaceRandom = function _replaceRandom2(value) {
    var prev = 0, s = "", i, nums, end, isArray;
    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
  }, mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value2) {
      return outMin + ((value2 - inMin) / inRange * outRange || 0);
    });
  }, interpolate = function interpolate2(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p2) {
      return (1 - p2) * start + p2 * end;
    };
    if (!func) {
      var isString = _isString(start), master = {}, p, i, interpolators, l, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;
        for (i = 1; i < l; i++) {
          interpolators.push(interpolate2(start[i - 1], start[i]));
        }
        l--;
        func = function func2(p2) {
          p2 *= l;
          var i2 = Math.min(il, ~~p2);
          return interpolators[i2](p2 - i2);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func2(p2) {
          return _renderPropTweens(p2, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  }, _getLabelInDirection = function _getLabelInDirection2(timeline, fromTime, backward) {
    var labels = timeline.labels, min = _bigNum$1, p, distance, label;
    for (p in labels) {
      distance = labels[p] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }
    return label;
  }, _callback = function _callback2(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], params, scope;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    return params ? callback.apply(scope, params) : callback.call(scope);
  }, _interrupt = function _interrupt2(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(false);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  }, _quickTween, _createPlugin = function _createPlugin2(config) {
    config = !config.name && config["default"] || config;
    var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function() {
      this._props = [];
    } : config, instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    }, statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };
    _wake();
    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }
      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));
      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
      _plugins[Plugin.prop = name] = Plugin;
      if (config.targetTest) {
        _harnessPlugins.push(Plugin);
        _reservedProps[name] = 1;
      }
      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
    }
    _addGlobal(name, Plugin);
    config.register && config.register(gsap, Plugin, PropTween);
  }, _255 = 255, _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  }, _hue = function _hue2(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
  }, splitColor = function splitColor2(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }
      a[0] = ~~(h + 0.5);
      a[1] = ~~(s * 100 + 0.5);
      a[2] = ~~(l * 100 + 0.5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  }, _colorOrderData = function _colorOrderData2(v) {
    var values = [], c = [], i = -1;
    v.split(_colorExp).forEach(function(v2) {
      var a = v2.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  }, _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) {
      return s;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;
      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;
        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }
    return result + shell[l];
  }, _colorExp = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }
    return new RegExp(s + ")", "gi");
  }(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter2(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  }, _tickerActive, _ticker = function() {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick2(v) {
      var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
      elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1e3;
        _self.time = time = time / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id = _req(_tick2));
      if (dispatch) {
        for (_i = 0; _i < _listeners.length; _i++) {
          _listeners[_i](time, _delta, frame, v);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1e3 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists$1()) {
            _win$1 = _coreInitted = window;
            _doc$1 = _win$1.document || {};
            _globals.gsap = gsap;
            (_win$1.gsapVersions || (_win$1.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win$1.GreenSockGlobals || !_win$1.gsap && _win$1 || {});
            _raf = _win$1.requestAnimationFrame;
          }
          _id && _self.sleep();
          _req = _raf || function(f) {
            return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? _win$1.cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || 1 / _tinyNum;
        _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
      },
      fps: function fps(_fps) {
        _gap = 1e3 / (_fps || 240);
        _nextTime = _self.time * 1e3 + _gap;
      },
      add: function add(callback) {
        _listeners.indexOf(callback) < 0 && _listeners.push(callback);
        _wake();
      },
      remove: function remove(callback, i) {
        ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
      },
      _listeners
    };
    return _self;
  }(), _wake = function _wake2() {
    return !_tickerActive && _ticker.wake();
  }, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString2(value) {
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  }, _valueInParentheses = function _valueInParentheses2(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  }, _configEaseFromString = function _configEaseFromString2(name) {
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  }, _invertEase = function _invertEase2(ease) {
    return function(p) {
      return 1 - ease(1 - p);
    };
  }, _propagateYoyoEase = function _propagateYoyoEase2(timeline, isYoyo) {
    var child = timeline._first, ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase2(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase2(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  }, _parseEase = function _parseEase2(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  }, _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut2(p) {
        return 1 - easeIn(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut2(p) {
        return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }
    var ease = {
      easeIn,
      easeOut,
      easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });
    return ease;
  }, _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
    return function(p) {
      return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
    };
  }, _configElastic = function _configElastic2(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function(amplitude2, period2) {
      return _configElastic2(type, amplitude2, period2);
    };
    return ease;
  }, _configBack = function _configBack2(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut2(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot2) {
      return _configBack2(type, overshoot2);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function(p) {
      return Math.pow(p, power);
    } : function(p) {
      return p;
    }, function(p) {
      return 1 - Math.pow(1 - p, power);
    }, function(p) {
      return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });
  _insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
  });
  _insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function(p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
  });
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ function() {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent = this._dp;
      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent._dp || parent.parent || _postAddChecks(parent, this);
        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }
          parent = parent.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
      _setEnd(this);
      return this;
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (animation._ts || 1);
        animation = animation._dp;
      }
      return time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self2 = this;
      return new Promise(function(resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
          var _then = self2.then;
          self2.then = null;
          _isFunction(f) && (f = f(self2)) && (f.then || f === self2) && (self2.then = _then);
          resolve(f);
          self2.then = _then;
        };
        if (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0 || !self2._tTime && self2._ts < 0) {
          _resolve();
        } else {
          self2._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill() {
      _interrupt(this);
    };
    return Animation2;
  }();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = /* @__PURE__ */ function(_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : dur;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && time && !suppressEvents) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) {
          if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
            if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function(obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum$1;
      }
      var a = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a;
    };
    _proto2.getById = function getById(id) {
      var animations = this.getChildren(1, 1, 1), i = animations.length;
      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };
    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
      var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }
        child = child._next;
      }
      return a;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate() {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate();
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0, self2 = this, child = self2._last, prevStart = _bigNum$1, prev, start, parent;
      if (arguments.length) {
        return self2.timeScale((self2._repeat < 0 ? self2.duration() : self2.totalDuration()) / (self2.reversed() ? -value : value));
      }
      if (self2._dirty) {
        parent = self2.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self2._sort && child._ts && !self2._lock) {
            self2._lock = 1;
            _addToTimeline(self2, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent && !self2._dp || parent && parent.smoothChildTiming) {
              self2._start += start / self2._ts;
              self2._time -= start;
              self2._tTime -= start;
            }
            self2.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self2, self2 === _globalTimeline && self2._time > max ? self2._time : max, 1, 1);
        self2._dirty = 0;
      }
      return self2._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }
            child || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  }(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          s: startNum,
          c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  }, _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          end = pt;
        }
      }
    }
    if (parsedStart !== end) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  }, _processVars = function _processVars2(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {}, p;
    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy;
  }, _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;
        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }
    return plugin;
  }, _overwritingTween, _initTween = function _initTween2(tween, time) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards;
    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      prevStartAt && _removeFromParent(prevStartAt.render(-1, true));
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent,
          immediateRender: true,
          lazy: _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate,
          onUpdateParams,
          callbackScope,
          stagger: 0
        }, startAt)));
        time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true);
        if (immediateRender) {
          time > 0 && !autoRevert && (tween._startAt = 0);
          if (dur && time <= 0) {
            time && (tween._zTime = time);
            return;
          }
        } else if (autoRevert === false) {
          tween._startAt = 0;
        }
      } else if (runBackwards && dur) {
        if (prevStartAt) {
          !autoRevert && (tween._startAt = 0);
        } else {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            lazy: immediateRender && _isNotFalse(lazy),
            immediateRender,
            stagger: 0,
            parent
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p));
          time < 0 && tween._startAt.render(-1, true);
          tween._zTime = time;
          if (!immediateRender) {
            _initTween2(tween._startAt, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function(name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum$1, true, true);
  }, _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }
    return copy;
  }, _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function(value, i) {
        return a.push({
          t: i / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  }, _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  }, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", _staggerPropsToSkip = {};
  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
  });
  var Tween = /* @__PURE__ */ function(_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults || {}
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);
          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }
          for (i = 0; i < l; i++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));
          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0, a, kf, v;
          if (_isArray(keyframes)) {
            keyframes.forEach(function(frame) {
              return tl.to(parsedTargets, frame, ">");
            });
          } else {
            copy = {};
            for (p in keyframes) {
              p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
            }
            for (p in copy) {
              a = copy[p].sort(function(a2, b) {
                return a2.t - b.t;
              });
              time = 0;
              for (i = 0; i < a.length; i++) {
                kf = a[i];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                };
                v[p] = kf.v;
                tl.to(parsedTargets, v, time);
                time += v.duration;
              }
            }
            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent, _assertThisInitialized(_this3), position);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay));
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
        time = tTime;
        timeline = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted) {
            return this;
          }
          if (iteration !== prevIteration) {
            timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
            this._tTime = 0;
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        if (time && !prevTime && !suppressEvents) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate() {
      this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate();
      return _Animation2.prototype.invalidate.call(this);
    };
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};
          _forEachName(vars, function(name) {
            return p[name] = 1;
          });
          vars = p;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i = parsedTargets.length;
      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];
          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
            props = vars;
          }
          for (p in props) {
            pt = curLookup && curLookup[p];
            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  }(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property, value) {
    return target[property] = value;
  }, _setterFunc = function _setterFunc2(target, property, value) {
    return target[property](value);
  }, _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
    return target[property](data.fp, value);
  }, _setterAttribute = function _setterAttribute2(target, property, value) {
    return target.setAttribute(property, value);
  }, _getSetter = function _getSetter2(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  }, _renderPlain = function _renderPlain2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
  }, _renderBoolean = function _renderBoolean2(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  }, _renderComplexString = function _renderComplexString2(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) {
      s = data.b;
    } else if (ratio === 1 && data.e) {
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
        pt = pt._next;
      }
      s += data.c;
    }
    data.set(data.t, data.p, s, data);
  }, _renderPropTweens = function _renderPropTweens2(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  }, _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  }, _killPropTweensOf = function _killPropTweensOf2(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  }, _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  }, _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
    var pt = parent._pt, next, pt2, first, last;
    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  };
  var PropTween = /* @__PURE__ */ function() {
    function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween2.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween2;
  }();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function(config) {
        return _createPlugin(config);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property ? function(property2, unit2, uncache2) {
        return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function(t) {
          return gsap.quickSetter(t, property, unit);
        }), l = setters.length;
        return function(value) {
          var i = l;
          while (i--) {
            setters[i](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
        var p2 = new Plugin();
        _quickTween._pt = 0;
        p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p2.render(1, p2);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
      return Plugin ? setter : function(value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function(targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function(targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize,
      getUnit,
      clamp,
      splitColor,
      toArray,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  }, _addModifiers = function _addModifiers2(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for (p in modifiers) {
      i = targets.length;
      while (i--) {
        pt = tween._ptLookup[i][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  }, _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
    return {
      name,
      rawVars: 1,
      init: function init(target, vars, tween) {
        tween._onInit = function(tween2) {
          var temp, p;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function(name2) {
              return temp[name2] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween2, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt;
      for (p in vars) {
        pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
        pt && (pt.op = p);
        this._props.push(p);
      }
    }
  }, {
    name: "endArray",
    init: function init(target, value) {
      var i = value.length;
      while (i--) {
        this.add(target, i, target[i] || 0, value[i]);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.9.1";
  _coreReady = 1;
  _windowExists$1() && _wake();
  _easeMap.Power0;
  _easeMap.Power1;
  _easeMap.Power2;
  _easeMap.Power3;
  _easeMap.Power4;
  _easeMap.Linear;
  _easeMap.Quad;
  _easeMap.Cubic;
  _easeMap.Quart;
  _easeMap.Quint;
  _easeMap.Strong;
  _easeMap.Elastic;
  _easeMap.Back;
  _easeMap.SteppedEase;
  _easeMap.Bounce;
  _easeMap.Sine;
  _easeMap.Expo;
  _easeMap.Circ;
  /*!
   * CSSPlugin 3.9.1
   * https://greensock.com
   *
   * Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var _win, _doc, _docElement, _pluginInitted, _tempDiv, _recentSetterPlugin, _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  }, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(?:left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  }, _renderCSSProp = function _renderCSSProp2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  }, _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  }, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
  }, _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
  }, _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  }, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  }, _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
    return target.style[property] = value;
  }, _setterCSSProp = function _setterCSSProp2(target, property, value) {
    return target.style.setProperty(property, value);
  }, _setterTransform = function _setterTransform2(target, property, value) {
    return target._gsap[property] = value;
  }, _setterScale = function _setterScale2(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  }, _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  }, _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  }, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _supports3D, _createElement = function _createElement2(type, ns) {
    var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type);
    return e.style ? e : _doc.createElement(type);
  }, _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
  }, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i-- && !(_prefixes[i] + property in s)) {
    }
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  }, _initCore = function _initCore2() {
    if (_windowExists() && window.document) {
      _win = window;
      _doc = _win.document;
      _docElement = _doc.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _pluginInitted = 1;
    }
  }, _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack2;
      } catch (e) {
      }
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
  }, _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
    var i = attributesArray.length;
    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  }, _getBBox = function _getBBox2(target) {
    var bounds;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  }, _isSVG = function _isSVG2(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  }, _removeProperty = function _removeProperty2(target, property) {
    if (property) {
      var style2 = target.style;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style2.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style2.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style2.removeAttribute(property);
      }
    }
  }, _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  }, _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  }, _convertToUnit = function _convertToUnit2(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style2 = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style2[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc || !parent.appendChild) {
      parent = _doc.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) {
      return _round(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && (style2.position = _getComputedProperty(target, "position"));
      parent === target && (style2.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style2.position = "absolute";
      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  }, _get = function _get2(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  }, _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, relative, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }
    a = [start, end];
    _colorStringFilter(a);
    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
          if (relative) {
            endValue = endValue.substr(2);
          }
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            s: startNum,
            c: relative ? relative * endNum : endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  }, _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  }, _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  }, _renderClearProps = function _renderClearProps2(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style2 = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
      if (props === "all" || props === true) {
        style2.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;
        while (--i > -1) {
          prop = props[i];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          _parseTransform(target, 1);
          cache.uncache = 1;
        }
      }
    }
  }, _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
  }, _identity2DMatrix = [1, 0, 0, 1, 0, 0], _rotationalProperties = {}, _isNullTransform = function _isNullTransform2(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  }, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  }, _getMatrix = function _getMatrix2(target, force2D) {
    var cache = target._gsap || _getCache(target), style2 = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style2.display;
      style2.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style2.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  }, _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  }, _parseTransform = function _parseTransform2(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style2 = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin");
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }
        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style2[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  }, _firstTwoOnly = function _firstTwoOnly2(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  }, _addPxTranslate = function _addPxTranslate2(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  }, _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  }, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  }, _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  }, _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue, relative) {
    var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = relative ? endNum * relative : endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  }, _assign = function _assign2(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  }, _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style2 = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style2[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style2[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style2[_transformProp] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
      return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
      var a, vars;
      if (arguments.length < 4) {
        a = props.map(function(prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }
      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function(prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
      var props = this._props, style2 = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority;
      _pluginInitted || _initCore();
      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }
        endValue = vars[p];
        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style2, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          props.push(p);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              _addNonTweeningPT(this, style2, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }
          isTransformRelated = p in _transformProps;
          if (isTransformRelated) {
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style2, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? relative * endNum : endNum - cache.scaleY) || 0);
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                _addNonTweeningPT(this, style2, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, endValue, relative);
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p in style2)) {
            p = _checkPropPrefix(p) || p;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style2) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style2, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style2)) {
            if (p in target) {
              this.add(target, p, startValue || target[p], endValue, index, targets);
            } else {
              _missingPlugin(p, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, endValue);
          }
          props.push(p);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty,
      _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  (function(positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
      _transformProps[name] = 1;
    });
    _forEachName(rotation, function(name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function(name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    _config.units[name] = "px";
  });
  gsap.registerPlugin(CSSPlugin);
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
  gsapWithCSS.core.Tween;
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var tweakpane = { exports: {} };
  /*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */
  (function(module, exports) {
    (function(global2, factory) {
      factory(exports);
    })(commonjsGlobal, function(exports2) {
      class Semver {
        constructor(text) {
          const [core, prerelease] = text.split("-");
          const coreComps = core.split(".");
          this.major = parseInt(coreComps[0], 10);
          this.minor = parseInt(coreComps[1], 10);
          this.patch = parseInt(coreComps[2], 10);
          this.prerelease = prerelease !== null && prerelease !== void 0 ? prerelease : null;
        }
        toString() {
          const core = [this.major, this.minor, this.patch].join(".");
          return this.prerelease !== null ? [core, this.prerelease].join("-") : core;
        }
      }
      class BladeApi {
        constructor(controller) {
          this.controller_ = controller;
        }
        get element() {
          return this.controller_.view.element;
        }
        get disabled() {
          return this.controller_.viewProps.get("disabled");
        }
        set disabled(disabled) {
          this.controller_.viewProps.set("disabled", disabled);
        }
        get hidden() {
          return this.controller_.viewProps.get("hidden");
        }
        set hidden(hidden) {
          this.controller_.viewProps.set("hidden", hidden);
        }
        dispose() {
          this.controller_.viewProps.set("disposed", true);
        }
      }
      class TpEvent {
        constructor(target) {
          this.target = target;
        }
      }
      class TpChangeEvent extends TpEvent {
        constructor(target, value, presetKey, last) {
          super(target);
          this.value = value;
          this.presetKey = presetKey;
          this.last = last !== null && last !== void 0 ? last : true;
        }
      }
      class TpUpdateEvent extends TpEvent {
        constructor(target, value, presetKey) {
          super(target);
          this.value = value;
          this.presetKey = presetKey;
        }
      }
      class TpFoldEvent extends TpEvent {
        constructor(target, expanded) {
          super(target);
          this.expanded = expanded;
        }
      }
      class TpTabSelectEvent extends TpEvent {
        constructor(target, index) {
          super(target);
          this.index = index;
        }
      }
      function forceCast(v) {
        return v;
      }
      function isEmpty(value) {
        return value === null || value === void 0;
      }
      function deepEqualsArray(a1, a2) {
        if (a1.length !== a2.length) {
          return false;
        }
        for (let i = 0; i < a1.length; i++) {
          if (a1[i] !== a2[i]) {
            return false;
          }
        }
        return true;
      }
      function isPropertyWritable(obj, key) {
        let target = obj;
        do {
          const d = Object.getOwnPropertyDescriptor(target, key);
          if (d && (d.set !== void 0 || d.writable === true)) {
            return true;
          }
          target = Object.getPrototypeOf(target);
        } while (target !== null);
        return false;
      }
      const CREATE_MESSAGE_MAP = {
        alreadydisposed: () => "View has been already disposed",
        invalidparams: (context) => `Invalid parameters for '${context.name}'`,
        nomatchingcontroller: (context) => `No matching controller for '${context.key}'`,
        nomatchingview: (context) => `No matching view for '${JSON.stringify(context.params)}'`,
        notbindable: () => `Value is not bindable`,
        propertynotfound: (context) => `Property '${context.name}' not found`,
        shouldneverhappen: () => "This error should never happen"
      };
      class TpError {
        static alreadyDisposed() {
          return new TpError({ type: "alreadydisposed" });
        }
        static notBindable() {
          return new TpError({
            type: "notbindable"
          });
        }
        static propertyNotFound(name) {
          return new TpError({
            type: "propertynotfound",
            context: {
              name
            }
          });
        }
        static shouldNeverHappen() {
          return new TpError({ type: "shouldneverhappen" });
        }
        constructor(config) {
          var _a;
          this.message = (_a = CREATE_MESSAGE_MAP[config.type](forceCast(config.context))) !== null && _a !== void 0 ? _a : "Unexpected error";
          this.name = this.constructor.name;
          this.stack = new Error(this.message).stack;
          this.type = config.type;
        }
      }
      class BindingTarget {
        constructor(obj, key, opt_id) {
          this.obj_ = obj;
          this.key_ = key;
          this.presetKey_ = opt_id !== null && opt_id !== void 0 ? opt_id : key;
        }
        static isBindable(obj) {
          if (obj === null) {
            return false;
          }
          if (typeof obj !== "object" && typeof obj !== "function") {
            return false;
          }
          return true;
        }
        get key() {
          return this.key_;
        }
        get presetKey() {
          return this.presetKey_;
        }
        read() {
          return this.obj_[this.key_];
        }
        write(value) {
          this.obj_[this.key_] = value;
        }
        writeProperty(name, value) {
          const valueObj = this.read();
          if (!BindingTarget.isBindable(valueObj)) {
            throw TpError.notBindable();
          }
          if (!(name in valueObj)) {
            throw TpError.propertyNotFound(name);
          }
          valueObj[name] = value;
        }
      }
      class ButtonApi extends BladeApi {
        get label() {
          return this.controller_.props.get("label");
        }
        set label(label) {
          this.controller_.props.set("label", label);
        }
        get title() {
          var _a;
          return (_a = this.controller_.valueController.props.get("title")) !== null && _a !== void 0 ? _a : "";
        }
        set title(title) {
          this.controller_.valueController.props.set("title", title);
        }
        on(eventName, handler) {
          const bh = handler.bind(this);
          const emitter = this.controller_.valueController.emitter;
          emitter.on(eventName, () => {
            bh(new TpEvent(this));
          });
          return this;
        }
      }
      class Emitter {
        constructor() {
          this.observers_ = {};
        }
        on(eventName, handler) {
          let observers = this.observers_[eventName];
          if (!observers) {
            observers = this.observers_[eventName] = [];
          }
          observers.push({
            handler
          });
          return this;
        }
        off(eventName, handler) {
          const observers = this.observers_[eventName];
          if (observers) {
            this.observers_[eventName] = observers.filter((observer) => {
              return observer.handler !== handler;
            });
          }
          return this;
        }
        emit(eventName, event) {
          const observers = this.observers_[eventName];
          if (!observers) {
            return;
          }
          observers.forEach((observer) => {
            observer.handler(event);
          });
        }
      }
      const PREFIX = "tp";
      function ClassName(viewName) {
        const fn = (opt_elementName, opt_modifier) => {
          return [
            PREFIX,
            "-",
            viewName,
            "v",
            opt_elementName ? `_${opt_elementName}` : "",
            opt_modifier ? `-${opt_modifier}` : ""
          ].join("");
        };
        return fn;
      }
      function compose(h1, h2) {
        return (input) => h2(h1(input));
      }
      function extractValue(ev) {
        return ev.rawValue;
      }
      function bindValue(value, applyValue) {
        value.emitter.on("change", compose(extractValue, applyValue));
        applyValue(value.rawValue);
      }
      function bindValueMap(valueMap, key, applyValue) {
        bindValue(valueMap.value(key), applyValue);
      }
      function applyClass(elem, className2, active) {
        if (active) {
          elem.classList.add(className2);
        } else {
          elem.classList.remove(className2);
        }
      }
      function valueToClassName(elem, className2) {
        return (value) => {
          applyClass(elem, className2, value);
        };
      }
      function bindValueToTextContent(value, elem) {
        bindValue(value, (text) => {
          elem.textContent = text !== null && text !== void 0 ? text : "";
        });
      }
      const className$q = ClassName("btn");
      class ButtonView {
        constructor(doc, config) {
          this.element = doc.createElement("div");
          this.element.classList.add(className$q());
          config.viewProps.bindClassModifiers(this.element);
          const buttonElem = doc.createElement("button");
          buttonElem.classList.add(className$q("b"));
          config.viewProps.bindDisabled(buttonElem);
          this.element.appendChild(buttonElem);
          this.buttonElement = buttonElem;
          const titleElem = doc.createElement("div");
          titleElem.classList.add(className$q("t"));
          bindValueToTextContent(config.props.value("title"), titleElem);
          this.buttonElement.appendChild(titleElem);
        }
      }
      class ButtonController {
        constructor(doc, config) {
          this.emitter = new Emitter();
          this.onClick_ = this.onClick_.bind(this);
          this.props = config.props;
          this.viewProps = config.viewProps;
          this.view = new ButtonView(doc, {
            props: this.props,
            viewProps: this.viewProps
          });
          this.view.buttonElement.addEventListener("click", this.onClick_);
        }
        onClick_() {
          this.emitter.emit("click", {
            sender: this
          });
        }
      }
      class BoundValue {
        constructor(initialValue, config) {
          var _a;
          this.constraint_ = config === null || config === void 0 ? void 0 : config.constraint;
          this.equals_ = (_a = config === null || config === void 0 ? void 0 : config.equals) !== null && _a !== void 0 ? _a : (v1, v2) => v1 === v2;
          this.emitter = new Emitter();
          this.rawValue_ = initialValue;
        }
        get constraint() {
          return this.constraint_;
        }
        get rawValue() {
          return this.rawValue_;
        }
        set rawValue(rawValue) {
          this.setRawValue(rawValue, {
            forceEmit: false,
            last: true
          });
        }
        setRawValue(rawValue, options) {
          const opts = options !== null && options !== void 0 ? options : {
            forceEmit: false,
            last: true
          };
          const constrainedValue = this.constraint_ ? this.constraint_.constrain(rawValue) : rawValue;
          const prevValue = this.rawValue_;
          const changed = !this.equals_(prevValue, constrainedValue);
          if (!changed && !opts.forceEmit) {
            return;
          }
          this.emitter.emit("beforechange", {
            sender: this
          });
          this.rawValue_ = constrainedValue;
          this.emitter.emit("change", {
            options: opts,
            previousRawValue: prevValue,
            rawValue: constrainedValue,
            sender: this
          });
        }
      }
      class PrimitiveValue {
        constructor(initialValue) {
          this.emitter = new Emitter();
          this.value_ = initialValue;
        }
        get rawValue() {
          return this.value_;
        }
        set rawValue(value) {
          this.setRawValue(value, {
            forceEmit: false,
            last: true
          });
        }
        setRawValue(value, options) {
          const opts = options !== null && options !== void 0 ? options : {
            forceEmit: false,
            last: true
          };
          const prevValue = this.value_;
          if (prevValue === value && !opts.forceEmit) {
            return;
          }
          this.emitter.emit("beforechange", {
            sender: this
          });
          this.value_ = value;
          this.emitter.emit("change", {
            options: opts,
            previousRawValue: prevValue,
            rawValue: this.value_,
            sender: this
          });
        }
      }
      function createValue(initialValue, config) {
        const constraint = config === null || config === void 0 ? void 0 : config.constraint;
        const equals = config === null || config === void 0 ? void 0 : config.equals;
        if (!constraint && !equals) {
          return new PrimitiveValue(initialValue);
        }
        return new BoundValue(initialValue, config);
      }
      class ValueMap {
        constructor(valueMap) {
          this.emitter = new Emitter();
          this.valMap_ = valueMap;
          for (const key in this.valMap_) {
            const v = this.valMap_[key];
            v.emitter.on("change", () => {
              this.emitter.emit("change", {
                key,
                sender: this
              });
            });
          }
        }
        static createCore(initialValue) {
          const keys = Object.keys(initialValue);
          return keys.reduce((o, key) => {
            return Object.assign(o, {
              [key]: createValue(initialValue[key])
            });
          }, {});
        }
        static fromObject(initialValue) {
          const core = this.createCore(initialValue);
          return new ValueMap(core);
        }
        get(key) {
          return this.valMap_[key].rawValue;
        }
        set(key, value) {
          this.valMap_[key].rawValue = value;
        }
        value(key) {
          return this.valMap_[key];
        }
      }
      function parseObject(value, keyToParserMap) {
        const keys = Object.keys(keyToParserMap);
        const result = keys.reduce((tmp, key) => {
          if (tmp === void 0) {
            return void 0;
          }
          const parser = keyToParserMap[key];
          const result2 = parser(value[key]);
          return result2.succeeded ? Object.assign(Object.assign({}, tmp), { [key]: result2.value }) : void 0;
        }, {});
        return forceCast(result);
      }
      function parseArray(value, parseItem) {
        return value.reduce((tmp, item) => {
          if (tmp === void 0) {
            return void 0;
          }
          const result = parseItem(item);
          if (!result.succeeded || result.value === void 0) {
            return void 0;
          }
          return [...tmp, result.value];
        }, []);
      }
      function isObject(value) {
        if (value === null) {
          return false;
        }
        return typeof value === "object";
      }
      function createParamsParserBuilder(parse) {
        return (optional) => (v) => {
          if (!optional && v === void 0) {
            return {
              succeeded: false,
              value: void 0
            };
          }
          if (optional && v === void 0) {
            return {
              succeeded: true,
              value: void 0
            };
          }
          const result = parse(v);
          return result !== void 0 ? {
            succeeded: true,
            value: result
          } : {
            succeeded: false,
            value: void 0
          };
        };
      }
      function createParamsParserBuilders(optional) {
        return {
          custom: (parse) => createParamsParserBuilder(parse)(optional),
          boolean: createParamsParserBuilder((v) => typeof v === "boolean" ? v : void 0)(optional),
          number: createParamsParserBuilder((v) => typeof v === "number" ? v : void 0)(optional),
          string: createParamsParserBuilder((v) => typeof v === "string" ? v : void 0)(optional),
          function: createParamsParserBuilder((v) => typeof v === "function" ? v : void 0)(optional),
          constant: (value) => createParamsParserBuilder((v) => v === value ? value : void 0)(optional),
          raw: createParamsParserBuilder((v) => v)(optional),
          object: (keyToParserMap) => createParamsParserBuilder((v) => {
            if (!isObject(v)) {
              return void 0;
            }
            return parseObject(v, keyToParserMap);
          })(optional),
          array: (itemParser) => createParamsParserBuilder((v) => {
            if (!Array.isArray(v)) {
              return void 0;
            }
            return parseArray(v, itemParser);
          })(optional)
        };
      }
      const ParamsParsers = {
        optional: createParamsParserBuilders(true),
        required: createParamsParserBuilders(false)
      };
      function parseParams(value, keyToParserMap) {
        const result = ParamsParsers.required.object(keyToParserMap)(value);
        return result.succeeded ? result.value : void 0;
      }
      function warnMissing(info) {
        console.warn([
          `Missing '${info.key}' of ${info.target} in ${info.place}.`,
          "Please rebuild plugins with the latest core package."
        ].join(" "));
      }
      function disposeElement(elem) {
        if (elem && elem.parentElement) {
          elem.parentElement.removeChild(elem);
        }
        return null;
      }
      class ReadonlyValue {
        constructor(value) {
          this.value_ = value;
        }
        static create(value) {
          return [
            new ReadonlyValue(value),
            (rawValue, options) => {
              value.setRawValue(rawValue, options);
            }
          ];
        }
        get emitter() {
          return this.value_.emitter;
        }
        get rawValue() {
          return this.value_.rawValue;
        }
      }
      const className$p = ClassName("");
      function valueToModifier(elem, modifier) {
        return valueToClassName(elem, className$p(void 0, modifier));
      }
      class ViewProps extends ValueMap {
        constructor(valueMap) {
          var _a;
          super(valueMap);
          this.onDisabledChange_ = this.onDisabledChange_.bind(this);
          this.onParentChange_ = this.onParentChange_.bind(this);
          this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this);
          [this.globalDisabled_, this.setGlobalDisabled_] = ReadonlyValue.create(createValue(this.getGlobalDisabled_()));
          this.value("disabled").emitter.on("change", this.onDisabledChange_);
          this.value("parent").emitter.on("change", this.onParentChange_);
          (_a = this.get("parent")) === null || _a === void 0 ? void 0 : _a.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
        }
        static create(opt_initialValue) {
          var _a, _b, _c;
          const initialValue = opt_initialValue !== null && opt_initialValue !== void 0 ? opt_initialValue : {};
          return new ViewProps(ValueMap.createCore({
            disabled: (_a = initialValue.disabled) !== null && _a !== void 0 ? _a : false,
            disposed: false,
            hidden: (_b = initialValue.hidden) !== null && _b !== void 0 ? _b : false,
            parent: (_c = initialValue.parent) !== null && _c !== void 0 ? _c : null
          }));
        }
        get globalDisabled() {
          return this.globalDisabled_;
        }
        bindClassModifiers(elem) {
          bindValue(this.globalDisabled_, valueToModifier(elem, "disabled"));
          bindValueMap(this, "hidden", valueToModifier(elem, "hidden"));
        }
        bindDisabled(target) {
          bindValue(this.globalDisabled_, (disabled) => {
            target.disabled = disabled;
          });
        }
        bindTabIndex(elem) {
          bindValue(this.globalDisabled_, (disabled) => {
            elem.tabIndex = disabled ? -1 : 0;
          });
        }
        handleDispose(callback) {
          this.value("disposed").emitter.on("change", (disposed) => {
            if (disposed) {
              callback();
            }
          });
        }
        getGlobalDisabled_() {
          const parent = this.get("parent");
          const parentDisabled = parent ? parent.globalDisabled.rawValue : false;
          return parentDisabled || this.get("disabled");
        }
        updateGlobalDisabled_() {
          this.setGlobalDisabled_(this.getGlobalDisabled_());
        }
        onDisabledChange_() {
          this.updateGlobalDisabled_();
        }
        onParentGlobalDisabledChange_() {
          this.updateGlobalDisabled_();
        }
        onParentChange_(ev) {
          var _a;
          const prevParent = ev.previousRawValue;
          prevParent === null || prevParent === void 0 ? void 0 : prevParent.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_);
          (_a = this.get("parent")) === null || _a === void 0 ? void 0 : _a.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
          this.updateGlobalDisabled_();
        }
      }
      function getAllBladePositions() {
        return ["veryfirst", "first", "last", "verylast"];
      }
      const className$o = ClassName("");
      const POS_TO_CLASS_NAME_MAP = {
        veryfirst: "vfst",
        first: "fst",
        last: "lst",
        verylast: "vlst"
      };
      class BladeController {
        constructor(config) {
          this.parent_ = null;
          this.blade = config.blade;
          this.view = config.view;
          this.viewProps = config.viewProps;
          const elem = this.view.element;
          this.blade.value("positions").emitter.on("change", () => {
            getAllBladePositions().forEach((pos) => {
              elem.classList.remove(className$o(void 0, POS_TO_CLASS_NAME_MAP[pos]));
            });
            this.blade.get("positions").forEach((pos) => {
              elem.classList.add(className$o(void 0, POS_TO_CLASS_NAME_MAP[pos]));
            });
          });
          this.viewProps.handleDispose(() => {
            disposeElement(elem);
          });
        }
        get parent() {
          return this.parent_;
        }
        set parent(parent) {
          this.parent_ = parent;
          if (!("parent" in this.viewProps.valMap_)) {
            warnMissing({
              key: "parent",
              target: ViewProps.name,
              place: "BladeController.parent"
            });
            return;
          }
          this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null);
        }
      }
      const SVG_NS = "http://www.w3.org/2000/svg";
      function forceReflow(element) {
        element.offsetHeight;
      }
      function disableTransitionTemporarily(element, callback) {
        const t = element.style.transition;
        element.style.transition = "none";
        callback();
        element.style.transition = t;
      }
      function supportsTouch(doc) {
        return doc.ontouchstart !== void 0;
      }
      function getGlobalObject() {
        return globalThis;
      }
      function getWindowDocument() {
        const globalObj = forceCast(getGlobalObject());
        return globalObj.document;
      }
      function getCanvasContext(canvasElement) {
        const win = canvasElement.ownerDocument.defaultView;
        if (!win) {
          return null;
        }
        const isBrowser = "document" in win;
        return isBrowser ? canvasElement.getContext("2d", {
          willReadFrequently: true
        }) : null;
      }
      const ICON_ID_TO_INNER_HTML_MAP = {
        check: '<path d="M2 8l4 4l8 -8"/>',
        dropdown: '<path d="M5 7h6l-3 3 z"/>',
        p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'
      };
      function createSvgIconElement(document2, iconId) {
        const elem = document2.createElementNS(SVG_NS, "svg");
        elem.innerHTML = ICON_ID_TO_INNER_HTML_MAP[iconId];
        return elem;
      }
      function insertElementAt(parentElement, element, index) {
        parentElement.insertBefore(element, parentElement.children[index]);
      }
      function removeElement(element) {
        if (element.parentElement) {
          element.parentElement.removeChild(element);
        }
      }
      function removeChildElements(element) {
        while (element.children.length > 0) {
          element.removeChild(element.children[0]);
        }
      }
      function removeChildNodes(element) {
        while (element.childNodes.length > 0) {
          element.removeChild(element.childNodes[0]);
        }
      }
      function findNextTarget(ev) {
        if (ev.relatedTarget) {
          return forceCast(ev.relatedTarget);
        }
        if ("explicitOriginalTarget" in ev) {
          return ev.explicitOriginalTarget;
        }
        return null;
      }
      const className$n = ClassName("lbl");
      function createLabelNode(doc, label) {
        const frag = doc.createDocumentFragment();
        const lineNodes = label.split("\n").map((line) => {
          return doc.createTextNode(line);
        });
        lineNodes.forEach((lineNode, index) => {
          if (index > 0) {
            frag.appendChild(doc.createElement("br"));
          }
          frag.appendChild(lineNode);
        });
        return frag;
      }
      class LabelView {
        constructor(doc, config) {
          this.element = doc.createElement("div");
          this.element.classList.add(className$n());
          config.viewProps.bindClassModifiers(this.element);
          const labelElem = doc.createElement("div");
          labelElem.classList.add(className$n("l"));
          bindValueMap(config.props, "label", (value) => {
            if (isEmpty(value)) {
              this.element.classList.add(className$n(void 0, "nol"));
            } else {
              this.element.classList.remove(className$n(void 0, "nol"));
              removeChildNodes(labelElem);
              labelElem.appendChild(createLabelNode(doc, value));
            }
          });
          this.element.appendChild(labelElem);
          this.labelElement = labelElem;
          const valueElem = doc.createElement("div");
          valueElem.classList.add(className$n("v"));
          this.element.appendChild(valueElem);
          this.valueElement = valueElem;
        }
      }
      class LabelController extends BladeController {
        constructor(doc, config) {
          const viewProps = config.valueController.viewProps;
          super(Object.assign(Object.assign({}, config), { view: new LabelView(doc, {
            props: config.props,
            viewProps
          }), viewProps }));
          this.props = config.props;
          this.valueController = config.valueController;
          this.view.valueElement.appendChild(this.valueController.view.element);
        }
      }
      const ButtonBladePlugin = {
        id: "button",
        type: "blade",
        accept(params) {
          const p = ParamsParsers;
          const result = parseParams(params, {
            title: p.required.string,
            view: p.required.constant("button"),
            label: p.optional.string
          });
          return result ? { params: result } : null;
        },
        controller(args) {
          return new LabelController(args.document, {
            blade: args.blade,
            props: ValueMap.fromObject({
              label: args.params.label
            }),
            valueController: new ButtonController(args.document, {
              props: ValueMap.fromObject({
                title: args.params.title
              }),
              viewProps: args.viewProps
            })
          });
        },
        api(args) {
          if (!(args.controller instanceof LabelController)) {
            return null;
          }
          if (!(args.controller.valueController instanceof ButtonController)) {
            return null;
          }
          return new ButtonApi(args.controller);
        }
      };
      class ValueBladeController extends BladeController {
        constructor(config) {
          super(config);
          this.value = config.value;
        }
      }
      function createBlade() {
        return new ValueMap({
          positions: createValue([], {
            equals: deepEqualsArray
          })
        });
      }
      class Foldable extends ValueMap {
        constructor(valueMap) {
          super(valueMap);
        }
        static create(expanded) {
          const coreObj = {
            completed: true,
            expanded,
            expandedHeight: null,
            shouldFixHeight: false,
            temporaryExpanded: null
          };
          const core = ValueMap.createCore(coreObj);
          return new Foldable(core);
        }
        get styleExpanded() {
          var _a;
          return (_a = this.get("temporaryExpanded")) !== null && _a !== void 0 ? _a : this.get("expanded");
        }
        get styleHeight() {
          if (!this.styleExpanded) {
            return "0";
          }
          const exHeight = this.get("expandedHeight");
          if (this.get("shouldFixHeight") && !isEmpty(exHeight)) {
            return `${exHeight}px`;
          }
          return "auto";
        }
        bindExpandedClass(elem, expandedClassName) {
          const onExpand = () => {
            const expanded = this.styleExpanded;
            if (expanded) {
              elem.classList.add(expandedClassName);
            } else {
              elem.classList.remove(expandedClassName);
            }
          };
          bindValueMap(this, "expanded", onExpand);
          bindValueMap(this, "temporaryExpanded", onExpand);
        }
        cleanUpTransition() {
          this.set("shouldFixHeight", false);
          this.set("expandedHeight", null);
          this.set("completed", true);
        }
      }
      function computeExpandedFolderHeight(folder, containerElement) {
        let height = 0;
        disableTransitionTemporarily(containerElement, () => {
          folder.set("expandedHeight", null);
          folder.set("temporaryExpanded", true);
          forceReflow(containerElement);
          height = containerElement.clientHeight;
          folder.set("temporaryExpanded", null);
          forceReflow(containerElement);
        });
        return height;
      }
      function applyHeight(foldable, elem) {
        elem.style.height = foldable.styleHeight;
      }
      function bindFoldable(foldable, elem) {
        foldable.value("expanded").emitter.on("beforechange", () => {
          foldable.set("completed", false);
          if (isEmpty(foldable.get("expandedHeight"))) {
            const h = computeExpandedFolderHeight(foldable, elem);
            if (h > 0) {
              foldable.set("expandedHeight", h);
            }
          }
          foldable.set("shouldFixHeight", true);
          forceReflow(elem);
        });
        foldable.emitter.on("change", () => {
          applyHeight(foldable, elem);
        });
        applyHeight(foldable, elem);
        elem.addEventListener("transitionend", (ev) => {
          if (ev.propertyName !== "height") {
            return;
          }
          foldable.cleanUpTransition();
        });
      }
      class RackLikeApi extends BladeApi {
        constructor(controller, rackApi) {
          super(controller);
          this.rackApi_ = rackApi;
        }
      }
      function addButtonAsBlade(api, params) {
        return api.addBlade(Object.assign(Object.assign({}, params), { view: "button" }));
      }
      function addFolderAsBlade(api, params) {
        return api.addBlade(Object.assign(Object.assign({}, params), { view: "folder" }));
      }
      function addSeparatorAsBlade(api, opt_params) {
        const params = opt_params !== null && opt_params !== void 0 ? opt_params : {};
        return api.addBlade(Object.assign(Object.assign({}, params), { view: "separator" }));
      }
      function addTabAsBlade(api, params) {
        return api.addBlade(Object.assign(Object.assign({}, params), { view: "tab" }));
      }
      class NestedOrderedSet {
        constructor(extract) {
          this.emitter = new Emitter();
          this.items_ = [];
          this.cache_ = /* @__PURE__ */ new Set();
          this.onSubListAdd_ = this.onSubListAdd_.bind(this);
          this.onSubListRemove_ = this.onSubListRemove_.bind(this);
          this.extract_ = extract;
        }
        get items() {
          return this.items_;
        }
        allItems() {
          return Array.from(this.cache_);
        }
        find(callback) {
          for (const item of this.allItems()) {
            if (callback(item)) {
              return item;
            }
          }
          return null;
        }
        includes(item) {
          return this.cache_.has(item);
        }
        add(item, opt_index) {
          if (this.includes(item)) {
            throw TpError.shouldNeverHappen();
          }
          const index = opt_index !== void 0 ? opt_index : this.items_.length;
          this.items_.splice(index, 0, item);
          this.cache_.add(item);
          const subList = this.extract_(item);
          if (subList) {
            subList.emitter.on("add", this.onSubListAdd_);
            subList.emitter.on("remove", this.onSubListRemove_);
            subList.allItems().forEach((item2) => {
              this.cache_.add(item2);
            });
          }
          this.emitter.emit("add", {
            index,
            item,
            root: this,
            target: this
          });
        }
        remove(item) {
          const index = this.items_.indexOf(item);
          if (index < 0) {
            return;
          }
          this.items_.splice(index, 1);
          this.cache_.delete(item);
          const subList = this.extract_(item);
          if (subList) {
            subList.emitter.off("add", this.onSubListAdd_);
            subList.emitter.off("remove", this.onSubListRemove_);
          }
          this.emitter.emit("remove", {
            index,
            item,
            root: this,
            target: this
          });
        }
        onSubListAdd_(ev) {
          this.cache_.add(ev.item);
          this.emitter.emit("add", {
            index: ev.index,
            item: ev.item,
            root: this,
            target: ev.target
          });
        }
        onSubListRemove_(ev) {
          this.cache_.delete(ev.item);
          this.emitter.emit("remove", {
            index: ev.index,
            item: ev.item,
            root: this,
            target: ev.target
          });
        }
      }
      class InputBindingApi extends BladeApi {
        constructor(controller) {
          super(controller);
          this.onBindingChange_ = this.onBindingChange_.bind(this);
          this.emitter_ = new Emitter();
          this.controller_.binding.emitter.on("change", this.onBindingChange_);
        }
        get label() {
          return this.controller_.props.get("label");
        }
        set label(label) {
          this.controller_.props.set("label", label);
        }
        on(eventName, handler) {
          const bh = handler.bind(this);
          this.emitter_.on(eventName, (ev) => {
            bh(ev.event);
          });
          return this;
        }
        refresh() {
          this.controller_.binding.read();
        }
        onBindingChange_(ev) {
          const value = ev.sender.target.read();
          this.emitter_.emit("change", {
            event: new TpChangeEvent(this, forceCast(value), this.controller_.binding.target.presetKey, ev.options.last)
          });
        }
      }
      class InputBindingController extends LabelController {
        constructor(doc, config) {
          super(doc, config);
          this.binding = config.binding;
        }
      }
      class MonitorBindingApi extends BladeApi {
        constructor(controller) {
          super(controller);
          this.onBindingUpdate_ = this.onBindingUpdate_.bind(this);
          this.emitter_ = new Emitter();
          this.controller_.binding.emitter.on("update", this.onBindingUpdate_);
        }
        get label() {
          return this.controller_.props.get("label");
        }
        set label(label) {
          this.controller_.props.set("label", label);
        }
        on(eventName, handler) {
          const bh = handler.bind(this);
          this.emitter_.on(eventName, (ev) => {
            bh(ev.event);
          });
          return this;
        }
        refresh() {
          this.controller_.binding.read();
        }
        onBindingUpdate_(ev) {
          const value = ev.sender.target.read();
          this.emitter_.emit("update", {
            event: new TpUpdateEvent(this, forceCast(value), this.controller_.binding.target.presetKey)
          });
        }
      }
      class MonitorBindingController extends LabelController {
        constructor(doc, config) {
          super(doc, config);
          this.binding = config.binding;
          this.viewProps.bindDisabled(this.binding.ticker);
          this.viewProps.handleDispose(() => {
            this.binding.dispose();
          });
        }
      }
      function findSubBladeApiSet(api) {
        if (api instanceof RackApi) {
          return api["apiSet_"];
        }
        if (api instanceof RackLikeApi) {
          return api["rackApi_"]["apiSet_"];
        }
        return null;
      }
      function getApiByController(apiSet, controller) {
        const api = apiSet.find((api2) => api2.controller_ === controller);
        if (!api) {
          throw TpError.shouldNeverHappen();
        }
        return api;
      }
      function createBindingTarget(obj, key, opt_id) {
        if (!BindingTarget.isBindable(obj)) {
          throw TpError.notBindable();
        }
        return new BindingTarget(obj, key, opt_id);
      }
      class RackApi extends BladeApi {
        constructor(controller, pool) {
          super(controller);
          this.onRackAdd_ = this.onRackAdd_.bind(this);
          this.onRackRemove_ = this.onRackRemove_.bind(this);
          this.onRackInputChange_ = this.onRackInputChange_.bind(this);
          this.onRackMonitorUpdate_ = this.onRackMonitorUpdate_.bind(this);
          this.emitter_ = new Emitter();
          this.apiSet_ = new NestedOrderedSet(findSubBladeApiSet);
          this.pool_ = pool;
          const rack = this.controller_.rack;
          rack.emitter.on("add", this.onRackAdd_);
          rack.emitter.on("remove", this.onRackRemove_);
          rack.emitter.on("inputchange", this.onRackInputChange_);
          rack.emitter.on("monitorupdate", this.onRackMonitorUpdate_);
          rack.children.forEach((bc) => {
            this.setUpApi_(bc);
          });
        }
        get children() {
          return this.controller_.rack.children.map((bc) => getApiByController(this.apiSet_, bc));
        }
        addInput(object, key, opt_params) {
          const params = opt_params !== null && opt_params !== void 0 ? opt_params : {};
          const doc = this.controller_.view.element.ownerDocument;
          const bc = this.pool_.createInput(doc, createBindingTarget(object, key, params.presetKey), params);
          const api = new InputBindingApi(bc);
          return this.add(api, params.index);
        }
        addMonitor(object, key, opt_params) {
          const params = opt_params !== null && opt_params !== void 0 ? opt_params : {};
          const doc = this.controller_.view.element.ownerDocument;
          const bc = this.pool_.createMonitor(doc, createBindingTarget(object, key), params);
          const api = new MonitorBindingApi(bc);
          return forceCast(this.add(api, params.index));
        }
        addFolder(params) {
          return addFolderAsBlade(this, params);
        }
        addButton(params) {
          return addButtonAsBlade(this, params);
        }
        addSeparator(opt_params) {
          return addSeparatorAsBlade(this, opt_params);
        }
        addTab(params) {
          return addTabAsBlade(this, params);
        }
        add(api, opt_index) {
          this.controller_.rack.add(api.controller_, opt_index);
          const gapi = this.apiSet_.find((a) => a.controller_ === api.controller_);
          if (gapi) {
            this.apiSet_.remove(gapi);
          }
          this.apiSet_.add(api);
          return api;
        }
        remove(api) {
          this.controller_.rack.remove(api.controller_);
        }
        addBlade(params) {
          const doc = this.controller_.view.element.ownerDocument;
          const bc = this.pool_.createBlade(doc, params);
          const api = this.pool_.createBladeApi(bc);
          return this.add(api, params.index);
        }
        on(eventName, handler) {
          const bh = handler.bind(this);
          this.emitter_.on(eventName, (ev) => {
            bh(ev.event);
          });
          return this;
        }
        setUpApi_(bc) {
          const api = this.apiSet_.find((api2) => api2.controller_ === bc);
          if (!api) {
            this.apiSet_.add(this.pool_.createBladeApi(bc));
          }
        }
        onRackAdd_(ev) {
          this.setUpApi_(ev.bladeController);
        }
        onRackRemove_(ev) {
          if (ev.isRoot) {
            const api = getApiByController(this.apiSet_, ev.bladeController);
            this.apiSet_.remove(api);
          }
        }
        onRackInputChange_(ev) {
          const bc = ev.bladeController;
          if (bc instanceof InputBindingController) {
            const api = getApiByController(this.apiSet_, bc);
            const binding = bc.binding;
            this.emitter_.emit("change", {
              event: new TpChangeEvent(api, forceCast(binding.target.read()), binding.target.presetKey, ev.options.last)
            });
          } else if (bc instanceof ValueBladeController) {
            const api = getApiByController(this.apiSet_, bc);
            this.emitter_.emit("change", {
              event: new TpChangeEvent(api, bc.value.rawValue, void 0, ev.options.last)
            });
          }
        }
        onRackMonitorUpdate_(ev) {
          if (!(ev.bladeController instanceof MonitorBindingController)) {
            throw TpError.shouldNeverHappen();
          }
          const api = getApiByController(this.apiSet_, ev.bladeController);
          const binding = ev.bladeController.binding;
          this.emitter_.emit("update", {
            event: new TpUpdateEvent(api, forceCast(binding.target.read()), binding.target.presetKey)
          });
        }
      }
      class FolderApi extends RackLikeApi {
        constructor(controller, pool) {
          super(controller, new RackApi(controller.rackController, pool));
          this.emitter_ = new Emitter();
          this.controller_.foldable.value("expanded").emitter.on("change", (ev) => {
            this.emitter_.emit("fold", {
              event: new TpFoldEvent(this, ev.sender.rawValue)
            });
          });
          this.rackApi_.on("change", (ev) => {
            this.emitter_.emit("change", {
              event: ev
            });
          });
          this.rackApi_.on("update", (ev) => {
            this.emitter_.emit("update", {
              event: ev
            });
          });
        }
        get expanded() {
          return this.controller_.foldable.get("expanded");
        }
        set expanded(expanded) {
          this.controller_.foldable.set("expanded", expanded);
        }
        get title() {
          return this.controller_.props.get("title");
        }
        set title(title) {
          this.controller_.props.set("title", title);
        }
        get children() {
          return this.rackApi_.children;
        }
        addInput(object, key, opt_params) {
          return this.rackApi_.addInput(object, key, opt_params);
        }
        addMonitor(object, key, opt_params) {
          return this.rackApi_.addMonitor(object, key, opt_params);
        }
        addFolder(params) {
          return this.rackApi_.addFolder(params);
        }
        addButton(params) {
          return this.rackApi_.addButton(params);
        }
        addSeparator(opt_params) {
          return this.rackApi_.addSeparator(opt_params);
        }
        addTab(params) {
          return this.rackApi_.addTab(params);
        }
        add(api, opt_index) {
          return this.rackApi_.add(api, opt_index);
        }
        remove(api) {
          this.rackApi_.remove(api);
        }
        addBlade(params) {
          return this.rackApi_.addBlade(params);
        }
        on(eventName, handler) {
          const bh = handler.bind(this);
          this.emitter_.on(eventName, (ev) => {
            bh(ev.event);
          });
          return this;
        }
      }
      class RackLikeController extends BladeController {
        constructor(config) {
          super({
            blade: config.blade,
            view: config.view,
            viewProps: config.rackController.viewProps
          });
          this.rackController = config.rackController;
        }
      }
      class PlainView {
        constructor(doc, config) {
          const className2 = ClassName(config.viewName);
          this.element = doc.createElement("div");
          this.element.classList.add(className2());
          config.viewProps.bindClassModifiers(this.element);
        }
      }
      function findInputBindingController(bcs, b) {
        for (let i = 0; i < bcs.length; i++) {
          const bc = bcs[i];
          if (bc instanceof InputBindingController && bc.binding === b) {
            return bc;
          }
        }
        return null;
      }
      function findMonitorBindingController(bcs, b) {
        for (let i = 0; i < bcs.length; i++) {
          const bc = bcs[i];
          if (bc instanceof MonitorBindingController && bc.binding === b) {
            return bc;
          }
        }
        return null;
      }
      function findValueBladeController(bcs, v) {
        for (let i = 0; i < bcs.length; i++) {
          const bc = bcs[i];
          if (bc instanceof ValueBladeController && bc.value === v) {
            return bc;
          }
        }
        return null;
      }
      function findSubRack(bc) {
        if (bc instanceof RackController) {
          return bc.rack;
        }
        if (bc instanceof RackLikeController) {
          return bc.rackController.rack;
        }
        return null;
      }
      function findSubBladeControllerSet(bc) {
        const rack = findSubRack(bc);
        return rack ? rack["bcSet_"] : null;
      }
      class BladeRack {
        constructor(config) {
          var _a, _b;
          this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this);
          this.onSetAdd_ = this.onSetAdd_.bind(this);
          this.onSetRemove_ = this.onSetRemove_.bind(this);
          this.onChildDispose_ = this.onChildDispose_.bind(this);
          this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this);
          this.onChildInputChange_ = this.onChildInputChange_.bind(this);
          this.onChildMonitorUpdate_ = this.onChildMonitorUpdate_.bind(this);
          this.onChildValueChange_ = this.onChildValueChange_.bind(this);
          this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this);
          this.onDescendantLayout_ = this.onDescendantLayout_.bind(this);
          this.onDescendantInputChange_ = this.onDescendantInputChange_.bind(this);
          this.onDescendantMonitorUpdate_ = this.onDescendantMonitorUpdate_.bind(this);
          this.emitter = new Emitter();
          this.blade_ = (_a = config.blade) !== null && _a !== void 0 ? _a : null;
          (_b = this.blade_) === null || _b === void 0 ? void 0 : _b.value("positions").emitter.on("change", this.onBladePositionsChange_);
          this.viewProps = config.viewProps;
          this.bcSet_ = new NestedOrderedSet(findSubBladeControllerSet);
          this.bcSet_.emitter.on("add", this.onSetAdd_);
          this.bcSet_.emitter.on("remove", this.onSetRemove_);
        }
        get children() {
          return this.bcSet_.items;
        }
        add(bc, opt_index) {
          var _a;
          (_a = bc.parent) === null || _a === void 0 ? void 0 : _a.remove(bc);
          if (isPropertyWritable(bc, "parent")) {
            bc.parent = this;
          } else {
            bc["parent_"] = this;
            warnMissing({
              key: "parent",
              target: "BladeController",
              place: "BladeRack.add"
            });
          }
          this.bcSet_.add(bc, opt_index);
        }
        remove(bc) {
          if (isPropertyWritable(bc, "parent")) {
            bc.parent = null;
          } else {
            bc["parent_"] = null;
            warnMissing({
              key: "parent",
              target: "BladeController",
              place: "BladeRack.remove"
            });
          }
          this.bcSet_.remove(bc);
        }
        find(controllerClass) {
          return forceCast(this.bcSet_.allItems().filter((bc) => {
            return bc instanceof controllerClass;
          }));
        }
        onSetAdd_(ev) {
          this.updatePositions_();
          const isRoot = ev.target === ev.root;
          this.emitter.emit("add", {
            bladeController: ev.item,
            index: ev.index,
            isRoot,
            sender: this
          });
          if (!isRoot) {
            return;
          }
          const bc = ev.item;
          bc.viewProps.emitter.on("change", this.onChildViewPropsChange_);
          bc.blade.value("positions").emitter.on("change", this.onChildPositionsChange_);
          bc.viewProps.handleDispose(this.onChildDispose_);
          if (bc instanceof InputBindingController) {
            bc.binding.emitter.on("change", this.onChildInputChange_);
          } else if (bc instanceof MonitorBindingController) {
            bc.binding.emitter.on("update", this.onChildMonitorUpdate_);
          } else if (bc instanceof ValueBladeController) {
            bc.value.emitter.on("change", this.onChildValueChange_);
          } else {
            const rack = findSubRack(bc);
            if (rack) {
              const emitter = rack.emitter;
              emitter.on("layout", this.onDescendantLayout_);
              emitter.on("inputchange", this.onDescendantInputChange_);
              emitter.on("monitorupdate", this.onDescendantMonitorUpdate_);
            }
          }
        }
        onSetRemove_(ev) {
          this.updatePositions_();
          const isRoot = ev.target === ev.root;
          this.emitter.emit("remove", {
            bladeController: ev.item,
            isRoot,
            sender: this
          });
          if (!isRoot) {
            return;
          }
          const bc = ev.item;
          if (bc instanceof InputBindingController) {
            bc.binding.emitter.off("change", this.onChildInputChange_);
          } else if (bc instanceof MonitorBindingController) {
            bc.binding.emitter.off("update", this.onChildMonitorUpdate_);
          } else if (bc instanceof ValueBladeController) {
            bc.value.emitter.off("change", this.onChildValueChange_);
          } else {
            const rack = findSubRack(bc);
            if (rack) {
              const emitter = rack.emitter;
              emitter.off("layout", this.onDescendantLayout_);
              emitter.off("inputchange", this.onDescendantInputChange_);
              emitter.off("monitorupdate", this.onDescendantMonitorUpdate_);
            }
          }
        }
        updatePositions_() {
          const visibleItems = this.bcSet_.items.filter((bc) => !bc.viewProps.get("hidden"));
          const firstVisibleItem = visibleItems[0];
          const lastVisibleItem = visibleItems[visibleItems.length - 1];
          this.bcSet_.items.forEach((bc) => {
            const ps = [];
            if (bc === firstVisibleItem) {
              ps.push("first");
              if (!this.blade_ || this.blade_.get("positions").includes("veryfirst")) {
                ps.push("veryfirst");
              }
            }
            if (bc === lastVisibleItem) {
              ps.push("last");
              if (!this.blade_ || this.blade_.get("positions").includes("verylast")) {
                ps.push("verylast");
              }
            }
            bc.blade.set("positions", ps);
          });
        }
        onChildPositionsChange_() {
          this.updatePositions_();
          this.emitter.emit("layout", {
            sender: this
          });
        }
        onChildViewPropsChange_(_ev) {
          this.updatePositions_();
          this.emitter.emit("layout", {
            sender: this
          });
        }
        onChildDispose_() {
          const disposedUcs = this.bcSet_.items.filter((bc) => {
            return bc.viewProps.get("disposed");
          });
          disposedUcs.forEach((bc) => {
            this.bcSet_.remove(bc);
          });
        }
        onChildInputChange_(ev) {
          const bc = findInputBindingController(this.find(InputBindingController), ev.sender);
          if (!bc) {
            throw TpError.alreadyDisposed();
          }
          this.emitter.emit("inputchange", {
            bladeController: bc,
            options: ev.options,
            sender: this
          });
        }
        onChildMonitorUpdate_(ev) {
          const bc = findMonitorBindingController(this.find(MonitorBindingController), ev.sender);
          if (!bc) {
            throw TpError.alreadyDisposed();
          }
          this.emitter.emit("monitorupdate", {
            bladeController: bc,
            sender: this
          });
        }
        onChildValueChange_(ev) {
          const bc = findValueBladeController(this.find(ValueBladeController), ev.sender);
          if (!bc) {
            throw TpError.alreadyDisposed();
          }
          this.emitter.emit("inputchange", {
            bladeController: bc,
            options: ev.options,
            sender: this
          });
        }
        onDescendantLayout_(_) {
          this.updatePositions_();
          this.emitter.emit("layout", {
            sender: this
          });
        }
        onDescendantInputChange_(ev) {
          this.emitter.emit("inputchange", {
            bladeController: ev.bladeController,
            options: ev.options,
            sender: this
          });
        }
        onDescendantMonitorUpdate_(ev) {
          this.emitter.emit("monitorupdate", {
            bladeController: ev.bladeController,
            sender: this
          });
        }
        onBladePositionsChange_() {
          this.updatePositions_();
        }
      }
      class RackController extends BladeController {
        constructor(doc, config) {
          super(Object.assign(Object.assign({}, config), { view: new PlainView(doc, {
            viewName: "brk",
            viewProps: config.viewProps
          }) }));
          this.onRackAdd_ = this.onRackAdd_.bind(this);
          this.onRackRemove_ = this.onRackRemove_.bind(this);
          const rack = new BladeRack({
            blade: config.root ? void 0 : config.blade,
            viewProps: config.viewProps
          });
          rack.emitter.on("add", this.onRackAdd_);
          rack.emitter.on("remove", this.onRackRemove_);
          this.rack = rack;
          this.viewProps.handleDispose(() => {
            for (let i = this.rack.children.length - 1; i >= 0; i--) {
              const bc = this.rack.children[i];
              bc.viewProps.set("disposed", true);
            }
          });
        }
        onRackAdd_(ev) {
          if (!ev.isRoot) {
            return;
          }
          insertElementAt(this.view.element, ev.bladeController.view.element, ev.index);
        }
        onRackRemove_(ev) {
          if (!ev.isRoot) {
            return;
          }
          removeElement(ev.bladeController.view.element);
        }
      }
      const bladeContainerClassName = ClassName("cnt");
      class FolderView {
        constructor(doc, config) {
          var _a;
          this.className_ = ClassName((_a = config.viewName) !== null && _a !== void 0 ? _a : "fld");
          this.element = doc.createElement("div");
          this.element.classList.add(this.className_(), bladeContainerClassName());
          config.viewProps.bindClassModifiers(this.element);
          this.foldable_ = config.foldable;
          this.foldable_.bindExpandedClass(this.element, this.className_(void 0, "expanded"));
          bindValueMap(this.foldable_, "completed", valueToClassName(this.element, this.className_(void 0, "cpl")));
          const buttonElem = doc.createElement("button");
          buttonElem.classList.add(this.className_("b"));
          bindValueMap(config.props, "title", (title) => {
            if (isEmpty(title)) {
              this.element.classList.add(this.className_(void 0, "not"));
            } else {
              this.element.classList.remove(this.className_(void 0, "not"));
            }
          });
          config.viewProps.bindDisabled(buttonElem);
          this.element.appendChild(buttonElem);
          this.buttonElement = buttonElem;
          const indentElem = doc.createElement("div");
          indentElem.classList.add(this.className_("i"));
          this.element.appendChild(indentElem);
          const titleElem = doc.createElement("div");
          titleElem.classList.add(this.className_("t"));
          bindValueToTextContent(config.props.value("title"), titleElem);
          this.buttonElement.appendChild(titleElem);
          this.titleElement = titleElem;
          const markElem = doc.createElement("div");
          markElem.classList.add(this.className_("m"));
          this.buttonElement.appendChild(markElem);
          const containerElem = config.containerElement;
          containerElem.classList.add(this.className_("c"));
          this.element.appendChild(containerElem);
          this.containerElement = containerElem;
        }
      }
      class FolderController extends RackLikeController {
        constructor(doc, config) {
          var _a;
          const foldable = Foldable.create((_a = config.expanded) !== null && _a !== void 0 ? _a : true);
          const rc = new RackController(doc, {
            blade: config.blade,
            root: config.root,
            viewProps: config.viewProps
          });
          super(Object.assign(Object.assign({}, config), { rackController: rc, view: new FolderView(doc, {
            containerElement: rc.view.element,
            foldable,
            props: config.props,
            viewName: config.root ? "rot" : void 0,
            viewProps: config.viewProps
          }) }));
          this.onTitleClick_ = this.onTitleClick_.bind(this);
          this.props = config.props;
          this.foldable = foldable;
          bindFoldable(this.foldable, this.view.containerElement);
          this.rackController.rack.emitter.on("add", () => {
            this.foldable.cleanUpTransition();
          });
          this.rackController.rack.emitter.on("remove", () => {
            this.foldable.cleanUpTransition();
          });
          this.view.buttonElement.addEventListener("click", this.onTitleClick_);
        }
        get document() {
          return this.view.element.ownerDocument;
        }
        onTitleClick_() {
          this.foldable.set("expanded", !this.foldable.get("expanded"));
        }
      }
      const FolderBladePlugin = {
        id: "folder",
        type: "blade",
        accept(params) {
          const p = ParamsParsers;
          const result = parseParams(params, {
            title: p.required.string,
            view: p.required.constant("folder"),
            expanded: p.optional.boolean
          });
          return result ? { params: result } : null;
        },
        controller(args) {
          return new FolderController(args.document, {
            blade: args.blade,
            expanded: args.params.expanded,
            props: ValueMap.fromObject({
              title: args.params.title
            }),
            viewProps: args.viewProps
          });
        },
        api(args) {
          if (!(args.controller instanceof FolderController)) {
            return null;
          }
          return new FolderApi(args.controller, args.pool);
        }
      };
      class LabeledValueController extends ValueBladeController {
        constructor(doc, config) {
          const viewProps = config.valueController.viewProps;
          super(Object.assign(Object.assign({}, config), { value: config.valueController.value, view: new LabelView(doc, {
            props: config.props,
            viewProps
          }), viewProps }));
          this.props = config.props;
          this.valueController = config.valueController;
          this.view.valueElement.appendChild(this.valueController.view.element);
        }
      }
      class SeparatorApi extends BladeApi {
      }
      const className$m = ClassName("spr");
      class SeparatorView {
        constructor(doc, config) {
          this.element = doc.createElement("div");
          this.element.classList.add(className$m());
          config.viewProps.bindClassModifiers(this.element);
          const hrElem = doc.createElement("hr");
          hrElem.classList.add(className$m("r"));
          this.element.appendChild(hrElem);
        }
      }
      class SeparatorController extends BladeController {
        constructor(doc, config) {
          super(Object.assign(Object.assign({}, config), { view: new SeparatorView(doc, {
            viewProps: config.viewProps
          }) }));
        }
      }
      const SeparatorBladePlugin = {
        id: "separator",
        type: "blade",
        accept(params) {
          const p = ParamsParsers;
          const result = parseParams(params, {
            view: p.required.constant("separator")
          });
          return result ? { params: result } : null;
        },
        controller(args) {
          return new SeparatorController(args.document, {
            blade: args.blade,
            viewProps: args.viewProps
          });
        },
        api(args) {
          if (!(args.controller instanceof SeparatorController)) {
            return null;
          }
          return new SeparatorApi(args.controller);
        }
      };
      const className$l = ClassName("tbi");
      class TabItemView {
        constructor(doc, config) {
          this.element = doc.createElement("div");
          this.element.classList.add(className$l());
          config.viewProps.bindClassModifiers(this.element);
          bindValueMap(config.props, "selected", (selected) => {
            if (selected) {
              this.element.classList.add(className$l(void 0, "sel"));
            } else {
              this.element.classList.remove(className$l(void 0, "sel"));
            }
          });
          const buttonElem = doc.createElement("button");
          buttonElem.classList.add(className$l("b"));
          config.viewProps.bindDisabled(buttonElem);
          this.element.appendChild(buttonElem);
          this.buttonElement = buttonElem;
          const titleElem = doc.createElement("div");
          titleElem.classList.add(className$l("t"));
          bindValueToTextContent(config.props.value("title"), titleElem);
          this.buttonElement.appendChild(titleElem);
          this.titleElement = titleElem;
        }
      }
      class TabItemController {
        constructor(doc, config) {
          this.emitter = new Emitter();
          this.onClick_ = this.onClick_.bind(this);
          this.props = config.props;
          this.viewProps = config.viewProps;
          this.view = new TabItemView(doc, {
            props: config.props,
            viewProps: config.viewProps
          });
          this.view.buttonElement.addEventListener("click", this.onClick_);
        }
        onClick_() {
          this.emitter.emit("click", {
            sender: this
          });
        }
      }
      class TabPageController {
        constructor(doc, config) {
          this.onItemClick_ = this.onItemClick_.bind(this);
          this.ic_ = new TabItemController(doc, {
            props: config.itemProps,
            viewProps: ViewProps.create()
          });
          this.ic_.emitter.on("click", this.onItemClick_);
          this.cc_ = new RackController(doc, {
            blade: createBlade(),
            viewProps: ViewProps.create()
          });
          this.props = config.props;
          bindValueMap(this.props, "selected", (selected) => {
            this.itemController.props.set("selected", selected);
            this.contentController.viewProps.set("hidden", !selected);
          });
        }
        get itemController() {
          return this.ic_;
        }
        get contentController() {
          return this.cc_;
        }
        onItemClick_() {
          this.props.set("selected", true);
        }
      }
      class TabPageApi {
        constructor(controller, contentRackApi) {
          this.controller_ = controller;
          this.rackApi_ = contentRackApi;
        }
        get title() {
          var _a;
          return (_a = this.controller_.itemController.props.get("title")) !== null && _a !== void 0 ? _a : "";
        }
        set title(title) {
          this.controller_.itemController.props.set("title", title);
        }
        get selected() {
          return this.controller_.props.get("selected");
        }
        set selected(selected) {
          this.controller_.props.set("selected", selected);
        }
        get children() {
          return this.rackApi_.children;
        }
        addButton(params) {
          return this.rackApi_.addButton(params);
        }
        addFolder(params) {
          return this.rackApi_.addFolder(params);
        }
        addSeparator(opt_params) {
          return this.rackApi_.addSeparator(opt_params);
        }
        addTab(params) {
          return this.rackApi_.addTab(params);
        }
        add(api, opt_index) {
          this.rackApi_.add(api, opt_index);
        }
        remove(api) {
          this.rackApi_.remove(api);
        }
        addInput(object, key, opt_params) {
          return this.rackApi_.addInput(object, key, opt_params);
        }
        addMonitor(object, key, opt_params) {
          return this.rackApi_.addMonitor(object, key, opt_params);
        }
        addBlade(params) {
          return this.rackApi_.addBlade(params);
        }
      }
      class TabApi extends RackLikeApi {
        constructor(controller, pool) {
          super(controller, new RackApi(controller.rackController, pool));
          this.onPageAdd_ = this.onPageAdd_.bind(this);
          this.onPageRemove_ = this.onPageRemove_.bind(this);
          this.onSelect_ = this.onSelect_.bind(this);
          this.emitter_ = new Emitter();
          this.pageApiMap_ = /* @__PURE__ */ new Map();
          this.rackApi_.on("change", (ev) => {
            this.emitter_.emit("change", {
              event: ev
            });
          });
          this.rackApi_.on("update", (ev) => {
            this.emitter_.emit("update", {
              event: ev
            });
          });
          this.controller_.tab.selectedIndex.emitter.on("change", this.onSelect_);
          this.controller_.pageSet.emitter.on("add", this.onPageAdd_);
          this.controller_.pageSet.emitter.on("remove", this.onPageRemove_);
          this.controller_.pageSet.items.forEach((pc) => {
            this.setUpPageApi_(pc);
          });
        }
        get pages() {
          return this.controller_.pageSet.items.map((pc) => {
            const api = this.pageApiMap_.get(pc);
            if (!api) {
              throw TpError.shouldNeverHappen();
            }
            return api;
          });
        }
        addPage(params) {
          const doc = this.controller_.view.element.ownerDocument;
          const pc = new TabPageController(doc, {
            itemProps: ValueMap.fromObject({
              selected: false,
              title: params.title
            }),
            props: ValueMap.fromObject({
              selected: false
            })
          });
          this.controller_.add(pc, params.index);
          const api = this.pageApiMap_.get(pc);
          if (!api) {
            throw TpError.shouldNeverHappen();
          }
          return api;
        }
        removePage(index) {
          this.controller_.remove(index);
        }
        on(eventName, handler) {
          const bh = handler.bind(this);
          this.emitter_.on(eventName, (ev) => {
            bh(ev.event);
          });
          return this;
        }
        setUpPageApi_(pc) {
          const rackApi = this.rackApi_["apiSet_"].find((api2) => api2.controller_ === pc.contentController);
          if (!rackApi) {
            throw TpError.shouldNeverHappen();
          }
          const api = new TabPageApi(pc, rackApi);
          this.pageApiMap_.set(pc, api);
        }
        onPageAdd_(ev) {
          this.setUpPageApi_(ev.item);
        }
        onPageRemove_(ev) {
          const api = this.pageApiMap_.get(ev.item);
          if (!api) {
            throw TpError.shouldNeverHappen();
          }
          this.pageApiMap_.delete(ev.item);
        }
        onSelect_(ev) {
          this.emitter_.emit("select", {
            event: new TpTabSelectEvent(this, ev.rawValue)
          });
        }
      }
      const INDEX_NOT_SELECTED = -1;
      class Tab {
        constructor() {
          this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this);
          this.empty = createValue(true);
          this.selectedIndex = createValue(INDEX_NOT_SELECTED);
          this.items_ = [];
        }
        add(item, opt_index) {
          const index = opt_index !== null && opt_index !== void 0 ? opt_index : this.items_.length;
          this.items_.splice(index, 0, item);
          item.emitter.on("change", this.onItemSelectedChange_);
          this.keepSelection_();
        }
        remove(item) {
          const index = this.items_.indexOf(item);
          if (index < 0) {
            return;
          }
          this.items_.splice(index, 1);
          item.emitter.off("change", this.onItemSelectedChange_);
          this.keepSelection_();
        }
        keepSelection_() {
          if (this.items_.length === 0) {
            this.selectedIndex.rawValue = INDEX_NOT_SELECTED;
            this.empty.rawValue = true;
            return;
          }
          const firstSelIndex = this.items_.findIndex((s) => s.rawValue);
          if (firstSelIndex < 0) {
            this.items_.forEach((s, i) => {
              s.rawValue = i === 0;
            });
            this.selectedIndex.rawValue = 0;
          } else {
            this.items_.forEach((s, i) => {
              s.rawValue = i === firstSelIndex;
            });
            this.selectedIndex.rawValue = firstSelIndex;
          }
          this.empty.rawValue = false;
        }
        onItemSelectedChange_(ev) {
          if (ev.rawValue) {
            const index = this.items_.findIndex((s) => s === ev.sender);
            this.items_.forEach((s, i) => {
              s.rawValue = i === index;
            });
            this.selectedIndex.rawValue = index;
          } else {
            this.keepSelection_();
          }
        }
      }
      const className$k = ClassName("tab");
      class TabView {
        constructor(doc, config) {
          this.element = doc.createElement("div");
          this.element.classList.add(className$k(), bladeContainerClassName());
          config.viewProps.bindClassModifiers(this.element);
          bindValue(config.empty, valueToClassName(this.element, className$k(void 0, "nop")));
          const titleElem = doc.createElement("div");
          titleElem.classList.add(className$k("t"));
          this.element.appendChild(titleElem);
          this.itemsElement = titleElem;
          const indentElem = doc.createElement("div");
          indentElem.classList.add(className$k("i"));
          this.element.appendChild(indentElem);
          const contentsElem = config.contentsElement;
          contentsElem.classList.add(className$k("c"));
          this.element.appendChild(contentsElem);
          this.contentsElement = contentsElem;
        }
      }
      class TabController extends RackLikeController {
        constructor(doc, config) {
          const cr = new RackController(doc, {
            blade: config.blade,
            viewProps: config.viewProps
          });
          const tab = new Tab();
          super({
            blade: config.blade,
            rackController: cr,
            view: new TabView(doc, {
              contentsElement: cr.view.element,
              empty: tab.empty,
              viewProps: config.viewProps
            })
          });
          this.onPageAdd_ = this.onPageAdd_.bind(this);
          this.onPageRemove_ = this.onPageRemove_.bind(this);
          this.pageSet_ = new NestedOrderedSet(() => null);
          this.pageSet_.emitter.on("add", this.onPageAdd_);
          this.pageSet_.emitter.on("remove", this.onPageRemove_);
          this.tab = tab;
        }
        get pageSet() {
          return this.pageSet_;
        }
        add(pc, opt_index) {
          this.pageSet_.add(pc, opt_index);
        }
        remove(index) {
          this.pageSet_.remove(this.pageSet_.items[index]);
        }
        onPageAdd_(ev) {
          const pc = ev.item;
          insertElementAt(this.view.itemsElement, pc.itemController.view.element, ev.index);
          pc.itemController.viewProps.set("parent", this.viewProps);
          this.rackController.rack.add(pc.contentController, ev.index);
          this.tab.add(pc.props.value("selected"));
        }
        onPageRemove_(ev) {
          const pc = ev.item;
          removeElement(pc.itemController.view.element);
          pc.itemController.viewProps.set("parent", null);
          this.rackController.rack.remove(pc.contentController);
          this.tab.remove(pc.props.value("selected"));
        }
      }
      const TabBladePlugin = {
        id: "tab",
        type: "blade",
        accept(params) {
          const p = ParamsParsers;
          const result = parseParams(params, {
            pages: p.required.array(p.required.object({ title: p.required.string })),
            view: p.required.constant("tab")
          });
          if (!result || result.pages.length === 0) {
            return null;
          }
          return { params: result };
        },
        controller(args) {
          const c = new TabController(args.document, {
            blade: args.blade,
            viewProps: args.viewProps
          });
          args.params.pages.forEach((p) => {
            const pc = new TabPageController(args.document, {
              itemProps: ValueMap.fromObject({
                selected: false,
                title: p.title
              }),
              props: ValueMap.fromObject({
                selected: false
              })
            });
            c.add(pc);
          });
          return c;
        },
        api(args) {
          if (!(args.controller instanceof TabController)) {
            return null;
          }
          return new TabApi(args.controller, args.pool);
        }
      };
      function createBladeController(plugin, args) {
        const ac = plugin.accept(args.params);
        if (!ac) {
          return null;
        }
        const disabled = ParamsParsers.optional.boolean(args.params["disabled"]).value;
        const hidden = ParamsParsers.optional.boolean(args.params["hidden"]).value;
        return plugin.controller({
          blade: createBlade(),
          document: args.document,
          params: forceCast(Object.assign(Object.assign({}, ac.params), { disabled, hidden })),
          viewProps: ViewProps.create({
            disabled,
            hidden
          })
        });
      }
      class ManualTicker {
        constructor() {
          this.disabled = false;
          this.emitter = new Emitter();
        }
        dispose() {
        }
        tick() {
          if (this.disabled) {
            return;
          }
          this.emitter.emit("tick", {
            sender: this
          });
        }
      }
      class IntervalTicker {
        constructor(doc, interval) {
          this.disabled_ = false;
          this.timerId_ = null;
          this.onTick_ = this.onTick_.bind(this);
          this.doc_ = doc;
          this.emitter = new Emitter();
          this.interval_ = interval;
          this.setTimer_();
        }
        get disabled() {
          return this.disabled_;
        }
        set disabled(inactive) {
          this.disabled_ = inactive;
          if (this.disabled_) {
            this.clearTimer_();
          } else {
            this.setTimer_();
          }
        }
        dispose() {
          this.clearTimer_();
        }
        clearTimer_() {
          if (this.timerId_ === null) {
            return;
          }
          const win = this.doc_.defaultView;
          if (win) {
            win.clearInterval(this.timerId_);
          }
          this.timerId_ = null;
        }
        setTimer_() {
          this.clearTimer_();
          if (this.interval_ <= 0) {
            return;
          }
          const win = this.doc_.defaultView;
          if (win) {
            this.timerId_ = win.setInterval(this.onTick_, this.interval_);
          }
        }
        onTick_() {
          if (this.disabled_) {
            return;
          }
          this.emitter.emit("tick", {
            sender: this
          });
        }
      }
      class InputBinding {
        constructor(config) {
          this.onValueChange_ = this.onValueChange_.bind(this);
          this.reader = config.reader;
          this.writer = config.writer;
          this.emitter = new Emitter();
          this.value = config.value;
          this.value.emitter.on("change", this.onValueChange_);
          this.target = config.target;
          this.read();
        }
        read() {
          const targetValue = this.target.read();
          if (targetValue !== void 0) {
            this.value.rawValue = this.reader(targetValue);
          }
        }
        write_(rawValue) {
          this.writer(this.target, rawValue);
        }
        onValueChange_(ev) {
          this.write_(ev.rawValue);
          this.emitter.emit("change", {
            options: ev.options,
            rawValue: ev.rawValue,
            sender: this
          });
        }
      }
      function fillBuffer(buffer, bufferSize) {
        while (buffer.length < bufferSize) {
          buffer.push(void 0);
        }
      }
      function initializeBuffer(bufferSize) {
        const buffer = [];
        fillBuffer(buffer, bufferSize);
        return createValue(buffer);
      }
      function createTrimmedBuffer(buffer) {
        const index = buffer.indexOf(void 0);
        return forceCast(index < 0 ? buffer : buffer.slice(0, index));
      }
      function createPushedBuffer(buffer, newValue) {
        const newBuffer = [...createTrimmedBuffer(buffer), newValue];
        if (newBuffer.length > buffer.length) {
          newBuffer.splice(0, newBuffer.length - buffer.length);
        } else {
          fillBuffer(newBuffer, buffer.length);
        }
        return newBuffer;
      }
      class MonitorBinding {
        constructor(config) {
          this.onTick_ = this.onTick_.bind(this);
          this.reader_ = config.reader;
          this.target = config.target;
          this.emitter = new Emitter();
          this.value = config.value;
          this.ticker = config.ticker;
          this.ticker.emitter.on("tick", this.onTick_);
          this.read();
        }
        dispose() {
          this.ticker.dispose();
        }
        read() {
          const targetValue = this.target.read();
          if (targetValue === void 0) {
            return;
          }
          const buffer = this.value.rawValue;
          const newValue = this.reader_(targetValue);
          this.value.rawValue = createPushedBuffer(buffer, newValue);
          this.emitter.emit("update", {
            rawValue: newValue,
            sender: this
          });
        }
        onTick_(_) {
          this.read();
        }
      }
      class CompositeConstraint {
        constructor(constraints) {
          this.constraints = constraints;
        }
        constrain(value) {
          return this.constraints.reduce((result, c) => {
            return c.constrain(result);
          }, value);
        }
      }
      function findConstraint(c, constraintClass) {
        if (c instanceof constraintClass) {
          return c;
        }
        if (c instanceof CompositeConstraint) {
          const result = c.constraints.reduce((tmpResult, sc) => {
            if (tmpResult) {
              return tmpResult;
            }
            return sc instanceof constraintClass ? sc : null;
          }, null);
          if (result) {
            return result;
          }
        }
        return null;
      }
      class DefiniteRangeConstraint {
        constructor(config) {
          this.values = ValueMap.fromObject({
            max: config.max,
            min: config.min
          });
        }
        constrain(value) {
          const max = this.values.get("max");
          const min = this.values.get("min");
          return Math.min(Math.max(value, min), max);
        }
      }
      class ListConstraint {
        constructor(options) {
          this.values = ValueMap.fromObject({
            options
          });
        }
        get options() {
          return this.values.get("options");
        }
        constrain(value) {
          const opts = this.values.get("options");
          if (opts.length === 0) {
            return value;
          }
          const matched = opts.filter((item) => {
            return item.value === value;
          }).length > 0;
          return matched ? value : opts[0].value;
        }
      }
      class RangeConstraint {
        constructor(config) {
          this.values = ValueMap.fromObject({
            max: config.max,
            min: config.min
          });
        }
        get maxValue() {
          return this.values.get("max");
        }
        get minValue() {
          return this.values.get("min");
        }
        constrain(value) {
          const max = this.values.get("max");
          const min = this.values.get("min");
          let result = value;
          if (!isEmpty(min)) {
            result = Math.max(result, min);
          }
          if (!isEmpty(max)) {
            result = Math.min(result, max);
          }
          return result;
        }
      }
      class StepConstraint {
        constructor(step, origin = 0) {
          this.step = step;
          this.origin = origin;
        }
        constrain(value) {
          const o = this.origin % this.step;
          const r = Math.round((value - o) / this.step);
          return o + r * this.step;
        }
      }
      const className$j = ClassName("lst");
      class ListView {
        constructor(doc, config) {
          this.onValueChange_ = this.onValueChange_.bind(this);
          this.props_ = config.props;
          this.element = doc.createElement("div");
          this.element.classList.add(className$j());
          config.viewProps.bindClassModifiers(this.element);
          const selectElem = doc.createElement("select");
          selectElem.classList.add(className$j("s"));
          config.viewProps.bindDisabled(selectElem);
          this.element.appendChild(selectElem);
          this.selectElement = selectElem;
          const markElem = doc.createElement("div");
          markElem.classList.add(className$j("m"));
          markElem.appendChild(createSvgIconElement(doc, "dropdown"));
          this.element.appendChild(markElem);
          config.value.emitter.on("change", this.onValueChange_);
          this.value_ = config.value;
          bindValueMap(this.props_, "options", (opts) => {
            removeChildElements(this.selectElement);
            opts.forEach((item) => {
              const optionElem = doc.createElement("option");
              optionElem.textContent = item.text;
              this.selectElement.appendChild(optionElem);
            });
            this.update_();
          });
        }
        update_() {
          const values = this.props_.get("options").map((o) => o.value);
          this.selectElement.selectedIndex = values.indexOf(this.value_.rawValue);
        }
        onValueChange_() {
          this.update_();
        }
      }
      class ListController {
        constructor(doc, config) {
          this.onSelectChange_ = this.onSelectChange_.bind(this);
          this.props = config.props;
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.view = new ListView(doc, {
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
          });
          this.view.selectElement.addEventListener("change", this.onSelectChange_);
        }
        onSelectChange_(e) {
          const selectElem = forceCast(e.currentTarget);
          this.value.rawValue = this.props.get("options")[selectElem.selectedIndex].value;
        }
      }
      const className$i = ClassName("pop");
      class PopupView {
        constructor(doc, config) {
          this.element = doc.createElement("div");
          this.element.classList.add(className$i());
          config.viewProps.bindClassModifiers(this.element);
          bindValue(config.shows, valueToClassName(this.element, className$i(void 0, "v")));
        }
      }
      class PopupController {
        constructor(doc, config) {
          this.shows = createValue(false);
          this.viewProps = config.viewProps;
          this.view = new PopupView(doc, {
            shows: this.shows,
            viewProps: this.viewProps
          });
        }
      }
      const className$h = ClassName("txt");
      class TextView {
        constructor(doc, config) {
          this.onChange_ = this.onChange_.bind(this);
          this.element = doc.createElement("div");
          this.element.classList.add(className$h());
          config.viewProps.bindClassModifiers(this.element);
          this.props_ = config.props;
          this.props_.emitter.on("change", this.onChange_);
          const inputElem = doc.createElement("input");
          inputElem.classList.add(className$h("i"));
          inputElem.type = "text";
          config.viewProps.bindDisabled(inputElem);
          this.element.appendChild(inputElem);
          this.inputElement = inputElem;
          config.value.emitter.on("change", this.onChange_);
          this.value_ = config.value;
          this.refresh();
        }
        refresh() {
          const formatter = this.props_.get("formatter");
          this.inputElement.value = formatter(this.value_.rawValue);
        }
        onChange_() {
          this.refresh();
        }
      }
      class TextController {
        constructor(doc, config) {
          this.onInputChange_ = this.onInputChange_.bind(this);
          this.parser_ = config.parser;
          this.props = config.props;
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.view = new TextView(doc, {
            props: config.props,
            value: this.value,
            viewProps: this.viewProps
          });
          this.view.inputElement.addEventListener("change", this.onInputChange_);
        }
        onInputChange_(e) {
          const inputElem = forceCast(e.currentTarget);
          const value = inputElem.value;
          const parsedValue = this.parser_(value);
          if (!isEmpty(parsedValue)) {
            this.value.rawValue = parsedValue;
          }
          this.view.refresh();
        }
      }
      function boolToString(value) {
        return String(value);
      }
      function boolFromUnknown(value) {
        if (value === "false") {
          return false;
        }
        return !!value;
      }
      function BooleanFormatter(value) {
        return boolToString(value);
      }
      class NumberLiteralNode {
        constructor(text) {
          this.text = text;
        }
        evaluate() {
          return Number(this.text);
        }
        toString() {
          return this.text;
        }
      }
      const BINARY_OPERATION_MAP = {
        "**": (v1, v2) => Math.pow(v1, v2),
        "*": (v1, v2) => v1 * v2,
        "/": (v1, v2) => v1 / v2,
        "%": (v1, v2) => v1 % v2,
        "+": (v1, v2) => v1 + v2,
        "-": (v1, v2) => v1 - v2,
        "<<": (v1, v2) => v1 << v2,
        ">>": (v1, v2) => v1 >> v2,
        ">>>": (v1, v2) => v1 >>> v2,
        "&": (v1, v2) => v1 & v2,
        "^": (v1, v2) => v1 ^ v2,
        "|": (v1, v2) => v1 | v2
      };
      class BinaryOperationNode {
        constructor(operator, left, right) {
          this.left = left;
          this.operator = operator;
          this.right = right;
        }
        evaluate() {
          const op = BINARY_OPERATION_MAP[this.operator];
          if (!op) {
            throw new Error(`unexpected binary operator: '${this.operator}`);
          }
          return op(this.left.evaluate(), this.right.evaluate());
        }
        toString() {
          return [
            "b(",
            this.left.toString(),
            this.operator,
            this.right.toString(),
            ")"
          ].join(" ");
        }
      }
      const UNARY_OPERATION_MAP = {
        "+": (v) => v,
        "-": (v) => -v,
        "~": (v) => ~v
      };
      class UnaryOperationNode {
        constructor(operator, expr) {
          this.operator = operator;
          this.expression = expr;
        }
        evaluate() {
          const op = UNARY_OPERATION_MAP[this.operator];
          if (!op) {
            throw new Error(`unexpected unary operator: '${this.operator}`);
          }
          return op(this.expression.evaluate());
        }
        toString() {
          return ["u(", this.operator, this.expression.toString(), ")"].join(" ");
        }
      }
      function combineReader(parsers) {
        return (text, cursor) => {
          for (let i = 0; i < parsers.length; i++) {
            const result = parsers[i](text, cursor);
            if (result !== "") {
              return result;
            }
          }
          return "";
        };
      }
      function readWhitespace(text, cursor) {
        var _a;
        const m = text.substr(cursor).match(/^\s+/);
        return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
      }
      function readNonZeroDigit(text, cursor) {
        const ch = text.substr(cursor, 1);
        return ch.match(/^[1-9]$/) ? ch : "";
      }
      function readDecimalDigits(text, cursor) {
        var _a;
        const m = text.substr(cursor).match(/^[0-9]+/);
        return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
      }
      function readSignedInteger(text, cursor) {
        const ds = readDecimalDigits(text, cursor);
        if (ds !== "") {
          return ds;
        }
        const sign = text.substr(cursor, 1);
        cursor += 1;
        if (sign !== "-" && sign !== "+") {
          return "";
        }
        const sds = readDecimalDigits(text, cursor);
        if (sds === "") {
          return "";
        }
        return sign + sds;
      }
      function readExponentPart(text, cursor) {
        const e = text.substr(cursor, 1);
        cursor += 1;
        if (e.toLowerCase() !== "e") {
          return "";
        }
        const si = readSignedInteger(text, cursor);
        if (si === "") {
          return "";
        }
        return e + si;
      }
      function readDecimalIntegerLiteral(text, cursor) {
        const ch = text.substr(cursor, 1);
        if (ch === "0") {
          return ch;
        }
        const nzd = readNonZeroDigit(text, cursor);
        cursor += nzd.length;
        if (nzd === "") {
          return "";
        }
        return nzd + readDecimalDigits(text, cursor);
      }
      function readDecimalLiteral1(text, cursor) {
        const dil = readDecimalIntegerLiteral(text, cursor);
        cursor += dil.length;
        if (dil === "") {
          return "";
        }
        const dot = text.substr(cursor, 1);
        cursor += dot.length;
        if (dot !== ".") {
          return "";
        }
        const dds = readDecimalDigits(text, cursor);
        cursor += dds.length;
        return dil + dot + dds + readExponentPart(text, cursor);
      }
      function readDecimalLiteral2(text, cursor) {
        const dot = text.substr(cursor, 1);
        cursor += dot.length;
        if (dot !== ".") {
          return "";
        }
        const dds = readDecimalDigits(text, cursor);
        cursor += dds.length;
        if (dds === "") {
          return "";
        }
        return dot + dds + readExponentPart(text, cursor);
      }
      function readDecimalLiteral3(text, cursor) {
        const dil = readDecimalIntegerLiteral(text, cursor);
        cursor += dil.length;
        if (dil === "") {
          return "";
        }
        return dil + readExponentPart(text, cursor);
      }
      const readDecimalLiteral = combineReader([
        readDecimalLiteral1,
        readDecimalLiteral2,
        readDecimalLiteral3
      ]);
      function parseBinaryDigits(text, cursor) {
        var _a;
        const m = text.substr(cursor).match(/^[01]+/);
        return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
      }
      function readBinaryIntegerLiteral(text, cursor) {
        const prefix = text.substr(cursor, 2);
        cursor += prefix.length;
        if (prefix.toLowerCase() !== "0b") {
          return "";
        }
        const bds = parseBinaryDigits(text, cursor);
        if (bds === "") {
          return "";
        }
        return prefix + bds;
      }
      function readOctalDigits(text, cursor) {
        var _a;
        const m = text.substr(cursor).match(/^[0-7]+/);
        return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
      }
      function readOctalIntegerLiteral(text, cursor) {
        const prefix = text.substr(cursor, 2);
        cursor += prefix.length;
        if (prefix.toLowerCase() !== "0o") {
          return "";
        }
        const ods = readOctalDigits(text, cursor);
        if (ods === "") {
          return "";
        }
        return prefix + ods;
      }
      function readHexDigits(text, cursor) {
        var _a;
        const m = text.substr(cursor).match(/^[0-9a-f]+/i);
        return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
      }
      function readHexIntegerLiteral(text, cursor) {
        const prefix = text.substr(cursor, 2);
        cursor += prefix.length;
        if (prefix.toLowerCase() !== "0x") {
          return "";
        }
        const hds = readHexDigits(text, cursor);
        if (hds === "") {
          return "";
        }
        return prefix + hds;
      }
      const readNonDecimalIntegerLiteral = combineReader([
        readBinaryIntegerLiteral,
        readOctalIntegerLiteral,
        readHexIntegerLiteral
      ]);
      const readNumericLiteral = combineReader([
        readNonDecimalIntegerLiteral,
        readDecimalLiteral
      ]);
      function parseLiteral(text, cursor) {
        const num = readNumericLiteral(text, cursor);
        cursor += num.length;
        if (num === "") {
          return null;
        }
        return {
          evaluable: new NumberLiteralNode(num),
          cursor
        };
      }
      function parseParenthesizedExpression(text, cursor) {
        const op = text.substr(cursor, 1);
        cursor += op.length;
        if (op !== "(") {
          return null;
        }
        const expr = parseExpression(text, cursor);
        if (!expr) {
          return null;
        }
        cursor = expr.cursor;
        cursor += readWhitespace(text, cursor).length;
        const cl = text.substr(cursor, 1);
        cursor += cl.length;
        if (cl !== ")") {
          return null;
        }
        return {
          evaluable: expr.evaluable,
          cursor
        };
      }
      function parsePrimaryExpression(text, cursor) {
        var _a;
        return (_a = parseLiteral(text, cursor)) !== null && _a !== void 0 ? _a : parseParenthesizedExpression(text, cursor);
      }
      function parseUnaryExpression(text, cursor) {
        const expr = parsePrimaryExpression(text, cursor);
        if (expr) {
          return expr;
        }
        const op = text.substr(cursor, 1);
        cursor += op.length;
        if (op !== "+" && op !== "-" && op !== "~") {
          return null;
        }
        const num = parseUnaryExpression(text, cursor);
        if (!num) {
          return null;
        }
        cursor = num.cursor;
        return {
          cursor,
          evaluable: new UnaryOperationNode(op, num.evaluable)
        };
      }
      function readBinaryOperator(ops, text, cursor) {
        cursor += readWhitespace(text, cursor).length;
        const op = ops.filter((op2) => text.startsWith(op2, cursor))[0];
        if (!op) {
          return null;
        }
        cursor += op.length;
        cursor += readWhitespace(text, cursor).length;
        return {
          cursor,
          operator: op
        };
      }
      function createBinaryOperationExpressionParser(exprParser, ops) {
        return (text, cursor) => {
          const firstExpr = exprParser(text, cursor);
          if (!firstExpr) {
            return null;
          }
          cursor = firstExpr.cursor;
          let expr = firstExpr.evaluable;
          for (; ; ) {
            const op = readBinaryOperator(ops, text, cursor);
            if (!op) {
              break;
            }
            cursor = op.cursor;
            const nextExpr = exprParser(text, cursor);
            if (!nextExpr) {
              return null;
            }
            cursor = nextExpr.cursor;
            expr = new BinaryOperationNode(op.operator, expr, nextExpr.evaluable);
          }
          return expr ? {
            cursor,
            evaluable: expr
          } : null;
        };
      }
      const parseBinaryOperationExpression = [
        ["**"],
        ["*", "/", "%"],
        ["+", "-"],
        ["<<", ">>>", ">>"],
        ["&"],
        ["^"],
        ["|"]
      ].reduce((parser, ops) => {
        return createBinaryOperationExpressionParser(parser, ops);
      }, parseUnaryExpression);
      function parseExpression(text, cursor) {
        cursor += readWhitespace(text, cursor).length;
        return parseBinaryOperationExpression(text, cursor);
      }
      function parseEcmaNumberExpression(text) {
        const expr = parseExpression(text, 0);
        if (!expr) {
          return null;
        }
        const cursor = expr.cursor + readWhitespace(text, expr.cursor).length;
        if (cursor !== text.length) {
          return null;
        }
        return expr.evaluable;
      }
      function parseNumber(text) {
        var _a;
        const r = parseEcmaNumberExpression(text);
        return (_a = r === null || r === void 0 ? void 0 : r.evaluate()) !== null && _a !== void 0 ? _a : null;
      }
      function numberFromUnknown(value) {
        if (typeof value === "number") {
          return value;
        }
        if (typeof value === "string") {
          const pv = parseNumber(value);
          if (!isEmpty(pv)) {
            return pv;
          }
        }
        return 0;
      }
      function numberToString(value) {
        return String(value);
      }
      function createNumberFormatter(digits) {
        return (value) => {
          return value.toFixed(Math.max(Math.min(digits, 20), 0));
        };
      }
      const innerFormatter = createNumberFormatter(0);
      function formatPercentage(value) {
        return innerFormatter(value) + "%";
      }
      function stringFromUnknown(value) {
        return String(value);
      }
      function formatString(value) {
        return value;
      }
      function connectValues({ primary, secondary, forward, backward }) {
        let changing = false;
        function preventFeedback(callback) {
          if (changing) {
            return;
          }
          changing = true;
          callback();
          changing = false;
        }
        primary.emitter.on("change", (ev) => {
          preventFeedback(() => {
            secondary.setRawValue(forward(primary, secondary), ev.options);
          });
        });
        secondary.emitter.on("change", (ev) => {
          preventFeedback(() => {
            primary.setRawValue(backward(primary, secondary), ev.options);
          });
          preventFeedback(() => {
            secondary.setRawValue(forward(primary, secondary), ev.options);
          });
        });
        preventFeedback(() => {
          secondary.setRawValue(forward(primary, secondary), {
            forceEmit: false,
            last: true
          });
        });
      }
      function getStepForKey(baseStep, keys) {
        const step = baseStep * (keys.altKey ? 0.1 : 1) * (keys.shiftKey ? 10 : 1);
        if (keys.upKey) {
          return +step;
        } else if (keys.downKey) {
          return -step;
        }
        return 0;
      }
      function getVerticalStepKeys(ev) {
        return {
          altKey: ev.altKey,
          downKey: ev.key === "ArrowDown",
          shiftKey: ev.shiftKey,
          upKey: ev.key === "ArrowUp"
        };
      }
      function getHorizontalStepKeys(ev) {
        return {
          altKey: ev.altKey,
          downKey: ev.key === "ArrowLeft",
          shiftKey: ev.shiftKey,
          upKey: ev.key === "ArrowRight"
        };
      }
      function isVerticalArrowKey(key) {
        return key === "ArrowUp" || key === "ArrowDown";
      }
      function isArrowKey(key) {
        return isVerticalArrowKey(key) || key === "ArrowLeft" || key === "ArrowRight";
      }
      function computeOffset$1(ev, elem) {
        var _a, _b;
        const win = elem.ownerDocument.defaultView;
        const rect = elem.getBoundingClientRect();
        return {
          x: ev.pageX - (((_a = win && win.scrollX) !== null && _a !== void 0 ? _a : 0) + rect.left),
          y: ev.pageY - (((_b = win && win.scrollY) !== null && _b !== void 0 ? _b : 0) + rect.top)
        };
      }
      class PointerHandler {
        constructor(element) {
          this.lastTouch_ = null;
          this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this);
          this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this);
          this.onMouseDown_ = this.onMouseDown_.bind(this);
          this.onTouchEnd_ = this.onTouchEnd_.bind(this);
          this.onTouchMove_ = this.onTouchMove_.bind(this);
          this.onTouchStart_ = this.onTouchStart_.bind(this);
          this.elem_ = element;
          this.emitter = new Emitter();
          element.addEventListener("touchstart", this.onTouchStart_, {
            passive: false
          });
          element.addEventListener("touchmove", this.onTouchMove_, {
            passive: true
          });
          element.addEventListener("touchend", this.onTouchEnd_);
          element.addEventListener("mousedown", this.onMouseDown_);
        }
        computePosition_(offset) {
          const rect = this.elem_.getBoundingClientRect();
          return {
            bounds: {
              width: rect.width,
              height: rect.height
            },
            point: offset ? {
              x: offset.x,
              y: offset.y
            } : null
          };
        }
        onMouseDown_(ev) {
          var _a;
          ev.preventDefault();
          (_a = ev.currentTarget) === null || _a === void 0 ? void 0 : _a.focus();
          const doc = this.elem_.ownerDocument;
          doc.addEventListener("mousemove", this.onDocumentMouseMove_);
          doc.addEventListener("mouseup", this.onDocumentMouseUp_);
          this.emitter.emit("down", {
            altKey: ev.altKey,
            data: this.computePosition_(computeOffset$1(ev, this.elem_)),
            sender: this,
            shiftKey: ev.shiftKey
          });
        }
        onDocumentMouseMove_(ev) {
          this.emitter.emit("move", {
            altKey: ev.altKey,
            data: this.computePosition_(computeOffset$1(ev, this.elem_)),
            sender: this,
            shiftKey: ev.shiftKey
          });
        }
        onDocumentMouseUp_(ev) {
          const doc = this.elem_.ownerDocument;
          doc.removeEventListener("mousemove", this.onDocumentMouseMove_);
          doc.removeEventListener("mouseup", this.onDocumentMouseUp_);
          this.emitter.emit("up", {
            altKey: ev.altKey,
            data: this.computePosition_(computeOffset$1(ev, this.elem_)),
            sender: this,
            shiftKey: ev.shiftKey
          });
        }
        onTouchStart_(ev) {
          ev.preventDefault();
          const touch = ev.targetTouches.item(0);
          const rect = this.elem_.getBoundingClientRect();
          this.emitter.emit("down", {
            altKey: ev.altKey,
            data: this.computePosition_(touch ? {
              x: touch.clientX - rect.left,
              y: touch.clientY - rect.top
            } : void 0),
            sender: this,
            shiftKey: ev.shiftKey
          });
          this.lastTouch_ = touch;
        }
        onTouchMove_(ev) {
          const touch = ev.targetTouches.item(0);
          const rect = this.elem_.getBoundingClientRect();
          this.emitter.emit("move", {
            altKey: ev.altKey,
            data: this.computePosition_(touch ? {
              x: touch.clientX - rect.left,
              y: touch.clientY - rect.top
            } : void 0),
            sender: this,
            shiftKey: ev.shiftKey
          });
          this.lastTouch_ = touch;
        }
        onTouchEnd_(ev) {
          var _a;
          const touch = (_a = ev.targetTouches.item(0)) !== null && _a !== void 0 ? _a : this.lastTouch_;
          const rect = this.elem_.getBoundingClientRect();
          this.emitter.emit("up", {
            altKey: ev.altKey,
            data: this.computePosition_(touch ? {
              x: touch.clientX - rect.left,
              y: touch.clientY - rect.top
            } : void 0),
            sender: this,
            shiftKey: ev.shiftKey
          });
        }
      }
      function mapRange2(value, start1, end1, start2, end2) {
        const p = (value - start1) / (end1 - start1);
        return start2 + p * (end2 - start2);
      }
      function getDecimalDigits(value) {
        const text = String(value.toFixed(10));
        const frac = text.split(".")[1];
        return frac.replace(/0+$/, "").length;
      }
      function constrainRange(value, min, max) {
        return Math.min(Math.max(value, min), max);
      }
      function loopRange(value, max) {
        return (value % max + max) % max;
      }
      const className$g = ClassName("txt");
      class NumberTextView {
        constructor(doc, config) {
          this.onChange_ = this.onChange_.bind(this);
          this.props_ = config.props;
          this.props_.emitter.on("change", this.onChange_);
          this.element = doc.createElement("div");
          this.element.classList.add(className$g(), className$g(void 0, "num"));
          if (config.arrayPosition) {
            this.element.classList.add(className$g(void 0, config.arrayPosition));
          }
          config.viewProps.bindClassModifiers(this.element);
          const inputElem = doc.createElement("input");
          inputElem.classList.add(className$g("i"));
          inputElem.type = "text";
          config.viewProps.bindDisabled(inputElem);
          this.element.appendChild(inputElem);
          this.inputElement = inputElem;
          this.onDraggingChange_ = this.onDraggingChange_.bind(this);
          this.dragging_ = config.dragging;
          this.dragging_.emitter.on("change", this.onDraggingChange_);
          this.element.classList.add(className$g());
          this.inputElement.classList.add(className$g("i"));
          const knobElem = doc.createElement("div");
          knobElem.classList.add(className$g("k"));
          this.element.appendChild(knobElem);
          this.knobElement = knobElem;
          const guideElem = doc.createElementNS(SVG_NS, "svg");
          guideElem.classList.add(className$g("g"));
          this.knobElement.appendChild(guideElem);
          const bodyElem = doc.createElementNS(SVG_NS, "path");
          bodyElem.classList.add(className$g("gb"));
          guideElem.appendChild(bodyElem);
          this.guideBodyElem_ = bodyElem;
          const headElem = doc.createElementNS(SVG_NS, "path");
          headElem.classList.add(className$g("gh"));
          guideElem.appendChild(headElem);
          this.guideHeadElem_ = headElem;
          const tooltipElem = doc.createElement("div");
          tooltipElem.classList.add(ClassName("tt")());
          this.knobElement.appendChild(tooltipElem);
          this.tooltipElem_ = tooltipElem;
          config.value.emitter.on("change", this.onChange_);
          this.value = config.value;
          this.refresh();
        }
        onDraggingChange_(ev) {
          if (ev.rawValue === null) {
            this.element.classList.remove(className$g(void 0, "drg"));
            return;
          }
          this.element.classList.add(className$g(void 0, "drg"));
          const x = ev.rawValue / this.props_.get("draggingScale");
          const aox = x + (x > 0 ? -1 : x < 0 ? 1 : 0);
          const adx = constrainRange(-aox, -4, 4);
          this.guideHeadElem_.setAttributeNS(null, "d", [`M ${aox + adx},0 L${aox},4 L${aox + adx},8`, `M ${x},-1 L${x},9`].join(" "));
          this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${x},4`);
          const formatter = this.props_.get("formatter");
          this.tooltipElem_.textContent = formatter(this.value.rawValue);
          this.tooltipElem_.style.left = `${x}px`;
        }
        refresh() {
          const formatter = this.props_.get("formatter");
          this.inputElement.value = formatter(this.value.rawValue);
        }
        onChange_() {
          this.refresh();
        }
      }
      class NumberTextController {
        constructor(doc, config) {
          var _a;
          this.originRawValue_ = 0;
          this.onInputChange_ = this.onInputChange_.bind(this);
          this.onInputKeyDown_ = this.onInputKeyDown_.bind(this);
          this.onInputKeyUp_ = this.onInputKeyUp_.bind(this);
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.baseStep_ = config.baseStep;
          this.parser_ = config.parser;
          this.props = config.props;
          this.sliderProps_ = (_a = config.sliderProps) !== null && _a !== void 0 ? _a : null;
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.dragging_ = createValue(null);
          this.view = new NumberTextView(doc, {
            arrayPosition: config.arrayPosition,
            dragging: this.dragging_,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
          });
          this.view.inputElement.addEventListener("change", this.onInputChange_);
          this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_);
          this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
          const ph = new PointerHandler(this.view.knobElement);
          ph.emitter.on("down", this.onPointerDown_);
          ph.emitter.on("move", this.onPointerMove_);
          ph.emitter.on("up", this.onPointerUp_);
        }
        constrainValue_(value) {
          var _a, _b;
          const min = (_a = this.sliderProps_) === null || _a === void 0 ? void 0 : _a.get("minValue");
          const max = (_b = this.sliderProps_) === null || _b === void 0 ? void 0 : _b.get("maxValue");
          let v = value;
          if (min !== void 0) {
            v = Math.max(v, min);
          }
          if (max !== void 0) {
            v = Math.min(v, max);
          }
          return v;
        }
        onInputChange_(e) {
          const inputElem = forceCast(e.currentTarget);
          const value = inputElem.value;
          const parsedValue = this.parser_(value);
          if (!isEmpty(parsedValue)) {
            this.value.rawValue = this.constrainValue_(parsedValue);
          }
          this.view.refresh();
        }
        onInputKeyDown_(ev) {
          const step = getStepForKey(this.baseStep_, getVerticalStepKeys(ev));
          if (step === 0) {
            return;
          }
          this.value.setRawValue(this.constrainValue_(this.value.rawValue + step), {
            forceEmit: false,
            last: false
          });
        }
        onInputKeyUp_(ev) {
          const step = getStepForKey(this.baseStep_, getVerticalStepKeys(ev));
          if (step === 0) {
            return;
          }
          this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
          });
        }
        onPointerDown_() {
          this.originRawValue_ = this.value.rawValue;
          this.dragging_.rawValue = 0;
        }
        computeDraggingValue_(data) {
          if (!data.point) {
            return null;
          }
          const dx = data.point.x - data.bounds.width / 2;
          return this.constrainValue_(this.originRawValue_ + dx * this.props.get("draggingScale"));
        }
        onPointerMove_(ev) {
          const v = this.computeDraggingValue_(ev.data);
          if (v === null) {
            return;
          }
          this.value.setRawValue(v, {
            forceEmit: false,
            last: false
          });
          this.dragging_.rawValue = this.value.rawValue - this.originRawValue_;
        }
        onPointerUp_(ev) {
          const v = this.computeDraggingValue_(ev.data);
          if (v === null) {
            return;
          }
          this.value.setRawValue(v, {
            forceEmit: true,
            last: true
          });
          this.dragging_.rawValue = null;
        }
      }
      const className$f = ClassName("sld");
      class SliderView {
        constructor(doc, config) {
          this.onChange_ = this.onChange_.bind(this);
          this.props_ = config.props;
          this.props_.emitter.on("change", this.onChange_);
          this.element = doc.createElement("div");
          this.element.classList.add(className$f());
          config.viewProps.bindClassModifiers(this.element);
          const trackElem = doc.createElement("div");
          trackElem.classList.add(className$f("t"));
          config.viewProps.bindTabIndex(trackElem);
          this.element.appendChild(trackElem);
          this.trackElement = trackElem;
          const knobElem = doc.createElement("div");
          knobElem.classList.add(className$f("k"));
          this.trackElement.appendChild(knobElem);
          this.knobElement = knobElem;
          config.value.emitter.on("change", this.onChange_);
          this.value = config.value;
          this.update_();
        }
        update_() {
          const p = constrainRange(mapRange2(this.value.rawValue, this.props_.get("minValue"), this.props_.get("maxValue"), 0, 100), 0, 100);
          this.knobElement.style.width = `${p}%`;
        }
        onChange_() {
          this.update_();
        }
      }
      class SliderController {
        constructor(doc, config) {
          this.onKeyDown_ = this.onKeyDown_.bind(this);
          this.onKeyUp_ = this.onKeyUp_.bind(this);
          this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.baseStep_ = config.baseStep;
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.props = config.props;
          this.view = new SliderView(doc, {
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
          });
          this.ptHandler_ = new PointerHandler(this.view.trackElement);
          this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_);
          this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_);
          this.ptHandler_.emitter.on("up", this.onPointerUp_);
          this.view.trackElement.addEventListener("keydown", this.onKeyDown_);
          this.view.trackElement.addEventListener("keyup", this.onKeyUp_);
        }
        handlePointerEvent_(d, opts) {
          if (!d.point) {
            return;
          }
          this.value.setRawValue(mapRange2(constrainRange(d.point.x, 0, d.bounds.width), 0, d.bounds.width, this.props.get("minValue"), this.props.get("maxValue")), opts);
        }
        onPointerDownOrMove_(ev) {
          this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
          });
        }
        onPointerUp_(ev) {
          this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
          });
        }
        onKeyDown_(ev) {
          const step = getStepForKey(this.baseStep_, getHorizontalStepKeys(ev));
          if (step === 0) {
            return;
          }
          this.value.setRawValue(this.value.rawValue + step, {
            forceEmit: false,
            last: false
          });
        }
        onKeyUp_(ev) {
          const step = getStepForKey(this.baseStep_, getHorizontalStepKeys(ev));
          if (step === 0) {
            return;
          }
          this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
          });
        }
      }
      const className$e = ClassName("sldtxt");
      class SliderTextView {
        constructor(doc, config) {
          this.element = doc.createElement("div");
          this.element.classList.add(className$e());
          const sliderElem = doc.createElement("div");
          sliderElem.classList.add(className$e("s"));
          this.sliderView_ = config.sliderView;
          sliderElem.appendChild(this.sliderView_.element);
          this.element.appendChild(sliderElem);
          const textElem = doc.createElement("div");
          textElem.classList.add(className$e("t"));
          this.textView_ = config.textView;
          textElem.appendChild(this.textView_.element);
          this.element.appendChild(textElem);
        }
      }
      class SliderTextController {
        constructor(doc, config) {
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.sliderC_ = new SliderController(doc, {
            baseStep: config.baseStep,
            props: config.sliderProps,
            value: config.value,
            viewProps: this.viewProps
          });
          this.textC_ = new NumberTextController(doc, {
            baseStep: config.baseStep,
            parser: config.parser,
            props: config.textProps,
            sliderProps: config.sliderProps,
            value: config.value,
            viewProps: config.viewProps
          });
          this.view = new SliderTextView(doc, {
            sliderView: this.sliderC_.view,
            textView: this.textC_.view
          });
        }
        get sliderController() {
          return this.sliderC_;
        }
        get textController() {
          return this.textC_;
        }
      }
      function writePrimitive(target, value) {
        target.write(value);
      }
      function parseListOptions(value) {
        const p = ParamsParsers;
        if (Array.isArray(value)) {
          return p.required.array(p.required.object({
            text: p.required.string,
            value: p.required.raw
          }))(value).value;
        }
        if (typeof value === "object") {
          return p.required.raw(value).value;
        }
        return void 0;
      }
      function parsePickerLayout(value) {
        if (value === "inline" || value === "popup") {
          return value;
        }
        return void 0;
      }
      function parsePointDimensionParams(value) {
        const p = ParamsParsers;
        return p.required.object({
          max: p.optional.number,
          min: p.optional.number,
          step: p.optional.number
        })(value).value;
      }
      function normalizeListOptions(options) {
        if (Array.isArray(options)) {
          return options;
        }
        const items = [];
        Object.keys(options).forEach((text) => {
          items.push({ text, value: options[text] });
        });
        return items;
      }
      function createListConstraint(options) {
        return !isEmpty(options) ? new ListConstraint(normalizeListOptions(forceCast(options))) : null;
      }
      function findStep(constraint) {
        const c = constraint ? findConstraint(constraint, StepConstraint) : null;
        if (!c) {
          return null;
        }
        return c.step;
      }
      function getSuitableDecimalDigits(constraint, rawValue) {
        const sc = constraint && findConstraint(constraint, StepConstraint);
        if (sc) {
          return getDecimalDigits(sc.step);
        }
        return Math.max(getDecimalDigits(rawValue), 2);
      }
      function getBaseStep(constraint) {
        const step = findStep(constraint);
        return step !== null && step !== void 0 ? step : 1;
      }
      function getSuitableDraggingScale(constraint, rawValue) {
        var _a;
        const sc = constraint && findConstraint(constraint, StepConstraint);
        const base = Math.abs((_a = sc === null || sc === void 0 ? void 0 : sc.step) !== null && _a !== void 0 ? _a : rawValue);
        return base === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(base)) - 1);
      }
      const className$d = ClassName("ckb");
      class CheckboxView {
        constructor(doc, config) {
          this.onValueChange_ = this.onValueChange_.bind(this);
          this.element = doc.createElement("div");
          this.element.classList.add(className$d());
          config.viewProps.bindClassModifiers(this.element);
          const labelElem = doc.createElement("label");
          labelElem.classList.add(className$d("l"));
          this.element.appendChild(labelElem);
          const inputElem = doc.createElement("input");
          inputElem.classList.add(className$d("i"));
          inputElem.type = "checkbox";
          labelElem.appendChild(inputElem);
          this.inputElement = inputElem;
          config.viewProps.bindDisabled(this.inputElement);
          const wrapperElem = doc.createElement("div");
          wrapperElem.classList.add(className$d("w"));
          labelElem.appendChild(wrapperElem);
          const markElem = createSvgIconElement(doc, "check");
          wrapperElem.appendChild(markElem);
          config.value.emitter.on("change", this.onValueChange_);
          this.value = config.value;
          this.update_();
        }
        update_() {
          this.inputElement.checked = this.value.rawValue;
        }
        onValueChange_() {
          this.update_();
        }
      }
      class CheckboxController {
        constructor(doc, config) {
          this.onInputChange_ = this.onInputChange_.bind(this);
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.view = new CheckboxView(doc, {
            value: this.value,
            viewProps: this.viewProps
          });
          this.view.inputElement.addEventListener("change", this.onInputChange_);
        }
        onInputChange_(e) {
          const inputElem = forceCast(e.currentTarget);
          this.value.rawValue = inputElem.checked;
        }
      }
      function createConstraint$6(params) {
        const constraints = [];
        const lc = createListConstraint(params.options);
        if (lc) {
          constraints.push(lc);
        }
        return new CompositeConstraint(constraints);
      }
      const BooleanInputPlugin = {
        id: "input-bool",
        type: "input",
        accept: (value, params) => {
          if (typeof value !== "boolean") {
            return null;
          }
          const p = ParamsParsers;
          const result = parseParams(params, {
            options: p.optional.custom(parseListOptions)
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: (_args) => boolFromUnknown,
          constraint: (args) => createConstraint$6(args.params),
          writer: (_args) => writePrimitive
        },
        controller: (args) => {
          const doc = args.document;
          const value = args.value;
          const c = args.constraint;
          const lc = c && findConstraint(c, ListConstraint);
          if (lc) {
            return new ListController(doc, {
              props: new ValueMap({
                options: lc.values.value("options")
              }),
              value,
              viewProps: args.viewProps
            });
          }
          return new CheckboxController(doc, {
            value,
            viewProps: args.viewProps
          });
        }
      };
      const className$c = ClassName("col");
      class ColorView {
        constructor(doc, config) {
          this.element = doc.createElement("div");
          this.element.classList.add(className$c());
          config.foldable.bindExpandedClass(this.element, className$c(void 0, "expanded"));
          bindValueMap(config.foldable, "completed", valueToClassName(this.element, className$c(void 0, "cpl")));
          const headElem = doc.createElement("div");
          headElem.classList.add(className$c("h"));
          this.element.appendChild(headElem);
          const swatchElem = doc.createElement("div");
          swatchElem.classList.add(className$c("s"));
          headElem.appendChild(swatchElem);
          this.swatchElement = swatchElem;
          const textElem = doc.createElement("div");
          textElem.classList.add(className$c("t"));
          headElem.appendChild(textElem);
          this.textElement = textElem;
          if (config.pickerLayout === "inline") {
            const pickerElem = doc.createElement("div");
            pickerElem.classList.add(className$c("p"));
            this.element.appendChild(pickerElem);
            this.pickerElement = pickerElem;
          } else {
            this.pickerElement = null;
          }
        }
      }
      function rgbToHslInt(r, g, b) {
        const rp = constrainRange(r / 255, 0, 1);
        const gp = constrainRange(g / 255, 0, 1);
        const bp = constrainRange(b / 255, 0, 1);
        const cmax = Math.max(rp, gp, bp);
        const cmin = Math.min(rp, gp, bp);
        const c = cmax - cmin;
        let h = 0;
        let s = 0;
        const l = (cmin + cmax) / 2;
        if (c !== 0) {
          s = c / (1 - Math.abs(cmax + cmin - 1));
          if (rp === cmax) {
            h = (gp - bp) / c;
          } else if (gp === cmax) {
            h = 2 + (bp - rp) / c;
          } else {
            h = 4 + (rp - gp) / c;
          }
          h = h / 6 + (h < 0 ? 1 : 0);
        }
        return [h * 360, s * 100, l * 100];
      }
      function hslToRgbInt(h, s, l) {
        const hp = (h % 360 + 360) % 360;
        const sp = constrainRange(s / 100, 0, 1);
        const lp = constrainRange(l / 100, 0, 1);
        const c = (1 - Math.abs(2 * lp - 1)) * sp;
        const x = c * (1 - Math.abs(hp / 60 % 2 - 1));
        const m = lp - c / 2;
        let rp, gp, bp;
        if (hp >= 0 && hp < 60) {
          [rp, gp, bp] = [c, x, 0];
        } else if (hp >= 60 && hp < 120) {
          [rp, gp, bp] = [x, c, 0];
        } else if (hp >= 120 && hp < 180) {
          [rp, gp, bp] = [0, c, x];
        } else if (hp >= 180 && hp < 240) {
          [rp, gp, bp] = [0, x, c];
        } else if (hp >= 240 && hp < 300) {
          [rp, gp, bp] = [x, 0, c];
        } else {
          [rp, gp, bp] = [c, 0, x];
        }
        return [(rp + m) * 255, (gp + m) * 255, (bp + m) * 255];
      }
      function rgbToHsvInt(r, g, b) {
        const rp = constrainRange(r / 255, 0, 1);
        const gp = constrainRange(g / 255, 0, 1);
        const bp = constrainRange(b / 255, 0, 1);
        const cmax = Math.max(rp, gp, bp);
        const cmin = Math.min(rp, gp, bp);
        const d = cmax - cmin;
        let h;
        if (d === 0) {
          h = 0;
        } else if (cmax === rp) {
          h = 60 * (((gp - bp) / d % 6 + 6) % 6);
        } else if (cmax === gp) {
          h = 60 * ((bp - rp) / d + 2);
        } else {
          h = 60 * ((rp - gp) / d + 4);
        }
        const s = cmax === 0 ? 0 : d / cmax;
        const v = cmax;
        return [h, s * 100, v * 100];
      }
      function hsvToRgbInt(h, s, v) {
        const hp = loopRange(h, 360);
        const sp = constrainRange(s / 100, 0, 1);
        const vp = constrainRange(v / 100, 0, 1);
        const c = vp * sp;
        const x = c * (1 - Math.abs(hp / 60 % 2 - 1));
        const m = vp - c;
        let rp, gp, bp;
        if (hp >= 0 && hp < 60) {
          [rp, gp, bp] = [c, x, 0];
        } else if (hp >= 60 && hp < 120) {
          [rp, gp, bp] = [x, c, 0];
        } else if (hp >= 120 && hp < 180) {
          [rp, gp, bp] = [0, c, x];
        } else if (hp >= 180 && hp < 240) {
          [rp, gp, bp] = [0, x, c];
        } else if (hp >= 240 && hp < 300) {
          [rp, gp, bp] = [x, 0, c];
        } else {
          [rp, gp, bp] = [c, 0, x];
        }
        return [(rp + m) * 255, (gp + m) * 255, (bp + m) * 255];
      }
      function hslToHsvInt(h, s, l) {
        const sd = l + s * (100 - Math.abs(2 * l - 100)) / (2 * 100);
        return [
          h,
          sd !== 0 ? s * (100 - Math.abs(2 * l - 100)) / sd : 0,
          l + s * (100 - Math.abs(2 * l - 100)) / (2 * 100)
        ];
      }
      function hsvToHslInt(h, s, v) {
        const sd = 100 - Math.abs(v * (200 - s) / 100 - 100);
        return [h, sd !== 0 ? s * v / sd : 0, v * (200 - s) / (2 * 100)];
      }
      function removeAlphaComponent(comps) {
        return [comps[0], comps[1], comps[2]];
      }
      function appendAlphaComponent(comps, alpha) {
        return [comps[0], comps[1], comps[2], alpha];
      }
      const MODE_CONVERTER_MAP = {
        hsl: {
          hsl: (h, s, l) => [h, s, l],
          hsv: hslToHsvInt,
          rgb: hslToRgbInt
        },
        hsv: {
          hsl: hsvToHslInt,
          hsv: (h, s, v) => [h, s, v],
          rgb: hsvToRgbInt
        },
        rgb: {
          hsl: rgbToHslInt,
          hsv: rgbToHsvInt,
          rgb: (r, g, b) => [r, g, b]
        }
      };
      function getColorMaxComponents(mode, type) {
        return [
          type === "float" ? 1 : mode === "rgb" ? 255 : 360,
          type === "float" ? 1 : mode === "rgb" ? 255 : 100,
          type === "float" ? 1 : mode === "rgb" ? 255 : 100
        ];
      }
      function loopHueRange(hue, max) {
        return hue === max ? max : loopRange(hue, max);
      }
      function constrainColorComponents(components, mode, type) {
        var _a;
        const ms = getColorMaxComponents(mode, type);
        return [
          mode === "rgb" ? constrainRange(components[0], 0, ms[0]) : loopHueRange(components[0], ms[0]),
          constrainRange(components[1], 0, ms[1]),
          constrainRange(components[2], 0, ms[2]),
          constrainRange((_a = components[3]) !== null && _a !== void 0 ? _a : 1, 0, 1)
        ];
      }
      function convertColorType(comps, mode, from, to) {
        const fms = getColorMaxComponents(mode, from);
        const tms = getColorMaxComponents(mode, to);
        return comps.map((c, index) => c / fms[index] * tms[index]);
      }
      function convertColor(components, from, to) {
        const intComps = convertColorType(components, from.mode, from.type, "int");
        const result = MODE_CONVERTER_MAP[from.mode][to.mode](...intComps);
        return convertColorType(result, to.mode, "int", to.type);
      }
      function isRgbColorComponent(obj, key) {
        if (typeof obj !== "object" || isEmpty(obj)) {
          return false;
        }
        return key in obj && typeof obj[key] === "number";
      }
      class Color2 {
        static black(type = "int") {
          return new Color2([0, 0, 0], "rgb", type);
        }
        static fromObject(obj, type = "int") {
          const comps = "a" in obj ? [obj.r, obj.g, obj.b, obj.a] : [obj.r, obj.g, obj.b];
          return new Color2(comps, "rgb", type);
        }
        static toRgbaObject(color, type = "int") {
          return color.toRgbaObject(type);
        }
        static isRgbColorObject(obj) {
          return isRgbColorComponent(obj, "r") && isRgbColorComponent(obj, "g") && isRgbColorComponent(obj, "b");
        }
        static isRgbaColorObject(obj) {
          return this.isRgbColorObject(obj) && isRgbColorComponent(obj, "a");
        }
        static isColorObject(obj) {
          return this.isRgbColorObject(obj);
        }
        static equals(v1, v2) {
          if (v1.mode !== v2.mode) {
            return false;
          }
          const comps1 = v1.comps_;
          const comps2 = v2.comps_;
          for (let i = 0; i < comps1.length; i++) {
            if (comps1[i] !== comps2[i]) {
              return false;
            }
          }
          return true;
        }
        constructor(comps, mode, type = "int") {
          this.mode = mode;
          this.type = type;
          this.comps_ = constrainColorComponents(comps, mode, type);
        }
        getComponents(opt_mode, type = "int") {
          return appendAlphaComponent(convertColor(removeAlphaComponent(this.comps_), { mode: this.mode, type: this.type }, { mode: opt_mode !== null && opt_mode !== void 0 ? opt_mode : this.mode, type }), this.comps_[3]);
        }
        toRgbaObject(type = "int") {
          const rgbComps = this.getComponents("rgb", type);
          return {
            r: rgbComps[0],
            g: rgbComps[1],
            b: rgbComps[2],
            a: rgbComps[3]
          };
        }
      }
      const className$b = ClassName("colp");
      class ColorPickerView {
        constructor(doc, config) {
          this.alphaViews_ = null;
          this.element = doc.createElement("div");
          this.element.classList.add(className$b());
          config.viewProps.bindClassModifiers(this.element);
          const hsvElem = doc.createElement("div");
          hsvElem.classList.add(className$b("hsv"));
          const svElem = doc.createElement("div");
          svElem.classList.add(className$b("sv"));
          this.svPaletteView_ = config.svPaletteView;
          svElem.appendChild(this.svPaletteView_.element);
          hsvElem.appendChild(svElem);
          const hElem = doc.createElement("div");
          hElem.classList.add(className$b("h"));
          this.hPaletteView_ = config.hPaletteView;
          hElem.appendChild(this.hPaletteView_.element);
          hsvElem.appendChild(hElem);
          this.element.appendChild(hsvElem);
          const rgbElem = doc.createElement("div");
          rgbElem.classList.add(className$b("rgb"));
          this.textView_ = config.textView;
          rgbElem.appendChild(this.textView_.element);
          this.element.appendChild(rgbElem);
          if (config.alphaViews) {
            this.alphaViews_ = {
              palette: config.alphaViews.palette,
              text: config.alphaViews.text
            };
            const aElem = doc.createElement("div");
            aElem.classList.add(className$b("a"));
            const apElem = doc.createElement("div");
            apElem.classList.add(className$b("ap"));
            apElem.appendChild(this.alphaViews_.palette.element);
            aElem.appendChild(apElem);
            const atElem = doc.createElement("div");
            atElem.classList.add(className$b("at"));
            atElem.appendChild(this.alphaViews_.text.element);
            aElem.appendChild(atElem);
            this.element.appendChild(aElem);
          }
        }
        get allFocusableElements() {
          const elems = [
            this.svPaletteView_.element,
            this.hPaletteView_.element,
            this.textView_.modeSelectElement,
            ...this.textView_.textViews.map((v) => v.inputElement)
          ];
          if (this.alphaViews_) {
            elems.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement);
          }
          return elems;
        }
      }
      function parseColorType(value) {
        return value === "int" ? "int" : value === "float" ? "float" : void 0;
      }
      function parseColorInputParams(params) {
        const p = ParamsParsers;
        return parseParams(params, {
          alpha: p.optional.boolean,
          color: p.optional.object({
            alpha: p.optional.boolean,
            type: p.optional.custom(parseColorType)
          }),
          expanded: p.optional.boolean,
          picker: p.optional.custom(parsePickerLayout)
        });
      }
      function getBaseStepForColor(forAlpha) {
        return forAlpha ? 0.1 : 1;
      }
      function extractColorType(params) {
        var _a;
        return (_a = params.color) === null || _a === void 0 ? void 0 : _a.type;
      }
      function equalsStringColorFormat(f1, f2) {
        return f1.alpha === f2.alpha && f1.mode === f2.mode && f1.notation === f2.notation && f1.type === f2.type;
      }
      function parseCssNumberOrPercentage(text, maxValue) {
        const m = text.match(/^(.+)%$/);
        if (!m) {
          return Math.min(parseFloat(text), maxValue);
        }
        return Math.min(parseFloat(m[1]) * 0.01 * maxValue, maxValue);
      }
      const ANGLE_TO_DEG_MAP = {
        deg: (angle) => angle,
        grad: (angle) => angle * 360 / 400,
        rad: (angle) => angle * 360 / (2 * Math.PI),
        turn: (angle) => angle * 360
      };
      function parseCssNumberOrAngle(text) {
        const m = text.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
        if (!m) {
          return parseFloat(text);
        }
        const angle = parseFloat(m[1]);
        const unit = m[2];
        return ANGLE_TO_DEG_MAP[unit](angle);
      }
      function parseFunctionalRgbColorComponents(text) {
        const m = text.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!m) {
          return null;
        }
        const comps = [
          parseCssNumberOrPercentage(m[1], 255),
          parseCssNumberOrPercentage(m[2], 255),
          parseCssNumberOrPercentage(m[3], 255)
        ];
        if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) {
          return null;
        }
        return comps;
      }
      function createFunctionalRgbColorParser(type) {
        return (text) => {
          const comps = parseFunctionalRgbColorComponents(text);
          return comps ? new Color2(comps, "rgb", type) : null;
        };
      }
      function parseFunctionalRgbaColorComponents(text) {
        const m = text.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!m) {
          return null;
        }
        const comps = [
          parseCssNumberOrPercentage(m[1], 255),
          parseCssNumberOrPercentage(m[2], 255),
          parseCssNumberOrPercentage(m[3], 255),
          parseCssNumberOrPercentage(m[4], 1)
        ];
        if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) {
          return null;
        }
        return comps;
      }
      function createFunctionalRgbaColorParser(type) {
        return (text) => {
          const comps = parseFunctionalRgbaColorComponents(text);
          return comps ? new Color2(comps, "rgb", type) : null;
        };
      }
      function parseHslColorComponents(text) {
        const m = text.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!m) {
          return null;
        }
        const comps = [
          parseCssNumberOrAngle(m[1]),
          parseCssNumberOrPercentage(m[2], 100),
          parseCssNumberOrPercentage(m[3], 100)
        ];
        if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) {
          return null;
        }
        return comps;
      }
      function createHslColorParser(type) {
        return (text) => {
          const comps = parseHslColorComponents(text);
          return comps ? new Color2(comps, "hsl", type) : null;
        };
      }
      function parseHslaColorComponents(text) {
        const m = text.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!m) {
          return null;
        }
        const comps = [
          parseCssNumberOrAngle(m[1]),
          parseCssNumberOrPercentage(m[2], 100),
          parseCssNumberOrPercentage(m[3], 100),
          parseCssNumberOrPercentage(m[4], 1)
        ];
        if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) {
          return null;
        }
        return comps;
      }
      function createHslaColorParser(type) {
        return (text) => {
          const comps = parseHslaColorComponents(text);
          return comps ? new Color2(comps, "hsl", type) : null;
        };
      }
      function parseHexRgbColorComponents(text) {
        const mRgb = text.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
        if (mRgb) {
          return [
            parseInt(mRgb[1] + mRgb[1], 16),
            parseInt(mRgb[2] + mRgb[2], 16),
            parseInt(mRgb[3] + mRgb[3], 16)
          ];
        }
        const mRrggbb = text.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
        if (mRrggbb) {
          return [
            parseInt(mRrggbb[1], 16),
            parseInt(mRrggbb[2], 16),
            parseInt(mRrggbb[3], 16)
          ];
        }
        return null;
      }
      function parseHexRgbColor(text) {
        const comps = parseHexRgbColorComponents(text);
        return comps ? new Color2(comps, "rgb", "int") : null;
      }
      function parseHexRgbaColorComponents(text) {
        const mRgb = text.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
        if (mRgb) {
          return [
            parseInt(mRgb[1] + mRgb[1], 16),
            parseInt(mRgb[2] + mRgb[2], 16),
            parseInt(mRgb[3] + mRgb[3], 16),
            mapRange2(parseInt(mRgb[4] + mRgb[4], 16), 0, 255, 0, 1)
          ];
        }
        const mRrggbb = text.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
        if (mRrggbb) {
          return [
            parseInt(mRrggbb[1], 16),
            parseInt(mRrggbb[2], 16),
            parseInt(mRrggbb[3], 16),
            mapRange2(parseInt(mRrggbb[4], 16), 0, 255, 0, 1)
          ];
        }
        return null;
      }
      function parseHexRgbaColor(text) {
        const comps = parseHexRgbaColorComponents(text);
        return comps ? new Color2(comps, "rgb", "int") : null;
      }
      function parseObjectRgbColorComponents(text) {
        const m = text.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
        if (!m) {
          return null;
        }
        const comps = [
          parseFloat(m[1]),
          parseFloat(m[2]),
          parseFloat(m[3])
        ];
        if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) {
          return null;
        }
        return comps;
      }
      function createObjectRgbColorParser(type) {
        return (text) => {
          const comps = parseObjectRgbColorComponents(text);
          return comps ? new Color2(comps, "rgb", type) : null;
        };
      }
      function parseObjectRgbaColorComponents(text) {
        const m = text.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
        if (!m) {
          return null;
        }
        const comps = [
          parseFloat(m[1]),
          parseFloat(m[2]),
          parseFloat(m[3]),
          parseFloat(m[4])
        ];
        if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) {
          return null;
        }
        return comps;
      }
      function createObjectRgbaColorParser(type) {
        return (text) => {
          const comps = parseObjectRgbaColorComponents(text);
          return comps ? new Color2(comps, "rgb", type) : null;
        };
      }
      const PARSER_AND_RESULT = [
        {
          parser: parseHexRgbColorComponents,
          result: {
            alpha: false,
            mode: "rgb",
            notation: "hex"
          }
        },
        {
          parser: parseHexRgbaColorComponents,
          result: {
            alpha: true,
            mode: "rgb",
            notation: "hex"
          }
        },
        {
          parser: parseFunctionalRgbColorComponents,
          result: {
            alpha: false,
            mode: "rgb",
            notation: "func"
          }
        },
        {
          parser: parseFunctionalRgbaColorComponents,
          result: {
            alpha: true,
            mode: "rgb",
            notation: "func"
          }
        },
        {
          parser: parseHslColorComponents,
          result: {
            alpha: false,
            mode: "hsl",
            notation: "func"
          }
        },
        {
          parser: parseHslaColorComponents,
          result: {
            alpha: true,
            mode: "hsl",
            notation: "func"
          }
        },
        {
          parser: parseObjectRgbColorComponents,
          result: {
            alpha: false,
            mode: "rgb",
            notation: "object"
          }
        },
        {
          parser: parseObjectRgbaColorComponents,
          result: {
            alpha: true,
            mode: "rgb",
            notation: "object"
          }
        }
      ];
      function detectStringColor(text) {
        return PARSER_AND_RESULT.reduce((prev, { parser, result: detection }) => {
          if (prev) {
            return prev;
          }
          return parser(text) ? detection : null;
        }, null);
      }
      function detectStringColorFormat(text, type = "int") {
        const r = detectStringColor(text);
        if (!r) {
          return null;
        }
        if (r.notation === "hex" && type !== "float") {
          return Object.assign(Object.assign({}, r), { type: "int" });
        }
        if (r.notation === "func") {
          return Object.assign(Object.assign({}, r), { type });
        }
        return null;
      }
      const TYPE_TO_PARSERS = {
        int: [
          parseHexRgbColor,
          parseHexRgbaColor,
          createFunctionalRgbColorParser("int"),
          createFunctionalRgbaColorParser("int"),
          createHslColorParser("int"),
          createHslaColorParser("int"),
          createObjectRgbColorParser("int"),
          createObjectRgbaColorParser("int")
        ],
        float: [
          createFunctionalRgbColorParser("float"),
          createFunctionalRgbaColorParser("float"),
          createHslColorParser("float"),
          createHslaColorParser("float"),
          createObjectRgbColorParser("float"),
          createObjectRgbaColorParser("float")
        ]
      };
      function createColorStringBindingReader(type) {
        const parsers = TYPE_TO_PARSERS[type];
        return (value) => {
          if (typeof value !== "string") {
            return Color2.black(type);
          }
          const result = parsers.reduce((prev, parser) => {
            if (prev) {
              return prev;
            }
            return parser(value);
          }, null);
          return result !== null && result !== void 0 ? result : Color2.black(type);
        };
      }
      function createColorStringParser(type) {
        const parsers = TYPE_TO_PARSERS[type];
        return (value) => {
          return parsers.reduce((prev, parser) => {
            if (prev) {
              return prev;
            }
            return parser(value);
          }, null);
        };
      }
      function zerofill(comp) {
        const hex = constrainRange(Math.floor(comp), 0, 255).toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
      }
      function colorToHexRgbString(value, prefix = "#") {
        const hexes = removeAlphaComponent(value.getComponents("rgb")).map(zerofill).join("");
        return `${prefix}${hexes}`;
      }
      function colorToHexRgbaString(value, prefix = "#") {
        const rgbaComps = value.getComponents("rgb");
        const hexes = [rgbaComps[0], rgbaComps[1], rgbaComps[2], rgbaComps[3] * 255].map(zerofill).join("");
        return `${prefix}${hexes}`;
      }
      function colorToFunctionalRgbString(value, opt_type) {
        const formatter = createNumberFormatter(opt_type === "float" ? 2 : 0);
        const comps = removeAlphaComponent(value.getComponents("rgb", opt_type)).map((comp) => formatter(comp));
        return `rgb(${comps.join(", ")})`;
      }
      function createFunctionalRgbColorFormatter(type) {
        return (value) => {
          return colorToFunctionalRgbString(value, type);
        };
      }
      function colorToFunctionalRgbaString(value, opt_type) {
        const aFormatter = createNumberFormatter(2);
        const rgbFormatter = createNumberFormatter(opt_type === "float" ? 2 : 0);
        const comps = value.getComponents("rgb", opt_type).map((comp, index) => {
          const formatter = index === 3 ? aFormatter : rgbFormatter;
          return formatter(comp);
        });
        return `rgba(${comps.join(", ")})`;
      }
      function createFunctionalRgbaColorFormatter(type) {
        return (value) => {
          return colorToFunctionalRgbaString(value, type);
        };
      }
      function colorToFunctionalHslString(value) {
        const formatters = [
          createNumberFormatter(0),
          formatPercentage,
          formatPercentage
        ];
        const comps = removeAlphaComponent(value.getComponents("hsl")).map((comp, index) => formatters[index](comp));
        return `hsl(${comps.join(", ")})`;
      }
      function colorToFunctionalHslaString(value) {
        const formatters = [
          createNumberFormatter(0),
          formatPercentage,
          formatPercentage,
          createNumberFormatter(2)
        ];
        const comps = value.getComponents("hsl").map((comp, index) => formatters[index](comp));
        return `hsla(${comps.join(", ")})`;
      }
      function colorToObjectRgbString(value, type) {
        const formatter = createNumberFormatter(type === "float" ? 2 : 0);
        const names = ["r", "g", "b"];
        const comps = removeAlphaComponent(value.getComponents("rgb", type)).map((comp, index) => `${names[index]}: ${formatter(comp)}`);
        return `{${comps.join(", ")}}`;
      }
      function createObjectRgbColorFormatter(type) {
        return (value) => colorToObjectRgbString(value, type);
      }
      function colorToObjectRgbaString(value, type) {
        const aFormatter = createNumberFormatter(2);
        const rgbFormatter = createNumberFormatter(type === "float" ? 2 : 0);
        const names = ["r", "g", "b", "a"];
        const comps = value.getComponents("rgb", type).map((comp, index) => {
          const formatter = index === 3 ? aFormatter : rgbFormatter;
          return `${names[index]}: ${formatter(comp)}`;
        });
        return `{${comps.join(", ")}}`;
      }
      function createObjectRgbaColorFormatter(type) {
        return (value) => colorToObjectRgbaString(value, type);
      }
      const FORMAT_AND_STRINGIFIERS = [
        {
          format: {
            alpha: false,
            mode: "rgb",
            notation: "hex",
            type: "int"
          },
          stringifier: colorToHexRgbString
        },
        {
          format: {
            alpha: true,
            mode: "rgb",
            notation: "hex",
            type: "int"
          },
          stringifier: colorToHexRgbaString
        },
        {
          format: {
            alpha: false,
            mode: "hsl",
            notation: "func",
            type: "int"
          },
          stringifier: colorToFunctionalHslString
        },
        {
          format: {
            alpha: true,
            mode: "hsl",
            notation: "func",
            type: "int"
          },
          stringifier: colorToFunctionalHslaString
        },
        ...["int", "float"].reduce((prev, type) => {
          return [
            ...prev,
            {
              format: {
                alpha: false,
                mode: "rgb",
                notation: "func",
                type
              },
              stringifier: createFunctionalRgbColorFormatter(type)
            },
            {
              format: {
                alpha: true,
                mode: "rgb",
                notation: "func",
                type
              },
              stringifier: createFunctionalRgbaColorFormatter(type)
            },
            {
              format: {
                alpha: false,
                mode: "rgb",
                notation: "object",
                type
              },
              stringifier: createObjectRgbColorFormatter(type)
            },
            {
              format: {
                alpha: true,
                mode: "rgb",
                notation: "object",
                type
              },
              stringifier: createObjectRgbaColorFormatter(type)
            }
          ];
        }, [])
      ];
      function findColorStringifier(format) {
        return FORMAT_AND_STRINGIFIERS.reduce((prev, fas) => {
          if (prev) {
            return prev;
          }
          return equalsStringColorFormat(fas.format, format) ? fas.stringifier : null;
        }, null);
      }
      const className$a = ClassName("apl");
      class APaletteView {
        constructor(doc, config) {
          this.onValueChange_ = this.onValueChange_.bind(this);
          this.value = config.value;
          this.value.emitter.on("change", this.onValueChange_);
          this.element = doc.createElement("div");
          this.element.classList.add(className$a());
          config.viewProps.bindClassModifiers(this.element);
          config.viewProps.bindTabIndex(this.element);
          const barElem = doc.createElement("div");
          barElem.classList.add(className$a("b"));
          this.element.appendChild(barElem);
          const colorElem = doc.createElement("div");
          colorElem.classList.add(className$a("c"));
          barElem.appendChild(colorElem);
          this.colorElem_ = colorElem;
          const markerElem = doc.createElement("div");
          markerElem.classList.add(className$a("m"));
          this.element.appendChild(markerElem);
          this.markerElem_ = markerElem;
          const previewElem = doc.createElement("div");
          previewElem.classList.add(className$a("p"));
          this.markerElem_.appendChild(previewElem);
          this.previewElem_ = previewElem;
          this.update_();
        }
        update_() {
          const c = this.value.rawValue;
          const rgbaComps = c.getComponents("rgb");
          const leftColor = new Color2([rgbaComps[0], rgbaComps[1], rgbaComps[2], 0], "rgb");
          const rightColor = new Color2([rgbaComps[0], rgbaComps[1], rgbaComps[2], 255], "rgb");
          const gradientComps = [
            "to right",
            colorToFunctionalRgbaString(leftColor),
            colorToFunctionalRgbaString(rightColor)
          ];
          this.colorElem_.style.background = `linear-gradient(${gradientComps.join(",")})`;
          this.previewElem_.style.backgroundColor = colorToFunctionalRgbaString(c);
          const left = mapRange2(rgbaComps[3], 0, 1, 0, 100);
          this.markerElem_.style.left = `${left}%`;
        }
        onValueChange_() {
          this.update_();
        }
      }
      class APaletteController {
        constructor(doc, config) {
          this.onKeyDown_ = this.onKeyDown_.bind(this);
          this.onKeyUp_ = this.onKeyUp_.bind(this);
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.view = new APaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
          });
          this.ptHandler_ = new PointerHandler(this.view.element);
          this.ptHandler_.emitter.on("down", this.onPointerDown_);
          this.ptHandler_.emitter.on("move", this.onPointerMove_);
          this.ptHandler_.emitter.on("up", this.onPointerUp_);
          this.view.element.addEventListener("keydown", this.onKeyDown_);
          this.view.element.addEventListener("keyup", this.onKeyUp_);
        }
        handlePointerEvent_(d, opts) {
          if (!d.point) {
            return;
          }
          const alpha = d.point.x / d.bounds.width;
          const c = this.value.rawValue;
          const [h, s, v] = c.getComponents("hsv");
          this.value.setRawValue(new Color2([h, s, v, alpha], "hsv"), opts);
        }
        onPointerDown_(ev) {
          this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
          });
        }
        onPointerMove_(ev) {
          this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
          });
        }
        onPointerUp_(ev) {
          this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
          });
        }
        onKeyDown_(ev) {
          const step = getStepForKey(getBaseStepForColor(true), getHorizontalStepKeys(ev));
          if (step === 0) {
            return;
          }
          const c = this.value.rawValue;
          const [h, s, v, a] = c.getComponents("hsv");
          this.value.setRawValue(new Color2([h, s, v, a + step], "hsv"), {
            forceEmit: false,
            last: false
          });
        }
        onKeyUp_(ev) {
          const step = getStepForKey(getBaseStepForColor(true), getHorizontalStepKeys(ev));
          if (step === 0) {
            return;
          }
          this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
          });
        }
      }
      const className$9 = ClassName("coltxt");
      function createModeSelectElement(doc) {
        const selectElem = doc.createElement("select");
        const items = [
          { text: "RGB", value: "rgb" },
          { text: "HSL", value: "hsl" },
          { text: "HSV", value: "hsv" }
        ];
        selectElem.appendChild(items.reduce((frag, item) => {
          const optElem = doc.createElement("option");
          optElem.textContent = item.text;
          optElem.value = item.value;
          frag.appendChild(optElem);
          return frag;
        }, doc.createDocumentFragment()));
        return selectElem;
      }
      class ColorTextView {
        constructor(doc, config) {
          this.element = doc.createElement("div");
          this.element.classList.add(className$9());
          config.viewProps.bindClassModifiers(this.element);
          const modeElem = doc.createElement("div");
          modeElem.classList.add(className$9("m"));
          this.modeElem_ = createModeSelectElement(doc);
          this.modeElem_.classList.add(className$9("ms"));
          modeElem.appendChild(this.modeSelectElement);
          config.viewProps.bindDisabled(this.modeElem_);
          const modeMarkerElem = doc.createElement("div");
          modeMarkerElem.classList.add(className$9("mm"));
          modeMarkerElem.appendChild(createSvgIconElement(doc, "dropdown"));
          modeElem.appendChild(modeMarkerElem);
          this.element.appendChild(modeElem);
          const textsElem = doc.createElement("div");
          textsElem.classList.add(className$9("w"));
          this.element.appendChild(textsElem);
          this.textsElem_ = textsElem;
          this.textViews_ = config.textViews;
          this.applyTextViews_();
          bindValue(config.colorMode, (mode) => {
            this.modeElem_.value = mode;
          });
        }
        get modeSelectElement() {
          return this.modeElem_;
        }
        get textViews() {
          return this.textViews_;
        }
        set textViews(textViews) {
          this.textViews_ = textViews;
          this.applyTextViews_();
        }
        applyTextViews_() {
          removeChildElements(this.textsElem_);
          const doc = this.element.ownerDocument;
          this.textViews_.forEach((v) => {
            const compElem = doc.createElement("div");
            compElem.classList.add(className$9("c"));
            compElem.appendChild(v.element);
            this.textsElem_.appendChild(compElem);
          });
        }
      }
      function createFormatter$2(type) {
        return createNumberFormatter(type === "float" ? 2 : 0);
      }
      function createConstraint$5(mode, type, index) {
        const max = getColorMaxComponents(mode, type)[index];
        return new DefiniteRangeConstraint({
          min: 0,
          max
        });
      }
      function createComponentController(doc, config, index) {
        return new NumberTextController(doc, {
          arrayPosition: index === 0 ? "fst" : index === 3 - 1 ? "lst" : "mid",
          baseStep: getBaseStepForColor(false),
          parser: config.parser,
          props: ValueMap.fromObject({
            draggingScale: config.colorType === "float" ? 0.01 : 1,
            formatter: createFormatter$2(config.colorType)
          }),
          value: createValue(0, {
            constraint: createConstraint$5(config.colorMode, config.colorType, index)
          }),
          viewProps: config.viewProps
        });
      }
      class ColorTextController {
        constructor(doc, config) {
          this.onModeSelectChange_ = this.onModeSelectChange_.bind(this);
          this.colorType_ = config.colorType;
          this.parser_ = config.parser;
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.colorMode = createValue(this.value.rawValue.mode);
          this.ccs_ = this.createComponentControllers_(doc);
          this.view = new ColorTextView(doc, {
            colorMode: this.colorMode,
            textViews: [this.ccs_[0].view, this.ccs_[1].view, this.ccs_[2].view],
            viewProps: this.viewProps
          });
          this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_);
        }
        createComponentControllers_(doc) {
          const cc = {
            colorMode: this.colorMode.rawValue,
            colorType: this.colorType_,
            parser: this.parser_,
            viewProps: this.viewProps
          };
          const ccs = [
            createComponentController(doc, cc, 0),
            createComponentController(doc, cc, 1),
            createComponentController(doc, cc, 2)
          ];
          ccs.forEach((cs, index) => {
            connectValues({
              primary: this.value,
              secondary: cs.value,
              forward: (p) => {
                return p.rawValue.getComponents(this.colorMode.rawValue, this.colorType_)[index];
              },
              backward: (p, s) => {
                const pickedMode = this.colorMode.rawValue;
                const comps = p.rawValue.getComponents(pickedMode, this.colorType_);
                comps[index] = s.rawValue;
                return new Color2(appendAlphaComponent(removeAlphaComponent(comps), comps[3]), pickedMode, this.colorType_);
              }
            });
          });
          return ccs;
        }
        onModeSelectChange_(ev) {
          const selectElem = ev.currentTarget;
          this.colorMode.rawValue = selectElem.value;
          this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument);
          this.view.textViews = [
            this.ccs_[0].view,
            this.ccs_[1].view,
            this.ccs_[2].view
          ];
        }
      }
      const className$8 = ClassName("hpl");
      class HPaletteView {
        constructor(doc, config) {
          this.onValueChange_ = this.onValueChange_.bind(this);
          this.value = config.value;
          this.value.emitter.on("change", this.onValueChange_);
          this.element = doc.createElement("div");
          this.element.classList.add(className$8());
          config.viewProps.bindClassModifiers(this.element);
          config.viewProps.bindTabIndex(this.element);
          const colorElem = doc.createElement("div");
          colorElem.classList.add(className$8("c"));
          this.element.appendChild(colorElem);
          const markerElem = doc.createElement("div");
          markerElem.classList.add(className$8("m"));
          this.element.appendChild(markerElem);
          this.markerElem_ = markerElem;
          this.update_();
        }
        update_() {
          const c = this.value.rawValue;
          const [h] = c.getComponents("hsv");
          this.markerElem_.style.backgroundColor = colorToFunctionalRgbString(new Color2([h, 100, 100], "hsv"));
          const left = mapRange2(h, 0, 360, 0, 100);
          this.markerElem_.style.left = `${left}%`;
        }
        onValueChange_() {
          this.update_();
        }
      }
      class HPaletteController {
        constructor(doc, config) {
          this.onKeyDown_ = this.onKeyDown_.bind(this);
          this.onKeyUp_ = this.onKeyUp_.bind(this);
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.view = new HPaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
          });
          this.ptHandler_ = new PointerHandler(this.view.element);
          this.ptHandler_.emitter.on("down", this.onPointerDown_);
          this.ptHandler_.emitter.on("move", this.onPointerMove_);
          this.ptHandler_.emitter.on("up", this.onPointerUp_);
          this.view.element.addEventListener("keydown", this.onKeyDown_);
          this.view.element.addEventListener("keyup", this.onKeyUp_);
        }
        handlePointerEvent_(d, opts) {
          if (!d.point) {
            return;
          }
          const hue = mapRange2(constrainRange(d.point.x, 0, d.bounds.width), 0, d.bounds.width, 0, 360);
          const c = this.value.rawValue;
          const [, s, v, a] = c.getComponents("hsv");
          this.value.setRawValue(new Color2([hue, s, v, a], "hsv"), opts);
        }
        onPointerDown_(ev) {
          this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
          });
        }
        onPointerMove_(ev) {
          this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
          });
        }
        onPointerUp_(ev) {
          this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
          });
        }
        onKeyDown_(ev) {
          const step = getStepForKey(getBaseStepForColor(false), getHorizontalStepKeys(ev));
          if (step === 0) {
            return;
          }
          const c = this.value.rawValue;
          const [h, s, v, a] = c.getComponents("hsv");
          this.value.setRawValue(new Color2([h + step, s, v, a], "hsv"), {
            forceEmit: false,
            last: false
          });
        }
        onKeyUp_(ev) {
          const step = getStepForKey(getBaseStepForColor(false), getHorizontalStepKeys(ev));
          if (step === 0) {
            return;
          }
          this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
          });
        }
      }
      const className$7 = ClassName("svp");
      const CANVAS_RESOL = 64;
      class SvPaletteView {
        constructor(doc, config) {
          this.onValueChange_ = this.onValueChange_.bind(this);
          this.value = config.value;
          this.value.emitter.on("change", this.onValueChange_);
          this.element = doc.createElement("div");
          this.element.classList.add(className$7());
          config.viewProps.bindClassModifiers(this.element);
          config.viewProps.bindTabIndex(this.element);
          const canvasElem = doc.createElement("canvas");
          canvasElem.height = CANVAS_RESOL;
          canvasElem.width = CANVAS_RESOL;
          canvasElem.classList.add(className$7("c"));
          this.element.appendChild(canvasElem);
          this.canvasElement = canvasElem;
          const markerElem = doc.createElement("div");
          markerElem.classList.add(className$7("m"));
          this.element.appendChild(markerElem);
          this.markerElem_ = markerElem;
          this.update_();
        }
        update_() {
          const ctx = getCanvasContext(this.canvasElement);
          if (!ctx) {
            return;
          }
          const c = this.value.rawValue;
          const hsvComps = c.getComponents("hsv");
          const width = this.canvasElement.width;
          const height = this.canvasElement.height;
          const imgData = ctx.getImageData(0, 0, width, height);
          const data = imgData.data;
          for (let iy = 0; iy < height; iy++) {
            for (let ix = 0; ix < width; ix++) {
              const s = mapRange2(ix, 0, width, 0, 100);
              const v = mapRange2(iy, 0, height, 100, 0);
              const rgbComps = hsvToRgbInt(hsvComps[0], s, v);
              const i = (iy * width + ix) * 4;
              data[i] = rgbComps[0];
              data[i + 1] = rgbComps[1];
              data[i + 2] = rgbComps[2];
              data[i + 3] = 255;
            }
          }
          ctx.putImageData(imgData, 0, 0);
          const left = mapRange2(hsvComps[1], 0, 100, 0, 100);
          this.markerElem_.style.left = `${left}%`;
          const top = mapRange2(hsvComps[2], 0, 100, 100, 0);
          this.markerElem_.style.top = `${top}%`;
        }
        onValueChange_() {
          this.update_();
        }
      }
      class SvPaletteController {
        constructor(doc, config) {
          this.onKeyDown_ = this.onKeyDown_.bind(this);
          this.onKeyUp_ = this.onKeyUp_.bind(this);
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.view = new SvPaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
          });
          this.ptHandler_ = new PointerHandler(this.view.element);
          this.ptHandler_.emitter.on("down", this.onPointerDown_);
          this.ptHandler_.emitter.on("move", this.onPointerMove_);
          this.ptHandler_.emitter.on("up", this.onPointerUp_);
          this.view.element.addEventListener("keydown", this.onKeyDown_);
          this.view.element.addEventListener("keyup", this.onKeyUp_);
        }
        handlePointerEvent_(d, opts) {
          if (!d.point) {
            return;
          }
          const saturation = mapRange2(d.point.x, 0, d.bounds.width, 0, 100);
          const value = mapRange2(d.point.y, 0, d.bounds.height, 100, 0);
          const [h, , , a] = this.value.rawValue.getComponents("hsv");
          this.value.setRawValue(new Color2([h, saturation, value, a], "hsv"), opts);
        }
        onPointerDown_(ev) {
          this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
          });
        }
        onPointerMove_(ev) {
          this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
          });
        }
        onPointerUp_(ev) {
          this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
          });
        }
        onKeyDown_(ev) {
          if (isArrowKey(ev.key)) {
            ev.preventDefault();
          }
          const [h, s, v, a] = this.value.rawValue.getComponents("hsv");
          const baseStep = getBaseStepForColor(false);
          const ds = getStepForKey(baseStep, getHorizontalStepKeys(ev));
          const dv = getStepForKey(baseStep, getVerticalStepKeys(ev));
          if (ds === 0 && dv === 0) {
            return;
          }
          this.value.setRawValue(new Color2([h, s + ds, v + dv, a], "hsv"), {
            forceEmit: false,
            last: false
          });
        }
        onKeyUp_(ev) {
          const baseStep = getBaseStepForColor(false);
          const ds = getStepForKey(baseStep, getHorizontalStepKeys(ev));
          const dv = getStepForKey(baseStep, getVerticalStepKeys(ev));
          if (ds === 0 && dv === 0) {
            return;
          }
          this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
          });
        }
      }
      class ColorPickerController {
        constructor(doc, config) {
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.hPaletteC_ = new HPaletteController(doc, {
            value: this.value,
            viewProps: this.viewProps
          });
          this.svPaletteC_ = new SvPaletteController(doc, {
            value: this.value,
            viewProps: this.viewProps
          });
          this.alphaIcs_ = config.supportsAlpha ? {
            palette: new APaletteController(doc, {
              value: this.value,
              viewProps: this.viewProps
            }),
            text: new NumberTextController(doc, {
              parser: parseNumber,
              baseStep: 0.1,
              props: ValueMap.fromObject({
                draggingScale: 0.01,
                formatter: createNumberFormatter(2)
              }),
              value: createValue(0, {
                constraint: new DefiniteRangeConstraint({ min: 0, max: 1 })
              }),
              viewProps: this.viewProps
            })
          } : null;
          if (this.alphaIcs_) {
            connectValues({
              primary: this.value,
              secondary: this.alphaIcs_.text.value,
              forward: (p) => {
                return p.rawValue.getComponents()[3];
              },
              backward: (p, s) => {
                const comps = p.rawValue.getComponents();
                comps[3] = s.rawValue;
                return new Color2(comps, p.rawValue.mode);
              }
            });
          }
          this.textC_ = new ColorTextController(doc, {
            colorType: config.colorType,
            parser: parseNumber,
            value: this.value,
            viewProps: this.viewProps
          });
          this.view = new ColorPickerView(doc, {
            alphaViews: this.alphaIcs_ ? {
              palette: this.alphaIcs_.palette.view,
              text: this.alphaIcs_.text.view
            } : null,
            hPaletteView: this.hPaletteC_.view,
            supportsAlpha: config.supportsAlpha,
            svPaletteView: this.svPaletteC_.view,
            textView: this.textC_.view,
            viewProps: this.viewProps
          });
        }
        get textController() {
          return this.textC_;
        }
      }
      const className$6 = ClassName("colsw");
      class ColorSwatchView {
        constructor(doc, config) {
          this.onValueChange_ = this.onValueChange_.bind(this);
          config.value.emitter.on("change", this.onValueChange_);
          this.value = config.value;
          this.element = doc.createElement("div");
          this.element.classList.add(className$6());
          config.viewProps.bindClassModifiers(this.element);
          const swatchElem = doc.createElement("div");
          swatchElem.classList.add(className$6("sw"));
          this.element.appendChild(swatchElem);
          this.swatchElem_ = swatchElem;
          const buttonElem = doc.createElement("button");
          buttonElem.classList.add(className$6("b"));
          config.viewProps.bindDisabled(buttonElem);
          this.element.appendChild(buttonElem);
          this.buttonElement = buttonElem;
          this.update_();
        }
        update_() {
          const value = this.value.rawValue;
          this.swatchElem_.style.backgroundColor = colorToHexRgbaString(value);
        }
        onValueChange_() {
          this.update_();
        }
      }
      class ColorSwatchController {
        constructor(doc, config) {
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.view = new ColorSwatchView(doc, {
            value: this.value,
            viewProps: this.viewProps
          });
        }
      }
      class ColorController {
        constructor(doc, config) {
          this.onButtonBlur_ = this.onButtonBlur_.bind(this);
          this.onButtonClick_ = this.onButtonClick_.bind(this);
          this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
          this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.foldable_ = Foldable.create(config.expanded);
          this.swatchC_ = new ColorSwatchController(doc, {
            value: this.value,
            viewProps: this.viewProps
          });
          const buttonElem = this.swatchC_.view.buttonElement;
          buttonElem.addEventListener("blur", this.onButtonBlur_);
          buttonElem.addEventListener("click", this.onButtonClick_);
          this.textC_ = new TextController(doc, {
            parser: config.parser,
            props: ValueMap.fromObject({
              formatter: config.formatter
            }),
            value: this.value,
            viewProps: this.viewProps
          });
          this.view = new ColorView(doc, {
            foldable: this.foldable_,
            pickerLayout: config.pickerLayout
          });
          this.view.swatchElement.appendChild(this.swatchC_.view.element);
          this.view.textElement.appendChild(this.textC_.view.element);
          this.popC_ = config.pickerLayout === "popup" ? new PopupController(doc, {
            viewProps: this.viewProps
          }) : null;
          const pickerC = new ColorPickerController(doc, {
            colorType: config.colorType,
            supportsAlpha: config.supportsAlpha,
            value: this.value,
            viewProps: this.viewProps
          });
          pickerC.view.allFocusableElements.forEach((elem) => {
            elem.addEventListener("blur", this.onPopupChildBlur_);
            elem.addEventListener("keydown", this.onPopupChildKeydown_);
          });
          this.pickerC_ = pickerC;
          if (this.popC_) {
            this.view.element.appendChild(this.popC_.view.element);
            this.popC_.view.element.appendChild(pickerC.view.element);
            connectValues({
              primary: this.foldable_.value("expanded"),
              secondary: this.popC_.shows,
              forward: (p) => p.rawValue,
              backward: (_, s) => s.rawValue
            });
          } else if (this.view.pickerElement) {
            this.view.pickerElement.appendChild(this.pickerC_.view.element);
            bindFoldable(this.foldable_, this.view.pickerElement);
          }
        }
        get textController() {
          return this.textC_;
        }
        onButtonBlur_(e) {
          if (!this.popC_) {
            return;
          }
          const elem = this.view.element;
          const nextTarget = forceCast(e.relatedTarget);
          if (!nextTarget || !elem.contains(nextTarget)) {
            this.popC_.shows.rawValue = false;
          }
        }
        onButtonClick_() {
          this.foldable_.set("expanded", !this.foldable_.get("expanded"));
          if (this.foldable_.get("expanded")) {
            this.pickerC_.view.allFocusableElements[0].focus();
          }
        }
        onPopupChildBlur_(ev) {
          if (!this.popC_) {
            return;
          }
          const elem = this.popC_.view.element;
          const nextTarget = findNextTarget(ev);
          if (nextTarget && elem.contains(nextTarget)) {
            return;
          }
          if (nextTarget && nextTarget === this.swatchC_.view.buttonElement && !supportsTouch(elem.ownerDocument)) {
            return;
          }
          this.popC_.shows.rawValue = false;
        }
        onPopupChildKeydown_(ev) {
          if (this.popC_) {
            if (ev.key === "Escape") {
              this.popC_.shows.rawValue = false;
            }
          } else if (this.view.pickerElement) {
            if (ev.key === "Escape") {
              this.swatchC_.view.buttonElement.focus();
            }
          }
        }
      }
      function colorFromObject(value, opt_type) {
        if (Color2.isColorObject(value)) {
          return Color2.fromObject(value, opt_type);
        }
        return Color2.black(opt_type);
      }
      function colorToRgbNumber(value) {
        return removeAlphaComponent(value.getComponents("rgb")).reduce((result, comp) => {
          return result << 8 | Math.floor(comp) & 255;
        }, 0);
      }
      function colorToRgbaNumber(value) {
        return value.getComponents("rgb").reduce((result, comp, index) => {
          const hex = Math.floor(index === 3 ? comp * 255 : comp) & 255;
          return result << 8 | hex;
        }, 0) >>> 0;
      }
      function numberToRgbColor(num) {
        return new Color2([num >> 16 & 255, num >> 8 & 255, num & 255], "rgb");
      }
      function numberToRgbaColor(num) {
        return new Color2([
          num >> 24 & 255,
          num >> 16 & 255,
          num >> 8 & 255,
          mapRange2(num & 255, 0, 255, 0, 1)
        ], "rgb");
      }
      function colorFromRgbNumber(value) {
        if (typeof value !== "number") {
          return Color2.black();
        }
        return numberToRgbColor(value);
      }
      function colorFromRgbaNumber(value) {
        if (typeof value !== "number") {
          return Color2.black();
        }
        return numberToRgbaColor(value);
      }
      function createColorStringWriter(format) {
        const stringify = findColorStringifier(format);
        return stringify ? (target, value) => {
          writePrimitive(target, stringify(value));
        } : null;
      }
      function createColorNumberWriter(supportsAlpha) {
        const colorToNumber = supportsAlpha ? colorToRgbaNumber : colorToRgbNumber;
        return (target, value) => {
          writePrimitive(target, colorToNumber(value));
        };
      }
      function writeRgbaColorObject(target, value, opt_type) {
        const obj = value.toRgbaObject(opt_type);
        target.writeProperty("r", obj.r);
        target.writeProperty("g", obj.g);
        target.writeProperty("b", obj.b);
        target.writeProperty("a", obj.a);
      }
      function writeRgbColorObject(target, value, opt_type) {
        const obj = value.toRgbaObject(opt_type);
        target.writeProperty("r", obj.r);
        target.writeProperty("g", obj.g);
        target.writeProperty("b", obj.b);
      }
      function createColorObjectWriter(supportsAlpha, opt_type) {
        return (target, inValue) => {
          if (supportsAlpha) {
            writeRgbaColorObject(target, inValue, opt_type);
          } else {
            writeRgbColorObject(target, inValue, opt_type);
          }
        };
      }
      function shouldSupportAlpha$1(inputParams) {
        var _a;
        if ((inputParams === null || inputParams === void 0 ? void 0 : inputParams.alpha) || ((_a = inputParams === null || inputParams === void 0 ? void 0 : inputParams.color) === null || _a === void 0 ? void 0 : _a.alpha)) {
          return true;
        }
        return false;
      }
      function createFormatter$1(supportsAlpha) {
        return supportsAlpha ? (v) => colorToHexRgbaString(v, "0x") : (v) => colorToHexRgbString(v, "0x");
      }
      function isForColor(params) {
        if ("color" in params) {
          return true;
        }
        if ("view" in params && params.view === "color") {
          return true;
        }
        return false;
      }
      const NumberColorInputPlugin = {
        id: "input-color-number",
        type: "input",
        accept: (value, params) => {
          if (typeof value !== "number") {
            return null;
          }
          if (!isForColor(params)) {
            return null;
          }
          const result = parseColorInputParams(params);
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: (args) => {
            return shouldSupportAlpha$1(args.params) ? colorFromRgbaNumber : colorFromRgbNumber;
          },
          equals: Color2.equals,
          writer: (args) => {
            return createColorNumberWriter(shouldSupportAlpha$1(args.params));
          }
        },
        controller: (args) => {
          const supportsAlpha = shouldSupportAlpha$1(args.params);
          const expanded = "expanded" in args.params ? args.params.expanded : void 0;
          const picker = "picker" in args.params ? args.params.picker : void 0;
          return new ColorController(args.document, {
            colorType: "int",
            expanded: expanded !== null && expanded !== void 0 ? expanded : false,
            formatter: createFormatter$1(supportsAlpha),
            parser: createColorStringParser("int"),
            pickerLayout: picker !== null && picker !== void 0 ? picker : "popup",
            supportsAlpha,
            value: args.value,
            viewProps: args.viewProps
          });
        }
      };
      function shouldSupportAlpha(initialValue) {
        return Color2.isRgbaColorObject(initialValue);
      }
      function createColorObjectReader(opt_type) {
        return (value) => {
          return colorFromObject(value, opt_type);
        };
      }
      function createColorObjectFormatter(supportsAlpha, type) {
        return (value) => {
          if (supportsAlpha) {
            return colorToObjectRgbaString(value, type);
          }
          return colorToObjectRgbString(value, type);
        };
      }
      const ObjectColorInputPlugin = {
        id: "input-color-object",
        type: "input",
        accept: (value, params) => {
          if (!Color2.isColorObject(value)) {
            return null;
          }
          const result = parseColorInputParams(params);
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: (args) => createColorObjectReader(extractColorType(args.params)),
          equals: Color2.equals,
          writer: (args) => createColorObjectWriter(shouldSupportAlpha(args.initialValue), extractColorType(args.params))
        },
        controller: (args) => {
          var _a;
          const supportsAlpha = Color2.isRgbaColorObject(args.initialValue);
          const expanded = "expanded" in args.params ? args.params.expanded : void 0;
          const picker = "picker" in args.params ? args.params.picker : void 0;
          const type = (_a = extractColorType(args.params)) !== null && _a !== void 0 ? _a : "int";
          return new ColorController(args.document, {
            colorType: type,
            expanded: expanded !== null && expanded !== void 0 ? expanded : false,
            formatter: createColorObjectFormatter(supportsAlpha, type),
            parser: createColorStringParser(type),
            pickerLayout: picker !== null && picker !== void 0 ? picker : "popup",
            supportsAlpha,
            value: args.value,
            viewProps: args.viewProps
          });
        }
      };
      const StringColorInputPlugin = {
        id: "input-color-string",
        type: "input",
        accept: (value, params) => {
          if (typeof value !== "string") {
            return null;
          }
          if ("view" in params && params.view === "text") {
            return null;
          }
          const format = detectStringColorFormat(value, extractColorType(params));
          if (!format) {
            return null;
          }
          const stringifier = findColorStringifier(format);
          if (!stringifier) {
            return null;
          }
          const result = parseColorInputParams(params);
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: (args) => {
            var _a;
            return createColorStringBindingReader((_a = extractColorType(args.params)) !== null && _a !== void 0 ? _a : "int");
          },
          equals: Color2.equals,
          writer: (args) => {
            const format = detectStringColorFormat(args.initialValue, extractColorType(args.params));
            if (!format) {
              throw TpError.shouldNeverHappen();
            }
            const writer = createColorStringWriter(format);
            if (!writer) {
              throw TpError.notBindable();
            }
            return writer;
          }
        },
        controller: (args) => {
          const format = detectStringColorFormat(args.initialValue, extractColorType(args.params));
          if (!format) {
            throw TpError.shouldNeverHappen();
          }
          const stringifier = findColorStringifier(format);
          if (!stringifier) {
            throw TpError.shouldNeverHappen();
          }
          const expanded = "expanded" in args.params ? args.params.expanded : void 0;
          const picker = "picker" in args.params ? args.params.picker : void 0;
          return new ColorController(args.document, {
            colorType: format.type,
            expanded: expanded !== null && expanded !== void 0 ? expanded : false,
            formatter: stringifier,
            parser: createColorStringParser(format.type),
            pickerLayout: picker !== null && picker !== void 0 ? picker : "popup",
            supportsAlpha: format.alpha,
            value: args.value,
            viewProps: args.viewProps
          });
        }
      };
      class PointNdConstraint {
        constructor(config) {
          this.components = config.components;
          this.asm_ = config.assembly;
        }
        constrain(value) {
          const comps = this.asm_.toComponents(value).map((comp, index) => {
            var _a, _b;
            return (_b = (_a = this.components[index]) === null || _a === void 0 ? void 0 : _a.constrain(comp)) !== null && _b !== void 0 ? _b : comp;
          });
          return this.asm_.fromComponents(comps);
        }
      }
      const className$5 = ClassName("pndtxt");
      class PointNdTextView {
        constructor(doc, config) {
          this.textViews = config.textViews;
          this.element = doc.createElement("div");
          this.element.classList.add(className$5());
          this.textViews.forEach((v) => {
            const axisElem = doc.createElement("div");
            axisElem.classList.add(className$5("a"));
            axisElem.appendChild(v.element);
            this.element.appendChild(axisElem);
          });
        }
      }
      function createAxisController(doc, config, index) {
        return new NumberTextController(doc, {
          arrayPosition: index === 0 ? "fst" : index === config.axes.length - 1 ? "lst" : "mid",
          baseStep: config.axes[index].baseStep,
          parser: config.parser,
          props: config.axes[index].textProps,
          value: createValue(0, {
            constraint: config.axes[index].constraint
          }),
          viewProps: config.viewProps
        });
      }
      class PointNdTextController {
        constructor(doc, config) {
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.acs_ = config.axes.map((_, index) => createAxisController(doc, config, index));
          this.acs_.forEach((c, index) => {
            connectValues({
              primary: this.value,
              secondary: c.value,
              forward: (p) => {
                return config.assembly.toComponents(p.rawValue)[index];
              },
              backward: (p, s) => {
                const comps = config.assembly.toComponents(p.rawValue);
                comps[index] = s.rawValue;
                return config.assembly.fromComponents(comps);
              }
            });
          });
          this.view = new PointNdTextView(doc, {
            textViews: this.acs_.map((ac) => ac.view)
          });
        }
      }
      function createStepConstraint(params, initialValue) {
        if ("step" in params && !isEmpty(params.step)) {
          return new StepConstraint(params.step, initialValue);
        }
        return null;
      }
      function createRangeConstraint(params) {
        if (!isEmpty(params.max) && !isEmpty(params.min)) {
          return new DefiniteRangeConstraint({
            max: params.max,
            min: params.min
          });
        }
        if (!isEmpty(params.max) || !isEmpty(params.min)) {
          return new RangeConstraint({
            max: params.max,
            min: params.min
          });
        }
        return null;
      }
      function findNumberRange(c) {
        const drc = findConstraint(c, DefiniteRangeConstraint);
        if (drc) {
          return [drc.values.get("min"), drc.values.get("max")];
        }
        const rc = findConstraint(c, RangeConstraint);
        if (rc) {
          return [rc.minValue, rc.maxValue];
        }
        return [void 0, void 0];
      }
      function createConstraint$4(params, initialValue) {
        const constraints = [];
        const sc = createStepConstraint(params, initialValue);
        if (sc) {
          constraints.push(sc);
        }
        const rc = createRangeConstraint(params);
        if (rc) {
          constraints.push(rc);
        }
        const lc = createListConstraint(params.options);
        if (lc) {
          constraints.push(lc);
        }
        return new CompositeConstraint(constraints);
      }
      const NumberInputPlugin = {
        id: "input-number",
        type: "input",
        accept: (value, params) => {
          if (typeof value !== "number") {
            return null;
          }
          const p = ParamsParsers;
          const result = parseParams(params, {
            format: p.optional.function,
            max: p.optional.number,
            min: p.optional.number,
            options: p.optional.custom(parseListOptions),
            step: p.optional.number
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: (_args) => numberFromUnknown,
          constraint: (args) => createConstraint$4(args.params, args.initialValue),
          writer: (_args) => writePrimitive
        },
        controller: (args) => {
          var _a;
          const value = args.value;
          const c = args.constraint;
          const lc = c && findConstraint(c, ListConstraint);
          if (lc) {
            return new ListController(args.document, {
              props: new ValueMap({
                options: lc.values.value("options")
              }),
              value,
              viewProps: args.viewProps
            });
          }
          const formatter = (_a = "format" in args.params ? args.params.format : void 0) !== null && _a !== void 0 ? _a : createNumberFormatter(getSuitableDecimalDigits(c, value.rawValue));
          const drc = c && findConstraint(c, DefiniteRangeConstraint);
          if (drc) {
            return new SliderTextController(args.document, {
              baseStep: getBaseStep(c),
              parser: parseNumber,
              sliderProps: new ValueMap({
                maxValue: drc.values.value("max"),
                minValue: drc.values.value("min")
              }),
              textProps: ValueMap.fromObject({
                draggingScale: getSuitableDraggingScale(c, value.rawValue),
                formatter
              }),
              value,
              viewProps: args.viewProps
            });
          }
          return new NumberTextController(args.document, {
            baseStep: getBaseStep(c),
            parser: parseNumber,
            props: ValueMap.fromObject({
              draggingScale: getSuitableDraggingScale(c, value.rawValue),
              formatter
            }),
            value,
            viewProps: args.viewProps
          });
        }
      };
      class Point2d {
        constructor(x = 0, y = 0) {
          this.x = x;
          this.y = y;
        }
        getComponents() {
          return [this.x, this.y];
        }
        static isObject(obj) {
          if (isEmpty(obj)) {
            return false;
          }
          const x = obj.x;
          const y = obj.y;
          if (typeof x !== "number" || typeof y !== "number") {
            return false;
          }
          return true;
        }
        static equals(v1, v2) {
          return v1.x === v2.x && v1.y === v2.y;
        }
        toObject() {
          return {
            x: this.x,
            y: this.y
          };
        }
      }
      const Point2dAssembly = {
        toComponents: (p) => p.getComponents(),
        fromComponents: (comps) => new Point2d(...comps)
      };
      const className$4 = ClassName("p2d");
      class Point2dView {
        constructor(doc, config) {
          this.element = doc.createElement("div");
          this.element.classList.add(className$4());
          config.viewProps.bindClassModifiers(this.element);
          bindValue(config.expanded, valueToClassName(this.element, className$4(void 0, "expanded")));
          const headElem = doc.createElement("div");
          headElem.classList.add(className$4("h"));
          this.element.appendChild(headElem);
          const buttonElem = doc.createElement("button");
          buttonElem.classList.add(className$4("b"));
          buttonElem.appendChild(createSvgIconElement(doc, "p2dpad"));
          config.viewProps.bindDisabled(buttonElem);
          headElem.appendChild(buttonElem);
          this.buttonElement = buttonElem;
          const textElem = doc.createElement("div");
          textElem.classList.add(className$4("t"));
          headElem.appendChild(textElem);
          this.textElement = textElem;
          if (config.pickerLayout === "inline") {
            const pickerElem = doc.createElement("div");
            pickerElem.classList.add(className$4("p"));
            this.element.appendChild(pickerElem);
            this.pickerElement = pickerElem;
          } else {
            this.pickerElement = null;
          }
        }
      }
      const className$3 = ClassName("p2dp");
      class Point2dPickerView {
        constructor(doc, config) {
          this.onFoldableChange_ = this.onFoldableChange_.bind(this);
          this.onValueChange_ = this.onValueChange_.bind(this);
          this.invertsY_ = config.invertsY;
          this.maxValue_ = config.maxValue;
          this.element = doc.createElement("div");
          this.element.classList.add(className$3());
          if (config.layout === "popup") {
            this.element.classList.add(className$3(void 0, "p"));
          }
          config.viewProps.bindClassModifiers(this.element);
          const padElem = doc.createElement("div");
          padElem.classList.add(className$3("p"));
          config.viewProps.bindTabIndex(padElem);
          this.element.appendChild(padElem);
          this.padElement = padElem;
          const svgElem = doc.createElementNS(SVG_NS, "svg");
          svgElem.classList.add(className$3("g"));
          this.padElement.appendChild(svgElem);
          this.svgElem_ = svgElem;
          const xAxisElem = doc.createElementNS(SVG_NS, "line");
          xAxisElem.classList.add(className$3("ax"));
          xAxisElem.setAttributeNS(null, "x1", "0");
          xAxisElem.setAttributeNS(null, "y1", "50%");
          xAxisElem.setAttributeNS(null, "x2", "100%");
          xAxisElem.setAttributeNS(null, "y2", "50%");
          this.svgElem_.appendChild(xAxisElem);
          const yAxisElem = doc.createElementNS(SVG_NS, "line");
          yAxisElem.classList.add(className$3("ax"));
          yAxisElem.setAttributeNS(null, "x1", "50%");
          yAxisElem.setAttributeNS(null, "y1", "0");
          yAxisElem.setAttributeNS(null, "x2", "50%");
          yAxisElem.setAttributeNS(null, "y2", "100%");
          this.svgElem_.appendChild(yAxisElem);
          const lineElem = doc.createElementNS(SVG_NS, "line");
          lineElem.classList.add(className$3("l"));
          lineElem.setAttributeNS(null, "x1", "50%");
          lineElem.setAttributeNS(null, "y1", "50%");
          this.svgElem_.appendChild(lineElem);
          this.lineElem_ = lineElem;
          const markerElem = doc.createElement("div");
          markerElem.classList.add(className$3("m"));
          this.padElement.appendChild(markerElem);
          this.markerElem_ = markerElem;
          config.value.emitter.on("change", this.onValueChange_);
          this.value = config.value;
          this.update_();
        }
        get allFocusableElements() {
          return [this.padElement];
        }
        update_() {
          const [x, y] = this.value.rawValue.getComponents();
          const max = this.maxValue_;
          const px = mapRange2(x, -max, +max, 0, 100);
          const py = mapRange2(y, -max, +max, 0, 100);
          const ipy = this.invertsY_ ? 100 - py : py;
          this.lineElem_.setAttributeNS(null, "x2", `${px}%`);
          this.lineElem_.setAttributeNS(null, "y2", `${ipy}%`);
          this.markerElem_.style.left = `${px}%`;
          this.markerElem_.style.top = `${ipy}%`;
        }
        onValueChange_() {
          this.update_();
        }
        onFoldableChange_() {
          this.update_();
        }
      }
      function computeOffset(ev, baseSteps, invertsY) {
        return [
          getStepForKey(baseSteps[0], getHorizontalStepKeys(ev)),
          getStepForKey(baseSteps[1], getVerticalStepKeys(ev)) * (invertsY ? 1 : -1)
        ];
      }
      class Point2dPickerController {
        constructor(doc, config) {
          this.onPadKeyDown_ = this.onPadKeyDown_.bind(this);
          this.onPadKeyUp_ = this.onPadKeyUp_.bind(this);
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.baseSteps_ = config.baseSteps;
          this.maxValue_ = config.maxValue;
          this.invertsY_ = config.invertsY;
          this.view = new Point2dPickerView(doc, {
            invertsY: this.invertsY_,
            layout: config.layout,
            maxValue: this.maxValue_,
            value: this.value,
            viewProps: this.viewProps
          });
          this.ptHandler_ = new PointerHandler(this.view.padElement);
          this.ptHandler_.emitter.on("down", this.onPointerDown_);
          this.ptHandler_.emitter.on("move", this.onPointerMove_);
          this.ptHandler_.emitter.on("up", this.onPointerUp_);
          this.view.padElement.addEventListener("keydown", this.onPadKeyDown_);
          this.view.padElement.addEventListener("keyup", this.onPadKeyUp_);
        }
        handlePointerEvent_(d, opts) {
          if (!d.point) {
            return;
          }
          const max = this.maxValue_;
          const px = mapRange2(d.point.x, 0, d.bounds.width, -max, +max);
          const py = mapRange2(this.invertsY_ ? d.bounds.height - d.point.y : d.point.y, 0, d.bounds.height, -max, +max);
          this.value.setRawValue(new Point2d(px, py), opts);
        }
        onPointerDown_(ev) {
          this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
          });
        }
        onPointerMove_(ev) {
          this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
          });
        }
        onPointerUp_(ev) {
          this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
          });
        }
        onPadKeyDown_(ev) {
          if (isArrowKey(ev.key)) {
            ev.preventDefault();
          }
          const [dx, dy] = computeOffset(ev, this.baseSteps_, this.invertsY_);
          if (dx === 0 && dy === 0) {
            return;
          }
          this.value.setRawValue(new Point2d(this.value.rawValue.x + dx, this.value.rawValue.y + dy), {
            forceEmit: false,
            last: false
          });
        }
        onPadKeyUp_(ev) {
          const [dx, dy] = computeOffset(ev, this.baseSteps_, this.invertsY_);
          if (dx === 0 && dy === 0) {
            return;
          }
          this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
          });
        }
      }
      class Point2dController {
        constructor(doc, config) {
          var _a, _b;
          this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
          this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
          this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this);
          this.onPadButtonClick_ = this.onPadButtonClick_.bind(this);
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.foldable_ = Foldable.create(config.expanded);
          this.popC_ = config.pickerLayout === "popup" ? new PopupController(doc, {
            viewProps: this.viewProps
          }) : null;
          const padC = new Point2dPickerController(doc, {
            baseSteps: [config.axes[0].baseStep, config.axes[1].baseStep],
            invertsY: config.invertsY,
            layout: config.pickerLayout,
            maxValue: config.maxValue,
            value: this.value,
            viewProps: this.viewProps
          });
          padC.view.allFocusableElements.forEach((elem) => {
            elem.addEventListener("blur", this.onPopupChildBlur_);
            elem.addEventListener("keydown", this.onPopupChildKeydown_);
          });
          this.pickerC_ = padC;
          this.textC_ = new PointNdTextController(doc, {
            assembly: Point2dAssembly,
            axes: config.axes,
            parser: config.parser,
            value: this.value,
            viewProps: this.viewProps
          });
          this.view = new Point2dView(doc, {
            expanded: this.foldable_.value("expanded"),
            pickerLayout: config.pickerLayout,
            viewProps: this.viewProps
          });
          this.view.textElement.appendChild(this.textC_.view.element);
          (_a = this.view.buttonElement) === null || _a === void 0 ? void 0 : _a.addEventListener("blur", this.onPadButtonBlur_);
          (_b = this.view.buttonElement) === null || _b === void 0 ? void 0 : _b.addEventListener("click", this.onPadButtonClick_);
          if (this.popC_) {
            this.view.element.appendChild(this.popC_.view.element);
            this.popC_.view.element.appendChild(this.pickerC_.view.element);
            connectValues({
              primary: this.foldable_.value("expanded"),
              secondary: this.popC_.shows,
              forward: (p) => p.rawValue,
              backward: (_, s) => s.rawValue
            });
          } else if (this.view.pickerElement) {
            this.view.pickerElement.appendChild(this.pickerC_.view.element);
            bindFoldable(this.foldable_, this.view.pickerElement);
          }
        }
        onPadButtonBlur_(e) {
          if (!this.popC_) {
            return;
          }
          const elem = this.view.element;
          const nextTarget = forceCast(e.relatedTarget);
          if (!nextTarget || !elem.contains(nextTarget)) {
            this.popC_.shows.rawValue = false;
          }
        }
        onPadButtonClick_() {
          this.foldable_.set("expanded", !this.foldable_.get("expanded"));
          if (this.foldable_.get("expanded")) {
            this.pickerC_.view.allFocusableElements[0].focus();
          }
        }
        onPopupChildBlur_(ev) {
          if (!this.popC_) {
            return;
          }
          const elem = this.popC_.view.element;
          const nextTarget = findNextTarget(ev);
          if (nextTarget && elem.contains(nextTarget)) {
            return;
          }
          if (nextTarget && nextTarget === this.view.buttonElement && !supportsTouch(elem.ownerDocument)) {
            return;
          }
          this.popC_.shows.rawValue = false;
        }
        onPopupChildKeydown_(ev) {
          if (this.popC_) {
            if (ev.key === "Escape") {
              this.popC_.shows.rawValue = false;
            }
          } else if (this.view.pickerElement) {
            if (ev.key === "Escape") {
              this.view.buttonElement.focus();
            }
          }
        }
      }
      class Point3d {
        constructor(x = 0, y = 0, z = 0) {
          this.x = x;
          this.y = y;
          this.z = z;
        }
        getComponents() {
          return [this.x, this.y, this.z];
        }
        static isObject(obj) {
          if (isEmpty(obj)) {
            return false;
          }
          const x = obj.x;
          const y = obj.y;
          const z = obj.z;
          if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") {
            return false;
          }
          return true;
        }
        static equals(v1, v2) {
          return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
        }
        toObject() {
          return {
            x: this.x,
            y: this.y,
            z: this.z
          };
        }
      }
      const Point3dAssembly = {
        toComponents: (p) => p.getComponents(),
        fromComponents: (comps) => new Point3d(...comps)
      };
      function point3dFromUnknown(value) {
        return Point3d.isObject(value) ? new Point3d(value.x, value.y, value.z) : new Point3d();
      }
      function writePoint3d(target, value) {
        target.writeProperty("x", value.x);
        target.writeProperty("y", value.y);
        target.writeProperty("z", value.z);
      }
      function createConstraint$3(params, initialValue) {
        return new PointNdConstraint({
          assembly: Point3dAssembly,
          components: [
            createDimensionConstraint("x" in params ? params.x : void 0, initialValue.x),
            createDimensionConstraint("y" in params ? params.y : void 0, initialValue.y),
            createDimensionConstraint("z" in params ? params.z : void 0, initialValue.z)
          ]
        });
      }
      function createAxis$2(initialValue, constraint) {
        return {
          baseStep: getBaseStep(constraint),
          constraint,
          textProps: ValueMap.fromObject({
            draggingScale: getSuitableDraggingScale(constraint, initialValue),
            formatter: createNumberFormatter(getSuitableDecimalDigits(constraint, initialValue))
          })
        };
      }
      const Point3dInputPlugin = {
        id: "input-point3d",
        type: "input",
        accept: (value, params) => {
          if (!Point3d.isObject(value)) {
            return null;
          }
          const p = ParamsParsers;
          const result = parseParams(params, {
            x: p.optional.custom(parsePointDimensionParams),
            y: p.optional.custom(parsePointDimensionParams),
            z: p.optional.custom(parsePointDimensionParams)
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: (_args) => point3dFromUnknown,
          constraint: (args) => createConstraint$3(args.params, args.initialValue),
          equals: Point3d.equals,
          writer: (_args) => writePoint3d
        },
        controller: (args) => {
          const value = args.value;
          const c = args.constraint;
          if (!(c instanceof PointNdConstraint)) {
            throw TpError.shouldNeverHappen();
          }
          return new PointNdTextController(args.document, {
            assembly: Point3dAssembly,
            axes: [
              createAxis$2(value.rawValue.x, c.components[0]),
              createAxis$2(value.rawValue.y, c.components[1]),
              createAxis$2(value.rawValue.z, c.components[2])
            ],
            parser: parseNumber,
            value,
            viewProps: args.viewProps
          });
        }
      };
      class Point4d {
        constructor(x = 0, y = 0, z = 0, w = 0) {
          this.x = x;
          this.y = y;
          this.z = z;
          this.w = w;
        }
        getComponents() {
          return [this.x, this.y, this.z, this.w];
        }
        static isObject(obj) {
          if (isEmpty(obj)) {
            return false;
          }
          const x = obj.x;
          const y = obj.y;
          const z = obj.z;
          const w = obj.w;
          if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number" || typeof w !== "number") {
            return false;
          }
          return true;
        }
        static equals(v1, v2) {
          return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z && v1.w === v2.w;
        }
        toObject() {
          return {
            x: this.x,
            y: this.y,
            z: this.z,
            w: this.w
          };
        }
      }
      const Point4dAssembly = {
        toComponents: (p) => p.getComponents(),
        fromComponents: (comps) => new Point4d(...comps)
      };
      function point4dFromUnknown(value) {
        return Point4d.isObject(value) ? new Point4d(value.x, value.y, value.z, value.w) : new Point4d();
      }
      function writePoint4d(target, value) {
        target.writeProperty("x", value.x);
        target.writeProperty("y", value.y);
        target.writeProperty("z", value.z);
        target.writeProperty("w", value.w);
      }
      function createConstraint$2(params, initialValue) {
        return new PointNdConstraint({
          assembly: Point4dAssembly,
          components: [
            createDimensionConstraint("x" in params ? params.x : void 0, initialValue.x),
            createDimensionConstraint("y" in params ? params.y : void 0, initialValue.y),
            createDimensionConstraint("z" in params ? params.z : void 0, initialValue.z),
            createDimensionConstraint("w" in params ? params.w : void 0, initialValue.w)
          ]
        });
      }
      function createAxis$1(initialValue, constraint) {
        return {
          baseStep: getBaseStep(constraint),
          constraint,
          textProps: ValueMap.fromObject({
            draggingScale: getSuitableDraggingScale(constraint, initialValue),
            formatter: createNumberFormatter(getSuitableDecimalDigits(constraint, initialValue))
          })
        };
      }
      const Point4dInputPlugin = {
        id: "input-point4d",
        type: "input",
        accept: (value, params) => {
          if (!Point4d.isObject(value)) {
            return null;
          }
          const p = ParamsParsers;
          const result = parseParams(params, {
            x: p.optional.custom(parsePointDimensionParams),
            y: p.optional.custom(parsePointDimensionParams),
            z: p.optional.custom(parsePointDimensionParams),
            w: p.optional.custom(parsePointDimensionParams)
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: (_args) => point4dFromUnknown,
          constraint: (args) => createConstraint$2(args.params, args.initialValue),
          equals: Point4d.equals,
          writer: (_args) => writePoint4d
        },
        controller: (args) => {
          const value = args.value;
          const c = args.constraint;
          if (!(c instanceof PointNdConstraint)) {
            throw TpError.shouldNeverHappen();
          }
          return new PointNdTextController(args.document, {
            assembly: Point4dAssembly,
            axes: value.rawValue.getComponents().map((comp, index) => createAxis$1(comp, c.components[index])),
            parser: parseNumber,
            value,
            viewProps: args.viewProps
          });
        }
      };
      function createConstraint$1(params) {
        const constraints = [];
        const lc = createListConstraint(params.options);
        if (lc) {
          constraints.push(lc);
        }
        return new CompositeConstraint(constraints);
      }
      const StringInputPlugin = {
        id: "input-string",
        type: "input",
        accept: (value, params) => {
          if (typeof value !== "string") {
            return null;
          }
          const p = ParamsParsers;
          const result = parseParams(params, {
            options: p.optional.custom(parseListOptions)
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: (_args) => stringFromUnknown,
          constraint: (args) => createConstraint$1(args.params),
          writer: (_args) => writePrimitive
        },
        controller: (args) => {
          const doc = args.document;
          const value = args.value;
          const c = args.constraint;
          const lc = c && findConstraint(c, ListConstraint);
          if (lc) {
            return new ListController(doc, {
              props: new ValueMap({
                options: lc.values.value("options")
              }),
              value,
              viewProps: args.viewProps
            });
          }
          return new TextController(doc, {
            parser: (v) => v,
            props: ValueMap.fromObject({
              formatter: formatString
            }),
            value,
            viewProps: args.viewProps
          });
        }
      };
      const Constants = {
        monitor: {
          defaultInterval: 200,
          defaultLineCount: 3
        }
      };
      const className$2 = ClassName("mll");
      class MultiLogView {
        constructor(doc, config) {
          this.onValueUpdate_ = this.onValueUpdate_.bind(this);
          this.formatter_ = config.formatter;
          this.element = doc.createElement("div");
          this.element.classList.add(className$2());
          config.viewProps.bindClassModifiers(this.element);
          const textareaElem = doc.createElement("textarea");
          textareaElem.classList.add(className$2("i"));
          textareaElem.style.height = `calc(var(--bld-us) * ${config.lineCount})`;
          textareaElem.readOnly = true;
          config.viewProps.bindDisabled(textareaElem);
          this.element.appendChild(textareaElem);
          this.textareaElem_ = textareaElem;
          config.value.emitter.on("change", this.onValueUpdate_);
          this.value = config.value;
          this.update_();
        }
        update_() {
          const elem = this.textareaElem_;
          const shouldScroll = elem.scrollTop === elem.scrollHeight - elem.clientHeight;
          const lines = [];
          this.value.rawValue.forEach((value) => {
            if (value !== void 0) {
              lines.push(this.formatter_(value));
            }
          });
          elem.textContent = lines.join("\n");
          if (shouldScroll) {
            elem.scrollTop = elem.scrollHeight;
          }
        }
        onValueUpdate_() {
          this.update_();
        }
      }
      class MultiLogController {
        constructor(doc, config) {
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.view = new MultiLogView(doc, {
            formatter: config.formatter,
            lineCount: config.lineCount,
            value: this.value,
            viewProps: this.viewProps
          });
        }
      }
      const className$1 = ClassName("sgl");
      class SingleLogView {
        constructor(doc, config) {
          this.onValueUpdate_ = this.onValueUpdate_.bind(this);
          this.formatter_ = config.formatter;
          this.element = doc.createElement("div");
          this.element.classList.add(className$1());
          config.viewProps.bindClassModifiers(this.element);
          const inputElem = doc.createElement("input");
          inputElem.classList.add(className$1("i"));
          inputElem.readOnly = true;
          inputElem.type = "text";
          config.viewProps.bindDisabled(inputElem);
          this.element.appendChild(inputElem);
          this.inputElement = inputElem;
          config.value.emitter.on("change", this.onValueUpdate_);
          this.value = config.value;
          this.update_();
        }
        update_() {
          const values = this.value.rawValue;
          const lastValue = values[values.length - 1];
          this.inputElement.value = lastValue !== void 0 ? this.formatter_(lastValue) : "";
        }
        onValueUpdate_() {
          this.update_();
        }
      }
      class SingleLogController {
        constructor(doc, config) {
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.view = new SingleLogView(doc, {
            formatter: config.formatter,
            value: this.value,
            viewProps: this.viewProps
          });
        }
      }
      const BooleanMonitorPlugin = {
        id: "monitor-bool",
        type: "monitor",
        accept: (value, params) => {
          if (typeof value !== "boolean") {
            return null;
          }
          const p = ParamsParsers;
          const result = parseParams(params, {
            lineCount: p.optional.number
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: (_args) => boolFromUnknown
        },
        controller: (args) => {
          var _a;
          if (args.value.rawValue.length === 1) {
            return new SingleLogController(args.document, {
              formatter: BooleanFormatter,
              value: args.value,
              viewProps: args.viewProps
            });
          }
          return new MultiLogController(args.document, {
            formatter: BooleanFormatter,
            lineCount: (_a = args.params.lineCount) !== null && _a !== void 0 ? _a : Constants.monitor.defaultLineCount,
            value: args.value,
            viewProps: args.viewProps
          });
        }
      };
      const className = ClassName("grl");
      class GraphLogView {
        constructor(doc, config) {
          this.onCursorChange_ = this.onCursorChange_.bind(this);
          this.onValueUpdate_ = this.onValueUpdate_.bind(this);
          this.element = doc.createElement("div");
          this.element.classList.add(className());
          config.viewProps.bindClassModifiers(this.element);
          this.formatter_ = config.formatter;
          this.props_ = config.props;
          this.cursor_ = config.cursor;
          this.cursor_.emitter.on("change", this.onCursorChange_);
          const svgElem = doc.createElementNS(SVG_NS, "svg");
          svgElem.classList.add(className("g"));
          svgElem.style.height = `calc(var(--bld-us) * ${config.lineCount})`;
          this.element.appendChild(svgElem);
          this.svgElem_ = svgElem;
          const lineElem = doc.createElementNS(SVG_NS, "polyline");
          this.svgElem_.appendChild(lineElem);
          this.lineElem_ = lineElem;
          const tooltipElem = doc.createElement("div");
          tooltipElem.classList.add(className("t"), ClassName("tt")());
          this.element.appendChild(tooltipElem);
          this.tooltipElem_ = tooltipElem;
          config.value.emitter.on("change", this.onValueUpdate_);
          this.value = config.value;
          this.update_();
        }
        get graphElement() {
          return this.svgElem_;
        }
        update_() {
          const bounds = this.svgElem_.getBoundingClientRect();
          const maxIndex = this.value.rawValue.length - 1;
          const min = this.props_.get("minValue");
          const max = this.props_.get("maxValue");
          const points = [];
          this.value.rawValue.forEach((v, index) => {
            if (v === void 0) {
              return;
            }
            const x = mapRange2(index, 0, maxIndex, 0, bounds.width);
            const y = mapRange2(v, min, max, bounds.height, 0);
            points.push([x, y].join(","));
          });
          this.lineElem_.setAttributeNS(null, "points", points.join(" "));
          const tooltipElem = this.tooltipElem_;
          const value = this.value.rawValue[this.cursor_.rawValue];
          if (value === void 0) {
            tooltipElem.classList.remove(className("t", "a"));
            return;
          }
          const tx = mapRange2(this.cursor_.rawValue, 0, maxIndex, 0, bounds.width);
          const ty = mapRange2(value, min, max, bounds.height, 0);
          tooltipElem.style.left = `${tx}px`;
          tooltipElem.style.top = `${ty}px`;
          tooltipElem.textContent = `${this.formatter_(value)}`;
          if (!tooltipElem.classList.contains(className("t", "a"))) {
            tooltipElem.classList.add(className("t", "a"), className("t", "in"));
            forceReflow(tooltipElem);
            tooltipElem.classList.remove(className("t", "in"));
          }
        }
        onValueUpdate_() {
          this.update_();
        }
        onCursorChange_() {
          this.update_();
        }
      }
      class GraphLogController {
        constructor(doc, config) {
          this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this);
          this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this);
          this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this);
          this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this);
          this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this);
          this.props_ = config.props;
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.cursor_ = createValue(-1);
          this.view = new GraphLogView(doc, {
            cursor: this.cursor_,
            formatter: config.formatter,
            lineCount: config.lineCount,
            props: this.props_,
            value: this.value,
            viewProps: this.viewProps
          });
          if (!supportsTouch(doc)) {
            this.view.element.addEventListener("mousemove", this.onGraphMouseMove_);
            this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
          } else {
            const ph = new PointerHandler(this.view.element);
            ph.emitter.on("down", this.onGraphPointerDown_);
            ph.emitter.on("move", this.onGraphPointerMove_);
            ph.emitter.on("up", this.onGraphPointerUp_);
          }
        }
        onGraphMouseLeave_() {
          this.cursor_.rawValue = -1;
        }
        onGraphMouseMove_(ev) {
          const bounds = this.view.element.getBoundingClientRect();
          this.cursor_.rawValue = Math.floor(mapRange2(ev.offsetX, 0, bounds.width, 0, this.value.rawValue.length));
        }
        onGraphPointerDown_(ev) {
          this.onGraphPointerMove_(ev);
        }
        onGraphPointerMove_(ev) {
          if (!ev.data.point) {
            this.cursor_.rawValue = -1;
            return;
          }
          this.cursor_.rawValue = Math.floor(mapRange2(ev.data.point.x, 0, ev.data.bounds.width, 0, this.value.rawValue.length));
        }
        onGraphPointerUp_() {
          this.cursor_.rawValue = -1;
        }
      }
      function createFormatter(params) {
        return "format" in params && !isEmpty(params.format) ? params.format : createNumberFormatter(2);
      }
      function createTextMonitor(args) {
        var _a;
        if (args.value.rawValue.length === 1) {
          return new SingleLogController(args.document, {
            formatter: createFormatter(args.params),
            value: args.value,
            viewProps: args.viewProps
          });
        }
        return new MultiLogController(args.document, {
          formatter: createFormatter(args.params),
          lineCount: (_a = args.params.lineCount) !== null && _a !== void 0 ? _a : Constants.monitor.defaultLineCount,
          value: args.value,
          viewProps: args.viewProps
        });
      }
      function createGraphMonitor(args) {
        var _a, _b, _c;
        return new GraphLogController(args.document, {
          formatter: createFormatter(args.params),
          lineCount: (_a = args.params.lineCount) !== null && _a !== void 0 ? _a : Constants.monitor.defaultLineCount,
          props: ValueMap.fromObject({
            maxValue: (_b = "max" in args.params ? args.params.max : null) !== null && _b !== void 0 ? _b : 100,
            minValue: (_c = "min" in args.params ? args.params.min : null) !== null && _c !== void 0 ? _c : 0
          }),
          value: args.value,
          viewProps: args.viewProps
        });
      }
      function shouldShowGraph(params) {
        return "view" in params && params.view === "graph";
      }
      const NumberMonitorPlugin = {
        id: "monitor-number",
        type: "monitor",
        accept: (value, params) => {
          if (typeof value !== "number") {
            return null;
          }
          const p = ParamsParsers;
          const result = parseParams(params, {
            format: p.optional.function,
            lineCount: p.optional.number,
            max: p.optional.number,
            min: p.optional.number,
            view: p.optional.string
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          defaultBufferSize: (params) => shouldShowGraph(params) ? 64 : 1,
          reader: (_args) => numberFromUnknown
        },
        controller: (args) => {
          if (shouldShowGraph(args.params)) {
            return createGraphMonitor(args);
          }
          return createTextMonitor(args);
        }
      };
      const StringMonitorPlugin = {
        id: "monitor-string",
        type: "monitor",
        accept: (value, params) => {
          if (typeof value !== "string") {
            return null;
          }
          const p = ParamsParsers;
          const result = parseParams(params, {
            lineCount: p.optional.number,
            multiline: p.optional.boolean
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: (_args) => stringFromUnknown
        },
        controller: (args) => {
          var _a;
          const value = args.value;
          const multiline = value.rawValue.length > 1 || "multiline" in args.params && args.params.multiline;
          if (multiline) {
            return new MultiLogController(args.document, {
              formatter: formatString,
              lineCount: (_a = args.params.lineCount) !== null && _a !== void 0 ? _a : Constants.monitor.defaultLineCount,
              value,
              viewProps: args.viewProps
            });
          }
          return new SingleLogController(args.document, {
            formatter: formatString,
            value,
            viewProps: args.viewProps
          });
        }
      };
      function createInputBindingController(plugin, args) {
        var _a;
        const result = plugin.accept(args.target.read(), args.params);
        if (isEmpty(result)) {
          return null;
        }
        const p = ParamsParsers;
        const valueArgs = {
          target: args.target,
          initialValue: result.initialValue,
          params: result.params
        };
        const reader = plugin.binding.reader(valueArgs);
        const constraint = plugin.binding.constraint ? plugin.binding.constraint(valueArgs) : void 0;
        const value = createValue(reader(result.initialValue), {
          constraint,
          equals: plugin.binding.equals
        });
        const binding = new InputBinding({
          reader,
          target: args.target,
          value,
          writer: plugin.binding.writer(valueArgs)
        });
        const disabled = p.optional.boolean(args.params.disabled).value;
        const hidden = p.optional.boolean(args.params.hidden).value;
        const controller = plugin.controller({
          constraint,
          document: args.document,
          initialValue: result.initialValue,
          params: result.params,
          value: binding.value,
          viewProps: ViewProps.create({
            disabled,
            hidden
          })
        });
        return new InputBindingController(args.document, {
          binding,
          blade: createBlade(),
          props: ValueMap.fromObject({
            label: "label" in args.params ? (_a = p.optional.string(args.params.label).value) !== null && _a !== void 0 ? _a : null : args.target.key
          }),
          valueController: controller
        });
      }
      function createTicker(document2, interval) {
        return interval === 0 ? new ManualTicker() : new IntervalTicker(document2, interval !== null && interval !== void 0 ? interval : Constants.monitor.defaultInterval);
      }
      function createMonitorBindingController(plugin, args) {
        var _a, _b, _c;
        const p = ParamsParsers;
        const result = plugin.accept(args.target.read(), args.params);
        if (isEmpty(result)) {
          return null;
        }
        const bindingArgs = {
          target: args.target,
          initialValue: result.initialValue,
          params: result.params
        };
        const reader = plugin.binding.reader(bindingArgs);
        const bufferSize = (_b = (_a = p.optional.number(args.params.bufferSize).value) !== null && _a !== void 0 ? _a : plugin.binding.defaultBufferSize && plugin.binding.defaultBufferSize(result.params)) !== null && _b !== void 0 ? _b : 1;
        const interval = p.optional.number(args.params.interval).value;
        const binding = new MonitorBinding({
          reader,
          target: args.target,
          ticker: createTicker(args.document, interval),
          value: initializeBuffer(bufferSize)
        });
        const disabled = p.optional.boolean(args.params.disabled).value;
        const hidden = p.optional.boolean(args.params.hidden).value;
        const controller = plugin.controller({
          document: args.document,
          params: result.params,
          value: binding.value,
          viewProps: ViewProps.create({
            disabled,
            hidden
          })
        });
        return new MonitorBindingController(args.document, {
          binding,
          blade: createBlade(),
          props: ValueMap.fromObject({
            label: "label" in args.params ? (_c = p.optional.string(args.params.label).value) !== null && _c !== void 0 ? _c : null : args.target.key
          }),
          valueController: controller
        });
      }
      class PluginPool {
        constructor() {
          this.pluginsMap_ = {
            blades: [],
            inputs: [],
            monitors: []
          };
        }
        getAll() {
          return [
            ...this.pluginsMap_.blades,
            ...this.pluginsMap_.inputs,
            ...this.pluginsMap_.monitors
          ];
        }
        register(r) {
          if (r.type === "blade") {
            this.pluginsMap_.blades.unshift(r);
          } else if (r.type === "input") {
            this.pluginsMap_.inputs.unshift(r);
          } else if (r.type === "monitor") {
            this.pluginsMap_.monitors.unshift(r);
          }
        }
        createInput(document2, target, params) {
          const initialValue = target.read();
          if (isEmpty(initialValue)) {
            throw new TpError({
              context: {
                key: target.key
              },
              type: "nomatchingcontroller"
            });
          }
          const bc = this.pluginsMap_.inputs.reduce((result, plugin) => result !== null && result !== void 0 ? result : createInputBindingController(plugin, {
            document: document2,
            target,
            params
          }), null);
          if (bc) {
            return bc;
          }
          throw new TpError({
            context: {
              key: target.key
            },
            type: "nomatchingcontroller"
          });
        }
        createMonitor(document2, target, params) {
          const bc = this.pluginsMap_.monitors.reduce((result, plugin) => result !== null && result !== void 0 ? result : createMonitorBindingController(plugin, {
            document: document2,
            params,
            target
          }), null);
          if (bc) {
            return bc;
          }
          throw new TpError({
            context: {
              key: target.key
            },
            type: "nomatchingcontroller"
          });
        }
        createBlade(document2, params) {
          const bc = this.pluginsMap_.blades.reduce((result, plugin) => result !== null && result !== void 0 ? result : createBladeController(plugin, {
            document: document2,
            params
          }), null);
          if (!bc) {
            throw new TpError({
              type: "nomatchingview",
              context: {
                params
              }
            });
          }
          return bc;
        }
        createBladeApi(bc) {
          if (bc instanceof InputBindingController) {
            return new InputBindingApi(bc);
          }
          if (bc instanceof MonitorBindingController) {
            return new MonitorBindingApi(bc);
          }
          if (bc instanceof RackController) {
            return new RackApi(bc, this);
          }
          const api = this.pluginsMap_.blades.reduce((result, plugin) => result !== null && result !== void 0 ? result : plugin.api({
            controller: bc,
            pool: this
          }), null);
          if (!api) {
            throw TpError.shouldNeverHappen();
          }
          return api;
        }
      }
      function createDefaultPluginPool() {
        const pool = new PluginPool();
        [
          Point2dInputPlugin,
          Point3dInputPlugin,
          Point4dInputPlugin,
          StringInputPlugin,
          NumberInputPlugin,
          StringColorInputPlugin,
          ObjectColorInputPlugin,
          NumberColorInputPlugin,
          BooleanInputPlugin,
          BooleanMonitorPlugin,
          StringMonitorPlugin,
          NumberMonitorPlugin,
          ButtonBladePlugin,
          FolderBladePlugin,
          SeparatorBladePlugin,
          TabBladePlugin
        ].forEach((p) => {
          pool.register(p);
        });
        return pool;
      }
      function point2dFromUnknown(value) {
        return Point2d.isObject(value) ? new Point2d(value.x, value.y) : new Point2d();
      }
      function writePoint2d(target, value) {
        target.writeProperty("x", value.x);
        target.writeProperty("y", value.y);
      }
      function createDimensionConstraint(params, initialValue) {
        if (!params) {
          return void 0;
        }
        const constraints = [];
        const cs = createStepConstraint(params, initialValue);
        if (cs) {
          constraints.push(cs);
        }
        const rs = createRangeConstraint(params);
        if (rs) {
          constraints.push(rs);
        }
        return new CompositeConstraint(constraints);
      }
      function createConstraint(params, initialValue) {
        return new PointNdConstraint({
          assembly: Point2dAssembly,
          components: [
            createDimensionConstraint("x" in params ? params.x : void 0, initialValue.x),
            createDimensionConstraint("y" in params ? params.y : void 0, initialValue.y)
          ]
        });
      }
      function getSuitableMaxDimensionValue(constraint, rawValue) {
        const [min, max] = constraint ? findNumberRange(constraint) : [];
        if (!isEmpty(min) || !isEmpty(max)) {
          return Math.max(Math.abs(min !== null && min !== void 0 ? min : 0), Math.abs(max !== null && max !== void 0 ? max : 0));
        }
        const step = getBaseStep(constraint);
        return Math.max(Math.abs(step) * 10, Math.abs(rawValue) * 10);
      }
      function getSuitableMaxValue(initialValue, constraint) {
        const xc = constraint instanceof PointNdConstraint ? constraint.components[0] : void 0;
        const yc = constraint instanceof PointNdConstraint ? constraint.components[1] : void 0;
        const xr = getSuitableMaxDimensionValue(xc, initialValue.x);
        const yr = getSuitableMaxDimensionValue(yc, initialValue.y);
        return Math.max(xr, yr);
      }
      function createAxis(initialValue, constraint) {
        return {
          baseStep: getBaseStep(constraint),
          constraint,
          textProps: ValueMap.fromObject({
            draggingScale: getSuitableDraggingScale(constraint, initialValue),
            formatter: createNumberFormatter(getSuitableDecimalDigits(constraint, initialValue))
          })
        };
      }
      function shouldInvertY(params) {
        if (!("y" in params)) {
          return false;
        }
        const yParams = params.y;
        if (!yParams) {
          return false;
        }
        return "inverted" in yParams ? !!yParams.inverted : false;
      }
      const Point2dInputPlugin = {
        id: "input-point2d",
        type: "input",
        accept: (value, params) => {
          if (!Point2d.isObject(value)) {
            return null;
          }
          const p = ParamsParsers;
          const result = parseParams(params, {
            expanded: p.optional.boolean,
            picker: p.optional.custom(parsePickerLayout),
            x: p.optional.custom(parsePointDimensionParams),
            y: p.optional.object({
              inverted: p.optional.boolean,
              max: p.optional.number,
              min: p.optional.number,
              step: p.optional.number
            })
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: (_args) => point2dFromUnknown,
          constraint: (args) => createConstraint(args.params, args.initialValue),
          equals: Point2d.equals,
          writer: (_args) => writePoint2d
        },
        controller: (args) => {
          const doc = args.document;
          const value = args.value;
          const c = args.constraint;
          if (!(c instanceof PointNdConstraint)) {
            throw TpError.shouldNeverHappen();
          }
          const expanded = "expanded" in args.params ? args.params.expanded : void 0;
          const picker = "picker" in args.params ? args.params.picker : void 0;
          return new Point2dController(doc, {
            axes: [
              createAxis(value.rawValue.x, c.components[0]),
              createAxis(value.rawValue.y, c.components[1])
            ],
            expanded: expanded !== null && expanded !== void 0 ? expanded : false,
            invertsY: shouldInvertY(args.params),
            maxValue: getSuitableMaxValue(value.rawValue, c),
            parser: parseNumber,
            pickerLayout: picker !== null && picker !== void 0 ? picker : "popup",
            value,
            viewProps: args.viewProps
          });
        }
      };
      class ListApi extends BladeApi {
        constructor(controller) {
          super(controller);
          this.emitter_ = new Emitter();
          this.controller_.valueController.value.emitter.on("change", (ev) => {
            this.emitter_.emit("change", {
              event: new TpChangeEvent(this, ev.rawValue)
            });
          });
        }
        get label() {
          return this.controller_.props.get("label");
        }
        set label(label) {
          this.controller_.props.set("label", label);
        }
        get options() {
          return this.controller_.valueController.props.get("options");
        }
        set options(options) {
          this.controller_.valueController.props.set("options", options);
        }
        get value() {
          return this.controller_.valueController.value.rawValue;
        }
        set value(value) {
          this.controller_.valueController.value.rawValue = value;
        }
        on(eventName, handler) {
          const bh = handler.bind(this);
          this.emitter_.on(eventName, (ev) => {
            bh(ev.event);
          });
          return this;
        }
      }
      class SliderApi extends BladeApi {
        constructor(controller) {
          super(controller);
          this.emitter_ = new Emitter();
          this.controller_.valueController.value.emitter.on("change", (ev) => {
            this.emitter_.emit("change", {
              event: new TpChangeEvent(this, ev.rawValue)
            });
          });
        }
        get label() {
          return this.controller_.props.get("label");
        }
        set label(label) {
          this.controller_.props.set("label", label);
        }
        get maxValue() {
          return this.controller_.valueController.sliderController.props.get("maxValue");
        }
        set maxValue(maxValue) {
          this.controller_.valueController.sliderController.props.set("maxValue", maxValue);
        }
        get minValue() {
          return this.controller_.valueController.sliderController.props.get("minValue");
        }
        set minValue(minValue) {
          this.controller_.valueController.sliderController.props.set("minValue", minValue);
        }
        get value() {
          return this.controller_.valueController.value.rawValue;
        }
        set value(value) {
          this.controller_.valueController.value.rawValue = value;
        }
        on(eventName, handler) {
          const bh = handler.bind(this);
          this.emitter_.on(eventName, (ev) => {
            bh(ev.event);
          });
          return this;
        }
      }
      class TextApi extends BladeApi {
        constructor(controller) {
          super(controller);
          this.emitter_ = new Emitter();
          this.controller_.valueController.value.emitter.on("change", (ev) => {
            this.emitter_.emit("change", {
              event: new TpChangeEvent(this, ev.rawValue)
            });
          });
        }
        get label() {
          return this.controller_.props.get("label");
        }
        set label(label) {
          this.controller_.props.set("label", label);
        }
        get formatter() {
          return this.controller_.valueController.props.get("formatter");
        }
        set formatter(formatter) {
          this.controller_.valueController.props.set("formatter", formatter);
        }
        get value() {
          return this.controller_.valueController.value.rawValue;
        }
        set value(value) {
          this.controller_.valueController.value.rawValue = value;
        }
        on(eventName, handler) {
          const bh = handler.bind(this);
          this.emitter_.on(eventName, (ev) => {
            bh(ev.event);
          });
          return this;
        }
      }
      const ListBladePlugin = function() {
        return {
          id: "list",
          type: "blade",
          accept(params) {
            const p = ParamsParsers;
            const result = parseParams(params, {
              options: p.required.custom(parseListOptions),
              value: p.required.raw,
              view: p.required.constant("list"),
              label: p.optional.string
            });
            return result ? { params: result } : null;
          },
          controller(args) {
            const lc = new ListConstraint(normalizeListOptions(args.params.options));
            const value = createValue(args.params.value, {
              constraint: lc
            });
            const ic = new ListController(args.document, {
              props: new ValueMap({
                options: lc.values.value("options")
              }),
              value,
              viewProps: args.viewProps
            });
            return new LabeledValueController(args.document, {
              blade: args.blade,
              props: ValueMap.fromObject({
                label: args.params.label
              }),
              valueController: ic
            });
          },
          api(args) {
            if (!(args.controller instanceof LabeledValueController)) {
              return null;
            }
            if (!(args.controller.valueController instanceof ListController)) {
              return null;
            }
            return new ListApi(args.controller);
          }
        };
      }();
      function exportPresetJson(targets) {
        return targets.reduce((result, target) => {
          return Object.assign(result, {
            [target.presetKey]: target.read()
          });
        }, {});
      }
      function importPresetJson(bindings, preset) {
        bindings.forEach((binding) => {
          const value = preset[binding.target.presetKey];
          if (value !== void 0) {
            binding.writer(binding.target, binding.reader(value));
          }
        });
      }
      class RootApi extends FolderApi {
        constructor(controller, pool) {
          super(controller, pool);
        }
        get element() {
          return this.controller_.view.element;
        }
        importPreset(preset) {
          const bindings = this.controller_.rackController.rack.find(InputBindingController).map((ibc) => {
            return ibc.binding;
          });
          importPresetJson(bindings, preset);
          this.refresh();
        }
        exportPreset() {
          const targets = this.controller_.rackController.rack.find(InputBindingController).map((ibc) => {
            return ibc.binding.target;
          });
          return exportPresetJson(targets);
        }
        refresh() {
          this.controller_.rackController.rack.find(InputBindingController).forEach((ibc) => {
            ibc.binding.read();
          });
          this.controller_.rackController.rack.find(MonitorBindingController).forEach((mbc) => {
            mbc.binding.read();
          });
        }
      }
      class RootController extends FolderController {
        constructor(doc, config) {
          super(doc, {
            expanded: config.expanded,
            blade: config.blade,
            props: config.props,
            root: true,
            viewProps: config.viewProps
          });
        }
      }
      const SliderBladePlugin = {
        id: "slider",
        type: "blade",
        accept(params) {
          const p = ParamsParsers;
          const result = parseParams(params, {
            max: p.required.number,
            min: p.required.number,
            view: p.required.constant("slider"),
            format: p.optional.function,
            label: p.optional.string,
            value: p.optional.number
          });
          return result ? { params: result } : null;
        },
        controller(args) {
          var _a, _b;
          const initialValue = (_a = args.params.value) !== null && _a !== void 0 ? _a : 0;
          const drc = new DefiniteRangeConstraint({
            max: args.params.max,
            min: args.params.min
          });
          const vc = new SliderTextController(args.document, {
            baseStep: 1,
            parser: parseNumber,
            sliderProps: new ValueMap({
              maxValue: drc.values.value("max"),
              minValue: drc.values.value("min")
            }),
            textProps: ValueMap.fromObject({
              draggingScale: getSuitableDraggingScale(void 0, initialValue),
              formatter: (_b = args.params.format) !== null && _b !== void 0 ? _b : numberToString
            }),
            value: createValue(initialValue, {
              constraint: drc
            }),
            viewProps: args.viewProps
          });
          return new LabeledValueController(args.document, {
            blade: args.blade,
            props: ValueMap.fromObject({
              label: args.params.label
            }),
            valueController: vc
          });
        },
        api(args) {
          if (!(args.controller instanceof LabeledValueController)) {
            return null;
          }
          if (!(args.controller.valueController instanceof SliderTextController)) {
            return null;
          }
          return new SliderApi(args.controller);
        }
      };
      const TextBladePlugin = function() {
        return {
          id: "text",
          type: "blade",
          accept(params) {
            const p = ParamsParsers;
            const result = parseParams(params, {
              parse: p.required.function,
              value: p.required.raw,
              view: p.required.constant("text"),
              format: p.optional.function,
              label: p.optional.string
            });
            return result ? { params: result } : null;
          },
          controller(args) {
            var _a;
            const ic = new TextController(args.document, {
              parser: args.params.parse,
              props: ValueMap.fromObject({
                formatter: (_a = args.params.format) !== null && _a !== void 0 ? _a : (v) => String(v)
              }),
              value: createValue(args.params.value),
              viewProps: args.viewProps
            });
            return new LabeledValueController(args.document, {
              blade: args.blade,
              props: ValueMap.fromObject({
                label: args.params.label
              }),
              valueController: ic
            });
          },
          api(args) {
            if (!(args.controller instanceof LabeledValueController)) {
              return null;
            }
            if (!(args.controller.valueController instanceof TextController)) {
              return null;
            }
            return new TextApi(args.controller);
          }
        };
      }();
      function createDefaultWrapperElement(doc) {
        const elem = doc.createElement("div");
        elem.classList.add(ClassName("dfw")());
        if (doc.body) {
          doc.body.appendChild(elem);
        }
        return elem;
      }
      function embedStyle(doc, id, css) {
        if (doc.querySelector(`style[data-tp-style=${id}]`)) {
          return;
        }
        const styleElem = doc.createElement("style");
        styleElem.dataset.tpStyle = id;
        styleElem.textContent = css;
        doc.head.appendChild(styleElem);
      }
      class Pane extends RootApi {
        constructor(opt_config) {
          var _a, _b;
          const config = opt_config !== null && opt_config !== void 0 ? opt_config : {};
          const doc = (_a = config.document) !== null && _a !== void 0 ? _a : getWindowDocument();
          const pool = createDefaultPluginPool();
          const rootController = new RootController(doc, {
            expanded: config.expanded,
            blade: createBlade(),
            props: ValueMap.fromObject({
              title: config.title
            }),
            viewProps: ViewProps.create()
          });
          super(rootController, pool);
          this.pool_ = pool;
          this.containerElem_ = (_b = config.container) !== null && _b !== void 0 ? _b : createDefaultWrapperElement(doc);
          this.containerElem_.appendChild(this.element);
          this.doc_ = doc;
          this.usesDefaultWrapper_ = !config.container;
          this.setUpDefaultPlugins_();
        }
        get document() {
          if (!this.doc_) {
            throw TpError.alreadyDisposed();
          }
          return this.doc_;
        }
        dispose() {
          const containerElem = this.containerElem_;
          if (!containerElem) {
            throw TpError.alreadyDisposed();
          }
          if (this.usesDefaultWrapper_) {
            const parentElem = containerElem.parentElement;
            if (parentElem) {
              parentElem.removeChild(containerElem);
            }
          }
          this.containerElem_ = null;
          this.doc_ = null;
          super.dispose();
        }
        registerPlugin(bundle) {
          const plugins = "plugin" in bundle ? [bundle.plugin] : "plugins" in bundle ? bundle.plugins : [];
          plugins.forEach((p) => {
            this.pool_.register(p);
            this.embedPluginStyle_(p);
          });
        }
        embedPluginStyle_(plugin) {
          if (plugin.css) {
            embedStyle(this.document, `plugin-${plugin.id}`, plugin.css);
          }
        }
        setUpDefaultPlugins_() {
          embedStyle(this.document, "default", '.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}');
          this.pool_.getAll().forEach((plugin) => {
            this.embedPluginStyle_(plugin);
          });
          this.registerPlugin({
            plugins: [
              SliderBladePlugin,
              ListBladePlugin,
              TabBladePlugin,
              TextBladePlugin
            ]
          });
        }
      }
      const VERSION = new Semver("3.1.10");
      exports2.BladeApi = BladeApi;
      exports2.ButtonApi = ButtonApi;
      exports2.FolderApi = FolderApi;
      exports2.InputBindingApi = InputBindingApi;
      exports2.ListApi = ListApi;
      exports2.MonitorBindingApi = MonitorBindingApi;
      exports2.Pane = Pane;
      exports2.SeparatorApi = SeparatorApi;
      exports2.SliderApi = SliderApi;
      exports2.TabApi = TabApi;
      exports2.TabPageApi = TabPageApi;
      exports2.TextApi = TextApi;
      exports2.TpChangeEvent = TpChangeEvent;
      exports2.VERSION = VERSION;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  })(tweakpane, tweakpane.exports);
  const tweak = new tweakpane.exports.Pane();
  const PARAMS = {
    color1: "#fff",
    color2: "#fff",
    timeScale: 1.2,
    noiseScale: 0.1,
    noiseAmplitude: 4.1,
    amplitudeStrength: 7,
    radius: 0.35,
    details: 150,
    contrast: 1,
    brightness: 0,
    wireframe: false
  };
  class MeshSphere extends Object3D {
    constructor({ mapTexture, hdrEnv }) {
      super();
      __publicField(this, "onMouseMove", (e) => {
        const { target } = this.mouse;
        const width = window.innerWidth;
        const height = window.innerHeight;
        target.x = (e.clientX / width - 0.5) * 2;
        target.y = (e.clientY / height - 0.5) * 2;
      });
      __publicField(this, "onTick", (time) => {
        const { current, target, ease } = this.mouse;
        const { uTime, uNoiseScale, uAmplitudeStrength } = this.material.uniforms;
        uTime.value = time;
        if (!this.mesh)
          return;
        current.x = gsapWithCSS.utils.interpolate(current.x, target.x, ease * gsapWithCSS.ticker.deltaRatio(60) || 0);
        current.y = gsapWithCSS.utils.interpolate(current.y, target.y, ease * gsapWithCSS.ticker.deltaRatio(60) || 0);
        this.mesh.rotation.x = -current.y * 0.8;
        this.mesh.rotation.y = Math.PI * -current.x * 0.8;
      });
      this.mapTexture = mapTexture;
      this.hdrEnv = hdrEnv;
      this.mouse = {
        current: { x: 0, y: 0 },
        target: { x: 0, y: 0 },
        ease: 0.08
      };
      this.geometry = new IcosahedronGeometry(PARAMS.radius, PARAMS.details);
      this.createMaterial();
      this.createMesh();
      const tl = gsapWithCSS.timeline({ repeat: -1 });
      tl.to(this.position, {
        keyframes: { y: [-0.07, 0.07, -0.07], ease: "linear" },
        duration: 3,
        ease: "sine.inOut"
      });
      this.addEventListeners();
      this.addDebug();
    }
    addDebug() {
      tweak.addBinding(PARAMS, "color1").on("change", (ev) => {
        this.material.uniforms.uColor1.value = new Color(ev.value);
      });
      tweak.addBinding(PARAMS, "color2").on("change", (ev) => {
        this.material.uniforms.uColor2.value = new Color(ev.value);
      });
      tweak.addBinding(PARAMS, "timeScale", { min: 0, max: 2 }).on("change", (ev) => {
        this.material.uniforms.uTimeScale.value = ev.value;
      });
      tweak.addBinding(PARAMS, "noiseScale", { min: -1, max: 2 }).on("change", (ev) => {
        this.material.uniforms.uNoiseScale.value = ev.value;
      });
      tweak.addBinding(PARAMS, "noiseAmplitude", { min: 0, max: 10 }).on("change", (ev) => {
        this.material.uniforms.uNoiseAmplitude.value = ev.value;
      });
      tweak.addBinding(PARAMS, "amplitudeStrength", { min: 0, max: 40 }).on("change", (ev) => {
        this.material.uniforms.uAmplitudeStrength.value = ev.value;
      });
      tweak.addBinding(PARAMS, "contrast", { min: 0, max: 2 }).on("change", (ev) => {
        this.material.uniforms.uContrast.value = ev.value;
      });
      tweak.addBinding(PARAMS, "brightness", { min: 0, max: 1 }).on("change", (ev) => {
        this.material.uniforms.uBrightness.value = ev.value;
      });
      tweak.addBinding(PARAMS, "details", { min: 2, max: 200, step: 1 }).on("change", (ev) => {
        this.mesh.geometry = new IcosahedronGeometry(0.5, ev.value);
      });
      tweak.addBinding(PARAMS, "wireframe").on("change", (ev) => {
        this.material.wireframe = ev.value;
      });
    }
    addEventListeners() {
      document.addEventListener("mousemove", this.onMouseMove);
    }
    createMaterial() {
      this.material = new MeshStandardMaterial({
        roughness: 0,
        metalness: 0,
        wireframe: PARAMS.wireframe
      });
      this.uniforms = {
        uMap: { value: this.mapTexture },
        uColor1: { value: new Color(PARAMS.color1) },
        uColor2: { value: new Color(PARAMS.color2) },
        uTime: { value: 0 },
        uTimeScale: { value: PARAMS.timeScale },
        uNoiseAmplitude: { value: PARAMS.noiseAmplitude },
        uNoiseScale: { value: PARAMS.noiseScale },
        uAmplitudeStrength: { value: PARAMS.amplitudeStrength },
        uContrast: { value: PARAMS.contrast },
        uBrightness: { value: PARAMS.brightness }
      };
      this.material.onBeforeCompile = (e) => {
        e.uniforms = Object.assign(e.uniforms, this.uniforms);
        e.vertexShader = e.vertexShader.replace("#include <common>", `
          #include <common>
  
          uniform float uTime;
          uniform float uTimeScale;
          uniform float uNoiseAmplitude;
          uniform float uNoiseScale;
  
          varying vec2 vUv;
          varying float vAmplitude;
  
          //	Classic Perlin 3D Noise 
          //	by Stefan Gustavson
          //
          vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
          vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
          vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
  
          float cnoise(vec3 P){
            vec3 Pi0 = floor(P); // Integer part for indexing
            vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
            Pi0 = mod(Pi0, 289.0);
            Pi1 = mod(Pi1, 289.0);
            vec3 Pf0 = fract(P); // Fractional part for interpolation
            vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
            vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
            vec4 iy = vec4(Pi0.yy, Pi1.yy);
            vec4 iz0 = Pi0.zzzz;
            vec4 iz1 = Pi1.zzzz;
  
            vec4 ixy = permute(permute(ix) + iy);
            vec4 ixy0 = permute(ixy + iz0);
            vec4 ixy1 = permute(ixy + iz1);
  
            vec4 gx0 = ixy0 / 7.0;
            vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
            gx0 = fract(gx0);
            vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
            vec4 sz0 = step(gz0, vec4(0.0));
            gx0 -= sz0 * (step(0.0, gx0) - 0.5);
            gy0 -= sz0 * (step(0.0, gy0) - 0.5);
  
            vec4 gx1 = ixy1 / 7.0;
            vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
            gx1 = fract(gx1);
            vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
            vec4 sz1 = step(gz1, vec4(0.0));
            gx1 -= sz1 * (step(0.0, gx1) - 0.5);
            gy1 -= sz1 * (step(0.0, gy1) - 0.5);
  
            vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
            vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
            vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
            vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
            vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
            vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
            vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
            vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
  
            vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
            g000 *= norm0.x;
            g010 *= norm0.y;
            g100 *= norm0.z;
            g110 *= norm0.w;
            vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
            g001 *= norm1.x;
            g011 *= norm1.y;
            g101 *= norm1.z;
            g111 *= norm1.w;
  
            float n000 = dot(g000, Pf0);
            float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
            float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
            float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
            float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
            float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
            float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
            float n111 = dot(g111, Pf1);
  
            vec3 fade_xyz = fade(Pf0);
            vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
            vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
            float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
            return 2.2 * n_xyz;
          }
        `);
        e.vertexShader = e.vertexShader.replace("#include <project_vertex>", `
          #include <project_vertex>
  
          vec3 newPos = position;
          float noise = cnoise(position * uNoiseAmplitude + uTime * uTimeScale) * uNoiseScale;
          newPos += newPos * noise;
  
          gl_Position = projectionMatrix * modelViewMatrix * vec4( newPos, 1.0 );
          vAmplitude = noise;
        `);
        e.fragmentShader = e.fragmentShader.replace("#include <common>", `
          #include <common>
  
          uniform sampler2D uMap;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          uniform float uAmplitudeStrength;
          uniform float uContrast;
          uniform float uBrightness;
  
          varying vec2 vUv;
          varying float vAmplitude;
        `);
        e.fragmentShader = e.fragmentShader.replace("#include <output_fragment>", `
          #include <output_fragment>
  
          // Matcap UVs
          vec3 viewDir = normalize( vViewPosition );
          vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
          vec3 y = cross( viewDir, x );
          vec2 matcapUv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
  
          vec3 tex = texture2D(uMap, matcapUv).rgb;
          vec3 color = tex * outgoingLight;
          float elevation = vAmplitude * uAmplitudeStrength + .5;
          color *= mix(uColor1, uColor2, elevation);
          color.r = smoothstep(0., .38, color.r);
          color.g = smoothstep(0., .38, color.g);
          color.b = smoothstep(0., .38, color.b);
          color = uContrast * (color - .5) + .5 + uBrightness;
          
          gl_FragColor = vec4(color, diffuseColor.a);
      `);
      };
      this.material.uniforms = this.uniforms;
    }
    createMesh() {
      this.mesh = new Mesh(this.geometry, this.material);
      this.mesh.scale.multiplyScalar(1.2);
      this.mesh.position.y = -0.2;
      this.add(this.mesh);
    }
  }
});
