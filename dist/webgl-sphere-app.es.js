var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var style = "";
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const REVISION = "152";
const CullFaceNone = 0;
const CullFaceBack = 1;
const CullFaceFront = 2;
const PCFShadowMap = 1;
const PCFSoftShadowMap = 2;
const VSMShadowMap = 3;
const FrontSide = 0;
const BackSide = 1;
const DoubleSide = 2;
const NoBlending = 0;
const NormalBlending = 1;
const AdditiveBlending = 2;
const SubtractiveBlending = 3;
const MultiplyBlending = 4;
const CustomBlending = 5;
const AddEquation = 100;
const SubtractEquation = 101;
const ReverseSubtractEquation = 102;
const MinEquation = 103;
const MaxEquation = 104;
const ZeroFactor = 200;
const OneFactor = 201;
const SrcColorFactor = 202;
const OneMinusSrcColorFactor = 203;
const SrcAlphaFactor = 204;
const OneMinusSrcAlphaFactor = 205;
const DstAlphaFactor = 206;
const OneMinusDstAlphaFactor = 207;
const DstColorFactor = 208;
const OneMinusDstColorFactor = 209;
const SrcAlphaSaturateFactor = 210;
const NeverDepth = 0;
const AlwaysDepth = 1;
const LessDepth = 2;
const LessEqualDepth = 3;
const EqualDepth = 4;
const GreaterEqualDepth = 5;
const GreaterDepth = 6;
const NotEqualDepth = 7;
const MultiplyOperation = 0;
const MixOperation = 1;
const AddOperation = 2;
const NoToneMapping = 0;
const LinearToneMapping = 1;
const ReinhardToneMapping = 2;
const CineonToneMapping = 3;
const ACESFilmicToneMapping = 4;
const CustomToneMapping = 5;
const UVMapping = 300;
const CubeReflectionMapping = 301;
const CubeRefractionMapping = 302;
const EquirectangularReflectionMapping = 303;
const EquirectangularRefractionMapping = 304;
const CubeUVReflectionMapping = 306;
const RepeatWrapping = 1e3;
const ClampToEdgeWrapping = 1001;
const MirroredRepeatWrapping = 1002;
const NearestFilter = 1003;
const NearestMipmapNearestFilter = 1004;
const NearestMipmapLinearFilter = 1005;
const LinearFilter = 1006;
const LinearMipmapNearestFilter = 1007;
const LinearMipmapLinearFilter = 1008;
const UnsignedByteType = 1009;
const ByteType = 1010;
const ShortType = 1011;
const UnsignedShortType = 1012;
const IntType = 1013;
const UnsignedIntType = 1014;
const FloatType = 1015;
const HalfFloatType = 1016;
const UnsignedShort4444Type = 1017;
const UnsignedShort5551Type = 1018;
const UnsignedInt248Type = 1020;
const AlphaFormat = 1021;
const RGBAFormat = 1023;
const LuminanceFormat = 1024;
const LuminanceAlphaFormat = 1025;
const DepthFormat = 1026;
const DepthStencilFormat = 1027;
const RedFormat = 1028;
const RedIntegerFormat = 1029;
const RGFormat = 1030;
const RGIntegerFormat = 1031;
const RGBAIntegerFormat = 1033;
const RGB_S3TC_DXT1_Format = 33776;
const RGBA_S3TC_DXT1_Format = 33777;
const RGBA_S3TC_DXT3_Format = 33778;
const RGBA_S3TC_DXT5_Format = 33779;
const RGB_PVRTC_4BPPV1_Format = 35840;
const RGB_PVRTC_2BPPV1_Format = 35841;
const RGBA_PVRTC_4BPPV1_Format = 35842;
const RGBA_PVRTC_2BPPV1_Format = 35843;
const RGB_ETC1_Format = 36196;
const RGB_ETC2_Format = 37492;
const RGBA_ETC2_EAC_Format = 37496;
const RGBA_ASTC_4x4_Format = 37808;
const RGBA_ASTC_5x4_Format = 37809;
const RGBA_ASTC_5x5_Format = 37810;
const RGBA_ASTC_6x5_Format = 37811;
const RGBA_ASTC_6x6_Format = 37812;
const RGBA_ASTC_8x5_Format = 37813;
const RGBA_ASTC_8x6_Format = 37814;
const RGBA_ASTC_8x8_Format = 37815;
const RGBA_ASTC_10x5_Format = 37816;
const RGBA_ASTC_10x6_Format = 37817;
const RGBA_ASTC_10x8_Format = 37818;
const RGBA_ASTC_10x10_Format = 37819;
const RGBA_ASTC_12x10_Format = 37820;
const RGBA_ASTC_12x12_Format = 37821;
const RGBA_BPTC_Format = 36492;
const RED_RGTC1_Format = 36283;
const SIGNED_RED_RGTC1_Format = 36284;
const RED_GREEN_RGTC2_Format = 36285;
const SIGNED_RED_GREEN_RGTC2_Format = 36286;
const LinearEncoding = 3e3;
const sRGBEncoding = 3001;
const BasicDepthPacking = 3200;
const RGBADepthPacking = 3201;
const TangentSpaceNormalMap = 0;
const ObjectSpaceNormalMap = 1;
const NoColorSpace = "";
const SRGBColorSpace = "srgb";
const LinearSRGBColorSpace = "srgb-linear";
const DisplayP3ColorSpace = "display-p3";
const KeepStencilOp = 7680;
const AlwaysStencilFunc = 519;
const StaticDrawUsage = 35044;
const GLSL3 = "300 es";
const _SRGBAFormat = 1035;
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
const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;
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
function isPowerOfTwo(value) {
  return (value & value - 1) === 0 && value !== 0;
}
function floorPowerOfTwo(value) {
  return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
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
class Vector4 {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    Vector4.prototype.isVector4 = true;
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  get width() {
    return this.z;
  }
  set width(value) {
    this.z = value;
  }
  get height() {
    return this.w;
  }
  set height(value) {
    this.w = value;
  }
  set(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  }
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    this.z = scalar;
    this.w = scalar;
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
  setW(w) {
    this.w = w;
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
      case 3:
        this.w = value;
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
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + index);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    this.w = v.w !== void 0 ? v.w : 1;
    return this;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    this.w += v.w;
    return this;
  }
  addScalar(s) {
    this.x += s;
    this.y += s;
    this.z += s;
    this.w += s;
    return this;
  }
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    this.w = a.w + b.w;
    return this;
  }
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;
    this.w += v.w * s;
    return this;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    this.w -= v.w;
    return this;
  }
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    this.z -= s;
    this.w -= s;
    return this;
  }
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    this.w = a.w - b.w;
    return this;
  }
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    this.w *= v.w;
    return this;
  }
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    this.w *= scalar;
    return this;
  }
  applyMatrix4(m) {
    const x = this.x, y = this.y, z = this.z, w = this.w;
    const e = m.elements;
    this.x = e[0] * x + e[4] * y + e[8] * z + e[12] * w;
    this.y = e[1] * x + e[5] * y + e[9] * z + e[13] * w;
    this.z = e[2] * x + e[6] * y + e[10] * z + e[14] * w;
    this.w = e[3] * x + e[7] * y + e[11] * z + e[15] * w;
    return this;
  }
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  setAxisAngleFromQuaternion(q) {
    this.w = 2 * Math.acos(q.w);
    const s = Math.sqrt(1 - q.w * q.w);
    if (s < 1e-4) {
      this.x = 1;
      this.y = 0;
      this.z = 0;
    } else {
      this.x = q.x / s;
      this.y = q.y / s;
      this.z = q.z / s;
    }
    return this;
  }
  setAxisAngleFromRotationMatrix(m) {
    let angle, x, y, z;
    const epsilon = 0.01, epsilon2 = 0.1, te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10];
    if (Math.abs(m12 - m21) < epsilon && Math.abs(m13 - m31) < epsilon && Math.abs(m23 - m32) < epsilon) {
      if (Math.abs(m12 + m21) < epsilon2 && Math.abs(m13 + m31) < epsilon2 && Math.abs(m23 + m32) < epsilon2 && Math.abs(m11 + m22 + m33 - 3) < epsilon2) {
        this.set(1, 0, 0, 0);
        return this;
      }
      angle = Math.PI;
      const xx = (m11 + 1) / 2;
      const yy = (m22 + 1) / 2;
      const zz = (m33 + 1) / 2;
      const xy = (m12 + m21) / 4;
      const xz = (m13 + m31) / 4;
      const yz = (m23 + m32) / 4;
      if (xx > yy && xx > zz) {
        if (xx < epsilon) {
          x = 0;
          y = 0.707106781;
          z = 0.707106781;
        } else {
          x = Math.sqrt(xx);
          y = xy / x;
          z = xz / x;
        }
      } else if (yy > zz) {
        if (yy < epsilon) {
          x = 0.707106781;
          y = 0;
          z = 0.707106781;
        } else {
          y = Math.sqrt(yy);
          x = xy / y;
          z = yz / y;
        }
      } else {
        if (zz < epsilon) {
          x = 0.707106781;
          y = 0.707106781;
          z = 0;
        } else {
          z = Math.sqrt(zz);
          x = xz / z;
          y = yz / z;
        }
      }
      this.set(x, y, z, angle);
      return this;
    }
    let s = Math.sqrt((m32 - m23) * (m32 - m23) + (m13 - m31) * (m13 - m31) + (m21 - m12) * (m21 - m12));
    if (Math.abs(s) < 1e-3)
      s = 1;
    this.x = (m32 - m23) / s;
    this.y = (m13 - m31) / s;
    this.z = (m21 - m12) / s;
    this.w = Math.acos((m11 + m22 + m33 - 1) / 2);
    return this;
  }
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    this.z = Math.min(this.z, v.z);
    this.w = Math.min(this.w, v.w);
    return this;
  }
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    this.z = Math.max(this.z, v.z);
    this.w = Math.max(this.w, v.w);
    return this;
  }
  clamp(min, max) {
    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    this.z = Math.max(min.z, Math.min(max.z, this.z));
    this.w = Math.max(min.w, Math.min(max.w, this.w));
    return this;
  }
  clampScalar(minVal, maxVal) {
    this.x = Math.max(minVal, Math.min(maxVal, this.x));
    this.y = Math.max(minVal, Math.min(maxVal, this.y));
    this.z = Math.max(minVal, Math.min(maxVal, this.z));
    this.w = Math.max(minVal, Math.min(maxVal, this.w));
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
    this.w = Math.floor(this.w);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    this.w = Math.ceil(this.w);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    this.w = Math.round(this.w);
    return this;
  }
  roundToZero() {
    this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
    this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
    this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;
    return this;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
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
    this.w += (v.w - this.w) * alpha;
    return this;
  }
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    this.z = v1.z + (v2.z - v1.z) * alpha;
    this.w = v1.w + (v2.w - v1.w) * alpha;
    return this;
  }
  equals(v) {
    return v.x === this.x && v.y === this.y && v.z === this.z && v.w === this.w;
  }
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    this.w = array[offset + 3];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    array[offset + 3] = this.w;
    return array;
  }
  fromBufferAttribute(attribute, index) {
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    this.z = attribute.getZ(index);
    this.w = attribute.getW(index);
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    this.w = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
    yield this.w;
  }
}
class WebGLRenderTarget extends EventDispatcher {
  constructor(width = 1, height = 1, options = {}) {
    super();
    this.isWebGLRenderTarget = true;
    this.width = width;
    this.height = height;
    this.depth = 1;
    this.scissor = new Vector4(0, 0, width, height);
    this.scissorTest = false;
    this.viewport = new Vector4(0, 0, width, height);
    const image = { width, height, depth: 1 };
    if (options.encoding !== void 0) {
      warnOnce("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace.");
      options.colorSpace = options.encoding === sRGBEncoding ? SRGBColorSpace : NoColorSpace;
    }
    this.texture = new Texture(image, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.colorSpace);
    this.texture.isRenderTargetTexture = true;
    this.texture.flipY = false;
    this.texture.generateMipmaps = options.generateMipmaps !== void 0 ? options.generateMipmaps : false;
    this.texture.internalFormat = options.internalFormat !== void 0 ? options.internalFormat : null;
    this.texture.minFilter = options.minFilter !== void 0 ? options.minFilter : LinearFilter;
    this.depthBuffer = options.depthBuffer !== void 0 ? options.depthBuffer : true;
    this.stencilBuffer = options.stencilBuffer !== void 0 ? options.stencilBuffer : false;
    this.depthTexture = options.depthTexture !== void 0 ? options.depthTexture : null;
    this.samples = options.samples !== void 0 ? options.samples : 0;
  }
  setSize(width, height, depth = 1) {
    if (this.width !== width || this.height !== height || this.depth !== depth) {
      this.width = width;
      this.height = height;
      this.depth = depth;
      this.texture.image.width = width;
      this.texture.image.height = height;
      this.texture.image.depth = depth;
      this.dispose();
    }
    this.viewport.set(0, 0, width, height);
    this.scissor.set(0, 0, width, height);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(source) {
    this.width = source.width;
    this.height = source.height;
    this.depth = source.depth;
    this.scissor.copy(source.scissor);
    this.scissorTest = source.scissorTest;
    this.viewport.copy(source.viewport);
    this.texture = source.texture.clone();
    this.texture.isRenderTargetTexture = true;
    const image = Object.assign({}, source.texture.image);
    this.texture.source = new Source(image);
    this.depthBuffer = source.depthBuffer;
    this.stencilBuffer = source.stencilBuffer;
    if (source.depthTexture !== null)
      this.depthTexture = source.depthTexture.clone();
    this.samples = source.samples;
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class DataArrayTexture extends Texture {
  constructor(data = null, width = 1, height = 1, depth = 1) {
    super(null);
    this.isDataArrayTexture = true;
    this.image = { data, width, height, depth };
    this.magFilter = NearestFilter;
    this.minFilter = NearestFilter;
    this.wrapR = ClampToEdgeWrapping;
    this.generateMipmaps = false;
    this.flipY = false;
    this.unpackAlignment = 1;
  }
}
class Data3DTexture extends Texture {
  constructor(data = null, width = 1, height = 1, depth = 1) {
    super(null);
    this.isData3DTexture = true;
    this.image = { data, width, height, depth };
    this.magFilter = NearestFilter;
    this.minFilter = NearestFilter;
    this.wrapR = ClampToEdgeWrapping;
    this.generateMipmaps = false;
    this.flipY = false;
    this.unpackAlignment = 1;
  }
}
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
class BoxGeometry extends BufferGeometry {
  constructor(width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1) {
    super();
    this.type = "BoxGeometry";
    this.parameters = {
      width,
      height,
      depth,
      widthSegments,
      heightSegments,
      depthSegments
    };
    const scope = this;
    widthSegments = Math.floor(widthSegments);
    heightSegments = Math.floor(heightSegments);
    depthSegments = Math.floor(depthSegments);
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    let numberOfVertices = 0;
    let groupStart = 0;
    buildPlane("z", "y", "x", -1, -1, depth, height, width, depthSegments, heightSegments, 0);
    buildPlane("z", "y", "x", 1, -1, depth, height, -width, depthSegments, heightSegments, 1);
    buildPlane("x", "z", "y", 1, 1, width, depth, height, widthSegments, depthSegments, 2);
    buildPlane("x", "z", "y", 1, -1, width, depth, -height, widthSegments, depthSegments, 3);
    buildPlane("x", "y", "z", 1, -1, width, height, depth, widthSegments, heightSegments, 4);
    buildPlane("x", "y", "z", -1, -1, width, height, -depth, widthSegments, heightSegments, 5);
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
    function buildPlane(u, v, w, udir, vdir, width2, height2, depth2, gridX, gridY, materialIndex) {
      const segmentWidth = width2 / gridX;
      const segmentHeight = height2 / gridY;
      const widthHalf = width2 / 2;
      const heightHalf = height2 / 2;
      const depthHalf = depth2 / 2;
      const gridX1 = gridX + 1;
      const gridY1 = gridY + 1;
      let vertexCounter = 0;
      let groupCount = 0;
      const vector = new Vector3();
      for (let iy = 0; iy < gridY1; iy++) {
        const y = iy * segmentHeight - heightHalf;
        for (let ix = 0; ix < gridX1; ix++) {
          const x = ix * segmentWidth - widthHalf;
          vector[u] = x * udir;
          vector[v] = y * vdir;
          vector[w] = depthHalf;
          vertices.push(vector.x, vector.y, vector.z);
          vector[u] = 0;
          vector[v] = 0;
          vector[w] = depth2 > 0 ? 1 : -1;
          normals.push(vector.x, vector.y, vector.z);
          uvs.push(ix / gridX);
          uvs.push(1 - iy / gridY);
          vertexCounter += 1;
        }
      }
      for (let iy = 0; iy < gridY; iy++) {
        for (let ix = 0; ix < gridX; ix++) {
          const a = numberOfVertices + ix + gridX1 * iy;
          const b = numberOfVertices + ix + gridX1 * (iy + 1);
          const c = numberOfVertices + (ix + 1) + gridX1 * (iy + 1);
          const d = numberOfVertices + (ix + 1) + gridX1 * iy;
          indices.push(a, b, d);
          indices.push(b, c, d);
          groupCount += 6;
        }
      }
      scope.addGroup(groupStart, groupCount, materialIndex);
      groupStart += groupCount;
      numberOfVertices += vertexCounter;
    }
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  static fromJSON(data) {
    return new BoxGeometry(data.width, data.height, data.depth, data.widthSegments, data.heightSegments, data.depthSegments);
  }
}
function cloneUniforms(src) {
  const dst = {};
  for (const u in src) {
    dst[u] = {};
    for (const p in src[u]) {
      const property = src[u][p];
      if (property && (property.isColor || property.isMatrix3 || property.isMatrix4 || property.isVector2 || property.isVector3 || property.isVector4 || property.isTexture || property.isQuaternion)) {
        if (property.isRenderTargetTexture) {
          console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().");
          dst[u][p] = null;
        } else {
          dst[u][p] = property.clone();
        }
      } else if (Array.isArray(property)) {
        dst[u][p] = property.slice();
      } else {
        dst[u][p] = property;
      }
    }
  }
  return dst;
}
function mergeUniforms(uniforms) {
  const merged = {};
  for (let u = 0; u < uniforms.length; u++) {
    const tmp = cloneUniforms(uniforms[u]);
    for (const p in tmp) {
      merged[p] = tmp[p];
    }
  }
  return merged;
}
function cloneUniformsGroups(src) {
  const dst = [];
  for (let u = 0; u < src.length; u++) {
    dst.push(src[u].clone());
  }
  return dst;
}
function getUnlitUniformColorSpace(renderer) {
  if (renderer.getRenderTarget() === null) {
    return renderer.outputColorSpace;
  }
  return LinearSRGBColorSpace;
}
const UniformsUtils = { clone: cloneUniforms, merge: mergeUniforms };
var default_vertex = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
var default_fragment = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
class ShaderMaterial extends Material {
  constructor(parameters) {
    super();
    this.isShaderMaterial = true;
    this.type = "ShaderMaterial";
    this.defines = {};
    this.uniforms = {};
    this.uniformsGroups = [];
    this.vertexShader = default_vertex;
    this.fragmentShader = default_fragment;
    this.linewidth = 1;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.fog = false;
    this.lights = false;
    this.clipping = false;
    this.forceSinglePass = true;
    this.extensions = {
      derivatives: false,
      fragDepth: false,
      drawBuffers: false,
      shaderTextureLOD: false
    };
    this.defaultAttributeValues = {
      "color": [1, 1, 1],
      "uv": [0, 0],
      "uv1": [0, 0]
    };
    this.index0AttributeName = void 0;
    this.uniformsNeedUpdate = false;
    this.glslVersion = null;
    if (parameters !== void 0) {
      this.setValues(parameters);
    }
  }
  copy(source) {
    super.copy(source);
    this.fragmentShader = source.fragmentShader;
    this.vertexShader = source.vertexShader;
    this.uniforms = cloneUniforms(source.uniforms);
    this.uniformsGroups = cloneUniformsGroups(source.uniformsGroups);
    this.defines = Object.assign({}, source.defines);
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.fog = source.fog;
    this.lights = source.lights;
    this.clipping = source.clipping;
    this.extensions = Object.assign({}, source.extensions);
    this.glslVersion = source.glslVersion;
    return this;
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.glslVersion = this.glslVersion;
    data.uniforms = {};
    for (const name in this.uniforms) {
      const uniform = this.uniforms[name];
      const value = uniform.value;
      if (value && value.isTexture) {
        data.uniforms[name] = {
          type: "t",
          value: value.toJSON(meta).uuid
        };
      } else if (value && value.isColor) {
        data.uniforms[name] = {
          type: "c",
          value: value.getHex()
        };
      } else if (value && value.isVector2) {
        data.uniforms[name] = {
          type: "v2",
          value: value.toArray()
        };
      } else if (value && value.isVector3) {
        data.uniforms[name] = {
          type: "v3",
          value: value.toArray()
        };
      } else if (value && value.isVector4) {
        data.uniforms[name] = {
          type: "v4",
          value: value.toArray()
        };
      } else if (value && value.isMatrix3) {
        data.uniforms[name] = {
          type: "m3",
          value: value.toArray()
        };
      } else if (value && value.isMatrix4) {
        data.uniforms[name] = {
          type: "m4",
          value: value.toArray()
        };
      } else {
        data.uniforms[name] = {
          value
        };
      }
    }
    if (Object.keys(this.defines).length > 0)
      data.defines = this.defines;
    data.vertexShader = this.vertexShader;
    data.fragmentShader = this.fragmentShader;
    data.lights = this.lights;
    data.clipping = this.clipping;
    const extensions = {};
    for (const key in this.extensions) {
      if (this.extensions[key] === true)
        extensions[key] = true;
    }
    if (Object.keys(extensions).length > 0)
      data.extensions = extensions;
    return data;
  }
}
class Camera extends Object3D {
  constructor() {
    super();
    this.isCamera = true;
    this.type = "Camera";
    this.matrixWorldInverse = new Matrix4();
    this.projectionMatrix = new Matrix4();
    this.projectionMatrixInverse = new Matrix4();
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    this.matrixWorldInverse.copy(source.matrixWorldInverse);
    this.projectionMatrix.copy(source.projectionMatrix);
    this.projectionMatrixInverse.copy(source.projectionMatrixInverse);
    return this;
  }
  getWorldDirection(target) {
    this.updateWorldMatrix(true, false);
    const e = this.matrixWorld.elements;
    return target.set(-e[8], -e[9], -e[10]).normalize();
  }
  updateMatrixWorld(force) {
    super.updateMatrixWorld(force);
    this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(updateParents, updateChildren) {
    super.updateWorldMatrix(updateParents, updateChildren);
    this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class PerspectiveCamera extends Camera {
  constructor(fov2 = 50, aspect2 = 1, near = 0.1, far = 2e3) {
    super();
    this.isPerspectiveCamera = true;
    this.type = "PerspectiveCamera";
    this.fov = fov2;
    this.zoom = 1;
    this.near = near;
    this.far = far;
    this.focus = 10;
    this.aspect = aspect2;
    this.view = null;
    this.filmGauge = 35;
    this.filmOffset = 0;
    this.updateProjectionMatrix();
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    this.fov = source.fov;
    this.zoom = source.zoom;
    this.near = source.near;
    this.far = source.far;
    this.focus = source.focus;
    this.aspect = source.aspect;
    this.view = source.view === null ? null : Object.assign({}, source.view);
    this.filmGauge = source.filmGauge;
    this.filmOffset = source.filmOffset;
    return this;
  }
  setFocalLength(focalLength) {
    const vExtentSlope = 0.5 * this.getFilmHeight() / focalLength;
    this.fov = RAD2DEG * 2 * Math.atan(vExtentSlope);
    this.updateProjectionMatrix();
  }
  getFocalLength() {
    const vExtentSlope = Math.tan(DEG2RAD * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / vExtentSlope;
  }
  getEffectiveFOV() {
    return RAD2DEG * 2 * Math.atan(
      Math.tan(DEG2RAD * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(fullWidth, fullHeight, x, y, width, height) {
    this.aspect = fullWidth / fullHeight;
    if (this.view === null) {
      this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = true;
    this.view.fullWidth = fullWidth;
    this.view.fullHeight = fullHeight;
    this.view.offsetX = x;
    this.view.offsetY = y;
    this.view.width = width;
    this.view.height = height;
    this.updateProjectionMatrix();
  }
  clearViewOffset() {
    if (this.view !== null) {
      this.view.enabled = false;
    }
    this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const near = this.near;
    let top = near * Math.tan(DEG2RAD * 0.5 * this.fov) / this.zoom;
    let height = 2 * top;
    let width = this.aspect * height;
    let left = -0.5 * width;
    const view = this.view;
    if (this.view !== null && this.view.enabled) {
      const fullWidth = view.fullWidth, fullHeight = view.fullHeight;
      left += view.offsetX * width / fullWidth;
      top -= view.offsetY * height / fullHeight;
      width *= view.width / fullWidth;
      height *= view.height / fullHeight;
    }
    const skew = this.filmOffset;
    if (skew !== 0)
      left += near * skew / this.getFilmWidth();
    this.projectionMatrix.makePerspective(left, left + width, top, top - height, near, this.far);
    this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.object.fov = this.fov;
    data.object.zoom = this.zoom;
    data.object.near = this.near;
    data.object.far = this.far;
    data.object.focus = this.focus;
    data.object.aspect = this.aspect;
    if (this.view !== null)
      data.object.view = Object.assign({}, this.view);
    data.object.filmGauge = this.filmGauge;
    data.object.filmOffset = this.filmOffset;
    return data;
  }
}
const fov = -90;
const aspect = 1;
class CubeCamera extends Object3D {
  constructor(near, far, renderTarget) {
    super();
    this.type = "CubeCamera";
    this.renderTarget = renderTarget;
    const cameraPX = new PerspectiveCamera(fov, aspect, near, far);
    cameraPX.layers = this.layers;
    cameraPX.up.set(0, 1, 0);
    cameraPX.lookAt(1, 0, 0);
    this.add(cameraPX);
    const cameraNX = new PerspectiveCamera(fov, aspect, near, far);
    cameraNX.layers = this.layers;
    cameraNX.up.set(0, 1, 0);
    cameraNX.lookAt(-1, 0, 0);
    this.add(cameraNX);
    const cameraPY = new PerspectiveCamera(fov, aspect, near, far);
    cameraPY.layers = this.layers;
    cameraPY.up.set(0, 0, -1);
    cameraPY.lookAt(0, 1, 0);
    this.add(cameraPY);
    const cameraNY = new PerspectiveCamera(fov, aspect, near, far);
    cameraNY.layers = this.layers;
    cameraNY.up.set(0, 0, 1);
    cameraNY.lookAt(0, -1, 0);
    this.add(cameraNY);
    const cameraPZ = new PerspectiveCamera(fov, aspect, near, far);
    cameraPZ.layers = this.layers;
    cameraPZ.up.set(0, 1, 0);
    cameraPZ.lookAt(0, 0, 1);
    this.add(cameraPZ);
    const cameraNZ = new PerspectiveCamera(fov, aspect, near, far);
    cameraNZ.layers = this.layers;
    cameraNZ.up.set(0, 1, 0);
    cameraNZ.lookAt(0, 0, -1);
    this.add(cameraNZ);
  }
  update(renderer, scene) {
    if (this.parent === null)
      this.updateMatrixWorld();
    const renderTarget = this.renderTarget;
    const [cameraPX, cameraNX, cameraPY, cameraNY, cameraPZ, cameraNZ] = this.children;
    const currentRenderTarget = renderer.getRenderTarget();
    const currentToneMapping = renderer.toneMapping;
    const currentXrEnabled = renderer.xr.enabled;
    renderer.toneMapping = NoToneMapping;
    renderer.xr.enabled = false;
    const generateMipmaps = renderTarget.texture.generateMipmaps;
    renderTarget.texture.generateMipmaps = false;
    renderer.setRenderTarget(renderTarget, 0);
    renderer.render(scene, cameraPX);
    renderer.setRenderTarget(renderTarget, 1);
    renderer.render(scene, cameraNX);
    renderer.setRenderTarget(renderTarget, 2);
    renderer.render(scene, cameraPY);
    renderer.setRenderTarget(renderTarget, 3);
    renderer.render(scene, cameraNY);
    renderer.setRenderTarget(renderTarget, 4);
    renderer.render(scene, cameraPZ);
    renderTarget.texture.generateMipmaps = generateMipmaps;
    renderer.setRenderTarget(renderTarget, 5);
    renderer.render(scene, cameraNZ);
    renderer.setRenderTarget(currentRenderTarget);
    renderer.toneMapping = currentToneMapping;
    renderer.xr.enabled = currentXrEnabled;
    renderTarget.texture.needsPMREMUpdate = true;
  }
}
class CubeTexture extends Texture {
  constructor(images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, colorSpace) {
    images = images !== void 0 ? images : [];
    mapping = mapping !== void 0 ? mapping : CubeReflectionMapping;
    super(images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, colorSpace);
    this.isCubeTexture = true;
    this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(value) {
    this.image = value;
  }
}
class WebGLCubeRenderTarget extends WebGLRenderTarget {
  constructor(size = 1, options = {}) {
    super(size, size, options);
    this.isWebGLCubeRenderTarget = true;
    const image = { width: size, height: size, depth: 1 };
    const images = [image, image, image, image, image, image];
    if (options.encoding !== void 0) {
      warnOnce("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace.");
      options.colorSpace = options.encoding === sRGBEncoding ? SRGBColorSpace : NoColorSpace;
    }
    this.texture = new CubeTexture(images, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.colorSpace);
    this.texture.isRenderTargetTexture = true;
    this.texture.generateMipmaps = options.generateMipmaps !== void 0 ? options.generateMipmaps : false;
    this.texture.minFilter = options.minFilter !== void 0 ? options.minFilter : LinearFilter;
  }
  fromEquirectangularTexture(renderer, texture) {
    this.texture.type = texture.type;
    this.texture.colorSpace = texture.colorSpace;
    this.texture.generateMipmaps = texture.generateMipmaps;
    this.texture.minFilter = texture.minFilter;
    this.texture.magFilter = texture.magFilter;
    const shader = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    };
    const geometry = new BoxGeometry(5, 5, 5);
    const material = new ShaderMaterial({
      name: "CubemapFromEquirect",
      uniforms: cloneUniforms(shader.uniforms),
      vertexShader: shader.vertexShader,
      fragmentShader: shader.fragmentShader,
      side: BackSide,
      blending: NoBlending
    });
    material.uniforms.tEquirect.value = texture;
    const mesh = new Mesh(geometry, material);
    const currentMinFilter = texture.minFilter;
    if (texture.minFilter === LinearMipmapLinearFilter)
      texture.minFilter = LinearFilter;
    const camera = new CubeCamera(1, 10, this);
    camera.update(renderer, mesh);
    texture.minFilter = currentMinFilter;
    mesh.geometry.dispose();
    mesh.material.dispose();
    return this;
  }
  clear(renderer, color, depth, stencil) {
    const currentRenderTarget = renderer.getRenderTarget();
    for (let i = 0; i < 6; i++) {
      renderer.setRenderTarget(this, i);
      renderer.clear(color, depth, stencil);
    }
    renderer.setRenderTarget(currentRenderTarget);
  }
}
const _vector1 = /* @__PURE__ */ new Vector3();
const _vector2 = /* @__PURE__ */ new Vector3();
const _normalMatrix = /* @__PURE__ */ new Matrix3();
class Plane {
  constructor(normal = new Vector3(1, 0, 0), constant = 0) {
    this.isPlane = true;
    this.normal = normal;
    this.constant = constant;
  }
  set(normal, constant) {
    this.normal.copy(normal);
    this.constant = constant;
    return this;
  }
  setComponents(x, y, z, w) {
    this.normal.set(x, y, z);
    this.constant = w;
    return this;
  }
  setFromNormalAndCoplanarPoint(normal, point) {
    this.normal.copy(normal);
    this.constant = -point.dot(this.normal);
    return this;
  }
  setFromCoplanarPoints(a, b, c) {
    const normal = _vector1.subVectors(c, b).cross(_vector2.subVectors(a, b)).normalize();
    this.setFromNormalAndCoplanarPoint(normal, a);
    return this;
  }
  copy(plane) {
    this.normal.copy(plane.normal);
    this.constant = plane.constant;
    return this;
  }
  normalize() {
    const inverseNormalLength = 1 / this.normal.length();
    this.normal.multiplyScalar(inverseNormalLength);
    this.constant *= inverseNormalLength;
    return this;
  }
  negate() {
    this.constant *= -1;
    this.normal.negate();
    return this;
  }
  distanceToPoint(point) {
    return this.normal.dot(point) + this.constant;
  }
  distanceToSphere(sphere) {
    return this.distanceToPoint(sphere.center) - sphere.radius;
  }
  projectPoint(point, target) {
    return target.copy(point).addScaledVector(this.normal, -this.distanceToPoint(point));
  }
  intersectLine(line, target) {
    const direction = line.delta(_vector1);
    const denominator = this.normal.dot(direction);
    if (denominator === 0) {
      if (this.distanceToPoint(line.start) === 0) {
        return target.copy(line.start);
      }
      return null;
    }
    const t = -(line.start.dot(this.normal) + this.constant) / denominator;
    if (t < 0 || t > 1) {
      return null;
    }
    return target.copy(line.start).addScaledVector(direction, t);
  }
  intersectsLine(line) {
    const startSign = this.distanceToPoint(line.start);
    const endSign = this.distanceToPoint(line.end);
    return startSign < 0 && endSign > 0 || endSign < 0 && startSign > 0;
  }
  intersectsBox(box) {
    return box.intersectsPlane(this);
  }
  intersectsSphere(sphere) {
    return sphere.intersectsPlane(this);
  }
  coplanarPoint(target) {
    return target.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(matrix, optionalNormalMatrix) {
    const normalMatrix = optionalNormalMatrix || _normalMatrix.getNormalMatrix(matrix);
    const referencePoint = this.coplanarPoint(_vector1).applyMatrix4(matrix);
    const normal = this.normal.applyMatrix3(normalMatrix).normalize();
    this.constant = -referencePoint.dot(normal);
    return this;
  }
  translate(offset) {
    this.constant -= offset.dot(this.normal);
    return this;
  }
  equals(plane) {
    return plane.normal.equals(this.normal) && plane.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const _sphere$3 = /* @__PURE__ */ new Sphere();
const _vector$6 = /* @__PURE__ */ new Vector3();
class Frustum {
  constructor(p0 = new Plane(), p1 = new Plane(), p2 = new Plane(), p3 = new Plane(), p4 = new Plane(), p5 = new Plane()) {
    this.planes = [p0, p1, p2, p3, p4, p5];
  }
  set(p0, p1, p2, p3, p4, p5) {
    const planes = this.planes;
    planes[0].copy(p0);
    planes[1].copy(p1);
    planes[2].copy(p2);
    planes[3].copy(p3);
    planes[4].copy(p4);
    planes[5].copy(p5);
    return this;
  }
  copy(frustum) {
    const planes = this.planes;
    for (let i = 0; i < 6; i++) {
      planes[i].copy(frustum.planes[i]);
    }
    return this;
  }
  setFromProjectionMatrix(m) {
    const planes = this.planes;
    const me = m.elements;
    const me0 = me[0], me1 = me[1], me2 = me[2], me3 = me[3];
    const me4 = me[4], me5 = me[5], me6 = me[6], me7 = me[7];
    const me8 = me[8], me9 = me[9], me10 = me[10], me11 = me[11];
    const me12 = me[12], me13 = me[13], me14 = me[14], me15 = me[15];
    planes[0].setComponents(me3 - me0, me7 - me4, me11 - me8, me15 - me12).normalize();
    planes[1].setComponents(me3 + me0, me7 + me4, me11 + me8, me15 + me12).normalize();
    planes[2].setComponents(me3 + me1, me7 + me5, me11 + me9, me15 + me13).normalize();
    planes[3].setComponents(me3 - me1, me7 - me5, me11 - me9, me15 - me13).normalize();
    planes[4].setComponents(me3 - me2, me7 - me6, me11 - me10, me15 - me14).normalize();
    planes[5].setComponents(me3 + me2, me7 + me6, me11 + me10, me15 + me14).normalize();
    return this;
  }
  intersectsObject(object) {
    if (object.boundingSphere !== void 0) {
      if (object.boundingSphere === null)
        object.computeBoundingSphere();
      _sphere$3.copy(object.boundingSphere).applyMatrix4(object.matrixWorld);
    } else {
      const geometry = object.geometry;
      if (geometry.boundingSphere === null)
        geometry.computeBoundingSphere();
      _sphere$3.copy(geometry.boundingSphere).applyMatrix4(object.matrixWorld);
    }
    return this.intersectsSphere(_sphere$3);
  }
  intersectsSprite(sprite) {
    _sphere$3.center.set(0, 0, 0);
    _sphere$3.radius = 0.7071067811865476;
    _sphere$3.applyMatrix4(sprite.matrixWorld);
    return this.intersectsSphere(_sphere$3);
  }
  intersectsSphere(sphere) {
    const planes = this.planes;
    const center = sphere.center;
    const negRadius = -sphere.radius;
    for (let i = 0; i < 6; i++) {
      const distance = planes[i].distanceToPoint(center);
      if (distance < negRadius) {
        return false;
      }
    }
    return true;
  }
  intersectsBox(box) {
    const planes = this.planes;
    for (let i = 0; i < 6; i++) {
      const plane = planes[i];
      _vector$6.x = plane.normal.x > 0 ? box.max.x : box.min.x;
      _vector$6.y = plane.normal.y > 0 ? box.max.y : box.min.y;
      _vector$6.z = plane.normal.z > 0 ? box.max.z : box.min.z;
      if (plane.distanceToPoint(_vector$6) < 0) {
        return false;
      }
    }
    return true;
  }
  containsPoint(point) {
    const planes = this.planes;
    for (let i = 0; i < 6; i++) {
      if (planes[i].distanceToPoint(point) < 0) {
        return false;
      }
    }
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function WebGLAnimation() {
  let context = null;
  let isAnimating = false;
  let animationLoop = null;
  let requestId = null;
  function onAnimationFrame(time, frame) {
    animationLoop(time, frame);
    requestId = context.requestAnimationFrame(onAnimationFrame);
  }
  return {
    start: function() {
      if (isAnimating === true)
        return;
      if (animationLoop === null)
        return;
      requestId = context.requestAnimationFrame(onAnimationFrame);
      isAnimating = true;
    },
    stop: function() {
      context.cancelAnimationFrame(requestId);
      isAnimating = false;
    },
    setAnimationLoop: function(callback) {
      animationLoop = callback;
    },
    setContext: function(value) {
      context = value;
    }
  };
}
function WebGLAttributes(gl, capabilities) {
  const isWebGL2 = capabilities.isWebGL2;
  const buffers = /* @__PURE__ */ new WeakMap();
  function createBuffer(attribute, bufferType) {
    const array = attribute.array;
    const usage = attribute.usage;
    const buffer = gl.createBuffer();
    gl.bindBuffer(bufferType, buffer);
    gl.bufferData(bufferType, array, usage);
    attribute.onUploadCallback();
    let type;
    if (array instanceof Float32Array) {
      type = gl.FLOAT;
    } else if (array instanceof Uint16Array) {
      if (attribute.isFloat16BufferAttribute) {
        if (isWebGL2) {
          type = gl.HALF_FLOAT;
        } else {
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
        }
      } else {
        type = gl.UNSIGNED_SHORT;
      }
    } else if (array instanceof Int16Array) {
      type = gl.SHORT;
    } else if (array instanceof Uint32Array) {
      type = gl.UNSIGNED_INT;
    } else if (array instanceof Int32Array) {
      type = gl.INT;
    } else if (array instanceof Int8Array) {
      type = gl.BYTE;
    } else if (array instanceof Uint8Array) {
      type = gl.UNSIGNED_BYTE;
    } else if (array instanceof Uint8ClampedArray) {
      type = gl.UNSIGNED_BYTE;
    } else {
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + array);
    }
    return {
      buffer,
      type,
      bytesPerElement: array.BYTES_PER_ELEMENT,
      version: attribute.version
    };
  }
  function updateBuffer(buffer, attribute, bufferType) {
    const array = attribute.array;
    const updateRange = attribute.updateRange;
    gl.bindBuffer(bufferType, buffer);
    if (updateRange.count === -1) {
      gl.bufferSubData(bufferType, 0, array);
    } else {
      if (isWebGL2) {
        gl.bufferSubData(
          bufferType,
          updateRange.offset * array.BYTES_PER_ELEMENT,
          array,
          updateRange.offset,
          updateRange.count
        );
      } else {
        gl.bufferSubData(
          bufferType,
          updateRange.offset * array.BYTES_PER_ELEMENT,
          array.subarray(updateRange.offset, updateRange.offset + updateRange.count)
        );
      }
      updateRange.count = -1;
    }
    attribute.onUploadCallback();
  }
  function get(attribute) {
    if (attribute.isInterleavedBufferAttribute)
      attribute = attribute.data;
    return buffers.get(attribute);
  }
  function remove(attribute) {
    if (attribute.isInterleavedBufferAttribute)
      attribute = attribute.data;
    const data = buffers.get(attribute);
    if (data) {
      gl.deleteBuffer(data.buffer);
      buffers.delete(attribute);
    }
  }
  function update(attribute, bufferType) {
    if (attribute.isGLBufferAttribute) {
      const cached = buffers.get(attribute);
      if (!cached || cached.version < attribute.version) {
        buffers.set(attribute, {
          buffer: attribute.buffer,
          type: attribute.type,
          bytesPerElement: attribute.elementSize,
          version: attribute.version
        });
      }
      return;
    }
    if (attribute.isInterleavedBufferAttribute)
      attribute = attribute.data;
    const data = buffers.get(attribute);
    if (data === void 0) {
      buffers.set(attribute, createBuffer(attribute, bufferType));
    } else if (data.version < attribute.version) {
      updateBuffer(data.buffer, attribute, bufferType);
      data.version = attribute.version;
    }
  }
  return {
    get,
    remove,
    update
  };
}
class PlaneGeometry extends BufferGeometry {
  constructor(width = 1, height = 1, widthSegments = 1, heightSegments = 1) {
    super();
    this.type = "PlaneGeometry";
    this.parameters = {
      width,
      height,
      widthSegments,
      heightSegments
    };
    const width_half = width / 2;
    const height_half = height / 2;
    const gridX = Math.floor(widthSegments);
    const gridY = Math.floor(heightSegments);
    const gridX1 = gridX + 1;
    const gridY1 = gridY + 1;
    const segment_width = width / gridX;
    const segment_height = height / gridY;
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    for (let iy = 0; iy < gridY1; iy++) {
      const y = iy * segment_height - height_half;
      for (let ix = 0; ix < gridX1; ix++) {
        const x = ix * segment_width - width_half;
        vertices.push(x, -y, 0);
        normals.push(0, 0, 1);
        uvs.push(ix / gridX);
        uvs.push(1 - iy / gridY);
      }
    }
    for (let iy = 0; iy < gridY; iy++) {
      for (let ix = 0; ix < gridX; ix++) {
        const a = ix + gridX1 * iy;
        const b = ix + gridX1 * (iy + 1);
        const c = ix + 1 + gridX1 * (iy + 1);
        const d = ix + 1 + gridX1 * iy;
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  static fromJSON(data) {
    return new PlaneGeometry(data.width, data.height, data.widthSegments, data.heightSegments);
  }
}
var alphamap_fragment = "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif";
var alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif";
var alphatest_fragment = "#ifdef USE_ALPHATEST\n	if ( diffuseColor.a < alphaTest ) discard;\n#endif";
var alphatest_pars_fragment = "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif";
var aomap_fragment = "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif";
var aomap_pars_fragment = "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif";
var begin_vertex = "vec3 transformed = vec3( position );";
var beginnormal_vertex = "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif";
var bsdfs = "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated";
var iridescence_fragment = "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			 return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float R21 = R12;\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif";
var bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = dFdx( surf_pos.xyz );\n		vec3 vSigmaY = dFdy( surf_pos.xyz );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif";
var clipping_planes_fragment = "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#pragma unroll_loop_end\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop_start\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		#pragma unroll_loop_end\n		if ( clipped ) discard;\n	#endif\n#endif";
var clipping_planes_pars_fragment = "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif";
var clipping_planes_pars_vertex = "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif";
var clipping_planes_vertex = "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif";
var color_fragment = "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif";
var color_pars_fragment = "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif";
var color_pars_vertex = "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	varying vec3 vColor;\n#endif";
var color_vertex = "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif";
var common = "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n	return dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated";
var cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_v0 0.339\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_v1 0.276\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_v4 0.046\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_v5 0.016\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_v6 0.0038\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif";
var defaultnormal_vertex = "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n	mat3 m = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n	transformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif";
var displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif";
var displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif";
var emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif";
var emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif";
var encodings_fragment = "gl_FragColor = linearToOutputTexel( gl_FragColor );";
var encodings_pars_fragment = "vec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}";
var envmap_fragment = "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif";
var envmap_common_pars_fragment = "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif";
var envmap_pars_fragment = "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif";
var envmap_pars_vertex = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif";
var envmap_vertex = "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif";
var fog_vertex = "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif";
var fog_pars_vertex = "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif";
var fog_fragment = "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif";
var fog_pars_fragment = "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif";
var gradientmap_pars_fragment = "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}";
var lightmap_fragment = "#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n	reflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif";
var lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif";
var lights_lambert_fragment = "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;";
var lights_lambert_pars_fragment = "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert";
var lights_pars_begin = "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	#if defined ( LEGACY_LIGHTS )\n		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n		}\n		return 1.0;\n	#else\n		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n		if ( cutoffDistance > 0.0 ) {\n			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n		}\n		return distanceFalloff;\n	#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif";
var envmap_physical_pars_fragment = "#if defined( USE_ENVMAP )\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n#endif";
var lights_toon_fragment = "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;";
var lights_toon_pars_fragment = "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon";
var lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;";
var lights_phong_pars_fragment = "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong";
var lights_physical_fragment = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif";
var lights_physical_pars_fragment = "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}";
var lights_fragment_begin = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n	geometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometry.viewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometry, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif";
var lights_fragment_maps = "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometry.normal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif";
var lights_fragment_end = "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif";
var logdepthbuf_fragment = "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif";
var logdepthbuf_pars_fragment = "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif";
var logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif";
var logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif";
var map_fragment = "#ifdef USE_MAP\n	diffuseColor *= texture2D( map, vMapUv );\n#endif";
var map_pars_fragment = "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif";
var map_particle_fragment = "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif";
var map_particle_pars_fragment = "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif";
var metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif";
var metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif";
var morphcolor_vertex = "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif";
var morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n	#endif\n#endif";
var morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n		uniform sampler2DArray morphTargetsTexture;\n		uniform ivec2 morphTargetsTextureSize;\n		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n			int y = texelIndex / morphTargetsTextureSize.x;\n			int x = texelIndex - y * morphTargetsTextureSize.x;\n			ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n			return texelFetch( morphTargetsTexture, morphUV, 0 );\n		}\n	#else\n		#ifndef USE_MORPHNORMALS\n			uniform float morphTargetInfluences[ 8 ];\n		#else\n			uniform float morphTargetInfluences[ 4 ];\n		#endif\n	#endif\n#endif";
var morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n		transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n		transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n		transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n		#ifndef USE_MORPHNORMALS\n			transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n			transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n			transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n			transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n		#endif\n	#endif\n#endif";
var normal_fragment_begin = "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#ifdef USE_NORMALMAP_TANGENTSPACE\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 geometryNormal = normal;";
var normal_fragment_maps = "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif";
var normal_pars_fragment = "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif";
var normal_pars_vertex = "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif";
var normal_vertex = "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif";
var normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif";
var clearcoat_normal_fragment_begin = "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = geometryNormal;\n#endif";
var clearcoat_normal_fragment_maps = "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif";
var clearcoat_pars_fragment = "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif";
var iridescence_pars_fragment = "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif";
var output_fragment = "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );";
var packing = "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n	return packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}";
var premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif";
var project_vertex = "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;";
var dithering_fragment = "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif";
var dithering_pars_fragment = "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif";
var roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif";
var roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif";
var shadowmap_pars_fragment = "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif";
var shadowmap_pars_vertex = "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif";
var shadowmap_vertex = "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif";
var shadowmask_pars_fragment = "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}";
var skinbase_vertex = "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif";
var skinning_pars_vertex = "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	uniform int boneTextureSize;\n	mat4 getBoneMatrix( const in float i ) {\n		float j = i * 4.0;\n		float x = mod( j, float( boneTextureSize ) );\n		float y = floor( j / float( boneTextureSize ) );\n		float dx = 1.0 / float( boneTextureSize );\n		float dy = 1.0 / float( boneTextureSize );\n		y = dy * ( y + 0.5 );\n		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n		mat4 bone = mat4( v1, v2, v3, v4 );\n		return bone;\n	}\n#endif";
var skinning_vertex = "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif";
var skinnormal_vertex = "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif";
var specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif";
var specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif";
var tonemapping_fragment = "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif";
var tonemapping_pars_fragment = "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }";
var transmission_fragment = "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmission = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n#endif";
var transmission_pars_fragment = "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return radiance;\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n		vec3 refractedRayExit = position + transmissionRay;\n		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n		vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n		refractionCoords += 1.0;\n		refractionCoords /= 2.0;\n		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n	}\n#endif";
var uv_pars_fragment = "#ifdef USE_UV\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif";
var uv_pars_vertex = "#ifdef USE_UV\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif";
var uv_vertex = "#ifdef USE_UV\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif";
var worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif";
const vertex$h = "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}";
const fragment$h = "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}";
const vertex$g = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}";
const fragment$g = "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}";
const vertex$f = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}";
const fragment$f = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}";
const vertex$e = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}";
const fragment$e = "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}";
const vertex$d = "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}";
const fragment$d = "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}";
const vertex$c = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}";
const fragment$c = "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}";
const vertex$b = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}";
const fragment$b = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}";
const vertex$a = "#include <common>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}";
const fragment$a = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
const vertex$9 = "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}";
const fragment$9 = "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
const vertex$8 = "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}";
const fragment$8 = "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
const vertex$7 = "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}";
const fragment$7 = "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}";
const vertex$6 = "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}";
const fragment$6 = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
const vertex$5 = "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}";
const fragment$5 = "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n	#endif\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
const vertex$4 = "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}";
const fragment$4 = "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
const vertex$3 = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}";
const fragment$3 = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}";
const vertex$2 = "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}";
const fragment$2 = "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}";
const vertex$1 = "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}";
const fragment$1 = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}";
const ShaderChunk = {
  alphamap_fragment,
  alphamap_pars_fragment,
  alphatest_fragment,
  alphatest_pars_fragment,
  aomap_fragment,
  aomap_pars_fragment,
  begin_vertex,
  beginnormal_vertex,
  bsdfs,
  iridescence_fragment,
  bumpmap_pars_fragment,
  clipping_planes_fragment,
  clipping_planes_pars_fragment,
  clipping_planes_pars_vertex,
  clipping_planes_vertex,
  color_fragment,
  color_pars_fragment,
  color_pars_vertex,
  color_vertex,
  common,
  cube_uv_reflection_fragment,
  defaultnormal_vertex,
  displacementmap_pars_vertex,
  displacementmap_vertex,
  emissivemap_fragment,
  emissivemap_pars_fragment,
  encodings_fragment,
  encodings_pars_fragment,
  envmap_fragment,
  envmap_common_pars_fragment,
  envmap_pars_fragment,
  envmap_pars_vertex,
  envmap_physical_pars_fragment,
  envmap_vertex,
  fog_vertex,
  fog_pars_vertex,
  fog_fragment,
  fog_pars_fragment,
  gradientmap_pars_fragment,
  lightmap_fragment,
  lightmap_pars_fragment,
  lights_lambert_fragment,
  lights_lambert_pars_fragment,
  lights_pars_begin,
  lights_toon_fragment,
  lights_toon_pars_fragment,
  lights_phong_fragment,
  lights_phong_pars_fragment,
  lights_physical_fragment,
  lights_physical_pars_fragment,
  lights_fragment_begin,
  lights_fragment_maps,
  lights_fragment_end,
  logdepthbuf_fragment,
  logdepthbuf_pars_fragment,
  logdepthbuf_pars_vertex,
  logdepthbuf_vertex,
  map_fragment,
  map_pars_fragment,
  map_particle_fragment,
  map_particle_pars_fragment,
  metalnessmap_fragment,
  metalnessmap_pars_fragment,
  morphcolor_vertex,
  morphnormal_vertex,
  morphtarget_pars_vertex,
  morphtarget_vertex,
  normal_fragment_begin,
  normal_fragment_maps,
  normal_pars_fragment,
  normal_pars_vertex,
  normal_vertex,
  normalmap_pars_fragment,
  clearcoat_normal_fragment_begin,
  clearcoat_normal_fragment_maps,
  clearcoat_pars_fragment,
  iridescence_pars_fragment,
  output_fragment,
  packing,
  premultiplied_alpha_fragment,
  project_vertex,
  dithering_fragment,
  dithering_pars_fragment,
  roughnessmap_fragment,
  roughnessmap_pars_fragment,
  shadowmap_pars_fragment,
  shadowmap_pars_vertex,
  shadowmap_vertex,
  shadowmask_pars_fragment,
  skinbase_vertex,
  skinning_pars_vertex,
  skinning_vertex,
  skinnormal_vertex,
  specularmap_fragment,
  specularmap_pars_fragment,
  tonemapping_fragment,
  tonemapping_pars_fragment,
  transmission_fragment,
  transmission_pars_fragment,
  uv_pars_fragment,
  uv_pars_vertex,
  uv_vertex,
  worldpos_vertex,
  background_vert: vertex$h,
  background_frag: fragment$h,
  backgroundCube_vert: vertex$g,
  backgroundCube_frag: fragment$g,
  cube_vert: vertex$f,
  cube_frag: fragment$f,
  depth_vert: vertex$e,
  depth_frag: fragment$e,
  distanceRGBA_vert: vertex$d,
  distanceRGBA_frag: fragment$d,
  equirect_vert: vertex$c,
  equirect_frag: fragment$c,
  linedashed_vert: vertex$b,
  linedashed_frag: fragment$b,
  meshbasic_vert: vertex$a,
  meshbasic_frag: fragment$a,
  meshlambert_vert: vertex$9,
  meshlambert_frag: fragment$9,
  meshmatcap_vert: vertex$8,
  meshmatcap_frag: fragment$8,
  meshnormal_vert: vertex$7,
  meshnormal_frag: fragment$7,
  meshphong_vert: vertex$6,
  meshphong_frag: fragment$6,
  meshphysical_vert: vertex$5,
  meshphysical_frag: fragment$5,
  meshtoon_vert: vertex$4,
  meshtoon_frag: fragment$4,
  points_vert: vertex$3,
  points_frag: fragment$3,
  shadow_vert: vertex$2,
  shadow_frag: fragment$2,
  sprite_vert: vertex$1,
  sprite_frag: fragment$1
};
const UniformsLib = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Color(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    ior: { value: 1.5 },
    refractionRatio: { value: 0.98 }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    normalScale: { value: /* @__PURE__ */ new Vector2(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Color(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Color(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Color(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Vector2(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  }
};
const ShaderLib = {
  basic: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.meshbasic_vert,
    fragmentShader: ShaderChunk.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: /* @__PURE__ */ new Color(0) }
      }
    ]),
    vertexShader: ShaderChunk.meshlambert_vert,
    fragmentShader: ShaderChunk.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: /* @__PURE__ */ new Color(0) },
        specular: { value: /* @__PURE__ */ new Color(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: ShaderChunk.meshphong_vert,
    fragmentShader: ShaderChunk.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.roughnessmap,
      UniformsLib.metalnessmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: /* @__PURE__ */ new Color(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.meshphysical_vert,
    fragmentShader: ShaderChunk.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.gradientmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: /* @__PURE__ */ new Color(0) }
      }
    ]),
    vertexShader: ShaderChunk.meshtoon_vert,
    fragmentShader: ShaderChunk.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: ShaderChunk.meshmatcap_vert,
    fragmentShader: ShaderChunk.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.points,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.points_vert,
    fragmentShader: ShaderChunk.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: ShaderChunk.linedashed_vert,
    fragmentShader: ShaderChunk.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.displacementmap
    ]),
    vertexShader: ShaderChunk.depth_vert,
    fragmentShader: ShaderChunk.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.meshnormal_vert,
    fragmentShader: ShaderChunk.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.sprite,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.sprite_vert,
    fragmentShader: ShaderChunk.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Matrix3() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: ShaderChunk.background_vert,
    fragmentShader: ShaderChunk.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: ShaderChunk.backgroundCube_vert,
    fragmentShader: ShaderChunk.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: ShaderChunk.cube_vert,
    fragmentShader: ShaderChunk.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: ShaderChunk.equirect_vert,
    fragmentShader: ShaderChunk.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new Vector3() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: ShaderChunk.distanceRGBA_vert,
    fragmentShader: ShaderChunk.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.lights,
      UniformsLib.fog,
      {
        color: { value: /* @__PURE__ */ new Color(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.shadow_vert,
    fragmentShader: ShaderChunk.shadow_frag
  }
};
ShaderLib.physical = {
  uniforms: /* @__PURE__ */ mergeUniforms([
    ShaderLib.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Vector2(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Color(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Vector2() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Color(0) },
      specularColor: { value: /* @__PURE__ */ new Color(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Matrix3() }
    }
  ]),
  vertexShader: ShaderChunk.meshphysical_vert,
  fragmentShader: ShaderChunk.meshphysical_frag
};
const _rgb = { r: 0, b: 0, g: 0 };
function WebGLBackground(renderer, cubemaps, cubeuvmaps, state, objects, alpha, premultipliedAlpha) {
  const clearColor = new Color(0);
  let clearAlpha = alpha === true ? 0 : 1;
  let planeMesh;
  let boxMesh;
  let currentBackground = null;
  let currentBackgroundVersion = 0;
  let currentTonemapping = null;
  function render(renderList, scene) {
    let forceClear = false;
    let background = scene.isScene === true ? scene.background : null;
    if (background && background.isTexture) {
      const usePMREM = scene.backgroundBlurriness > 0;
      background = (usePMREM ? cubeuvmaps : cubemaps).get(background);
    }
    if (background === null) {
      setClear(clearColor, clearAlpha);
    } else if (background && background.isColor) {
      setClear(background, 1);
      forceClear = true;
    }
    const xr = renderer.xr;
    const environmentBlendMode = xr.getEnvironmentBlendMode();
    switch (environmentBlendMode) {
      case "opaque":
        forceClear = true;
        break;
      case "additive":
        state.buffers.color.setClear(0, 0, 0, 1, premultipliedAlpha);
        forceClear = true;
        break;
      case "alpha-blend":
        state.buffers.color.setClear(0, 0, 0, 0, premultipliedAlpha);
        forceClear = true;
        break;
    }
    if (renderer.autoClear || forceClear) {
      renderer.clear(renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil);
    }
    if (background && (background.isCubeTexture || background.mapping === CubeUVReflectionMapping)) {
      if (boxMesh === void 0) {
        boxMesh = new Mesh(
          new BoxGeometry(1, 1, 1),
          new ShaderMaterial({
            name: "BackgroundCubeMaterial",
            uniforms: cloneUniforms(ShaderLib.backgroundCube.uniforms),
            vertexShader: ShaderLib.backgroundCube.vertexShader,
            fragmentShader: ShaderLib.backgroundCube.fragmentShader,
            side: BackSide,
            depthTest: false,
            depthWrite: false,
            fog: false
          })
        );
        boxMesh.geometry.deleteAttribute("normal");
        boxMesh.geometry.deleteAttribute("uv");
        boxMesh.onBeforeRender = function(renderer2, scene2, camera) {
          this.matrixWorld.copyPosition(camera.matrixWorld);
        };
        Object.defineProperty(boxMesh.material, "envMap", {
          get: function() {
            return this.uniforms.envMap.value;
          }
        });
        objects.update(boxMesh);
      }
      boxMesh.material.uniforms.envMap.value = background;
      boxMesh.material.uniforms.flipEnvMap.value = background.isCubeTexture && background.isRenderTargetTexture === false ? -1 : 1;
      boxMesh.material.uniforms.backgroundBlurriness.value = scene.backgroundBlurriness;
      boxMesh.material.uniforms.backgroundIntensity.value = scene.backgroundIntensity;
      boxMesh.material.toneMapped = background.colorSpace === SRGBColorSpace ? false : true;
      if (currentBackground !== background || currentBackgroundVersion !== background.version || currentTonemapping !== renderer.toneMapping) {
        boxMesh.material.needsUpdate = true;
        currentBackground = background;
        currentBackgroundVersion = background.version;
        currentTonemapping = renderer.toneMapping;
      }
      boxMesh.layers.enableAll();
      renderList.unshift(boxMesh, boxMesh.geometry, boxMesh.material, 0, 0, null);
    } else if (background && background.isTexture) {
      if (planeMesh === void 0) {
        planeMesh = new Mesh(
          new PlaneGeometry(2, 2),
          new ShaderMaterial({
            name: "BackgroundMaterial",
            uniforms: cloneUniforms(ShaderLib.background.uniforms),
            vertexShader: ShaderLib.background.vertexShader,
            fragmentShader: ShaderLib.background.fragmentShader,
            side: FrontSide,
            depthTest: false,
            depthWrite: false,
            fog: false
          })
        );
        planeMesh.geometry.deleteAttribute("normal");
        Object.defineProperty(planeMesh.material, "map", {
          get: function() {
            return this.uniforms.t2D.value;
          }
        });
        objects.update(planeMesh);
      }
      planeMesh.material.uniforms.t2D.value = background;
      planeMesh.material.uniforms.backgroundIntensity.value = scene.backgroundIntensity;
      planeMesh.material.toneMapped = background.colorSpace === SRGBColorSpace ? false : true;
      if (background.matrixAutoUpdate === true) {
        background.updateMatrix();
      }
      planeMesh.material.uniforms.uvTransform.value.copy(background.matrix);
      if (currentBackground !== background || currentBackgroundVersion !== background.version || currentTonemapping !== renderer.toneMapping) {
        planeMesh.material.needsUpdate = true;
        currentBackground = background;
        currentBackgroundVersion = background.version;
        currentTonemapping = renderer.toneMapping;
      }
      planeMesh.layers.enableAll();
      renderList.unshift(planeMesh, planeMesh.geometry, planeMesh.material, 0, 0, null);
    }
  }
  function setClear(color, alpha2) {
    color.getRGB(_rgb, getUnlitUniformColorSpace(renderer));
    state.buffers.color.setClear(_rgb.r, _rgb.g, _rgb.b, alpha2, premultipliedAlpha);
  }
  return {
    getClearColor: function() {
      return clearColor;
    },
    setClearColor: function(color, alpha2 = 1) {
      clearColor.set(color);
      clearAlpha = alpha2;
      setClear(clearColor, clearAlpha);
    },
    getClearAlpha: function() {
      return clearAlpha;
    },
    setClearAlpha: function(alpha2) {
      clearAlpha = alpha2;
      setClear(clearColor, clearAlpha);
    },
    render
  };
}
function WebGLBindingStates(gl, extensions, attributes, capabilities) {
  const maxVertexAttributes = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
  const extension = capabilities.isWebGL2 ? null : extensions.get("OES_vertex_array_object");
  const vaoAvailable = capabilities.isWebGL2 || extension !== null;
  const bindingStates = {};
  const defaultState = createBindingState(null);
  let currentState = defaultState;
  let forceUpdate = false;
  function setup(object, material, program, geometry, index) {
    let updateBuffers = false;
    if (vaoAvailable) {
      const state = getBindingState(geometry, program, material);
      if (currentState !== state) {
        currentState = state;
        bindVertexArrayObject(currentState.object);
      }
      updateBuffers = needsUpdate(object, geometry, program, index);
      if (updateBuffers)
        saveCache(object, geometry, program, index);
    } else {
      const wireframe = material.wireframe === true;
      if (currentState.geometry !== geometry.id || currentState.program !== program.id || currentState.wireframe !== wireframe) {
        currentState.geometry = geometry.id;
        currentState.program = program.id;
        currentState.wireframe = wireframe;
        updateBuffers = true;
      }
    }
    if (index !== null) {
      attributes.update(index, gl.ELEMENT_ARRAY_BUFFER);
    }
    if (updateBuffers || forceUpdate) {
      forceUpdate = false;
      setupVertexAttributes(object, material, program, geometry);
      if (index !== null) {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, attributes.get(index).buffer);
      }
    }
  }
  function createVertexArrayObject() {
    if (capabilities.isWebGL2)
      return gl.createVertexArray();
    return extension.createVertexArrayOES();
  }
  function bindVertexArrayObject(vao) {
    if (capabilities.isWebGL2)
      return gl.bindVertexArray(vao);
    return extension.bindVertexArrayOES(vao);
  }
  function deleteVertexArrayObject(vao) {
    if (capabilities.isWebGL2)
      return gl.deleteVertexArray(vao);
    return extension.deleteVertexArrayOES(vao);
  }
  function getBindingState(geometry, program, material) {
    const wireframe = material.wireframe === true;
    let programMap = bindingStates[geometry.id];
    if (programMap === void 0) {
      programMap = {};
      bindingStates[geometry.id] = programMap;
    }
    let stateMap = programMap[program.id];
    if (stateMap === void 0) {
      stateMap = {};
      programMap[program.id] = stateMap;
    }
    let state = stateMap[wireframe];
    if (state === void 0) {
      state = createBindingState(createVertexArrayObject());
      stateMap[wireframe] = state;
    }
    return state;
  }
  function createBindingState(vao) {
    const newAttributes = [];
    const enabledAttributes = [];
    const attributeDivisors = [];
    for (let i = 0; i < maxVertexAttributes; i++) {
      newAttributes[i] = 0;
      enabledAttributes[i] = 0;
      attributeDivisors[i] = 0;
    }
    return {
      geometry: null,
      program: null,
      wireframe: false,
      newAttributes,
      enabledAttributes,
      attributeDivisors,
      object: vao,
      attributes: {},
      index: null
    };
  }
  function needsUpdate(object, geometry, program, index) {
    const cachedAttributes = currentState.attributes;
    const geometryAttributes = geometry.attributes;
    let attributesNum = 0;
    const programAttributes = program.getAttributes();
    for (const name in programAttributes) {
      const programAttribute = programAttributes[name];
      if (programAttribute.location >= 0) {
        const cachedAttribute = cachedAttributes[name];
        let geometryAttribute = geometryAttributes[name];
        if (geometryAttribute === void 0) {
          if (name === "instanceMatrix" && object.instanceMatrix)
            geometryAttribute = object.instanceMatrix;
          if (name === "instanceColor" && object.instanceColor)
            geometryAttribute = object.instanceColor;
        }
        if (cachedAttribute === void 0)
          return true;
        if (cachedAttribute.attribute !== geometryAttribute)
          return true;
        if (geometryAttribute && cachedAttribute.data !== geometryAttribute.data)
          return true;
        attributesNum++;
      }
    }
    if (currentState.attributesNum !== attributesNum)
      return true;
    if (currentState.index !== index)
      return true;
    return false;
  }
  function saveCache(object, geometry, program, index) {
    const cache = {};
    const attributes2 = geometry.attributes;
    let attributesNum = 0;
    const programAttributes = program.getAttributes();
    for (const name in programAttributes) {
      const programAttribute = programAttributes[name];
      if (programAttribute.location >= 0) {
        let attribute = attributes2[name];
        if (attribute === void 0) {
          if (name === "instanceMatrix" && object.instanceMatrix)
            attribute = object.instanceMatrix;
          if (name === "instanceColor" && object.instanceColor)
            attribute = object.instanceColor;
        }
        const data = {};
        data.attribute = attribute;
        if (attribute && attribute.data) {
          data.data = attribute.data;
        }
        cache[name] = data;
        attributesNum++;
      }
    }
    currentState.attributes = cache;
    currentState.attributesNum = attributesNum;
    currentState.index = index;
  }
  function initAttributes() {
    const newAttributes = currentState.newAttributes;
    for (let i = 0, il = newAttributes.length; i < il; i++) {
      newAttributes[i] = 0;
    }
  }
  function enableAttribute(attribute) {
    enableAttributeAndDivisor(attribute, 0);
  }
  function enableAttributeAndDivisor(attribute, meshPerAttribute) {
    const newAttributes = currentState.newAttributes;
    const enabledAttributes = currentState.enabledAttributes;
    const attributeDivisors = currentState.attributeDivisors;
    newAttributes[attribute] = 1;
    if (enabledAttributes[attribute] === 0) {
      gl.enableVertexAttribArray(attribute);
      enabledAttributes[attribute] = 1;
    }
    if (attributeDivisors[attribute] !== meshPerAttribute) {
      const extension2 = capabilities.isWebGL2 ? gl : extensions.get("ANGLE_instanced_arrays");
      extension2[capabilities.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](attribute, meshPerAttribute);
      attributeDivisors[attribute] = meshPerAttribute;
    }
  }
  function disableUnusedAttributes() {
    const newAttributes = currentState.newAttributes;
    const enabledAttributes = currentState.enabledAttributes;
    for (let i = 0, il = enabledAttributes.length; i < il; i++) {
      if (enabledAttributes[i] !== newAttributes[i]) {
        gl.disableVertexAttribArray(i);
        enabledAttributes[i] = 0;
      }
    }
  }
  function vertexAttribPointer(index, size, type, normalized, stride, offset) {
    if (capabilities.isWebGL2 === true && (type === gl.INT || type === gl.UNSIGNED_INT)) {
      gl.vertexAttribIPointer(index, size, type, stride, offset);
    } else {
      gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
    }
  }
  function setupVertexAttributes(object, material, program, geometry) {
    if (capabilities.isWebGL2 === false && (object.isInstancedMesh || geometry.isInstancedBufferGeometry)) {
      if (extensions.get("ANGLE_instanced_arrays") === null)
        return;
    }
    initAttributes();
    const geometryAttributes = geometry.attributes;
    const programAttributes = program.getAttributes();
    const materialDefaultAttributeValues = material.defaultAttributeValues;
    for (const name in programAttributes) {
      const programAttribute = programAttributes[name];
      if (programAttribute.location >= 0) {
        let geometryAttribute = geometryAttributes[name];
        if (geometryAttribute === void 0) {
          if (name === "instanceMatrix" && object.instanceMatrix)
            geometryAttribute = object.instanceMatrix;
          if (name === "instanceColor" && object.instanceColor)
            geometryAttribute = object.instanceColor;
        }
        if (geometryAttribute !== void 0) {
          const normalized = geometryAttribute.normalized;
          const size = geometryAttribute.itemSize;
          const attribute = attributes.get(geometryAttribute);
          if (attribute === void 0)
            continue;
          const buffer = attribute.buffer;
          const type = attribute.type;
          const bytesPerElement = attribute.bytesPerElement;
          if (geometryAttribute.isInterleavedBufferAttribute) {
            const data = geometryAttribute.data;
            const stride = data.stride;
            const offset = geometryAttribute.offset;
            if (data.isInstancedInterleavedBuffer) {
              for (let i = 0; i < programAttribute.locationSize; i++) {
                enableAttributeAndDivisor(programAttribute.location + i, data.meshPerAttribute);
              }
              if (object.isInstancedMesh !== true && geometry._maxInstanceCount === void 0) {
                geometry._maxInstanceCount = data.meshPerAttribute * data.count;
              }
            } else {
              for (let i = 0; i < programAttribute.locationSize; i++) {
                enableAttribute(programAttribute.location + i);
              }
            }
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            for (let i = 0; i < programAttribute.locationSize; i++) {
              vertexAttribPointer(
                programAttribute.location + i,
                size / programAttribute.locationSize,
                type,
                normalized,
                stride * bytesPerElement,
                (offset + size / programAttribute.locationSize * i) * bytesPerElement
              );
            }
          } else {
            if (geometryAttribute.isInstancedBufferAttribute) {
              for (let i = 0; i < programAttribute.locationSize; i++) {
                enableAttributeAndDivisor(programAttribute.location + i, geometryAttribute.meshPerAttribute);
              }
              if (object.isInstancedMesh !== true && geometry._maxInstanceCount === void 0) {
                geometry._maxInstanceCount = geometryAttribute.meshPerAttribute * geometryAttribute.count;
              }
            } else {
              for (let i = 0; i < programAttribute.locationSize; i++) {
                enableAttribute(programAttribute.location + i);
              }
            }
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            for (let i = 0; i < programAttribute.locationSize; i++) {
              vertexAttribPointer(
                programAttribute.location + i,
                size / programAttribute.locationSize,
                type,
                normalized,
                size * bytesPerElement,
                size / programAttribute.locationSize * i * bytesPerElement
              );
            }
          }
        } else if (materialDefaultAttributeValues !== void 0) {
          const value = materialDefaultAttributeValues[name];
          if (value !== void 0) {
            switch (value.length) {
              case 2:
                gl.vertexAttrib2fv(programAttribute.location, value);
                break;
              case 3:
                gl.vertexAttrib3fv(programAttribute.location, value);
                break;
              case 4:
                gl.vertexAttrib4fv(programAttribute.location, value);
                break;
              default:
                gl.vertexAttrib1fv(programAttribute.location, value);
            }
          }
        }
      }
    }
    disableUnusedAttributes();
  }
  function dispose() {
    reset();
    for (const geometryId in bindingStates) {
      const programMap = bindingStates[geometryId];
      for (const programId in programMap) {
        const stateMap = programMap[programId];
        for (const wireframe in stateMap) {
          deleteVertexArrayObject(stateMap[wireframe].object);
          delete stateMap[wireframe];
        }
        delete programMap[programId];
      }
      delete bindingStates[geometryId];
    }
  }
  function releaseStatesOfGeometry(geometry) {
    if (bindingStates[geometry.id] === void 0)
      return;
    const programMap = bindingStates[geometry.id];
    for (const programId in programMap) {
      const stateMap = programMap[programId];
      for (const wireframe in stateMap) {
        deleteVertexArrayObject(stateMap[wireframe].object);
        delete stateMap[wireframe];
      }
      delete programMap[programId];
    }
    delete bindingStates[geometry.id];
  }
  function releaseStatesOfProgram(program) {
    for (const geometryId in bindingStates) {
      const programMap = bindingStates[geometryId];
      if (programMap[program.id] === void 0)
        continue;
      const stateMap = programMap[program.id];
      for (const wireframe in stateMap) {
        deleteVertexArrayObject(stateMap[wireframe].object);
        delete stateMap[wireframe];
      }
      delete programMap[program.id];
    }
  }
  function reset() {
    resetDefaultState();
    forceUpdate = true;
    if (currentState === defaultState)
      return;
    currentState = defaultState;
    bindVertexArrayObject(currentState.object);
  }
  function resetDefaultState() {
    defaultState.geometry = null;
    defaultState.program = null;
    defaultState.wireframe = false;
  }
  return {
    setup,
    reset,
    resetDefaultState,
    dispose,
    releaseStatesOfGeometry,
    releaseStatesOfProgram,
    initAttributes,
    enableAttribute,
    disableUnusedAttributes
  };
}
function WebGLBufferRenderer(gl, extensions, info, capabilities) {
  const isWebGL2 = capabilities.isWebGL2;
  let mode;
  function setMode(value) {
    mode = value;
  }
  function render(start, count) {
    gl.drawArrays(mode, start, count);
    info.update(count, mode, 1);
  }
  function renderInstances(start, count, primcount) {
    if (primcount === 0)
      return;
    let extension, methodName;
    if (isWebGL2) {
      extension = gl;
      methodName = "drawArraysInstanced";
    } else {
      extension = extensions.get("ANGLE_instanced_arrays");
      methodName = "drawArraysInstancedANGLE";
      if (extension === null) {
        console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        return;
      }
    }
    extension[methodName](mode, start, count, primcount);
    info.update(count, mode, primcount);
  }
  this.setMode = setMode;
  this.render = render;
  this.renderInstances = renderInstances;
}
function WebGLCapabilities(gl, extensions, parameters) {
  let maxAnisotropy;
  function getMaxAnisotropy() {
    if (maxAnisotropy !== void 0)
      return maxAnisotropy;
    if (extensions.has("EXT_texture_filter_anisotropic") === true) {
      const extension = extensions.get("EXT_texture_filter_anisotropic");
      maxAnisotropy = gl.getParameter(extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else {
      maxAnisotropy = 0;
    }
    return maxAnisotropy;
  }
  function getMaxPrecision(precision2) {
    if (precision2 === "highp") {
      if (gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision > 0 && gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision > 0) {
        return "highp";
      }
      precision2 = "mediump";
    }
    if (precision2 === "mediump") {
      if (gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision > 0 && gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).precision > 0) {
        return "mediump";
      }
    }
    return "lowp";
  }
  const isWebGL2 = typeof WebGL2RenderingContext !== "undefined" && gl.constructor.name === "WebGL2RenderingContext";
  let precision = parameters.precision !== void 0 ? parameters.precision : "highp";
  const maxPrecision = getMaxPrecision(precision);
  if (maxPrecision !== precision) {
    console.warn("THREE.WebGLRenderer:", precision, "not supported, using", maxPrecision, "instead.");
    precision = maxPrecision;
  }
  const drawBuffers = isWebGL2 || extensions.has("WEBGL_draw_buffers");
  const logarithmicDepthBuffer = parameters.logarithmicDepthBuffer === true;
  const maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
  const maxVertexTextures = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
  const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
  const maxCubemapSize = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
  const maxAttributes = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
  const maxVertexUniforms = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
  const maxVaryings = gl.getParameter(gl.MAX_VARYING_VECTORS);
  const maxFragmentUniforms = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);
  const vertexTextures = maxVertexTextures > 0;
  const floatFragmentTextures = isWebGL2 || extensions.has("OES_texture_float");
  const floatVertexTextures = vertexTextures && floatFragmentTextures;
  const maxSamples = isWebGL2 ? gl.getParameter(gl.MAX_SAMPLES) : 0;
  return {
    isWebGL2,
    drawBuffers,
    getMaxAnisotropy,
    getMaxPrecision,
    precision,
    logarithmicDepthBuffer,
    maxTextures,
    maxVertexTextures,
    maxTextureSize,
    maxCubemapSize,
    maxAttributes,
    maxVertexUniforms,
    maxVaryings,
    maxFragmentUniforms,
    vertexTextures,
    floatFragmentTextures,
    floatVertexTextures,
    maxSamples
  };
}
function WebGLClipping(properties) {
  const scope = this;
  let globalState = null, numGlobalPlanes = 0, localClippingEnabled = false, renderingShadows = false;
  const plane = new Plane(), viewNormalMatrix = new Matrix3(), uniform = { value: null, needsUpdate: false };
  this.uniform = uniform;
  this.numPlanes = 0;
  this.numIntersection = 0;
  this.init = function(planes, enableLocalClipping) {
    const enabled = planes.length !== 0 || enableLocalClipping || numGlobalPlanes !== 0 || localClippingEnabled;
    localClippingEnabled = enableLocalClipping;
    numGlobalPlanes = planes.length;
    return enabled;
  };
  this.beginShadows = function() {
    renderingShadows = true;
    projectPlanes(null);
  };
  this.endShadows = function() {
    renderingShadows = false;
  };
  this.setGlobalState = function(planes, camera) {
    globalState = projectPlanes(planes, camera, 0);
  };
  this.setState = function(material, camera, useCache) {
    const planes = material.clippingPlanes, clipIntersection = material.clipIntersection, clipShadows = material.clipShadows;
    const materialProperties = properties.get(material);
    if (!localClippingEnabled || planes === null || planes.length === 0 || renderingShadows && !clipShadows) {
      if (renderingShadows) {
        projectPlanes(null);
      } else {
        resetGlobalState();
      }
    } else {
      const nGlobal = renderingShadows ? 0 : numGlobalPlanes, lGlobal = nGlobal * 4;
      let dstArray = materialProperties.clippingState || null;
      uniform.value = dstArray;
      dstArray = projectPlanes(planes, camera, lGlobal, useCache);
      for (let i = 0; i !== lGlobal; ++i) {
        dstArray[i] = globalState[i];
      }
      materialProperties.clippingState = dstArray;
      this.numIntersection = clipIntersection ? this.numPlanes : 0;
      this.numPlanes += nGlobal;
    }
  };
  function resetGlobalState() {
    if (uniform.value !== globalState) {
      uniform.value = globalState;
      uniform.needsUpdate = numGlobalPlanes > 0;
    }
    scope.numPlanes = numGlobalPlanes;
    scope.numIntersection = 0;
  }
  function projectPlanes(planes, camera, dstOffset, skipTransform) {
    const nPlanes = planes !== null ? planes.length : 0;
    let dstArray = null;
    if (nPlanes !== 0) {
      dstArray = uniform.value;
      if (skipTransform !== true || dstArray === null) {
        const flatSize = dstOffset + nPlanes * 4, viewMatrix = camera.matrixWorldInverse;
        viewNormalMatrix.getNormalMatrix(viewMatrix);
        if (dstArray === null || dstArray.length < flatSize) {
          dstArray = new Float32Array(flatSize);
        }
        for (let i = 0, i4 = dstOffset; i !== nPlanes; ++i, i4 += 4) {
          plane.copy(planes[i]).applyMatrix4(viewMatrix, viewNormalMatrix);
          plane.normal.toArray(dstArray, i4);
          dstArray[i4 + 3] = plane.constant;
        }
      }
      uniform.value = dstArray;
      uniform.needsUpdate = true;
    }
    scope.numPlanes = nPlanes;
    scope.numIntersection = 0;
    return dstArray;
  }
}
function WebGLCubeMaps(renderer) {
  let cubemaps = /* @__PURE__ */ new WeakMap();
  function mapTextureMapping(texture, mapping) {
    if (mapping === EquirectangularReflectionMapping) {
      texture.mapping = CubeReflectionMapping;
    } else if (mapping === EquirectangularRefractionMapping) {
      texture.mapping = CubeRefractionMapping;
    }
    return texture;
  }
  function get(texture) {
    if (texture && texture.isTexture && texture.isRenderTargetTexture === false) {
      const mapping = texture.mapping;
      if (mapping === EquirectangularReflectionMapping || mapping === EquirectangularRefractionMapping) {
        if (cubemaps.has(texture)) {
          const cubemap = cubemaps.get(texture).texture;
          return mapTextureMapping(cubemap, texture.mapping);
        } else {
          const image = texture.image;
          if (image && image.height > 0) {
            const renderTarget = new WebGLCubeRenderTarget(image.height / 2);
            renderTarget.fromEquirectangularTexture(renderer, texture);
            cubemaps.set(texture, renderTarget);
            texture.addEventListener("dispose", onTextureDispose);
            return mapTextureMapping(renderTarget.texture, texture.mapping);
          } else {
            return null;
          }
        }
      }
    }
    return texture;
  }
  function onTextureDispose(event) {
    const texture = event.target;
    texture.removeEventListener("dispose", onTextureDispose);
    const cubemap = cubemaps.get(texture);
    if (cubemap !== void 0) {
      cubemaps.delete(texture);
      cubemap.dispose();
    }
  }
  function dispose() {
    cubemaps = /* @__PURE__ */ new WeakMap();
  }
  return {
    get,
    dispose
  };
}
class OrthographicCamera extends Camera {
  constructor(left = -1, right = 1, top = 1, bottom = -1, near = 0.1, far = 2e3) {
    super();
    this.isOrthographicCamera = true;
    this.type = "OrthographicCamera";
    this.zoom = 1;
    this.view = null;
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.near = near;
    this.far = far;
    this.updateProjectionMatrix();
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    this.left = source.left;
    this.right = source.right;
    this.top = source.top;
    this.bottom = source.bottom;
    this.near = source.near;
    this.far = source.far;
    this.zoom = source.zoom;
    this.view = source.view === null ? null : Object.assign({}, source.view);
    return this;
  }
  setViewOffset(fullWidth, fullHeight, x, y, width, height) {
    if (this.view === null) {
      this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = true;
    this.view.fullWidth = fullWidth;
    this.view.fullHeight = fullHeight;
    this.view.offsetX = x;
    this.view.offsetY = y;
    this.view.width = width;
    this.view.height = height;
    this.updateProjectionMatrix();
  }
  clearViewOffset() {
    if (this.view !== null) {
      this.view.enabled = false;
    }
    this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const dx = (this.right - this.left) / (2 * this.zoom);
    const dy = (this.top - this.bottom) / (2 * this.zoom);
    const cx = (this.right + this.left) / 2;
    const cy = (this.top + this.bottom) / 2;
    let left = cx - dx;
    let right = cx + dx;
    let top = cy + dy;
    let bottom = cy - dy;
    if (this.view !== null && this.view.enabled) {
      const scaleW = (this.right - this.left) / this.view.fullWidth / this.zoom;
      const scaleH = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      left += scaleW * this.view.offsetX;
      right = left + scaleW * this.view.width;
      top -= scaleH * this.view.offsetY;
      bottom = top - scaleH * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(left, right, top, bottom, this.near, this.far);
    this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.object.zoom = this.zoom;
    data.object.left = this.left;
    data.object.right = this.right;
    data.object.top = this.top;
    data.object.bottom = this.bottom;
    data.object.near = this.near;
    data.object.far = this.far;
    if (this.view !== null)
      data.object.view = Object.assign({}, this.view);
    return data;
  }
}
const LOD_MIN = 4;
const EXTRA_LOD_SIGMA = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
const MAX_SAMPLES = 20;
const _flatCamera = /* @__PURE__ */ new OrthographicCamera();
const _clearColor = /* @__PURE__ */ new Color();
let _oldTarget = null;
const PHI = (1 + Math.sqrt(5)) / 2;
const INV_PHI = 1 / PHI;
const _axisDirections = [
  /* @__PURE__ */ new Vector3(1, 1, 1),
  /* @__PURE__ */ new Vector3(-1, 1, 1),
  /* @__PURE__ */ new Vector3(1, 1, -1),
  /* @__PURE__ */ new Vector3(-1, 1, -1),
  /* @__PURE__ */ new Vector3(0, PHI, INV_PHI),
  /* @__PURE__ */ new Vector3(0, PHI, -INV_PHI),
  /* @__PURE__ */ new Vector3(INV_PHI, 0, PHI),
  /* @__PURE__ */ new Vector3(-INV_PHI, 0, PHI),
  /* @__PURE__ */ new Vector3(PHI, INV_PHI, 0),
  /* @__PURE__ */ new Vector3(-PHI, INV_PHI, 0)
];
class PMREMGenerator {
  constructor(renderer) {
    this._renderer = renderer;
    this._pingPongRenderTarget = null;
    this._lodMax = 0;
    this._cubeSize = 0;
    this._lodPlanes = [];
    this._sizeLods = [];
    this._sigmas = [];
    this._blurMaterial = null;
    this._cubemapMaterial = null;
    this._equirectMaterial = null;
    this._compileMaterial(this._blurMaterial);
  }
  fromScene(scene, sigma = 0, near = 0.1, far = 100) {
    _oldTarget = this._renderer.getRenderTarget();
    this._setSize(256);
    const cubeUVRenderTarget = this._allocateTargets();
    cubeUVRenderTarget.depthBuffer = true;
    this._sceneToCubeUV(scene, near, far, cubeUVRenderTarget);
    if (sigma > 0) {
      this._blur(cubeUVRenderTarget, 0, 0, sigma);
    }
    this._applyPMREM(cubeUVRenderTarget);
    this._cleanup(cubeUVRenderTarget);
    return cubeUVRenderTarget;
  }
  fromEquirectangular(equirectangular, renderTarget = null) {
    return this._fromTexture(equirectangular, renderTarget);
  }
  fromCubemap(cubemap, renderTarget = null) {
    return this._fromTexture(cubemap, renderTarget);
  }
  compileCubemapShader() {
    if (this._cubemapMaterial === null) {
      this._cubemapMaterial = _getCubemapMaterial();
      this._compileMaterial(this._cubemapMaterial);
    }
  }
  compileEquirectangularShader() {
    if (this._equirectMaterial === null) {
      this._equirectMaterial = _getEquirectMaterial();
      this._compileMaterial(this._equirectMaterial);
    }
  }
  dispose() {
    this._dispose();
    if (this._cubemapMaterial !== null)
      this._cubemapMaterial.dispose();
    if (this._equirectMaterial !== null)
      this._equirectMaterial.dispose();
  }
  _setSize(cubeSize) {
    this._lodMax = Math.floor(Math.log2(cubeSize));
    this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    if (this._blurMaterial !== null)
      this._blurMaterial.dispose();
    if (this._pingPongRenderTarget !== null)
      this._pingPongRenderTarget.dispose();
    for (let i = 0; i < this._lodPlanes.length; i++) {
      this._lodPlanes[i].dispose();
    }
  }
  _cleanup(outputTarget) {
    this._renderer.setRenderTarget(_oldTarget);
    outputTarget.scissorTest = false;
    _setViewport(outputTarget, 0, 0, outputTarget.width, outputTarget.height);
  }
  _fromTexture(texture, renderTarget) {
    if (texture.mapping === CubeReflectionMapping || texture.mapping === CubeRefractionMapping) {
      this._setSize(texture.image.length === 0 ? 16 : texture.image[0].width || texture.image[0].image.width);
    } else {
      this._setSize(texture.image.width / 4);
    }
    _oldTarget = this._renderer.getRenderTarget();
    const cubeUVRenderTarget = renderTarget || this._allocateTargets();
    this._textureToCubeUV(texture, cubeUVRenderTarget);
    this._applyPMREM(cubeUVRenderTarget);
    this._cleanup(cubeUVRenderTarget);
    return cubeUVRenderTarget;
  }
  _allocateTargets() {
    const width = 3 * Math.max(this._cubeSize, 16 * 7);
    const height = 4 * this._cubeSize;
    const params = {
      magFilter: LinearFilter,
      minFilter: LinearFilter,
      generateMipmaps: false,
      type: HalfFloatType,
      format: RGBAFormat,
      colorSpace: LinearSRGBColorSpace,
      depthBuffer: false
    };
    const cubeUVRenderTarget = _createRenderTarget(width, height, params);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== width || this._pingPongRenderTarget.height !== height) {
      if (this._pingPongRenderTarget !== null) {
        this._dispose();
      }
      this._pingPongRenderTarget = _createRenderTarget(width, height, params);
      const { _lodMax } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = _createPlanes(_lodMax));
      this._blurMaterial = _getBlurShader(_lodMax, width, height);
    }
    return cubeUVRenderTarget;
  }
  _compileMaterial(material) {
    const tmpMesh = new Mesh(this._lodPlanes[0], material);
    this._renderer.compile(tmpMesh, _flatCamera);
  }
  _sceneToCubeUV(scene, near, far, cubeUVRenderTarget) {
    const fov2 = 90;
    const aspect2 = 1;
    const cubeCamera = new PerspectiveCamera(fov2, aspect2, near, far);
    const upSign = [1, -1, 1, 1, 1, 1];
    const forwardSign = [1, 1, 1, -1, -1, -1];
    const renderer = this._renderer;
    const originalAutoClear = renderer.autoClear;
    const toneMapping = renderer.toneMapping;
    renderer.getClearColor(_clearColor);
    renderer.toneMapping = NoToneMapping;
    renderer.autoClear = false;
    const backgroundMaterial = new MeshBasicMaterial({
      name: "PMREM.Background",
      side: BackSide,
      depthWrite: false,
      depthTest: false
    });
    const backgroundBox = new Mesh(new BoxGeometry(), backgroundMaterial);
    let useSolidColor = false;
    const background = scene.background;
    if (background) {
      if (background.isColor) {
        backgroundMaterial.color.copy(background);
        scene.background = null;
        useSolidColor = true;
      }
    } else {
      backgroundMaterial.color.copy(_clearColor);
      useSolidColor = true;
    }
    for (let i = 0; i < 6; i++) {
      const col = i % 3;
      if (col === 0) {
        cubeCamera.up.set(0, upSign[i], 0);
        cubeCamera.lookAt(forwardSign[i], 0, 0);
      } else if (col === 1) {
        cubeCamera.up.set(0, 0, upSign[i]);
        cubeCamera.lookAt(0, forwardSign[i], 0);
      } else {
        cubeCamera.up.set(0, upSign[i], 0);
        cubeCamera.lookAt(0, 0, forwardSign[i]);
      }
      const size = this._cubeSize;
      _setViewport(cubeUVRenderTarget, col * size, i > 2 ? size : 0, size, size);
      renderer.setRenderTarget(cubeUVRenderTarget);
      if (useSolidColor) {
        renderer.render(backgroundBox, cubeCamera);
      }
      renderer.render(scene, cubeCamera);
    }
    backgroundBox.geometry.dispose();
    backgroundBox.material.dispose();
    renderer.toneMapping = toneMapping;
    renderer.autoClear = originalAutoClear;
    scene.background = background;
  }
  _textureToCubeUV(texture, cubeUVRenderTarget) {
    const renderer = this._renderer;
    const isCubeTexture = texture.mapping === CubeReflectionMapping || texture.mapping === CubeRefractionMapping;
    if (isCubeTexture) {
      if (this._cubemapMaterial === null) {
        this._cubemapMaterial = _getCubemapMaterial();
      }
      this._cubemapMaterial.uniforms.flipEnvMap.value = texture.isRenderTargetTexture === false ? -1 : 1;
    } else {
      if (this._equirectMaterial === null) {
        this._equirectMaterial = _getEquirectMaterial();
      }
    }
    const material = isCubeTexture ? this._cubemapMaterial : this._equirectMaterial;
    const mesh = new Mesh(this._lodPlanes[0], material);
    const uniforms = material.uniforms;
    uniforms["envMap"].value = texture;
    const size = this._cubeSize;
    _setViewport(cubeUVRenderTarget, 0, 0, 3 * size, 2 * size);
    renderer.setRenderTarget(cubeUVRenderTarget);
    renderer.render(mesh, _flatCamera);
  }
  _applyPMREM(cubeUVRenderTarget) {
    const renderer = this._renderer;
    const autoClear = renderer.autoClear;
    renderer.autoClear = false;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const sigma = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]);
      const poleAxis = _axisDirections[(i - 1) % _axisDirections.length];
      this._blur(cubeUVRenderTarget, i - 1, i, sigma, poleAxis);
    }
    renderer.autoClear = autoClear;
  }
  _blur(cubeUVRenderTarget, lodIn, lodOut, sigma, poleAxis) {
    const pingPongRenderTarget = this._pingPongRenderTarget;
    this._halfBlur(
      cubeUVRenderTarget,
      pingPongRenderTarget,
      lodIn,
      lodOut,
      sigma,
      "latitudinal",
      poleAxis
    );
    this._halfBlur(
      pingPongRenderTarget,
      cubeUVRenderTarget,
      lodOut,
      lodOut,
      sigma,
      "longitudinal",
      poleAxis
    );
  }
  _halfBlur(targetIn, targetOut, lodIn, lodOut, sigmaRadians, direction, poleAxis) {
    const renderer = this._renderer;
    const blurMaterial = this._blurMaterial;
    if (direction !== "latitudinal" && direction !== "longitudinal") {
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    }
    const STANDARD_DEVIATIONS = 3;
    const blurMesh = new Mesh(this._lodPlanes[lodOut], blurMaterial);
    const blurUniforms = blurMaterial.uniforms;
    const pixels = this._sizeLods[lodIn] - 1;
    const radiansPerPixel = isFinite(sigmaRadians) ? Math.PI / (2 * pixels) : 2 * Math.PI / (2 * MAX_SAMPLES - 1);
    const sigmaPixels = sigmaRadians / radiansPerPixel;
    const samples = isFinite(sigmaRadians) ? 1 + Math.floor(STANDARD_DEVIATIONS * sigmaPixels) : MAX_SAMPLES;
    if (samples > MAX_SAMPLES) {
      console.warn(`sigmaRadians, ${sigmaRadians}, is too large and will clip, as it requested ${samples} samples when the maximum is set to ${MAX_SAMPLES}`);
    }
    const weights = [];
    let sum = 0;
    for (let i = 0; i < MAX_SAMPLES; ++i) {
      const x2 = i / sigmaPixels;
      const weight = Math.exp(-x2 * x2 / 2);
      weights.push(weight);
      if (i === 0) {
        sum += weight;
      } else if (i < samples) {
        sum += 2 * weight;
      }
    }
    for (let i = 0; i < weights.length; i++) {
      weights[i] = weights[i] / sum;
    }
    blurUniforms["envMap"].value = targetIn.texture;
    blurUniforms["samples"].value = samples;
    blurUniforms["weights"].value = weights;
    blurUniforms["latitudinal"].value = direction === "latitudinal";
    if (poleAxis) {
      blurUniforms["poleAxis"].value = poleAxis;
    }
    const { _lodMax } = this;
    blurUniforms["dTheta"].value = radiansPerPixel;
    blurUniforms["mipInt"].value = _lodMax - lodIn;
    const outputSize = this._sizeLods[lodOut];
    const x = 3 * outputSize * (lodOut > _lodMax - LOD_MIN ? lodOut - _lodMax + LOD_MIN : 0);
    const y = 4 * (this._cubeSize - outputSize);
    _setViewport(targetOut, x, y, 3 * outputSize, 2 * outputSize);
    renderer.setRenderTarget(targetOut);
    renderer.render(blurMesh, _flatCamera);
  }
}
function _createPlanes(lodMax) {
  const lodPlanes = [];
  const sizeLods = [];
  const sigmas = [];
  let lod = lodMax;
  const totalLods = lodMax - LOD_MIN + 1 + EXTRA_LOD_SIGMA.length;
  for (let i = 0; i < totalLods; i++) {
    const sizeLod = Math.pow(2, lod);
    sizeLods.push(sizeLod);
    let sigma = 1 / sizeLod;
    if (i > lodMax - LOD_MIN) {
      sigma = EXTRA_LOD_SIGMA[i - lodMax + LOD_MIN - 1];
    } else if (i === 0) {
      sigma = 0;
    }
    sigmas.push(sigma);
    const texelSize = 1 / (sizeLod - 2);
    const min = -texelSize;
    const max = 1 + texelSize;
    const uv1 = [min, min, max, min, max, max, min, min, max, max, min, max];
    const cubeFaces = 6;
    const vertices = 6;
    const positionSize = 3;
    const uvSize = 2;
    const faceIndexSize = 1;
    const position = new Float32Array(positionSize * vertices * cubeFaces);
    const uv = new Float32Array(uvSize * vertices * cubeFaces);
    const faceIndex = new Float32Array(faceIndexSize * vertices * cubeFaces);
    for (let face = 0; face < cubeFaces; face++) {
      const x = face % 3 * 2 / 3 - 1;
      const y = face > 2 ? 0 : -1;
      const coordinates = [
        x,
        y,
        0,
        x + 2 / 3,
        y,
        0,
        x + 2 / 3,
        y + 1,
        0,
        x,
        y,
        0,
        x + 2 / 3,
        y + 1,
        0,
        x,
        y + 1,
        0
      ];
      position.set(coordinates, positionSize * vertices * face);
      uv.set(uv1, uvSize * vertices * face);
      const fill = [face, face, face, face, face, face];
      faceIndex.set(fill, faceIndexSize * vertices * face);
    }
    const planes = new BufferGeometry();
    planes.setAttribute("position", new BufferAttribute(position, positionSize));
    planes.setAttribute("uv", new BufferAttribute(uv, uvSize));
    planes.setAttribute("faceIndex", new BufferAttribute(faceIndex, faceIndexSize));
    lodPlanes.push(planes);
    if (lod > LOD_MIN) {
      lod--;
    }
  }
  return { lodPlanes, sizeLods, sigmas };
}
function _createRenderTarget(width, height, params) {
  const cubeUVRenderTarget = new WebGLRenderTarget(width, height, params);
  cubeUVRenderTarget.texture.mapping = CubeUVReflectionMapping;
  cubeUVRenderTarget.texture.name = "PMREM.cubeUv";
  cubeUVRenderTarget.scissorTest = true;
  return cubeUVRenderTarget;
}
function _setViewport(target, x, y, width, height) {
  target.viewport.set(x, y, width, height);
  target.scissor.set(x, y, width, height);
}
function _getBlurShader(lodMax, width, height) {
  const weights = new Float32Array(MAX_SAMPLES);
  const poleAxis = new Vector3(0, 1, 0);
  const shaderMaterial = new ShaderMaterial({
    name: "SphericalGaussianBlur",
    defines: {
      "n": MAX_SAMPLES,
      "CUBEUV_TEXEL_WIDTH": 1 / width,
      "CUBEUV_TEXEL_HEIGHT": 1 / height,
      "CUBEUV_MAX_MIP": `${lodMax}.0`
    },
    uniforms: {
      "envMap": { value: null },
      "samples": { value: 1 },
      "weights": { value: weights },
      "latitudinal": { value: false },
      "dTheta": { value: 0 },
      "mipInt": { value: 0 },
      "poleAxis": { value: poleAxis }
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: NoBlending,
    depthTest: false,
    depthWrite: false
  });
  return shaderMaterial;
}
function _getEquirectMaterial() {
  return new ShaderMaterial({
    name: "EquirectangularToCubeUV",
    uniforms: {
      "envMap": { value: null }
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: NoBlending,
    depthTest: false,
    depthWrite: false
  });
}
function _getCubemapMaterial() {
  return new ShaderMaterial({
    name: "CubemapToCubeUV",
    uniforms: {
      "envMap": { value: null },
      "flipEnvMap": { value: -1 }
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: NoBlending,
    depthTest: false,
    depthWrite: false
  });
}
function _getCommonVertexShader() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function WebGLCubeUVMaps(renderer) {
  let cubeUVmaps = /* @__PURE__ */ new WeakMap();
  let pmremGenerator = null;
  function get(texture) {
    if (texture && texture.isTexture) {
      const mapping = texture.mapping;
      const isEquirectMap = mapping === EquirectangularReflectionMapping || mapping === EquirectangularRefractionMapping;
      const isCubeMap = mapping === CubeReflectionMapping || mapping === CubeRefractionMapping;
      if (isEquirectMap || isCubeMap) {
        if (texture.isRenderTargetTexture && texture.needsPMREMUpdate === true) {
          texture.needsPMREMUpdate = false;
          let renderTarget = cubeUVmaps.get(texture);
          if (pmremGenerator === null)
            pmremGenerator = new PMREMGenerator(renderer);
          renderTarget = isEquirectMap ? pmremGenerator.fromEquirectangular(texture, renderTarget) : pmremGenerator.fromCubemap(texture, renderTarget);
          cubeUVmaps.set(texture, renderTarget);
          return renderTarget.texture;
        } else {
          if (cubeUVmaps.has(texture)) {
            return cubeUVmaps.get(texture).texture;
          } else {
            const image = texture.image;
            if (isEquirectMap && image && image.height > 0 || isCubeMap && image && isCubeTextureComplete(image)) {
              if (pmremGenerator === null)
                pmremGenerator = new PMREMGenerator(renderer);
              const renderTarget = isEquirectMap ? pmremGenerator.fromEquirectangular(texture) : pmremGenerator.fromCubemap(texture);
              cubeUVmaps.set(texture, renderTarget);
              texture.addEventListener("dispose", onTextureDispose);
              return renderTarget.texture;
            } else {
              return null;
            }
          }
        }
      }
    }
    return texture;
  }
  function isCubeTextureComplete(image) {
    let count = 0;
    const length = 6;
    for (let i = 0; i < length; i++) {
      if (image[i] !== void 0)
        count++;
    }
    return count === length;
  }
  function onTextureDispose(event) {
    const texture = event.target;
    texture.removeEventListener("dispose", onTextureDispose);
    const cubemapUV = cubeUVmaps.get(texture);
    if (cubemapUV !== void 0) {
      cubeUVmaps.delete(texture);
      cubemapUV.dispose();
    }
  }
  function dispose() {
    cubeUVmaps = /* @__PURE__ */ new WeakMap();
    if (pmremGenerator !== null) {
      pmremGenerator.dispose();
      pmremGenerator = null;
    }
  }
  return {
    get,
    dispose
  };
}
function WebGLExtensions(gl) {
  const extensions = {};
  function getExtension(name) {
    if (extensions[name] !== void 0) {
      return extensions[name];
    }
    let extension;
    switch (name) {
      case "WEBGL_depth_texture":
        extension = gl.getExtension("WEBGL_depth_texture") || gl.getExtension("MOZ_WEBGL_depth_texture") || gl.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        extension = gl.getExtension("EXT_texture_filter_anisotropic") || gl.getExtension("MOZ_EXT_texture_filter_anisotropic") || gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        extension = gl.getExtension("WEBGL_compressed_texture_s3tc") || gl.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        extension = gl.getExtension("WEBGL_compressed_texture_pvrtc") || gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        extension = gl.getExtension(name);
    }
    extensions[name] = extension;
    return extension;
  }
  return {
    has: function(name) {
      return getExtension(name) !== null;
    },
    init: function(capabilities) {
      if (capabilities.isWebGL2) {
        getExtension("EXT_color_buffer_float");
      } else {
        getExtension("WEBGL_depth_texture");
        getExtension("OES_texture_float");
        getExtension("OES_texture_half_float");
        getExtension("OES_texture_half_float_linear");
        getExtension("OES_standard_derivatives");
        getExtension("OES_element_index_uint");
        getExtension("OES_vertex_array_object");
        getExtension("ANGLE_instanced_arrays");
      }
      getExtension("OES_texture_float_linear");
      getExtension("EXT_color_buffer_half_float");
      getExtension("WEBGL_multisampled_render_to_texture");
    },
    get: function(name) {
      const extension = getExtension(name);
      if (extension === null) {
        console.warn("THREE.WebGLRenderer: " + name + " extension not supported.");
      }
      return extension;
    }
  };
}
function WebGLGeometries(gl, attributes, info, bindingStates) {
  const geometries = {};
  const wireframeAttributes = /* @__PURE__ */ new WeakMap();
  function onGeometryDispose(event) {
    const geometry = event.target;
    if (geometry.index !== null) {
      attributes.remove(geometry.index);
    }
    for (const name in geometry.attributes) {
      attributes.remove(geometry.attributes[name]);
    }
    geometry.removeEventListener("dispose", onGeometryDispose);
    delete geometries[geometry.id];
    const attribute = wireframeAttributes.get(geometry);
    if (attribute) {
      attributes.remove(attribute);
      wireframeAttributes.delete(geometry);
    }
    bindingStates.releaseStatesOfGeometry(geometry);
    if (geometry.isInstancedBufferGeometry === true) {
      delete geometry._maxInstanceCount;
    }
    info.memory.geometries--;
  }
  function get(object, geometry) {
    if (geometries[geometry.id] === true)
      return geometry;
    geometry.addEventListener("dispose", onGeometryDispose);
    geometries[geometry.id] = true;
    info.memory.geometries++;
    return geometry;
  }
  function update(geometry) {
    const geometryAttributes = geometry.attributes;
    for (const name in geometryAttributes) {
      attributes.update(geometryAttributes[name], gl.ARRAY_BUFFER);
    }
    const morphAttributes = geometry.morphAttributes;
    for (const name in morphAttributes) {
      const array = morphAttributes[name];
      for (let i = 0, l = array.length; i < l; i++) {
        attributes.update(array[i], gl.ARRAY_BUFFER);
      }
    }
  }
  function updateWireframeAttribute(geometry) {
    const indices = [];
    const geometryIndex = geometry.index;
    const geometryPosition = geometry.attributes.position;
    let version = 0;
    if (geometryIndex !== null) {
      const array = geometryIndex.array;
      version = geometryIndex.version;
      for (let i = 0, l = array.length; i < l; i += 3) {
        const a = array[i + 0];
        const b = array[i + 1];
        const c = array[i + 2];
        indices.push(a, b, b, c, c, a);
      }
    } else {
      const array = geometryPosition.array;
      version = geometryPosition.version;
      for (let i = 0, l = array.length / 3 - 1; i < l; i += 3) {
        const a = i + 0;
        const b = i + 1;
        const c = i + 2;
        indices.push(a, b, b, c, c, a);
      }
    }
    const attribute = new (arrayNeedsUint32(indices) ? Uint32BufferAttribute : Uint16BufferAttribute)(indices, 1);
    attribute.version = version;
    const previousAttribute = wireframeAttributes.get(geometry);
    if (previousAttribute)
      attributes.remove(previousAttribute);
    wireframeAttributes.set(geometry, attribute);
  }
  function getWireframeAttribute(geometry) {
    const currentAttribute = wireframeAttributes.get(geometry);
    if (currentAttribute) {
      const geometryIndex = geometry.index;
      if (geometryIndex !== null) {
        if (currentAttribute.version < geometryIndex.version) {
          updateWireframeAttribute(geometry);
        }
      }
    } else {
      updateWireframeAttribute(geometry);
    }
    return wireframeAttributes.get(geometry);
  }
  return {
    get,
    update,
    getWireframeAttribute
  };
}
function WebGLIndexedBufferRenderer(gl, extensions, info, capabilities) {
  const isWebGL2 = capabilities.isWebGL2;
  let mode;
  function setMode(value) {
    mode = value;
  }
  let type, bytesPerElement;
  function setIndex(value) {
    type = value.type;
    bytesPerElement = value.bytesPerElement;
  }
  function render(start, count) {
    gl.drawElements(mode, count, type, start * bytesPerElement);
    info.update(count, mode, 1);
  }
  function renderInstances(start, count, primcount) {
    if (primcount === 0)
      return;
    let extension, methodName;
    if (isWebGL2) {
      extension = gl;
      methodName = "drawElementsInstanced";
    } else {
      extension = extensions.get("ANGLE_instanced_arrays");
      methodName = "drawElementsInstancedANGLE";
      if (extension === null) {
        console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        return;
      }
    }
    extension[methodName](mode, count, type, start * bytesPerElement, primcount);
    info.update(count, mode, primcount);
  }
  this.setMode = setMode;
  this.setIndex = setIndex;
  this.render = render;
  this.renderInstances = renderInstances;
}
function WebGLInfo(gl) {
  const memory = {
    geometries: 0,
    textures: 0
  };
  const render = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function update(count, mode, instanceCount) {
    render.calls++;
    switch (mode) {
      case gl.TRIANGLES:
        render.triangles += instanceCount * (count / 3);
        break;
      case gl.LINES:
        render.lines += instanceCount * (count / 2);
        break;
      case gl.LINE_STRIP:
        render.lines += instanceCount * (count - 1);
        break;
      case gl.LINE_LOOP:
        render.lines += instanceCount * count;
        break;
      case gl.POINTS:
        render.points += instanceCount * count;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", mode);
        break;
    }
  }
  function reset() {
    render.frame++;
    render.calls = 0;
    render.triangles = 0;
    render.points = 0;
    render.lines = 0;
  }
  return {
    memory,
    render,
    programs: null,
    autoReset: true,
    reset,
    update
  };
}
function numericalSort(a, b) {
  return a[0] - b[0];
}
function absNumericalSort(a, b) {
  return Math.abs(b[1]) - Math.abs(a[1]);
}
function WebGLMorphtargets(gl, capabilities, textures) {
  const influencesList = {};
  const morphInfluences = new Float32Array(8);
  const morphTextures = /* @__PURE__ */ new WeakMap();
  const morph = new Vector4();
  const workInfluences = [];
  for (let i = 0; i < 8; i++) {
    workInfluences[i] = [i, 0];
  }
  function update(object, geometry, program) {
    const objectInfluences = object.morphTargetInfluences;
    if (capabilities.isWebGL2 === true) {
      const morphAttribute = geometry.morphAttributes.position || geometry.morphAttributes.normal || geometry.morphAttributes.color;
      const morphTargetsCount = morphAttribute !== void 0 ? morphAttribute.length : 0;
      let entry = morphTextures.get(geometry);
      if (entry === void 0 || entry.count !== morphTargetsCount) {
        let disposeTexture = function() {
          texture.dispose();
          morphTextures.delete(geometry);
          geometry.removeEventListener("dispose", disposeTexture);
        };
        if (entry !== void 0)
          entry.texture.dispose();
        const hasMorphPosition = geometry.morphAttributes.position !== void 0;
        const hasMorphNormals = geometry.morphAttributes.normal !== void 0;
        const hasMorphColors = geometry.morphAttributes.color !== void 0;
        const morphTargets = geometry.morphAttributes.position || [];
        const morphNormals = geometry.morphAttributes.normal || [];
        const morphColors = geometry.morphAttributes.color || [];
        let vertexDataCount = 0;
        if (hasMorphPosition === true)
          vertexDataCount = 1;
        if (hasMorphNormals === true)
          vertexDataCount = 2;
        if (hasMorphColors === true)
          vertexDataCount = 3;
        let width = geometry.attributes.position.count * vertexDataCount;
        let height = 1;
        if (width > capabilities.maxTextureSize) {
          height = Math.ceil(width / capabilities.maxTextureSize);
          width = capabilities.maxTextureSize;
        }
        const buffer = new Float32Array(width * height * 4 * morphTargetsCount);
        const texture = new DataArrayTexture(buffer, width, height, morphTargetsCount);
        texture.type = FloatType;
        texture.needsUpdate = true;
        const vertexDataStride = vertexDataCount * 4;
        for (let i = 0; i < morphTargetsCount; i++) {
          const morphTarget = morphTargets[i];
          const morphNormal = morphNormals[i];
          const morphColor = morphColors[i];
          const offset = width * height * 4 * i;
          for (let j = 0; j < morphTarget.count; j++) {
            const stride = j * vertexDataStride;
            if (hasMorphPosition === true) {
              morph.fromBufferAttribute(morphTarget, j);
              buffer[offset + stride + 0] = morph.x;
              buffer[offset + stride + 1] = morph.y;
              buffer[offset + stride + 2] = morph.z;
              buffer[offset + stride + 3] = 0;
            }
            if (hasMorphNormals === true) {
              morph.fromBufferAttribute(morphNormal, j);
              buffer[offset + stride + 4] = morph.x;
              buffer[offset + stride + 5] = morph.y;
              buffer[offset + stride + 6] = morph.z;
              buffer[offset + stride + 7] = 0;
            }
            if (hasMorphColors === true) {
              morph.fromBufferAttribute(morphColor, j);
              buffer[offset + stride + 8] = morph.x;
              buffer[offset + stride + 9] = morph.y;
              buffer[offset + stride + 10] = morph.z;
              buffer[offset + stride + 11] = morphColor.itemSize === 4 ? morph.w : 1;
            }
          }
        }
        entry = {
          count: morphTargetsCount,
          texture,
          size: new Vector2(width, height)
        };
        morphTextures.set(geometry, entry);
        geometry.addEventListener("dispose", disposeTexture);
      }
      let morphInfluencesSum = 0;
      for (let i = 0; i < objectInfluences.length; i++) {
        morphInfluencesSum += objectInfluences[i];
      }
      const morphBaseInfluence = geometry.morphTargetsRelative ? 1 : 1 - morphInfluencesSum;
      program.getUniforms().setValue(gl, "morphTargetBaseInfluence", morphBaseInfluence);
      program.getUniforms().setValue(gl, "morphTargetInfluences", objectInfluences);
      program.getUniforms().setValue(gl, "morphTargetsTexture", entry.texture, textures);
      program.getUniforms().setValue(gl, "morphTargetsTextureSize", entry.size);
    } else {
      const length = objectInfluences === void 0 ? 0 : objectInfluences.length;
      let influences = influencesList[geometry.id];
      if (influences === void 0 || influences.length !== length) {
        influences = [];
        for (let i = 0; i < length; i++) {
          influences[i] = [i, 0];
        }
        influencesList[geometry.id] = influences;
      }
      for (let i = 0; i < length; i++) {
        const influence = influences[i];
        influence[0] = i;
        influence[1] = objectInfluences[i];
      }
      influences.sort(absNumericalSort);
      for (let i = 0; i < 8; i++) {
        if (i < length && influences[i][1]) {
          workInfluences[i][0] = influences[i][0];
          workInfluences[i][1] = influences[i][1];
        } else {
          workInfluences[i][0] = Number.MAX_SAFE_INTEGER;
          workInfluences[i][1] = 0;
        }
      }
      workInfluences.sort(numericalSort);
      const morphTargets = geometry.morphAttributes.position;
      const morphNormals = geometry.morphAttributes.normal;
      let morphInfluencesSum = 0;
      for (let i = 0; i < 8; i++) {
        const influence = workInfluences[i];
        const index = influence[0];
        const value = influence[1];
        if (index !== Number.MAX_SAFE_INTEGER && value) {
          if (morphTargets && geometry.getAttribute("morphTarget" + i) !== morphTargets[index]) {
            geometry.setAttribute("morphTarget" + i, morphTargets[index]);
          }
          if (morphNormals && geometry.getAttribute("morphNormal" + i) !== morphNormals[index]) {
            geometry.setAttribute("morphNormal" + i, morphNormals[index]);
          }
          morphInfluences[i] = value;
          morphInfluencesSum += value;
        } else {
          if (morphTargets && geometry.hasAttribute("morphTarget" + i) === true) {
            geometry.deleteAttribute("morphTarget" + i);
          }
          if (morphNormals && geometry.hasAttribute("morphNormal" + i) === true) {
            geometry.deleteAttribute("morphNormal" + i);
          }
          morphInfluences[i] = 0;
        }
      }
      const morphBaseInfluence = geometry.morphTargetsRelative ? 1 : 1 - morphInfluencesSum;
      program.getUniforms().setValue(gl, "morphTargetBaseInfluence", morphBaseInfluence);
      program.getUniforms().setValue(gl, "morphTargetInfluences", morphInfluences);
    }
  }
  return {
    update
  };
}
function WebGLObjects(gl, geometries, attributes, info) {
  let updateMap = /* @__PURE__ */ new WeakMap();
  function update(object) {
    const frame = info.render.frame;
    const geometry = object.geometry;
    const buffergeometry = geometries.get(object, geometry);
    if (updateMap.get(buffergeometry) !== frame) {
      geometries.update(buffergeometry);
      updateMap.set(buffergeometry, frame);
    }
    if (object.isInstancedMesh) {
      if (object.hasEventListener("dispose", onInstancedMeshDispose) === false) {
        object.addEventListener("dispose", onInstancedMeshDispose);
      }
      attributes.update(object.instanceMatrix, gl.ARRAY_BUFFER);
      if (object.instanceColor !== null) {
        attributes.update(object.instanceColor, gl.ARRAY_BUFFER);
      }
    }
    return buffergeometry;
  }
  function dispose() {
    updateMap = /* @__PURE__ */ new WeakMap();
  }
  function onInstancedMeshDispose(event) {
    const instancedMesh = event.target;
    instancedMesh.removeEventListener("dispose", onInstancedMeshDispose);
    attributes.remove(instancedMesh.instanceMatrix);
    if (instancedMesh.instanceColor !== null)
      attributes.remove(instancedMesh.instanceColor);
  }
  return {
    update,
    dispose
  };
}
const emptyTexture = /* @__PURE__ */ new Texture();
const emptyArrayTexture = /* @__PURE__ */ new DataArrayTexture();
const empty3dTexture = /* @__PURE__ */ new Data3DTexture();
const emptyCubeTexture = /* @__PURE__ */ new CubeTexture();
const arrayCacheF32 = [];
const arrayCacheI32 = [];
const mat4array = new Float32Array(16);
const mat3array = new Float32Array(9);
const mat2array = new Float32Array(4);
function flatten(array, nBlocks, blockSize) {
  const firstElem = array[0];
  if (firstElem <= 0 || firstElem > 0)
    return array;
  const n = nBlocks * blockSize;
  let r = arrayCacheF32[n];
  if (r === void 0) {
    r = new Float32Array(n);
    arrayCacheF32[n] = r;
  }
  if (nBlocks !== 0) {
    firstElem.toArray(r, 0);
    for (let i = 1, offset = 0; i !== nBlocks; ++i) {
      offset += blockSize;
      array[i].toArray(r, offset);
    }
  }
  return r;
}
function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;
  for (let i = 0, l = a.length; i < l; i++) {
    if (a[i] !== b[i])
      return false;
  }
  return true;
}
function copyArray(a, b) {
  for (let i = 0, l = b.length; i < l; i++) {
    a[i] = b[i];
  }
}
function allocTexUnits(textures, n) {
  let r = arrayCacheI32[n];
  if (r === void 0) {
    r = new Int32Array(n);
    arrayCacheI32[n] = r;
  }
  for (let i = 0; i !== n; ++i) {
    r[i] = textures.allocateTextureUnit();
  }
  return r;
}
function setValueV1f(gl, v) {
  const cache = this.cache;
  if (cache[0] === v)
    return;
  gl.uniform1f(this.addr, v);
  cache[0] = v;
}
function setValueV2f(gl, v) {
  const cache = this.cache;
  if (v.x !== void 0) {
    if (cache[0] !== v.x || cache[1] !== v.y) {
      gl.uniform2f(this.addr, v.x, v.y);
      cache[0] = v.x;
      cache[1] = v.y;
    }
  } else {
    if (arraysEqual(cache, v))
      return;
    gl.uniform2fv(this.addr, v);
    copyArray(cache, v);
  }
}
function setValueV3f(gl, v) {
  const cache = this.cache;
  if (v.x !== void 0) {
    if (cache[0] !== v.x || cache[1] !== v.y || cache[2] !== v.z) {
      gl.uniform3f(this.addr, v.x, v.y, v.z);
      cache[0] = v.x;
      cache[1] = v.y;
      cache[2] = v.z;
    }
  } else if (v.r !== void 0) {
    if (cache[0] !== v.r || cache[1] !== v.g || cache[2] !== v.b) {
      gl.uniform3f(this.addr, v.r, v.g, v.b);
      cache[0] = v.r;
      cache[1] = v.g;
      cache[2] = v.b;
    }
  } else {
    if (arraysEqual(cache, v))
      return;
    gl.uniform3fv(this.addr, v);
    copyArray(cache, v);
  }
}
function setValueV4f(gl, v) {
  const cache = this.cache;
  if (v.x !== void 0) {
    if (cache[0] !== v.x || cache[1] !== v.y || cache[2] !== v.z || cache[3] !== v.w) {
      gl.uniform4f(this.addr, v.x, v.y, v.z, v.w);
      cache[0] = v.x;
      cache[1] = v.y;
      cache[2] = v.z;
      cache[3] = v.w;
    }
  } else {
    if (arraysEqual(cache, v))
      return;
    gl.uniform4fv(this.addr, v);
    copyArray(cache, v);
  }
}
function setValueM2(gl, v) {
  const cache = this.cache;
  const elements = v.elements;
  if (elements === void 0) {
    if (arraysEqual(cache, v))
      return;
    gl.uniformMatrix2fv(this.addr, false, v);
    copyArray(cache, v);
  } else {
    if (arraysEqual(cache, elements))
      return;
    mat2array.set(elements);
    gl.uniformMatrix2fv(this.addr, false, mat2array);
    copyArray(cache, elements);
  }
}
function setValueM3(gl, v) {
  const cache = this.cache;
  const elements = v.elements;
  if (elements === void 0) {
    if (arraysEqual(cache, v))
      return;
    gl.uniformMatrix3fv(this.addr, false, v);
    copyArray(cache, v);
  } else {
    if (arraysEqual(cache, elements))
      return;
    mat3array.set(elements);
    gl.uniformMatrix3fv(this.addr, false, mat3array);
    copyArray(cache, elements);
  }
}
function setValueM4(gl, v) {
  const cache = this.cache;
  const elements = v.elements;
  if (elements === void 0) {
    if (arraysEqual(cache, v))
      return;
    gl.uniformMatrix4fv(this.addr, false, v);
    copyArray(cache, v);
  } else {
    if (arraysEqual(cache, elements))
      return;
    mat4array.set(elements);
    gl.uniformMatrix4fv(this.addr, false, mat4array);
    copyArray(cache, elements);
  }
}
function setValueV1i(gl, v) {
  const cache = this.cache;
  if (cache[0] === v)
    return;
  gl.uniform1i(this.addr, v);
  cache[0] = v;
}
function setValueV2i(gl, v) {
  const cache = this.cache;
  if (v.x !== void 0) {
    if (cache[0] !== v.x || cache[1] !== v.y) {
      gl.uniform2i(this.addr, v.x, v.y);
      cache[0] = v.x;
      cache[1] = v.y;
    }
  } else {
    if (arraysEqual(cache, v))
      return;
    gl.uniform2iv(this.addr, v);
    copyArray(cache, v);
  }
}
function setValueV3i(gl, v) {
  const cache = this.cache;
  if (v.x !== void 0) {
    if (cache[0] !== v.x || cache[1] !== v.y || cache[2] !== v.z) {
      gl.uniform3i(this.addr, v.x, v.y, v.z);
      cache[0] = v.x;
      cache[1] = v.y;
      cache[2] = v.z;
    }
  } else {
    if (arraysEqual(cache, v))
      return;
    gl.uniform3iv(this.addr, v);
    copyArray(cache, v);
  }
}
function setValueV4i(gl, v) {
  const cache = this.cache;
  if (v.x !== void 0) {
    if (cache[0] !== v.x || cache[1] !== v.y || cache[2] !== v.z || cache[3] !== v.w) {
      gl.uniform4i(this.addr, v.x, v.y, v.z, v.w);
      cache[0] = v.x;
      cache[1] = v.y;
      cache[2] = v.z;
      cache[3] = v.w;
    }
  } else {
    if (arraysEqual(cache, v))
      return;
    gl.uniform4iv(this.addr, v);
    copyArray(cache, v);
  }
}
function setValueV1ui(gl, v) {
  const cache = this.cache;
  if (cache[0] === v)
    return;
  gl.uniform1ui(this.addr, v);
  cache[0] = v;
}
function setValueV2ui(gl, v) {
  const cache = this.cache;
  if (v.x !== void 0) {
    if (cache[0] !== v.x || cache[1] !== v.y) {
      gl.uniform2ui(this.addr, v.x, v.y);
      cache[0] = v.x;
      cache[1] = v.y;
    }
  } else {
    if (arraysEqual(cache, v))
      return;
    gl.uniform2uiv(this.addr, v);
    copyArray(cache, v);
  }
}
function setValueV3ui(gl, v) {
  const cache = this.cache;
  if (v.x !== void 0) {
    if (cache[0] !== v.x || cache[1] !== v.y || cache[2] !== v.z) {
      gl.uniform3ui(this.addr, v.x, v.y, v.z);
      cache[0] = v.x;
      cache[1] = v.y;
      cache[2] = v.z;
    }
  } else {
    if (arraysEqual(cache, v))
      return;
    gl.uniform3uiv(this.addr, v);
    copyArray(cache, v);
  }
}
function setValueV4ui(gl, v) {
  const cache = this.cache;
  if (v.x !== void 0) {
    if (cache[0] !== v.x || cache[1] !== v.y || cache[2] !== v.z || cache[3] !== v.w) {
      gl.uniform4ui(this.addr, v.x, v.y, v.z, v.w);
      cache[0] = v.x;
      cache[1] = v.y;
      cache[2] = v.z;
      cache[3] = v.w;
    }
  } else {
    if (arraysEqual(cache, v))
      return;
    gl.uniform4uiv(this.addr, v);
    copyArray(cache, v);
  }
}
function setValueT1(gl, v, textures) {
  const cache = this.cache;
  const unit = textures.allocateTextureUnit();
  if (cache[0] !== unit) {
    gl.uniform1i(this.addr, unit);
    cache[0] = unit;
  }
  textures.setTexture2D(v || emptyTexture, unit);
}
function setValueT3D1(gl, v, textures) {
  const cache = this.cache;
  const unit = textures.allocateTextureUnit();
  if (cache[0] !== unit) {
    gl.uniform1i(this.addr, unit);
    cache[0] = unit;
  }
  textures.setTexture3D(v || empty3dTexture, unit);
}
function setValueT6(gl, v, textures) {
  const cache = this.cache;
  const unit = textures.allocateTextureUnit();
  if (cache[0] !== unit) {
    gl.uniform1i(this.addr, unit);
    cache[0] = unit;
  }
  textures.setTextureCube(v || emptyCubeTexture, unit);
}
function setValueT2DArray1(gl, v, textures) {
  const cache = this.cache;
  const unit = textures.allocateTextureUnit();
  if (cache[0] !== unit) {
    gl.uniform1i(this.addr, unit);
    cache[0] = unit;
  }
  textures.setTexture2DArray(v || emptyArrayTexture, unit);
}
function getSingularSetter(type) {
  switch (type) {
    case 5126:
      return setValueV1f;
    case 35664:
      return setValueV2f;
    case 35665:
      return setValueV3f;
    case 35666:
      return setValueV4f;
    case 35674:
      return setValueM2;
    case 35675:
      return setValueM3;
    case 35676:
      return setValueM4;
    case 5124:
    case 35670:
      return setValueV1i;
    case 35667:
    case 35671:
      return setValueV2i;
    case 35668:
    case 35672:
      return setValueV3i;
    case 35669:
    case 35673:
      return setValueV4i;
    case 5125:
      return setValueV1ui;
    case 36294:
      return setValueV2ui;
    case 36295:
      return setValueV3ui;
    case 36296:
      return setValueV4ui;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return setValueT1;
    case 35679:
    case 36299:
    case 36307:
      return setValueT3D1;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return setValueT6;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return setValueT2DArray1;
  }
}
function setValueV1fArray(gl, v) {
  gl.uniform1fv(this.addr, v);
}
function setValueV2fArray(gl, v) {
  const data = flatten(v, this.size, 2);
  gl.uniform2fv(this.addr, data);
}
function setValueV3fArray(gl, v) {
  const data = flatten(v, this.size, 3);
  gl.uniform3fv(this.addr, data);
}
function setValueV4fArray(gl, v) {
  const data = flatten(v, this.size, 4);
  gl.uniform4fv(this.addr, data);
}
function setValueM2Array(gl, v) {
  const data = flatten(v, this.size, 4);
  gl.uniformMatrix2fv(this.addr, false, data);
}
function setValueM3Array(gl, v) {
  const data = flatten(v, this.size, 9);
  gl.uniformMatrix3fv(this.addr, false, data);
}
function setValueM4Array(gl, v) {
  const data = flatten(v, this.size, 16);
  gl.uniformMatrix4fv(this.addr, false, data);
}
function setValueV1iArray(gl, v) {
  gl.uniform1iv(this.addr, v);
}
function setValueV2iArray(gl, v) {
  gl.uniform2iv(this.addr, v);
}
function setValueV3iArray(gl, v) {
  gl.uniform3iv(this.addr, v);
}
function setValueV4iArray(gl, v) {
  gl.uniform4iv(this.addr, v);
}
function setValueV1uiArray(gl, v) {
  gl.uniform1uiv(this.addr, v);
}
function setValueV2uiArray(gl, v) {
  gl.uniform2uiv(this.addr, v);
}
function setValueV3uiArray(gl, v) {
  gl.uniform3uiv(this.addr, v);
}
function setValueV4uiArray(gl, v) {
  gl.uniform4uiv(this.addr, v);
}
function setValueT1Array(gl, v, textures) {
  const cache = this.cache;
  const n = v.length;
  const units = allocTexUnits(textures, n);
  if (!arraysEqual(cache, units)) {
    gl.uniform1iv(this.addr, units);
    copyArray(cache, units);
  }
  for (let i = 0; i !== n; ++i) {
    textures.setTexture2D(v[i] || emptyTexture, units[i]);
  }
}
function setValueT3DArray(gl, v, textures) {
  const cache = this.cache;
  const n = v.length;
  const units = allocTexUnits(textures, n);
  if (!arraysEqual(cache, units)) {
    gl.uniform1iv(this.addr, units);
    copyArray(cache, units);
  }
  for (let i = 0; i !== n; ++i) {
    textures.setTexture3D(v[i] || empty3dTexture, units[i]);
  }
}
function setValueT6Array(gl, v, textures) {
  const cache = this.cache;
  const n = v.length;
  const units = allocTexUnits(textures, n);
  if (!arraysEqual(cache, units)) {
    gl.uniform1iv(this.addr, units);
    copyArray(cache, units);
  }
  for (let i = 0; i !== n; ++i) {
    textures.setTextureCube(v[i] || emptyCubeTexture, units[i]);
  }
}
function setValueT2DArrayArray(gl, v, textures) {
  const cache = this.cache;
  const n = v.length;
  const units = allocTexUnits(textures, n);
  if (!arraysEqual(cache, units)) {
    gl.uniform1iv(this.addr, units);
    copyArray(cache, units);
  }
  for (let i = 0; i !== n; ++i) {
    textures.setTexture2DArray(v[i] || emptyArrayTexture, units[i]);
  }
}
function getPureArraySetter(type) {
  switch (type) {
    case 5126:
      return setValueV1fArray;
    case 35664:
      return setValueV2fArray;
    case 35665:
      return setValueV3fArray;
    case 35666:
      return setValueV4fArray;
    case 35674:
      return setValueM2Array;
    case 35675:
      return setValueM3Array;
    case 35676:
      return setValueM4Array;
    case 5124:
    case 35670:
      return setValueV1iArray;
    case 35667:
    case 35671:
      return setValueV2iArray;
    case 35668:
    case 35672:
      return setValueV3iArray;
    case 35669:
    case 35673:
      return setValueV4iArray;
    case 5125:
      return setValueV1uiArray;
    case 36294:
      return setValueV2uiArray;
    case 36295:
      return setValueV3uiArray;
    case 36296:
      return setValueV4uiArray;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return setValueT1Array;
    case 35679:
    case 36299:
    case 36307:
      return setValueT3DArray;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return setValueT6Array;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return setValueT2DArrayArray;
  }
}
class SingleUniform {
  constructor(id, activeInfo, addr) {
    this.id = id;
    this.addr = addr;
    this.cache = [];
    this.setValue = getSingularSetter(activeInfo.type);
  }
}
class PureArrayUniform {
  constructor(id, activeInfo, addr) {
    this.id = id;
    this.addr = addr;
    this.cache = [];
    this.size = activeInfo.size;
    this.setValue = getPureArraySetter(activeInfo.type);
  }
}
class StructuredUniform {
  constructor(id) {
    this.id = id;
    this.seq = [];
    this.map = {};
  }
  setValue(gl, value, textures) {
    const seq = this.seq;
    for (let i = 0, n = seq.length; i !== n; ++i) {
      const u = seq[i];
      u.setValue(gl, value[u.id], textures);
    }
  }
}
const RePathPart = /(\w+)(\])?(\[|\.)?/g;
function addUniform(container, uniformObject) {
  container.seq.push(uniformObject);
  container.map[uniformObject.id] = uniformObject;
}
function parseUniform(activeInfo, addr, container) {
  const path = activeInfo.name, pathLength = path.length;
  RePathPart.lastIndex = 0;
  while (true) {
    const match = RePathPart.exec(path), matchEnd = RePathPart.lastIndex;
    let id = match[1];
    const idIsIndex = match[2] === "]", subscript = match[3];
    if (idIsIndex)
      id = id | 0;
    if (subscript === void 0 || subscript === "[" && matchEnd + 2 === pathLength) {
      addUniform(container, subscript === void 0 ? new SingleUniform(id, activeInfo, addr) : new PureArrayUniform(id, activeInfo, addr));
      break;
    } else {
      const map = container.map;
      let next = map[id];
      if (next === void 0) {
        next = new StructuredUniform(id);
        addUniform(container, next);
      }
      container = next;
    }
  }
}
class WebGLUniforms {
  constructor(gl, program) {
    this.seq = [];
    this.map = {};
    const n = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const info = gl.getActiveUniform(program, i), addr = gl.getUniformLocation(program, info.name);
      parseUniform(info, addr, this);
    }
  }
  setValue(gl, name, value, textures) {
    const u = this.map[name];
    if (u !== void 0)
      u.setValue(gl, value, textures);
  }
  setOptional(gl, object, name) {
    const v = object[name];
    if (v !== void 0)
      this.setValue(gl, name, v);
  }
  static upload(gl, seq, values, textures) {
    for (let i = 0, n = seq.length; i !== n; ++i) {
      const u = seq[i], v = values[u.id];
      if (v.needsUpdate !== false) {
        u.setValue(gl, v.value, textures);
      }
    }
  }
  static seqWithValue(seq, values) {
    const r = [];
    for (let i = 0, n = seq.length; i !== n; ++i) {
      const u = seq[i];
      if (u.id in values)
        r.push(u);
    }
    return r;
  }
}
function WebGLShader(gl, type, string) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, string);
  gl.compileShader(shader);
  return shader;
}
let programIdCount = 0;
function handleSource(string, errorLine) {
  const lines = string.split("\n");
  const lines2 = [];
  const from = Math.max(errorLine - 6, 0);
  const to = Math.min(errorLine + 6, lines.length);
  for (let i = from; i < to; i++) {
    const line = i + 1;
    lines2.push(`${line === errorLine ? ">" : " "} ${line}: ${lines[i]}`);
  }
  return lines2.join("\n");
}
function getEncodingComponents(colorSpace) {
  switch (colorSpace) {
    case LinearSRGBColorSpace:
      return ["Linear", "( value )"];
    case SRGBColorSpace:
      return ["sRGB", "( value )"];
    default:
      console.warn("THREE.WebGLProgram: Unsupported color space:", colorSpace);
      return ["Linear", "( value )"];
  }
}
function getShaderErrors(gl, shader, type) {
  const status = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  const errors = gl.getShaderInfoLog(shader).trim();
  if (status && errors === "")
    return "";
  const errorMatches = /ERROR: 0:(\d+)/.exec(errors);
  if (errorMatches) {
    const errorLine = parseInt(errorMatches[1]);
    return type.toUpperCase() + "\n\n" + errors + "\n\n" + handleSource(gl.getShaderSource(shader), errorLine);
  } else {
    return errors;
  }
}
function getTexelEncodingFunction(functionName, colorSpace) {
  const components = getEncodingComponents(colorSpace);
  return "vec4 " + functionName + "( vec4 value ) { return LinearTo" + components[0] + components[1] + "; }";
}
function getToneMappingFunction(functionName, toneMapping) {
  let toneMappingName;
  switch (toneMapping) {
    case LinearToneMapping:
      toneMappingName = "Linear";
      break;
    case ReinhardToneMapping:
      toneMappingName = "Reinhard";
      break;
    case CineonToneMapping:
      toneMappingName = "OptimizedCineon";
      break;
    case ACESFilmicToneMapping:
      toneMappingName = "ACESFilmic";
      break;
    case CustomToneMapping:
      toneMappingName = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", toneMapping);
      toneMappingName = "Linear";
  }
  return "vec3 " + functionName + "( vec3 color ) { return " + toneMappingName + "ToneMapping( color ); }";
}
function generateExtensions(parameters) {
  const chunks = [
    parameters.extensionDerivatives || !!parameters.envMapCubeUVHeight || parameters.bumpMap || parameters.normalMapTangentSpace || parameters.clearcoatNormalMap || parameters.flatShading || parameters.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (parameters.extensionFragDepth || parameters.logarithmicDepthBuffer) && parameters.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    parameters.extensionDrawBuffers && parameters.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (parameters.extensionShaderTextureLOD || parameters.envMap || parameters.transmission) && parameters.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ];
  return chunks.filter(filterEmptyLine).join("\n");
}
function generateDefines(defines) {
  const chunks = [];
  for (const name in defines) {
    const value = defines[name];
    if (value === false)
      continue;
    chunks.push("#define " + name + " " + value);
  }
  return chunks.join("\n");
}
function fetchAttributeLocations(gl, program) {
  const attributes = {};
  const n = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const info = gl.getActiveAttrib(program, i);
    const name = info.name;
    let locationSize = 1;
    if (info.type === gl.FLOAT_MAT2)
      locationSize = 2;
    if (info.type === gl.FLOAT_MAT3)
      locationSize = 3;
    if (info.type === gl.FLOAT_MAT4)
      locationSize = 4;
    attributes[name] = {
      type: info.type,
      location: gl.getAttribLocation(program, name),
      locationSize
    };
  }
  return attributes;
}
function filterEmptyLine(string) {
  return string !== "";
}
function replaceLightNums(string, parameters) {
  const numSpotLightCoords = parameters.numSpotLightShadows + parameters.numSpotLightMaps - parameters.numSpotLightShadowsWithMaps;
  return string.replace(/NUM_DIR_LIGHTS/g, parameters.numDirLights).replace(/NUM_SPOT_LIGHTS/g, parameters.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, parameters.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, numSpotLightCoords).replace(/NUM_RECT_AREA_LIGHTS/g, parameters.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, parameters.numPointLights).replace(/NUM_HEMI_LIGHTS/g, parameters.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, parameters.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, parameters.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, parameters.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, parameters.numPointLightShadows);
}
function replaceClippingPlaneNums(string, parameters) {
  return string.replace(/NUM_CLIPPING_PLANES/g, parameters.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, parameters.numClippingPlanes - parameters.numClipIntersection);
}
const includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
function resolveIncludes(string) {
  return string.replace(includePattern, includeReplacer);
}
function includeReplacer(match, include) {
  const string = ShaderChunk[include];
  if (string === void 0) {
    throw new Error("Can not resolve #include <" + include + ">");
  }
  return resolveIncludes(string);
}
const unrollLoopPattern = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function unrollLoops(string) {
  return string.replace(unrollLoopPattern, loopReplacer);
}
function loopReplacer(match, start, end, snippet) {
  let string = "";
  for (let i = parseInt(start); i < parseInt(end); i++) {
    string += snippet.replace(/\[\s*i\s*\]/g, "[ " + i + " ]").replace(/UNROLLED_LOOP_INDEX/g, i);
  }
  return string;
}
function generatePrecision(parameters) {
  let precisionstring = "precision " + parameters.precision + " float;\nprecision " + parameters.precision + " int;";
  if (parameters.precision === "highp") {
    precisionstring += "\n#define HIGH_PRECISION";
  } else if (parameters.precision === "mediump") {
    precisionstring += "\n#define MEDIUM_PRECISION";
  } else if (parameters.precision === "lowp") {
    precisionstring += "\n#define LOW_PRECISION";
  }
  return precisionstring;
}
function generateShadowMapTypeDefine(parameters) {
  let shadowMapTypeDefine = "SHADOWMAP_TYPE_BASIC";
  if (parameters.shadowMapType === PCFShadowMap) {
    shadowMapTypeDefine = "SHADOWMAP_TYPE_PCF";
  } else if (parameters.shadowMapType === PCFSoftShadowMap) {
    shadowMapTypeDefine = "SHADOWMAP_TYPE_PCF_SOFT";
  } else if (parameters.shadowMapType === VSMShadowMap) {
    shadowMapTypeDefine = "SHADOWMAP_TYPE_VSM";
  }
  return shadowMapTypeDefine;
}
function generateEnvMapTypeDefine(parameters) {
  let envMapTypeDefine = "ENVMAP_TYPE_CUBE";
  if (parameters.envMap) {
    switch (parameters.envMapMode) {
      case CubeReflectionMapping:
      case CubeRefractionMapping:
        envMapTypeDefine = "ENVMAP_TYPE_CUBE";
        break;
      case CubeUVReflectionMapping:
        envMapTypeDefine = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  }
  return envMapTypeDefine;
}
function generateEnvMapModeDefine(parameters) {
  let envMapModeDefine = "ENVMAP_MODE_REFLECTION";
  if (parameters.envMap) {
    switch (parameters.envMapMode) {
      case CubeRefractionMapping:
        envMapModeDefine = "ENVMAP_MODE_REFRACTION";
        break;
    }
  }
  return envMapModeDefine;
}
function generateEnvMapBlendingDefine(parameters) {
  let envMapBlendingDefine = "ENVMAP_BLENDING_NONE";
  if (parameters.envMap) {
    switch (parameters.combine) {
      case MultiplyOperation:
        envMapBlendingDefine = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case MixOperation:
        envMapBlendingDefine = "ENVMAP_BLENDING_MIX";
        break;
      case AddOperation:
        envMapBlendingDefine = "ENVMAP_BLENDING_ADD";
        break;
    }
  }
  return envMapBlendingDefine;
}
function generateCubeUVSize(parameters) {
  const imageHeight = parameters.envMapCubeUVHeight;
  if (imageHeight === null)
    return null;
  const maxMip = Math.log2(imageHeight) - 2;
  const texelHeight = 1 / imageHeight;
  const texelWidth = 1 / (3 * Math.max(Math.pow(2, maxMip), 7 * 16));
  return { texelWidth, texelHeight, maxMip };
}
function WebGLProgram(renderer, cacheKey, parameters, bindingStates) {
  const gl = renderer.getContext();
  const defines = parameters.defines;
  let vertexShader = parameters.vertexShader;
  let fragmentShader = parameters.fragmentShader;
  const shadowMapTypeDefine = generateShadowMapTypeDefine(parameters);
  const envMapTypeDefine = generateEnvMapTypeDefine(parameters);
  const envMapModeDefine = generateEnvMapModeDefine(parameters);
  const envMapBlendingDefine = generateEnvMapBlendingDefine(parameters);
  const envMapCubeUVSize = generateCubeUVSize(parameters);
  const customExtensions = parameters.isWebGL2 ? "" : generateExtensions(parameters);
  const customDefines = generateDefines(defines);
  const program = gl.createProgram();
  let prefixVertex, prefixFragment;
  let versionString = parameters.glslVersion ? "#version " + parameters.glslVersion + "\n" : "";
  if (parameters.isRawShaderMaterial) {
    prefixVertex = [
      customDefines
    ].filter(filterEmptyLine).join("\n");
    if (prefixVertex.length > 0) {
      prefixVertex += "\n";
    }
    prefixFragment = [
      customExtensions,
      customDefines
    ].filter(filterEmptyLine).join("\n");
    if (prefixFragment.length > 0) {
      prefixFragment += "\n";
    }
  } else {
    prefixVertex = [
      generatePrecision(parameters),
      "#define SHADER_NAME " + parameters.shaderName,
      customDefines,
      parameters.instancing ? "#define USE_INSTANCING" : "",
      parameters.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
      parameters.useFog && parameters.fog ? "#define USE_FOG" : "",
      parameters.useFog && parameters.fogExp2 ? "#define FOG_EXP2" : "",
      parameters.map ? "#define USE_MAP" : "",
      parameters.envMap ? "#define USE_ENVMAP" : "",
      parameters.envMap ? "#define " + envMapModeDefine : "",
      parameters.lightMap ? "#define USE_LIGHTMAP" : "",
      parameters.aoMap ? "#define USE_AOMAP" : "",
      parameters.bumpMap ? "#define USE_BUMPMAP" : "",
      parameters.normalMap ? "#define USE_NORMALMAP" : "",
      parameters.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
      parameters.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
      parameters.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
      parameters.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
      parameters.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
      parameters.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
      parameters.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
      parameters.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
      parameters.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
      parameters.specularMap ? "#define USE_SPECULARMAP" : "",
      parameters.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
      parameters.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
      parameters.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
      parameters.metalnessMap ? "#define USE_METALNESSMAP" : "",
      parameters.alphaMap ? "#define USE_ALPHAMAP" : "",
      parameters.transmission ? "#define USE_TRANSMISSION" : "",
      parameters.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
      parameters.thicknessMap ? "#define USE_THICKNESSMAP" : "",
      parameters.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
      parameters.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
      parameters.mapUv ? "#define MAP_UV " + parameters.mapUv : "",
      parameters.alphaMapUv ? "#define ALPHAMAP_UV " + parameters.alphaMapUv : "",
      parameters.lightMapUv ? "#define LIGHTMAP_UV " + parameters.lightMapUv : "",
      parameters.aoMapUv ? "#define AOMAP_UV " + parameters.aoMapUv : "",
      parameters.emissiveMapUv ? "#define EMISSIVEMAP_UV " + parameters.emissiveMapUv : "",
      parameters.bumpMapUv ? "#define BUMPMAP_UV " + parameters.bumpMapUv : "",
      parameters.normalMapUv ? "#define NORMALMAP_UV " + parameters.normalMapUv : "",
      parameters.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + parameters.displacementMapUv : "",
      parameters.metalnessMapUv ? "#define METALNESSMAP_UV " + parameters.metalnessMapUv : "",
      parameters.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + parameters.roughnessMapUv : "",
      parameters.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + parameters.clearcoatMapUv : "",
      parameters.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + parameters.clearcoatNormalMapUv : "",
      parameters.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + parameters.clearcoatRoughnessMapUv : "",
      parameters.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + parameters.iridescenceMapUv : "",
      parameters.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + parameters.iridescenceThicknessMapUv : "",
      parameters.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + parameters.sheenColorMapUv : "",
      parameters.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + parameters.sheenRoughnessMapUv : "",
      parameters.specularMapUv ? "#define SPECULARMAP_UV " + parameters.specularMapUv : "",
      parameters.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + parameters.specularColorMapUv : "",
      parameters.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + parameters.specularIntensityMapUv : "",
      parameters.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + parameters.transmissionMapUv : "",
      parameters.thicknessMapUv ? "#define THICKNESSMAP_UV " + parameters.thicknessMapUv : "",
      parameters.vertexTangents ? "#define USE_TANGENT" : "",
      parameters.vertexColors ? "#define USE_COLOR" : "",
      parameters.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
      parameters.vertexUv1s ? "#define USE_UV1" : "",
      parameters.vertexUv2s ? "#define USE_UV2" : "",
      parameters.vertexUv3s ? "#define USE_UV3" : "",
      parameters.pointsUvs ? "#define USE_POINTS_UV" : "",
      parameters.flatShading ? "#define FLAT_SHADED" : "",
      parameters.skinning ? "#define USE_SKINNING" : "",
      parameters.morphTargets ? "#define USE_MORPHTARGETS" : "",
      parameters.morphNormals && parameters.flatShading === false ? "#define USE_MORPHNORMALS" : "",
      parameters.morphColors && parameters.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
      parameters.morphTargetsCount > 0 && parameters.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
      parameters.morphTargetsCount > 0 && parameters.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + parameters.morphTextureStride : "",
      parameters.morphTargetsCount > 0 && parameters.isWebGL2 ? "#define MORPHTARGETS_COUNT " + parameters.morphTargetsCount : "",
      parameters.doubleSided ? "#define DOUBLE_SIDED" : "",
      parameters.flipSided ? "#define FLIP_SIDED" : "",
      parameters.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
      parameters.shadowMapEnabled ? "#define " + shadowMapTypeDefine : "",
      parameters.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
      parameters.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
      parameters.logarithmicDepthBuffer && parameters.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
      "uniform mat4 modelMatrix;",
      "uniform mat4 modelViewMatrix;",
      "uniform mat4 projectionMatrix;",
      "uniform mat4 viewMatrix;",
      "uniform mat3 normalMatrix;",
      "uniform vec3 cameraPosition;",
      "uniform bool isOrthographic;",
      "#ifdef USE_INSTANCING",
      "	attribute mat4 instanceMatrix;",
      "#endif",
      "#ifdef USE_INSTANCING_COLOR",
      "	attribute vec3 instanceColor;",
      "#endif",
      "attribute vec3 position;",
      "attribute vec3 normal;",
      "attribute vec2 uv;",
      "#ifdef USE_UV1",
      "	attribute vec2 uv1;",
      "#endif",
      "#ifdef USE_UV2",
      "	attribute vec2 uv2;",
      "#endif",
      "#ifdef USE_UV3",
      "	attribute vec2 uv3;",
      "#endif",
      "#ifdef USE_TANGENT",
      "	attribute vec4 tangent;",
      "#endif",
      "#if defined( USE_COLOR_ALPHA )",
      "	attribute vec4 color;",
      "#elif defined( USE_COLOR )",
      "	attribute vec3 color;",
      "#endif",
      "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
      "	attribute vec3 morphTarget0;",
      "	attribute vec3 morphTarget1;",
      "	attribute vec3 morphTarget2;",
      "	attribute vec3 morphTarget3;",
      "	#ifdef USE_MORPHNORMALS",
      "		attribute vec3 morphNormal0;",
      "		attribute vec3 morphNormal1;",
      "		attribute vec3 morphNormal2;",
      "		attribute vec3 morphNormal3;",
      "	#else",
      "		attribute vec3 morphTarget4;",
      "		attribute vec3 morphTarget5;",
      "		attribute vec3 morphTarget6;",
      "		attribute vec3 morphTarget7;",
      "	#endif",
      "#endif",
      "#ifdef USE_SKINNING",
      "	attribute vec4 skinIndex;",
      "	attribute vec4 skinWeight;",
      "#endif",
      "\n"
    ].filter(filterEmptyLine).join("\n");
    prefixFragment = [
      customExtensions,
      generatePrecision(parameters),
      "#define SHADER_NAME " + parameters.shaderName,
      customDefines,
      parameters.useFog && parameters.fog ? "#define USE_FOG" : "",
      parameters.useFog && parameters.fogExp2 ? "#define FOG_EXP2" : "",
      parameters.map ? "#define USE_MAP" : "",
      parameters.matcap ? "#define USE_MATCAP" : "",
      parameters.envMap ? "#define USE_ENVMAP" : "",
      parameters.envMap ? "#define " + envMapTypeDefine : "",
      parameters.envMap ? "#define " + envMapModeDefine : "",
      parameters.envMap ? "#define " + envMapBlendingDefine : "",
      envMapCubeUVSize ? "#define CUBEUV_TEXEL_WIDTH " + envMapCubeUVSize.texelWidth : "",
      envMapCubeUVSize ? "#define CUBEUV_TEXEL_HEIGHT " + envMapCubeUVSize.texelHeight : "",
      envMapCubeUVSize ? "#define CUBEUV_MAX_MIP " + envMapCubeUVSize.maxMip + ".0" : "",
      parameters.lightMap ? "#define USE_LIGHTMAP" : "",
      parameters.aoMap ? "#define USE_AOMAP" : "",
      parameters.bumpMap ? "#define USE_BUMPMAP" : "",
      parameters.normalMap ? "#define USE_NORMALMAP" : "",
      parameters.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
      parameters.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
      parameters.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
      parameters.clearcoat ? "#define USE_CLEARCOAT" : "",
      parameters.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
      parameters.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
      parameters.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
      parameters.iridescence ? "#define USE_IRIDESCENCE" : "",
      parameters.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
      parameters.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
      parameters.specularMap ? "#define USE_SPECULARMAP" : "",
      parameters.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
      parameters.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
      parameters.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
      parameters.metalnessMap ? "#define USE_METALNESSMAP" : "",
      parameters.alphaMap ? "#define USE_ALPHAMAP" : "",
      parameters.alphaTest ? "#define USE_ALPHATEST" : "",
      parameters.sheen ? "#define USE_SHEEN" : "",
      parameters.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
      parameters.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
      parameters.transmission ? "#define USE_TRANSMISSION" : "",
      parameters.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
      parameters.thicknessMap ? "#define USE_THICKNESSMAP" : "",
      parameters.vertexTangents ? "#define USE_TANGENT" : "",
      parameters.vertexColors || parameters.instancingColor ? "#define USE_COLOR" : "",
      parameters.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
      parameters.vertexUv1s ? "#define USE_UV1" : "",
      parameters.vertexUv2s ? "#define USE_UV2" : "",
      parameters.vertexUv3s ? "#define USE_UV3" : "",
      parameters.pointsUvs ? "#define USE_POINTS_UV" : "",
      parameters.gradientMap ? "#define USE_GRADIENTMAP" : "",
      parameters.flatShading ? "#define FLAT_SHADED" : "",
      parameters.doubleSided ? "#define DOUBLE_SIDED" : "",
      parameters.flipSided ? "#define FLIP_SIDED" : "",
      parameters.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
      parameters.shadowMapEnabled ? "#define " + shadowMapTypeDefine : "",
      parameters.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
      parameters.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
      parameters.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
      parameters.logarithmicDepthBuffer && parameters.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
      "uniform mat4 viewMatrix;",
      "uniform vec3 cameraPosition;",
      "uniform bool isOrthographic;",
      parameters.toneMapping !== NoToneMapping ? "#define TONE_MAPPING" : "",
      parameters.toneMapping !== NoToneMapping ? ShaderChunk["tonemapping_pars_fragment"] : "",
      parameters.toneMapping !== NoToneMapping ? getToneMappingFunction("toneMapping", parameters.toneMapping) : "",
      parameters.dithering ? "#define DITHERING" : "",
      parameters.opaque ? "#define OPAQUE" : "",
      ShaderChunk["encodings_pars_fragment"],
      getTexelEncodingFunction("linearToOutputTexel", parameters.outputColorSpace),
      parameters.useDepthPacking ? "#define DEPTH_PACKING " + parameters.depthPacking : "",
      "\n"
    ].filter(filterEmptyLine).join("\n");
  }
  vertexShader = resolveIncludes(vertexShader);
  vertexShader = replaceLightNums(vertexShader, parameters);
  vertexShader = replaceClippingPlaneNums(vertexShader, parameters);
  fragmentShader = resolveIncludes(fragmentShader);
  fragmentShader = replaceLightNums(fragmentShader, parameters);
  fragmentShader = replaceClippingPlaneNums(fragmentShader, parameters);
  vertexShader = unrollLoops(vertexShader);
  fragmentShader = unrollLoops(fragmentShader);
  if (parameters.isWebGL2 && parameters.isRawShaderMaterial !== true) {
    versionString = "#version 300 es\n";
    prefixVertex = [
      "precision mediump sampler2DArray;",
      "#define attribute in",
      "#define varying out",
      "#define texture2D texture"
    ].join("\n") + "\n" + prefixVertex;
    prefixFragment = [
      "#define varying in",
      parameters.glslVersion === GLSL3 ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
      parameters.glslVersion === GLSL3 ? "" : "#define gl_FragColor pc_fragColor",
      "#define gl_FragDepthEXT gl_FragDepth",
      "#define texture2D texture",
      "#define textureCube texture",
      "#define texture2DProj textureProj",
      "#define texture2DLodEXT textureLod",
      "#define texture2DProjLodEXT textureProjLod",
      "#define textureCubeLodEXT textureLod",
      "#define texture2DGradEXT textureGrad",
      "#define texture2DProjGradEXT textureProjGrad",
      "#define textureCubeGradEXT textureGrad"
    ].join("\n") + "\n" + prefixFragment;
  }
  const vertexGlsl = versionString + prefixVertex + vertexShader;
  const fragmentGlsl = versionString + prefixFragment + fragmentShader;
  const glVertexShader = WebGLShader(gl, gl.VERTEX_SHADER, vertexGlsl);
  const glFragmentShader = WebGLShader(gl, gl.FRAGMENT_SHADER, fragmentGlsl);
  gl.attachShader(program, glVertexShader);
  gl.attachShader(program, glFragmentShader);
  if (parameters.index0AttributeName !== void 0) {
    gl.bindAttribLocation(program, 0, parameters.index0AttributeName);
  } else if (parameters.morphTargets === true) {
    gl.bindAttribLocation(program, 0, "position");
  }
  gl.linkProgram(program);
  if (renderer.debug.checkShaderErrors) {
    const programLog = gl.getProgramInfoLog(program).trim();
    const vertexLog = gl.getShaderInfoLog(glVertexShader).trim();
    const fragmentLog = gl.getShaderInfoLog(glFragmentShader).trim();
    let runnable = true;
    let haveDiagnostics = true;
    if (gl.getProgramParameter(program, gl.LINK_STATUS) === false) {
      runnable = false;
      if (typeof renderer.debug.onShaderError === "function") {
        renderer.debug.onShaderError(gl, program, glVertexShader, glFragmentShader);
      } else {
        const vertexErrors = getShaderErrors(gl, glVertexShader, "vertex");
        const fragmentErrors = getShaderErrors(gl, glFragmentShader, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " + gl.getError() + " - VALIDATE_STATUS " + gl.getProgramParameter(program, gl.VALIDATE_STATUS) + "\n\nProgram Info Log: " + programLog + "\n" + vertexErrors + "\n" + fragmentErrors
        );
      }
    } else if (programLog !== "") {
      console.warn("THREE.WebGLProgram: Program Info Log:", programLog);
    } else if (vertexLog === "" || fragmentLog === "") {
      haveDiagnostics = false;
    }
    if (haveDiagnostics) {
      this.diagnostics = {
        runnable,
        programLog,
        vertexShader: {
          log: vertexLog,
          prefix: prefixVertex
        },
        fragmentShader: {
          log: fragmentLog,
          prefix: prefixFragment
        }
      };
    }
  }
  gl.deleteShader(glVertexShader);
  gl.deleteShader(glFragmentShader);
  let cachedUniforms;
  this.getUniforms = function() {
    if (cachedUniforms === void 0) {
      cachedUniforms = new WebGLUniforms(gl, program);
    }
    return cachedUniforms;
  };
  let cachedAttributes;
  this.getAttributes = function() {
    if (cachedAttributes === void 0) {
      cachedAttributes = fetchAttributeLocations(gl, program);
    }
    return cachedAttributes;
  };
  this.destroy = function() {
    bindingStates.releaseStatesOfProgram(this);
    gl.deleteProgram(program);
    this.program = void 0;
  };
  this.name = parameters.shaderName;
  this.id = programIdCount++;
  this.cacheKey = cacheKey;
  this.usedTimes = 1;
  this.program = program;
  this.vertexShader = glVertexShader;
  this.fragmentShader = glFragmentShader;
  return this;
}
let _id = 0;
class WebGLShaderCache {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map();
    this.materialCache = /* @__PURE__ */ new Map();
  }
  update(material) {
    const vertexShader = material.vertexShader;
    const fragmentShader = material.fragmentShader;
    const vertexShaderStage = this._getShaderStage(vertexShader);
    const fragmentShaderStage = this._getShaderStage(fragmentShader);
    const materialShaders = this._getShaderCacheForMaterial(material);
    if (materialShaders.has(vertexShaderStage) === false) {
      materialShaders.add(vertexShaderStage);
      vertexShaderStage.usedTimes++;
    }
    if (materialShaders.has(fragmentShaderStage) === false) {
      materialShaders.add(fragmentShaderStage);
      fragmentShaderStage.usedTimes++;
    }
    return this;
  }
  remove(material) {
    const materialShaders = this.materialCache.get(material);
    for (const shaderStage of materialShaders) {
      shaderStage.usedTimes--;
      if (shaderStage.usedTimes === 0)
        this.shaderCache.delete(shaderStage.code);
    }
    this.materialCache.delete(material);
    return this;
  }
  getVertexShaderID(material) {
    return this._getShaderStage(material.vertexShader).id;
  }
  getFragmentShaderID(material) {
    return this._getShaderStage(material.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear();
    this.materialCache.clear();
  }
  _getShaderCacheForMaterial(material) {
    const cache = this.materialCache;
    let set = cache.get(material);
    if (set === void 0) {
      set = /* @__PURE__ */ new Set();
      cache.set(material, set);
    }
    return set;
  }
  _getShaderStage(code) {
    const cache = this.shaderCache;
    let stage = cache.get(code);
    if (stage === void 0) {
      stage = new WebGLShaderStage(code);
      cache.set(code, stage);
    }
    return stage;
  }
}
class WebGLShaderStage {
  constructor(code) {
    this.id = _id++;
    this.code = code;
    this.usedTimes = 0;
  }
}
function WebGLPrograms(renderer, cubemaps, cubeuvmaps, extensions, capabilities, bindingStates, clipping) {
  const _programLayers = new Layers();
  const _customShaders = new WebGLShaderCache();
  const programs = [];
  const IS_WEBGL2 = capabilities.isWebGL2;
  const logarithmicDepthBuffer = capabilities.logarithmicDepthBuffer;
  const SUPPORTS_VERTEX_TEXTURES = capabilities.vertexTextures;
  let precision = capabilities.precision;
  const shaderIDs = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function getChannel(value) {
    if (value === 1)
      return "uv1";
    if (value === 2)
      return "uv2";
    if (value === 3)
      return "uv3";
    return "uv";
  }
  function getParameters(material, lights, shadows, scene, object) {
    const fog = scene.fog;
    const geometry = object.geometry;
    const environment = material.isMeshStandardMaterial ? scene.environment : null;
    const envMap = (material.isMeshStandardMaterial ? cubeuvmaps : cubemaps).get(material.envMap || environment);
    const envMapCubeUVHeight = !!envMap && envMap.mapping === CubeUVReflectionMapping ? envMap.image.height : null;
    const shaderID = shaderIDs[material.type];
    if (material.precision !== null) {
      precision = capabilities.getMaxPrecision(material.precision);
      if (precision !== material.precision) {
        console.warn("THREE.WebGLProgram.getParameters:", material.precision, "not supported, using", precision, "instead.");
      }
    }
    const morphAttribute = geometry.morphAttributes.position || geometry.morphAttributes.normal || geometry.morphAttributes.color;
    const morphTargetsCount = morphAttribute !== void 0 ? morphAttribute.length : 0;
    let morphTextureStride = 0;
    if (geometry.morphAttributes.position !== void 0)
      morphTextureStride = 1;
    if (geometry.morphAttributes.normal !== void 0)
      morphTextureStride = 2;
    if (geometry.morphAttributes.color !== void 0)
      morphTextureStride = 3;
    let vertexShader, fragmentShader;
    let customVertexShaderID, customFragmentShaderID;
    if (shaderID) {
      const shader = ShaderLib[shaderID];
      vertexShader = shader.vertexShader;
      fragmentShader = shader.fragmentShader;
    } else {
      vertexShader = material.vertexShader;
      fragmentShader = material.fragmentShader;
      _customShaders.update(material);
      customVertexShaderID = _customShaders.getVertexShaderID(material);
      customFragmentShaderID = _customShaders.getFragmentShaderID(material);
    }
    const currentRenderTarget = renderer.getRenderTarget();
    const IS_INSTANCEDMESH = object.isInstancedMesh === true;
    const HAS_MAP = !!material.map;
    const HAS_MATCAP = !!material.matcap;
    const HAS_ENVMAP = !!envMap;
    const HAS_AOMAP = !!material.aoMap;
    const HAS_LIGHTMAP = !!material.lightMap;
    const HAS_BUMPMAP = !!material.bumpMap;
    const HAS_NORMALMAP = !!material.normalMap;
    const HAS_DISPLACEMENTMAP = !!material.displacementMap;
    const HAS_EMISSIVEMAP = !!material.emissiveMap;
    const HAS_METALNESSMAP = !!material.metalnessMap;
    const HAS_ROUGHNESSMAP = !!material.roughnessMap;
    const HAS_CLEARCOAT = material.clearcoat > 0;
    const HAS_IRIDESCENCE = material.iridescence > 0;
    const HAS_SHEEN = material.sheen > 0;
    const HAS_TRANSMISSION = material.transmission > 0;
    const HAS_CLEARCOATMAP = HAS_CLEARCOAT && !!material.clearcoatMap;
    const HAS_CLEARCOAT_NORMALMAP = HAS_CLEARCOAT && !!material.clearcoatNormalMap;
    const HAS_CLEARCOAT_ROUGHNESSMAP = HAS_CLEARCOAT && !!material.clearcoatRoughnessMap;
    const HAS_IRIDESCENCEMAP = HAS_IRIDESCENCE && !!material.iridescenceMap;
    const HAS_IRIDESCENCE_THICKNESSMAP = HAS_IRIDESCENCE && !!material.iridescenceThicknessMap;
    const HAS_SHEEN_COLORMAP = HAS_SHEEN && !!material.sheenColorMap;
    const HAS_SHEEN_ROUGHNESSMAP = HAS_SHEEN && !!material.sheenRoughnessMap;
    const HAS_SPECULARMAP = !!material.specularMap;
    const HAS_SPECULAR_COLORMAP = !!material.specularColorMap;
    const HAS_SPECULAR_INTENSITYMAP = !!material.specularIntensityMap;
    const HAS_TRANSMISSIONMAP = HAS_TRANSMISSION && !!material.transmissionMap;
    const HAS_THICKNESSMAP = HAS_TRANSMISSION && !!material.thicknessMap;
    const HAS_GRADIENTMAP = !!material.gradientMap;
    const HAS_ALPHAMAP = !!material.alphaMap;
    const HAS_ALPHATEST = material.alphaTest > 0;
    const HAS_EXTENSIONS = !!material.extensions;
    const HAS_ATTRIBUTE_UV1 = !!geometry.attributes.uv1;
    const HAS_ATTRIBUTE_UV2 = !!geometry.attributes.uv2;
    const HAS_ATTRIBUTE_UV3 = !!geometry.attributes.uv3;
    const parameters = {
      isWebGL2: IS_WEBGL2,
      shaderID,
      shaderName: material.type,
      vertexShader,
      fragmentShader,
      defines: material.defines,
      customVertexShaderID,
      customFragmentShaderID,
      isRawShaderMaterial: material.isRawShaderMaterial === true,
      glslVersion: material.glslVersion,
      precision,
      instancing: IS_INSTANCEDMESH,
      instancingColor: IS_INSTANCEDMESH && object.instanceColor !== null,
      supportsVertexTextures: SUPPORTS_VERTEX_TEXTURES,
      outputColorSpace: currentRenderTarget === null ? renderer.outputColorSpace : currentRenderTarget.isXRRenderTarget === true ? currentRenderTarget.texture.colorSpace : LinearSRGBColorSpace,
      map: HAS_MAP,
      matcap: HAS_MATCAP,
      envMap: HAS_ENVMAP,
      envMapMode: HAS_ENVMAP && envMap.mapping,
      envMapCubeUVHeight,
      aoMap: HAS_AOMAP,
      lightMap: HAS_LIGHTMAP,
      bumpMap: HAS_BUMPMAP,
      normalMap: HAS_NORMALMAP,
      displacementMap: SUPPORTS_VERTEX_TEXTURES && HAS_DISPLACEMENTMAP,
      emissiveMap: HAS_EMISSIVEMAP,
      normalMapObjectSpace: HAS_NORMALMAP && material.normalMapType === ObjectSpaceNormalMap,
      normalMapTangentSpace: HAS_NORMALMAP && material.normalMapType === TangentSpaceNormalMap,
      metalnessMap: HAS_METALNESSMAP,
      roughnessMap: HAS_ROUGHNESSMAP,
      clearcoat: HAS_CLEARCOAT,
      clearcoatMap: HAS_CLEARCOATMAP,
      clearcoatNormalMap: HAS_CLEARCOAT_NORMALMAP,
      clearcoatRoughnessMap: HAS_CLEARCOAT_ROUGHNESSMAP,
      iridescence: HAS_IRIDESCENCE,
      iridescenceMap: HAS_IRIDESCENCEMAP,
      iridescenceThicknessMap: HAS_IRIDESCENCE_THICKNESSMAP,
      sheen: HAS_SHEEN,
      sheenColorMap: HAS_SHEEN_COLORMAP,
      sheenRoughnessMap: HAS_SHEEN_ROUGHNESSMAP,
      specularMap: HAS_SPECULARMAP,
      specularColorMap: HAS_SPECULAR_COLORMAP,
      specularIntensityMap: HAS_SPECULAR_INTENSITYMAP,
      transmission: HAS_TRANSMISSION,
      transmissionMap: HAS_TRANSMISSIONMAP,
      thicknessMap: HAS_THICKNESSMAP,
      gradientMap: HAS_GRADIENTMAP,
      opaque: material.transparent === false && material.blending === NormalBlending,
      alphaMap: HAS_ALPHAMAP,
      alphaTest: HAS_ALPHATEST,
      combine: material.combine,
      mapUv: HAS_MAP && getChannel(material.map.channel),
      aoMapUv: HAS_AOMAP && getChannel(material.aoMap.channel),
      lightMapUv: HAS_LIGHTMAP && getChannel(material.lightMap.channel),
      bumpMapUv: HAS_BUMPMAP && getChannel(material.bumpMap.channel),
      normalMapUv: HAS_NORMALMAP && getChannel(material.normalMap.channel),
      displacementMapUv: HAS_DISPLACEMENTMAP && getChannel(material.displacementMap.channel),
      emissiveMapUv: HAS_EMISSIVEMAP && getChannel(material.emissiveMap.channel),
      metalnessMapUv: HAS_METALNESSMAP && getChannel(material.metalnessMap.channel),
      roughnessMapUv: HAS_ROUGHNESSMAP && getChannel(material.roughnessMap.channel),
      clearcoatMapUv: HAS_CLEARCOATMAP && getChannel(material.clearcoatMap.channel),
      clearcoatNormalMapUv: HAS_CLEARCOAT_NORMALMAP && getChannel(material.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: HAS_CLEARCOAT_ROUGHNESSMAP && getChannel(material.clearcoatRoughnessMap.channel),
      iridescenceMapUv: HAS_IRIDESCENCEMAP && getChannel(material.iridescenceMap.channel),
      iridescenceThicknessMapUv: HAS_IRIDESCENCE_THICKNESSMAP && getChannel(material.iridescenceThicknessMap.channel),
      sheenColorMapUv: HAS_SHEEN_COLORMAP && getChannel(material.sheenColorMap.channel),
      sheenRoughnessMapUv: HAS_SHEEN_ROUGHNESSMAP && getChannel(material.sheenRoughnessMap.channel),
      specularMapUv: HAS_SPECULARMAP && getChannel(material.specularMap.channel),
      specularColorMapUv: HAS_SPECULAR_COLORMAP && getChannel(material.specularColorMap.channel),
      specularIntensityMapUv: HAS_SPECULAR_INTENSITYMAP && getChannel(material.specularIntensityMap.channel),
      transmissionMapUv: HAS_TRANSMISSIONMAP && getChannel(material.transmissionMap.channel),
      thicknessMapUv: HAS_THICKNESSMAP && getChannel(material.thicknessMap.channel),
      alphaMapUv: HAS_ALPHAMAP && getChannel(material.alphaMap.channel),
      vertexTangents: HAS_NORMALMAP && !!geometry.attributes.tangent,
      vertexColors: material.vertexColors,
      vertexAlphas: material.vertexColors === true && !!geometry.attributes.color && geometry.attributes.color.itemSize === 4,
      vertexUv1s: HAS_ATTRIBUTE_UV1,
      vertexUv2s: HAS_ATTRIBUTE_UV2,
      vertexUv3s: HAS_ATTRIBUTE_UV3,
      pointsUvs: object.isPoints === true && !!geometry.attributes.uv && (HAS_MAP || HAS_ALPHAMAP),
      fog: !!fog,
      useFog: material.fog === true,
      fogExp2: fog && fog.isFogExp2,
      flatShading: material.flatShading === true,
      sizeAttenuation: material.sizeAttenuation === true,
      logarithmicDepthBuffer,
      skinning: object.isSkinnedMesh === true,
      morphTargets: geometry.morphAttributes.position !== void 0,
      morphNormals: geometry.morphAttributes.normal !== void 0,
      morphColors: geometry.morphAttributes.color !== void 0,
      morphTargetsCount,
      morphTextureStride,
      numDirLights: lights.directional.length,
      numPointLights: lights.point.length,
      numSpotLights: lights.spot.length,
      numSpotLightMaps: lights.spotLightMap.length,
      numRectAreaLights: lights.rectArea.length,
      numHemiLights: lights.hemi.length,
      numDirLightShadows: lights.directionalShadowMap.length,
      numPointLightShadows: lights.pointShadowMap.length,
      numSpotLightShadows: lights.spotShadowMap.length,
      numSpotLightShadowsWithMaps: lights.numSpotLightShadowsWithMaps,
      numClippingPlanes: clipping.numPlanes,
      numClipIntersection: clipping.numIntersection,
      dithering: material.dithering,
      shadowMapEnabled: renderer.shadowMap.enabled && shadows.length > 0,
      shadowMapType: renderer.shadowMap.type,
      toneMapping: material.toneMapped ? renderer.toneMapping : NoToneMapping,
      useLegacyLights: renderer.useLegacyLights,
      premultipliedAlpha: material.premultipliedAlpha,
      doubleSided: material.side === DoubleSide,
      flipSided: material.side === BackSide,
      useDepthPacking: material.depthPacking >= 0,
      depthPacking: material.depthPacking || 0,
      index0AttributeName: material.index0AttributeName,
      extensionDerivatives: HAS_EXTENSIONS && material.extensions.derivatives === true,
      extensionFragDepth: HAS_EXTENSIONS && material.extensions.fragDepth === true,
      extensionDrawBuffers: HAS_EXTENSIONS && material.extensions.drawBuffers === true,
      extensionShaderTextureLOD: HAS_EXTENSIONS && material.extensions.shaderTextureLOD === true,
      rendererExtensionFragDepth: IS_WEBGL2 || extensions.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: IS_WEBGL2 || extensions.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: IS_WEBGL2 || extensions.has("EXT_shader_texture_lod"),
      customProgramCacheKey: material.customProgramCacheKey()
    };
    return parameters;
  }
  function getProgramCacheKey(parameters) {
    const array = [];
    if (parameters.shaderID) {
      array.push(parameters.shaderID);
    } else {
      array.push(parameters.customVertexShaderID);
      array.push(parameters.customFragmentShaderID);
    }
    if (parameters.defines !== void 0) {
      for (const name in parameters.defines) {
        array.push(name);
        array.push(parameters.defines[name]);
      }
    }
    if (parameters.isRawShaderMaterial === false) {
      getProgramCacheKeyParameters(array, parameters);
      getProgramCacheKeyBooleans(array, parameters);
      array.push(renderer.outputColorSpace);
    }
    array.push(parameters.customProgramCacheKey);
    return array.join();
  }
  function getProgramCacheKeyParameters(array, parameters) {
    array.push(parameters.precision);
    array.push(parameters.outputColorSpace);
    array.push(parameters.envMapMode);
    array.push(parameters.envMapCubeUVHeight);
    array.push(parameters.mapUv);
    array.push(parameters.alphaMapUv);
    array.push(parameters.lightMapUv);
    array.push(parameters.aoMapUv);
    array.push(parameters.bumpMapUv);
    array.push(parameters.normalMapUv);
    array.push(parameters.displacementMapUv);
    array.push(parameters.emissiveMapUv);
    array.push(parameters.metalnessMapUv);
    array.push(parameters.roughnessMapUv);
    array.push(parameters.clearcoatMapUv);
    array.push(parameters.clearcoatNormalMapUv);
    array.push(parameters.clearcoatRoughnessMapUv);
    array.push(parameters.iridescenceMapUv);
    array.push(parameters.iridescenceThicknessMapUv);
    array.push(parameters.sheenColorMapUv);
    array.push(parameters.sheenRoughnessMapUv);
    array.push(parameters.specularMapUv);
    array.push(parameters.specularColorMapUv);
    array.push(parameters.specularIntensityMapUv);
    array.push(parameters.transmissionMapUv);
    array.push(parameters.thicknessMapUv);
    array.push(parameters.combine);
    array.push(parameters.fogExp2);
    array.push(parameters.sizeAttenuation);
    array.push(parameters.morphTargetsCount);
    array.push(parameters.morphAttributeCount);
    array.push(parameters.numDirLights);
    array.push(parameters.numPointLights);
    array.push(parameters.numSpotLights);
    array.push(parameters.numSpotLightMaps);
    array.push(parameters.numHemiLights);
    array.push(parameters.numRectAreaLights);
    array.push(parameters.numDirLightShadows);
    array.push(parameters.numPointLightShadows);
    array.push(parameters.numSpotLightShadows);
    array.push(parameters.numSpotLightShadowsWithMaps);
    array.push(parameters.shadowMapType);
    array.push(parameters.toneMapping);
    array.push(parameters.numClippingPlanes);
    array.push(parameters.numClipIntersection);
    array.push(parameters.depthPacking);
  }
  function getProgramCacheKeyBooleans(array, parameters) {
    _programLayers.disableAll();
    if (parameters.isWebGL2)
      _programLayers.enable(0);
    if (parameters.supportsVertexTextures)
      _programLayers.enable(1);
    if (parameters.instancing)
      _programLayers.enable(2);
    if (parameters.instancingColor)
      _programLayers.enable(3);
    if (parameters.matcap)
      _programLayers.enable(4);
    if (parameters.envMap)
      _programLayers.enable(5);
    if (parameters.normalMapObjectSpace)
      _programLayers.enable(6);
    if (parameters.normalMapTangentSpace)
      _programLayers.enable(7);
    if (parameters.clearcoat)
      _programLayers.enable(8);
    if (parameters.iridescence)
      _programLayers.enable(9);
    if (parameters.alphaTest)
      _programLayers.enable(10);
    if (parameters.vertexColors)
      _programLayers.enable(11);
    if (parameters.vertexAlphas)
      _programLayers.enable(12);
    if (parameters.vertexUv1s)
      _programLayers.enable(13);
    if (parameters.vertexUv2s)
      _programLayers.enable(14);
    if (parameters.vertexUv3s)
      _programLayers.enable(15);
    if (parameters.vertexTangents)
      _programLayers.enable(16);
    array.push(_programLayers.mask);
    _programLayers.disableAll();
    if (parameters.fog)
      _programLayers.enable(0);
    if (parameters.useFog)
      _programLayers.enable(1);
    if (parameters.flatShading)
      _programLayers.enable(2);
    if (parameters.logarithmicDepthBuffer)
      _programLayers.enable(3);
    if (parameters.skinning)
      _programLayers.enable(4);
    if (parameters.morphTargets)
      _programLayers.enable(5);
    if (parameters.morphNormals)
      _programLayers.enable(6);
    if (parameters.morphColors)
      _programLayers.enable(7);
    if (parameters.premultipliedAlpha)
      _programLayers.enable(8);
    if (parameters.shadowMapEnabled)
      _programLayers.enable(9);
    if (parameters.useLegacyLights)
      _programLayers.enable(10);
    if (parameters.doubleSided)
      _programLayers.enable(11);
    if (parameters.flipSided)
      _programLayers.enable(12);
    if (parameters.useDepthPacking)
      _programLayers.enable(13);
    if (parameters.dithering)
      _programLayers.enable(14);
    if (parameters.transmission)
      _programLayers.enable(15);
    if (parameters.sheen)
      _programLayers.enable(16);
    if (parameters.opaque)
      _programLayers.enable(17);
    if (parameters.pointsUvs)
      _programLayers.enable(18);
    array.push(_programLayers.mask);
  }
  function getUniforms(material) {
    const shaderID = shaderIDs[material.type];
    let uniforms;
    if (shaderID) {
      const shader = ShaderLib[shaderID];
      uniforms = UniformsUtils.clone(shader.uniforms);
    } else {
      uniforms = material.uniforms;
    }
    return uniforms;
  }
  function acquireProgram(parameters, cacheKey) {
    let program;
    for (let p = 0, pl = programs.length; p < pl; p++) {
      const preexistingProgram = programs[p];
      if (preexistingProgram.cacheKey === cacheKey) {
        program = preexistingProgram;
        ++program.usedTimes;
        break;
      }
    }
    if (program === void 0) {
      program = new WebGLProgram(renderer, cacheKey, parameters, bindingStates);
      programs.push(program);
    }
    return program;
  }
  function releaseProgram(program) {
    if (--program.usedTimes === 0) {
      const i = programs.indexOf(program);
      programs[i] = programs[programs.length - 1];
      programs.pop();
      program.destroy();
    }
  }
  function releaseShaderCache(material) {
    _customShaders.remove(material);
  }
  function dispose() {
    _customShaders.dispose();
  }
  return {
    getParameters,
    getProgramCacheKey,
    getUniforms,
    acquireProgram,
    releaseProgram,
    releaseShaderCache,
    programs,
    dispose
  };
}
function WebGLProperties() {
  let properties = /* @__PURE__ */ new WeakMap();
  function get(object) {
    let map = properties.get(object);
    if (map === void 0) {
      map = {};
      properties.set(object, map);
    }
    return map;
  }
  function remove(object) {
    properties.delete(object);
  }
  function update(object, key, value) {
    properties.get(object)[key] = value;
  }
  function dispose() {
    properties = /* @__PURE__ */ new WeakMap();
  }
  return {
    get,
    remove,
    update,
    dispose
  };
}
function painterSortStable(a, b) {
  if (a.groupOrder !== b.groupOrder) {
    return a.groupOrder - b.groupOrder;
  } else if (a.renderOrder !== b.renderOrder) {
    return a.renderOrder - b.renderOrder;
  } else if (a.material.id !== b.material.id) {
    return a.material.id - b.material.id;
  } else if (a.z !== b.z) {
    return a.z - b.z;
  } else {
    return a.id - b.id;
  }
}
function reversePainterSortStable(a, b) {
  if (a.groupOrder !== b.groupOrder) {
    return a.groupOrder - b.groupOrder;
  } else if (a.renderOrder !== b.renderOrder) {
    return a.renderOrder - b.renderOrder;
  } else if (a.z !== b.z) {
    return b.z - a.z;
  } else {
    return a.id - b.id;
  }
}
function WebGLRenderList() {
  const renderItems = [];
  let renderItemsIndex = 0;
  const opaque = [];
  const transmissive = [];
  const transparent = [];
  function init4() {
    renderItemsIndex = 0;
    opaque.length = 0;
    transmissive.length = 0;
    transparent.length = 0;
  }
  function getNextRenderItem(object, geometry, material, groupOrder, z, group) {
    let renderItem = renderItems[renderItemsIndex];
    if (renderItem === void 0) {
      renderItem = {
        id: object.id,
        object,
        geometry,
        material,
        groupOrder,
        renderOrder: object.renderOrder,
        z,
        group
      };
      renderItems[renderItemsIndex] = renderItem;
    } else {
      renderItem.id = object.id;
      renderItem.object = object;
      renderItem.geometry = geometry;
      renderItem.material = material;
      renderItem.groupOrder = groupOrder;
      renderItem.renderOrder = object.renderOrder;
      renderItem.z = z;
      renderItem.group = group;
    }
    renderItemsIndex++;
    return renderItem;
  }
  function push(object, geometry, material, groupOrder, z, group) {
    const renderItem = getNextRenderItem(object, geometry, material, groupOrder, z, group);
    if (material.transmission > 0) {
      transmissive.push(renderItem);
    } else if (material.transparent === true) {
      transparent.push(renderItem);
    } else {
      opaque.push(renderItem);
    }
  }
  function unshift(object, geometry, material, groupOrder, z, group) {
    const renderItem = getNextRenderItem(object, geometry, material, groupOrder, z, group);
    if (material.transmission > 0) {
      transmissive.unshift(renderItem);
    } else if (material.transparent === true) {
      transparent.unshift(renderItem);
    } else {
      opaque.unshift(renderItem);
    }
  }
  function sort(customOpaqueSort, customTransparentSort) {
    if (opaque.length > 1)
      opaque.sort(customOpaqueSort || painterSortStable);
    if (transmissive.length > 1)
      transmissive.sort(customTransparentSort || reversePainterSortStable);
    if (transparent.length > 1)
      transparent.sort(customTransparentSort || reversePainterSortStable);
  }
  function finish() {
    for (let i = renderItemsIndex, il = renderItems.length; i < il; i++) {
      const renderItem = renderItems[i];
      if (renderItem.id === null)
        break;
      renderItem.id = null;
      renderItem.object = null;
      renderItem.geometry = null;
      renderItem.material = null;
      renderItem.group = null;
    }
  }
  return {
    opaque,
    transmissive,
    transparent,
    init: init4,
    push,
    unshift,
    finish,
    sort
  };
}
function WebGLRenderLists() {
  let lists = /* @__PURE__ */ new WeakMap();
  function get(scene, renderCallDepth) {
    const listArray = lists.get(scene);
    let list;
    if (listArray === void 0) {
      list = new WebGLRenderList();
      lists.set(scene, [list]);
    } else {
      if (renderCallDepth >= listArray.length) {
        list = new WebGLRenderList();
        listArray.push(list);
      } else {
        list = listArray[renderCallDepth];
      }
    }
    return list;
  }
  function dispose() {
    lists = /* @__PURE__ */ new WeakMap();
  }
  return {
    get,
    dispose
  };
}
function UniformsCache() {
  const lights = {};
  return {
    get: function(light) {
      if (lights[light.id] !== void 0) {
        return lights[light.id];
      }
      let uniforms;
      switch (light.type) {
        case "DirectionalLight":
          uniforms = {
            direction: new Vector3(),
            color: new Color()
          };
          break;
        case "SpotLight":
          uniforms = {
            position: new Vector3(),
            direction: new Vector3(),
            color: new Color(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          uniforms = {
            position: new Vector3(),
            color: new Color(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          uniforms = {
            direction: new Vector3(),
            skyColor: new Color(),
            groundColor: new Color()
          };
          break;
        case "RectAreaLight":
          uniforms = {
            color: new Color(),
            position: new Vector3(),
            halfWidth: new Vector3(),
            halfHeight: new Vector3()
          };
          break;
      }
      lights[light.id] = uniforms;
      return uniforms;
    }
  };
}
function ShadowUniformsCache() {
  const lights = {};
  return {
    get: function(light) {
      if (lights[light.id] !== void 0) {
        return lights[light.id];
      }
      let uniforms;
      switch (light.type) {
        case "DirectionalLight":
          uniforms = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2()
          };
          break;
        case "SpotLight":
          uniforms = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2()
          };
          break;
        case "PointLight":
          uniforms = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      lights[light.id] = uniforms;
      return uniforms;
    }
  };
}
let nextVersion = 0;
function shadowCastingAndTexturingLightsFirst(lightA, lightB) {
  return (lightB.castShadow ? 2 : 0) - (lightA.castShadow ? 2 : 0) + (lightB.map ? 1 : 0) - (lightA.map ? 1 : 0);
}
function WebGLLights(extensions, capabilities) {
  const cache = new UniformsCache();
  const shadowCache = ShadowUniformsCache();
  const state = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0
  };
  for (let i = 0; i < 9; i++)
    state.probe.push(new Vector3());
  const vector3 = new Vector3();
  const matrix4 = new Matrix4();
  const matrix42 = new Matrix4();
  function setup(lights, useLegacyLights) {
    let r = 0, g = 0, b = 0;
    for (let i = 0; i < 9; i++)
      state.probe[i].set(0, 0, 0);
    let directionalLength = 0;
    let pointLength = 0;
    let spotLength = 0;
    let rectAreaLength = 0;
    let hemiLength = 0;
    let numDirectionalShadows = 0;
    let numPointShadows = 0;
    let numSpotShadows = 0;
    let numSpotMaps = 0;
    let numSpotShadowsWithMaps = 0;
    lights.sort(shadowCastingAndTexturingLightsFirst);
    const scaleFactor = useLegacyLights === true ? Math.PI : 1;
    for (let i = 0, l = lights.length; i < l; i++) {
      const light = lights[i];
      const color = light.color;
      const intensity = light.intensity;
      const distance = light.distance;
      const shadowMap = light.shadow && light.shadow.map ? light.shadow.map.texture : null;
      if (light.isAmbientLight) {
        r += color.r * intensity * scaleFactor;
        g += color.g * intensity * scaleFactor;
        b += color.b * intensity * scaleFactor;
      } else if (light.isLightProbe) {
        for (let j = 0; j < 9; j++) {
          state.probe[j].addScaledVector(light.sh.coefficients[j], intensity);
        }
      } else if (light.isDirectionalLight) {
        const uniforms = cache.get(light);
        uniforms.color.copy(light.color).multiplyScalar(light.intensity * scaleFactor);
        if (light.castShadow) {
          const shadow = light.shadow;
          const shadowUniforms = shadowCache.get(light);
          shadowUniforms.shadowBias = shadow.bias;
          shadowUniforms.shadowNormalBias = shadow.normalBias;
          shadowUniforms.shadowRadius = shadow.radius;
          shadowUniforms.shadowMapSize = shadow.mapSize;
          state.directionalShadow[directionalLength] = shadowUniforms;
          state.directionalShadowMap[directionalLength] = shadowMap;
          state.directionalShadowMatrix[directionalLength] = light.shadow.matrix;
          numDirectionalShadows++;
        }
        state.directional[directionalLength] = uniforms;
        directionalLength++;
      } else if (light.isSpotLight) {
        const uniforms = cache.get(light);
        uniforms.position.setFromMatrixPosition(light.matrixWorld);
        uniforms.color.copy(color).multiplyScalar(intensity * scaleFactor);
        uniforms.distance = distance;
        uniforms.coneCos = Math.cos(light.angle);
        uniforms.penumbraCos = Math.cos(light.angle * (1 - light.penumbra));
        uniforms.decay = light.decay;
        state.spot[spotLength] = uniforms;
        const shadow = light.shadow;
        if (light.map) {
          state.spotLightMap[numSpotMaps] = light.map;
          numSpotMaps++;
          shadow.updateMatrices(light);
          if (light.castShadow)
            numSpotShadowsWithMaps++;
        }
        state.spotLightMatrix[spotLength] = shadow.matrix;
        if (light.castShadow) {
          const shadowUniforms = shadowCache.get(light);
          shadowUniforms.shadowBias = shadow.bias;
          shadowUniforms.shadowNormalBias = shadow.normalBias;
          shadowUniforms.shadowRadius = shadow.radius;
          shadowUniforms.shadowMapSize = shadow.mapSize;
          state.spotShadow[spotLength] = shadowUniforms;
          state.spotShadowMap[spotLength] = shadowMap;
          numSpotShadows++;
        }
        spotLength++;
      } else if (light.isRectAreaLight) {
        const uniforms = cache.get(light);
        uniforms.color.copy(color).multiplyScalar(intensity);
        uniforms.halfWidth.set(light.width * 0.5, 0, 0);
        uniforms.halfHeight.set(0, light.height * 0.5, 0);
        state.rectArea[rectAreaLength] = uniforms;
        rectAreaLength++;
      } else if (light.isPointLight) {
        const uniforms = cache.get(light);
        uniforms.color.copy(light.color).multiplyScalar(light.intensity * scaleFactor);
        uniforms.distance = light.distance;
        uniforms.decay = light.decay;
        if (light.castShadow) {
          const shadow = light.shadow;
          const shadowUniforms = shadowCache.get(light);
          shadowUniforms.shadowBias = shadow.bias;
          shadowUniforms.shadowNormalBias = shadow.normalBias;
          shadowUniforms.shadowRadius = shadow.radius;
          shadowUniforms.shadowMapSize = shadow.mapSize;
          shadowUniforms.shadowCameraNear = shadow.camera.near;
          shadowUniforms.shadowCameraFar = shadow.camera.far;
          state.pointShadow[pointLength] = shadowUniforms;
          state.pointShadowMap[pointLength] = shadowMap;
          state.pointShadowMatrix[pointLength] = light.shadow.matrix;
          numPointShadows++;
        }
        state.point[pointLength] = uniforms;
        pointLength++;
      } else if (light.isHemisphereLight) {
        const uniforms = cache.get(light);
        uniforms.skyColor.copy(light.color).multiplyScalar(intensity * scaleFactor);
        uniforms.groundColor.copy(light.groundColor).multiplyScalar(intensity * scaleFactor);
        state.hemi[hemiLength] = uniforms;
        hemiLength++;
      }
    }
    if (rectAreaLength > 0) {
      if (capabilities.isWebGL2) {
        state.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1;
        state.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2;
      } else {
        if (extensions.has("OES_texture_float_linear") === true) {
          state.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1;
          state.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2;
        } else if (extensions.has("OES_texture_half_float_linear") === true) {
          state.rectAreaLTC1 = UniformsLib.LTC_HALF_1;
          state.rectAreaLTC2 = UniformsLib.LTC_HALF_2;
        } else {
          console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.");
        }
      }
    }
    state.ambient[0] = r;
    state.ambient[1] = g;
    state.ambient[2] = b;
    const hash = state.hash;
    if (hash.directionalLength !== directionalLength || hash.pointLength !== pointLength || hash.spotLength !== spotLength || hash.rectAreaLength !== rectAreaLength || hash.hemiLength !== hemiLength || hash.numDirectionalShadows !== numDirectionalShadows || hash.numPointShadows !== numPointShadows || hash.numSpotShadows !== numSpotShadows || hash.numSpotMaps !== numSpotMaps) {
      state.directional.length = directionalLength;
      state.spot.length = spotLength;
      state.rectArea.length = rectAreaLength;
      state.point.length = pointLength;
      state.hemi.length = hemiLength;
      state.directionalShadow.length = numDirectionalShadows;
      state.directionalShadowMap.length = numDirectionalShadows;
      state.pointShadow.length = numPointShadows;
      state.pointShadowMap.length = numPointShadows;
      state.spotShadow.length = numSpotShadows;
      state.spotShadowMap.length = numSpotShadows;
      state.directionalShadowMatrix.length = numDirectionalShadows;
      state.pointShadowMatrix.length = numPointShadows;
      state.spotLightMatrix.length = numSpotShadows + numSpotMaps - numSpotShadowsWithMaps;
      state.spotLightMap.length = numSpotMaps;
      state.numSpotLightShadowsWithMaps = numSpotShadowsWithMaps;
      hash.directionalLength = directionalLength;
      hash.pointLength = pointLength;
      hash.spotLength = spotLength;
      hash.rectAreaLength = rectAreaLength;
      hash.hemiLength = hemiLength;
      hash.numDirectionalShadows = numDirectionalShadows;
      hash.numPointShadows = numPointShadows;
      hash.numSpotShadows = numSpotShadows;
      hash.numSpotMaps = numSpotMaps;
      state.version = nextVersion++;
    }
  }
  function setupView(lights, camera) {
    let directionalLength = 0;
    let pointLength = 0;
    let spotLength = 0;
    let rectAreaLength = 0;
    let hemiLength = 0;
    const viewMatrix = camera.matrixWorldInverse;
    for (let i = 0, l = lights.length; i < l; i++) {
      const light = lights[i];
      if (light.isDirectionalLight) {
        const uniforms = state.directional[directionalLength];
        uniforms.direction.setFromMatrixPosition(light.matrixWorld);
        vector3.setFromMatrixPosition(light.target.matrixWorld);
        uniforms.direction.sub(vector3);
        uniforms.direction.transformDirection(viewMatrix);
        directionalLength++;
      } else if (light.isSpotLight) {
        const uniforms = state.spot[spotLength];
        uniforms.position.setFromMatrixPosition(light.matrixWorld);
        uniforms.position.applyMatrix4(viewMatrix);
        uniforms.direction.setFromMatrixPosition(light.matrixWorld);
        vector3.setFromMatrixPosition(light.target.matrixWorld);
        uniforms.direction.sub(vector3);
        uniforms.direction.transformDirection(viewMatrix);
        spotLength++;
      } else if (light.isRectAreaLight) {
        const uniforms = state.rectArea[rectAreaLength];
        uniforms.position.setFromMatrixPosition(light.matrixWorld);
        uniforms.position.applyMatrix4(viewMatrix);
        matrix42.identity();
        matrix4.copy(light.matrixWorld);
        matrix4.premultiply(viewMatrix);
        matrix42.extractRotation(matrix4);
        uniforms.halfWidth.set(light.width * 0.5, 0, 0);
        uniforms.halfHeight.set(0, light.height * 0.5, 0);
        uniforms.halfWidth.applyMatrix4(matrix42);
        uniforms.halfHeight.applyMatrix4(matrix42);
        rectAreaLength++;
      } else if (light.isPointLight) {
        const uniforms = state.point[pointLength];
        uniforms.position.setFromMatrixPosition(light.matrixWorld);
        uniforms.position.applyMatrix4(viewMatrix);
        pointLength++;
      } else if (light.isHemisphereLight) {
        const uniforms = state.hemi[hemiLength];
        uniforms.direction.setFromMatrixPosition(light.matrixWorld);
        uniforms.direction.transformDirection(viewMatrix);
        hemiLength++;
      }
    }
  }
  return {
    setup,
    setupView,
    state
  };
}
function WebGLRenderState(extensions, capabilities) {
  const lights = new WebGLLights(extensions, capabilities);
  const lightsArray = [];
  const shadowsArray = [];
  function init4() {
    lightsArray.length = 0;
    shadowsArray.length = 0;
  }
  function pushLight(light) {
    lightsArray.push(light);
  }
  function pushShadow(shadowLight) {
    shadowsArray.push(shadowLight);
  }
  function setupLights(useLegacyLights) {
    lights.setup(lightsArray, useLegacyLights);
  }
  function setupLightsView(camera) {
    lights.setupView(lightsArray, camera);
  }
  const state = {
    lightsArray,
    shadowsArray,
    lights
  };
  return {
    init: init4,
    state,
    setupLights,
    setupLightsView,
    pushLight,
    pushShadow
  };
}
function WebGLRenderStates(extensions, capabilities) {
  let renderStates = /* @__PURE__ */ new WeakMap();
  function get(scene, renderCallDepth = 0) {
    const renderStateArray = renderStates.get(scene);
    let renderState;
    if (renderStateArray === void 0) {
      renderState = new WebGLRenderState(extensions, capabilities);
      renderStates.set(scene, [renderState]);
    } else {
      if (renderCallDepth >= renderStateArray.length) {
        renderState = new WebGLRenderState(extensions, capabilities);
        renderStateArray.push(renderState);
      } else {
        renderState = renderStateArray[renderCallDepth];
      }
    }
    return renderState;
  }
  function dispose() {
    renderStates = /* @__PURE__ */ new WeakMap();
  }
  return {
    get,
    dispose
  };
}
class MeshDepthMaterial extends Material {
  constructor(parameters) {
    super();
    this.isMeshDepthMaterial = true;
    this.type = "MeshDepthMaterial";
    this.depthPacking = BasicDepthPacking;
    this.map = null;
    this.alphaMap = null;
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.depthPacking = source.depthPacking;
    this.map = source.map;
    this.alphaMap = source.alphaMap;
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    return this;
  }
}
class MeshDistanceMaterial extends Material {
  constructor(parameters) {
    super();
    this.isMeshDistanceMaterial = true;
    this.type = "MeshDistanceMaterial";
    this.map = null;
    this.alphaMap = null;
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.map = source.map;
    this.alphaMap = source.alphaMap;
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    return this;
  }
}
const vertex = "void main() {\n	gl_Position = vec4( position, 1.0 );\n}";
const fragment = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}";
function WebGLShadowMap(_renderer, _objects, _capabilities) {
  let _frustum = new Frustum();
  const _shadowMapSize = new Vector2(), _viewportSize = new Vector2(), _viewport = new Vector4(), _depthMaterial = new MeshDepthMaterial({ depthPacking: RGBADepthPacking }), _distanceMaterial = new MeshDistanceMaterial(), _materialCache = {}, _maxTextureSize = _capabilities.maxTextureSize;
  const shadowSide = { [FrontSide]: BackSide, [BackSide]: FrontSide, [DoubleSide]: DoubleSide };
  const shadowMaterialVertical = new ShaderMaterial({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Vector2() },
      radius: { value: 4 }
    },
    vertexShader: vertex,
    fragmentShader: fragment
  });
  const shadowMaterialHorizontal = shadowMaterialVertical.clone();
  shadowMaterialHorizontal.defines.HORIZONTAL_PASS = 1;
  const fullScreenTri = new BufferGeometry();
  fullScreenTri.setAttribute(
    "position",
    new BufferAttribute(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const fullScreenMesh = new Mesh(fullScreenTri, shadowMaterialVertical);
  const scope = this;
  this.enabled = false;
  this.autoUpdate = true;
  this.needsUpdate = false;
  this.type = PCFShadowMap;
  let _previousType = this.type;
  this.render = function(lights, scene, camera) {
    if (scope.enabled === false)
      return;
    if (scope.autoUpdate === false && scope.needsUpdate === false)
      return;
    if (lights.length === 0)
      return;
    const currentRenderTarget = _renderer.getRenderTarget();
    const activeCubeFace = _renderer.getActiveCubeFace();
    const activeMipmapLevel = _renderer.getActiveMipmapLevel();
    const _state = _renderer.state;
    _state.setBlending(NoBlending);
    _state.buffers.color.setClear(1, 1, 1, 1);
    _state.buffers.depth.setTest(true);
    _state.setScissorTest(false);
    const toVSM = _previousType !== VSMShadowMap && this.type === VSMShadowMap;
    const fromVSM = _previousType === VSMShadowMap && this.type !== VSMShadowMap;
    for (let i = 0, il = lights.length; i < il; i++) {
      const light = lights[i];
      const shadow = light.shadow;
      if (shadow === void 0) {
        console.warn("THREE.WebGLShadowMap:", light, "has no shadow.");
        continue;
      }
      if (shadow.autoUpdate === false && shadow.needsUpdate === false)
        continue;
      _shadowMapSize.copy(shadow.mapSize);
      const shadowFrameExtents = shadow.getFrameExtents();
      _shadowMapSize.multiply(shadowFrameExtents);
      _viewportSize.copy(shadow.mapSize);
      if (_shadowMapSize.x > _maxTextureSize || _shadowMapSize.y > _maxTextureSize) {
        if (_shadowMapSize.x > _maxTextureSize) {
          _viewportSize.x = Math.floor(_maxTextureSize / shadowFrameExtents.x);
          _shadowMapSize.x = _viewportSize.x * shadowFrameExtents.x;
          shadow.mapSize.x = _viewportSize.x;
        }
        if (_shadowMapSize.y > _maxTextureSize) {
          _viewportSize.y = Math.floor(_maxTextureSize / shadowFrameExtents.y);
          _shadowMapSize.y = _viewportSize.y * shadowFrameExtents.y;
          shadow.mapSize.y = _viewportSize.y;
        }
      }
      if (shadow.map === null || toVSM === true || fromVSM === true) {
        const pars = this.type !== VSMShadowMap ? { minFilter: NearestFilter, magFilter: NearestFilter } : {};
        if (shadow.map !== null) {
          shadow.map.dispose();
        }
        shadow.map = new WebGLRenderTarget(_shadowMapSize.x, _shadowMapSize.y, pars);
        shadow.map.texture.name = light.name + ".shadowMap";
        shadow.camera.updateProjectionMatrix();
      }
      _renderer.setRenderTarget(shadow.map);
      _renderer.clear();
      const viewportCount = shadow.getViewportCount();
      for (let vp = 0; vp < viewportCount; vp++) {
        const viewport = shadow.getViewport(vp);
        _viewport.set(
          _viewportSize.x * viewport.x,
          _viewportSize.y * viewport.y,
          _viewportSize.x * viewport.z,
          _viewportSize.y * viewport.w
        );
        _state.viewport(_viewport);
        shadow.updateMatrices(light, vp);
        _frustum = shadow.getFrustum();
        renderObject(scene, camera, shadow.camera, light, this.type);
      }
      if (shadow.isPointLightShadow !== true && this.type === VSMShadowMap) {
        VSMPass(shadow, camera);
      }
      shadow.needsUpdate = false;
    }
    _previousType = this.type;
    scope.needsUpdate = false;
    _renderer.setRenderTarget(currentRenderTarget, activeCubeFace, activeMipmapLevel);
  };
  function VSMPass(shadow, camera) {
    const geometry = _objects.update(fullScreenMesh);
    if (shadowMaterialVertical.defines.VSM_SAMPLES !== shadow.blurSamples) {
      shadowMaterialVertical.defines.VSM_SAMPLES = shadow.blurSamples;
      shadowMaterialHorizontal.defines.VSM_SAMPLES = shadow.blurSamples;
      shadowMaterialVertical.needsUpdate = true;
      shadowMaterialHorizontal.needsUpdate = true;
    }
    if (shadow.mapPass === null) {
      shadow.mapPass = new WebGLRenderTarget(_shadowMapSize.x, _shadowMapSize.y);
    }
    shadowMaterialVertical.uniforms.shadow_pass.value = shadow.map.texture;
    shadowMaterialVertical.uniforms.resolution.value = shadow.mapSize;
    shadowMaterialVertical.uniforms.radius.value = shadow.radius;
    _renderer.setRenderTarget(shadow.mapPass);
    _renderer.clear();
    _renderer.renderBufferDirect(camera, null, geometry, shadowMaterialVertical, fullScreenMesh, null);
    shadowMaterialHorizontal.uniforms.shadow_pass.value = shadow.mapPass.texture;
    shadowMaterialHorizontal.uniforms.resolution.value = shadow.mapSize;
    shadowMaterialHorizontal.uniforms.radius.value = shadow.radius;
    _renderer.setRenderTarget(shadow.map);
    _renderer.clear();
    _renderer.renderBufferDirect(camera, null, geometry, shadowMaterialHorizontal, fullScreenMesh, null);
  }
  function getDepthMaterial(object, material, light, type) {
    let result = null;
    const customMaterial = light.isPointLight === true ? object.customDistanceMaterial : object.customDepthMaterial;
    if (customMaterial !== void 0) {
      result = customMaterial;
    } else {
      result = light.isPointLight === true ? _distanceMaterial : _depthMaterial;
      if (_renderer.localClippingEnabled && material.clipShadows === true && Array.isArray(material.clippingPlanes) && material.clippingPlanes.length !== 0 || material.displacementMap && material.displacementScale !== 0 || material.alphaMap && material.alphaTest > 0 || material.map && material.alphaTest > 0) {
        const keyA = result.uuid, keyB = material.uuid;
        let materialsForVariant = _materialCache[keyA];
        if (materialsForVariant === void 0) {
          materialsForVariant = {};
          _materialCache[keyA] = materialsForVariant;
        }
        let cachedMaterial = materialsForVariant[keyB];
        if (cachedMaterial === void 0) {
          cachedMaterial = result.clone();
          materialsForVariant[keyB] = cachedMaterial;
        }
        result = cachedMaterial;
      }
    }
    result.visible = material.visible;
    result.wireframe = material.wireframe;
    if (type === VSMShadowMap) {
      result.side = material.shadowSide !== null ? material.shadowSide : material.side;
    } else {
      result.side = material.shadowSide !== null ? material.shadowSide : shadowSide[material.side];
    }
    result.alphaMap = material.alphaMap;
    result.alphaTest = material.alphaTest;
    result.map = material.map;
    result.clipShadows = material.clipShadows;
    result.clippingPlanes = material.clippingPlanes;
    result.clipIntersection = material.clipIntersection;
    result.displacementMap = material.displacementMap;
    result.displacementScale = material.displacementScale;
    result.displacementBias = material.displacementBias;
    result.wireframeLinewidth = material.wireframeLinewidth;
    result.linewidth = material.linewidth;
    if (light.isPointLight === true && result.isMeshDistanceMaterial === true) {
      const materialProperties = _renderer.properties.get(result);
      materialProperties.light = light;
    }
    return result;
  }
  function renderObject(object, camera, shadowCamera, light, type) {
    if (object.visible === false)
      return;
    const visible = object.layers.test(camera.layers);
    if (visible && (object.isMesh || object.isLine || object.isPoints)) {
      if ((object.castShadow || object.receiveShadow && type === VSMShadowMap) && (!object.frustumCulled || _frustum.intersectsObject(object))) {
        object.modelViewMatrix.multiplyMatrices(shadowCamera.matrixWorldInverse, object.matrixWorld);
        const geometry = _objects.update(object);
        const material = object.material;
        if (Array.isArray(material)) {
          const groups = geometry.groups;
          for (let k = 0, kl = groups.length; k < kl; k++) {
            const group = groups[k];
            const groupMaterial = material[group.materialIndex];
            if (groupMaterial && groupMaterial.visible) {
              const depthMaterial = getDepthMaterial(object, groupMaterial, light, type);
              _renderer.renderBufferDirect(shadowCamera, null, geometry, depthMaterial, object, group);
            }
          }
        } else if (material.visible) {
          const depthMaterial = getDepthMaterial(object, material, light, type);
          _renderer.renderBufferDirect(shadowCamera, null, geometry, depthMaterial, object, null);
        }
      }
    }
    const children = object.children;
    for (let i = 0, l = children.length; i < l; i++) {
      renderObject(children[i], camera, shadowCamera, light, type);
    }
  }
}
function WebGLState(gl, extensions, capabilities) {
  const isWebGL2 = capabilities.isWebGL2;
  function ColorBuffer() {
    let locked = false;
    const color = new Vector4();
    let currentColorMask = null;
    const currentColorClear = new Vector4(0, 0, 0, 0);
    return {
      setMask: function(colorMask) {
        if (currentColorMask !== colorMask && !locked) {
          gl.colorMask(colorMask, colorMask, colorMask, colorMask);
          currentColorMask = colorMask;
        }
      },
      setLocked: function(lock) {
        locked = lock;
      },
      setClear: function(r, g, b, a, premultipliedAlpha) {
        if (premultipliedAlpha === true) {
          r *= a;
          g *= a;
          b *= a;
        }
        color.set(r, g, b, a);
        if (currentColorClear.equals(color) === false) {
          gl.clearColor(r, g, b, a);
          currentColorClear.copy(color);
        }
      },
      reset: function() {
        locked = false;
        currentColorMask = null;
        currentColorClear.set(-1, 0, 0, 0);
      }
    };
  }
  function DepthBuffer() {
    let locked = false;
    let currentDepthMask = null;
    let currentDepthFunc = null;
    let currentDepthClear = null;
    return {
      setTest: function(depthTest) {
        if (depthTest) {
          enable(gl.DEPTH_TEST);
        } else {
          disable(gl.DEPTH_TEST);
        }
      },
      setMask: function(depthMask) {
        if (currentDepthMask !== depthMask && !locked) {
          gl.depthMask(depthMask);
          currentDepthMask = depthMask;
        }
      },
      setFunc: function(depthFunc) {
        if (currentDepthFunc !== depthFunc) {
          switch (depthFunc) {
            case NeverDepth:
              gl.depthFunc(gl.NEVER);
              break;
            case AlwaysDepth:
              gl.depthFunc(gl.ALWAYS);
              break;
            case LessDepth:
              gl.depthFunc(gl.LESS);
              break;
            case LessEqualDepth:
              gl.depthFunc(gl.LEQUAL);
              break;
            case EqualDepth:
              gl.depthFunc(gl.EQUAL);
              break;
            case GreaterEqualDepth:
              gl.depthFunc(gl.GEQUAL);
              break;
            case GreaterDepth:
              gl.depthFunc(gl.GREATER);
              break;
            case NotEqualDepth:
              gl.depthFunc(gl.NOTEQUAL);
              break;
            default:
              gl.depthFunc(gl.LEQUAL);
          }
          currentDepthFunc = depthFunc;
        }
      },
      setLocked: function(lock) {
        locked = lock;
      },
      setClear: function(depth) {
        if (currentDepthClear !== depth) {
          gl.clearDepth(depth);
          currentDepthClear = depth;
        }
      },
      reset: function() {
        locked = false;
        currentDepthMask = null;
        currentDepthFunc = null;
        currentDepthClear = null;
      }
    };
  }
  function StencilBuffer() {
    let locked = false;
    let currentStencilMask = null;
    let currentStencilFunc = null;
    let currentStencilRef = null;
    let currentStencilFuncMask = null;
    let currentStencilFail = null;
    let currentStencilZFail = null;
    let currentStencilZPass = null;
    let currentStencilClear = null;
    return {
      setTest: function(stencilTest) {
        if (!locked) {
          if (stencilTest) {
            enable(gl.STENCIL_TEST);
          } else {
            disable(gl.STENCIL_TEST);
          }
        }
      },
      setMask: function(stencilMask) {
        if (currentStencilMask !== stencilMask && !locked) {
          gl.stencilMask(stencilMask);
          currentStencilMask = stencilMask;
        }
      },
      setFunc: function(stencilFunc, stencilRef, stencilMask) {
        if (currentStencilFunc !== stencilFunc || currentStencilRef !== stencilRef || currentStencilFuncMask !== stencilMask) {
          gl.stencilFunc(stencilFunc, stencilRef, stencilMask);
          currentStencilFunc = stencilFunc;
          currentStencilRef = stencilRef;
          currentStencilFuncMask = stencilMask;
        }
      },
      setOp: function(stencilFail, stencilZFail, stencilZPass) {
        if (currentStencilFail !== stencilFail || currentStencilZFail !== stencilZFail || currentStencilZPass !== stencilZPass) {
          gl.stencilOp(stencilFail, stencilZFail, stencilZPass);
          currentStencilFail = stencilFail;
          currentStencilZFail = stencilZFail;
          currentStencilZPass = stencilZPass;
        }
      },
      setLocked: function(lock) {
        locked = lock;
      },
      setClear: function(stencil) {
        if (currentStencilClear !== stencil) {
          gl.clearStencil(stencil);
          currentStencilClear = stencil;
        }
      },
      reset: function() {
        locked = false;
        currentStencilMask = null;
        currentStencilFunc = null;
        currentStencilRef = null;
        currentStencilFuncMask = null;
        currentStencilFail = null;
        currentStencilZFail = null;
        currentStencilZPass = null;
        currentStencilClear = null;
      }
    };
  }
  const colorBuffer = new ColorBuffer();
  const depthBuffer = new DepthBuffer();
  const stencilBuffer = new StencilBuffer();
  const uboBindings = /* @__PURE__ */ new WeakMap();
  const uboProgramMap = /* @__PURE__ */ new WeakMap();
  let enabledCapabilities = {};
  let currentBoundFramebuffers = {};
  let currentDrawbuffers = /* @__PURE__ */ new WeakMap();
  let defaultDrawbuffers = [];
  let currentProgram = null;
  let currentBlendingEnabled = false;
  let currentBlending = null;
  let currentBlendEquation = null;
  let currentBlendSrc = null;
  let currentBlendDst = null;
  let currentBlendEquationAlpha = null;
  let currentBlendSrcAlpha = null;
  let currentBlendDstAlpha = null;
  let currentPremultipledAlpha = false;
  let currentFlipSided = null;
  let currentCullFace = null;
  let currentLineWidth = null;
  let currentPolygonOffsetFactor = null;
  let currentPolygonOffsetUnits = null;
  const maxTextures = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let lineWidthAvailable = false;
  let version = 0;
  const glVersion = gl.getParameter(gl.VERSION);
  if (glVersion.indexOf("WebGL") !== -1) {
    version = parseFloat(/^WebGL (\d)/.exec(glVersion)[1]);
    lineWidthAvailable = version >= 1;
  } else if (glVersion.indexOf("OpenGL ES") !== -1) {
    version = parseFloat(/^OpenGL ES (\d)/.exec(glVersion)[1]);
    lineWidthAvailable = version >= 2;
  }
  let currentTextureSlot = null;
  let currentBoundTextures = {};
  const scissorParam = gl.getParameter(gl.SCISSOR_BOX);
  const viewportParam = gl.getParameter(gl.VIEWPORT);
  const currentScissor = new Vector4().fromArray(scissorParam);
  const currentViewport = new Vector4().fromArray(viewportParam);
  function createTexture(type, target, count, dimensions) {
    const data = new Uint8Array(4);
    const texture = gl.createTexture();
    gl.bindTexture(type, texture);
    gl.texParameteri(type, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(type, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    for (let i = 0; i < count; i++) {
      if (isWebGL2 && (type === gl.TEXTURE_3D || type === gl.TEXTURE_2D_ARRAY)) {
        gl.texImage3D(target, 0, gl.RGBA, 1, 1, dimensions, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
      } else {
        gl.texImage2D(target + i, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
      }
    }
    return texture;
  }
  const emptyTextures = {};
  emptyTextures[gl.TEXTURE_2D] = createTexture(gl.TEXTURE_2D, gl.TEXTURE_2D, 1);
  emptyTextures[gl.TEXTURE_CUBE_MAP] = createTexture(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_CUBE_MAP_POSITIVE_X, 6);
  if (isWebGL2) {
    emptyTextures[gl.TEXTURE_2D_ARRAY] = createTexture(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_2D_ARRAY, 1, 1);
    emptyTextures[gl.TEXTURE_3D] = createTexture(gl.TEXTURE_3D, gl.TEXTURE_3D, 1, 1);
  }
  colorBuffer.setClear(0, 0, 0, 1);
  depthBuffer.setClear(1);
  stencilBuffer.setClear(0);
  enable(gl.DEPTH_TEST);
  depthBuffer.setFunc(LessEqualDepth);
  setFlipSided(false);
  setCullFace(CullFaceBack);
  enable(gl.CULL_FACE);
  setBlending(NoBlending);
  function enable(id) {
    if (enabledCapabilities[id] !== true) {
      gl.enable(id);
      enabledCapabilities[id] = true;
    }
  }
  function disable(id) {
    if (enabledCapabilities[id] !== false) {
      gl.disable(id);
      enabledCapabilities[id] = false;
    }
  }
  function bindFramebuffer(target, framebuffer) {
    if (currentBoundFramebuffers[target] !== framebuffer) {
      gl.bindFramebuffer(target, framebuffer);
      currentBoundFramebuffers[target] = framebuffer;
      if (isWebGL2) {
        if (target === gl.DRAW_FRAMEBUFFER) {
          currentBoundFramebuffers[gl.FRAMEBUFFER] = framebuffer;
        }
        if (target === gl.FRAMEBUFFER) {
          currentBoundFramebuffers[gl.DRAW_FRAMEBUFFER] = framebuffer;
        }
      }
      return true;
    }
    return false;
  }
  function drawBuffers(renderTarget, framebuffer) {
    let drawBuffers2 = defaultDrawbuffers;
    let needsUpdate = false;
    if (renderTarget) {
      drawBuffers2 = currentDrawbuffers.get(framebuffer);
      if (drawBuffers2 === void 0) {
        drawBuffers2 = [];
        currentDrawbuffers.set(framebuffer, drawBuffers2);
      }
      if (renderTarget.isWebGLMultipleRenderTargets) {
        const textures = renderTarget.texture;
        if (drawBuffers2.length !== textures.length || drawBuffers2[0] !== gl.COLOR_ATTACHMENT0) {
          for (let i = 0, il = textures.length; i < il; i++) {
            drawBuffers2[i] = gl.COLOR_ATTACHMENT0 + i;
          }
          drawBuffers2.length = textures.length;
          needsUpdate = true;
        }
      } else {
        if (drawBuffers2[0] !== gl.COLOR_ATTACHMENT0) {
          drawBuffers2[0] = gl.COLOR_ATTACHMENT0;
          needsUpdate = true;
        }
      }
    } else {
      if (drawBuffers2[0] !== gl.BACK) {
        drawBuffers2[0] = gl.BACK;
        needsUpdate = true;
      }
    }
    if (needsUpdate) {
      if (capabilities.isWebGL2) {
        gl.drawBuffers(drawBuffers2);
      } else {
        extensions.get("WEBGL_draw_buffers").drawBuffersWEBGL(drawBuffers2);
      }
    }
  }
  function useProgram(program) {
    if (currentProgram !== program) {
      gl.useProgram(program);
      currentProgram = program;
      return true;
    }
    return false;
  }
  const equationToGL = {
    [AddEquation]: gl.FUNC_ADD,
    [SubtractEquation]: gl.FUNC_SUBTRACT,
    [ReverseSubtractEquation]: gl.FUNC_REVERSE_SUBTRACT
  };
  if (isWebGL2) {
    equationToGL[MinEquation] = gl.MIN;
    equationToGL[MaxEquation] = gl.MAX;
  } else {
    const extension = extensions.get("EXT_blend_minmax");
    if (extension !== null) {
      equationToGL[MinEquation] = extension.MIN_EXT;
      equationToGL[MaxEquation] = extension.MAX_EXT;
    }
  }
  const factorToGL = {
    [ZeroFactor]: gl.ZERO,
    [OneFactor]: gl.ONE,
    [SrcColorFactor]: gl.SRC_COLOR,
    [SrcAlphaFactor]: gl.SRC_ALPHA,
    [SrcAlphaSaturateFactor]: gl.SRC_ALPHA_SATURATE,
    [DstColorFactor]: gl.DST_COLOR,
    [DstAlphaFactor]: gl.DST_ALPHA,
    [OneMinusSrcColorFactor]: gl.ONE_MINUS_SRC_COLOR,
    [OneMinusSrcAlphaFactor]: gl.ONE_MINUS_SRC_ALPHA,
    [OneMinusDstColorFactor]: gl.ONE_MINUS_DST_COLOR,
    [OneMinusDstAlphaFactor]: gl.ONE_MINUS_DST_ALPHA
  };
  function setBlending(blending, blendEquation, blendSrc, blendDst, blendEquationAlpha, blendSrcAlpha, blendDstAlpha, premultipliedAlpha) {
    if (blending === NoBlending) {
      if (currentBlendingEnabled === true) {
        disable(gl.BLEND);
        currentBlendingEnabled = false;
      }
      return;
    }
    if (currentBlendingEnabled === false) {
      enable(gl.BLEND);
      currentBlendingEnabled = true;
    }
    if (blending !== CustomBlending) {
      if (blending !== currentBlending || premultipliedAlpha !== currentPremultipledAlpha) {
        if (currentBlendEquation !== AddEquation || currentBlendEquationAlpha !== AddEquation) {
          gl.blendEquation(gl.FUNC_ADD);
          currentBlendEquation = AddEquation;
          currentBlendEquationAlpha = AddEquation;
        }
        if (premultipliedAlpha) {
          switch (blending) {
            case NormalBlending:
              gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
              break;
            case AdditiveBlending:
              gl.blendFunc(gl.ONE, gl.ONE);
              break;
            case SubtractiveBlending:
              gl.blendFuncSeparate(gl.ZERO, gl.ONE_MINUS_SRC_COLOR, gl.ZERO, gl.ONE);
              break;
            case MultiplyBlending:
              gl.blendFuncSeparate(gl.ZERO, gl.SRC_COLOR, gl.ZERO, gl.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", blending);
              break;
          }
        } else {
          switch (blending) {
            case NormalBlending:
              gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
              break;
            case AdditiveBlending:
              gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
              break;
            case SubtractiveBlending:
              gl.blendFuncSeparate(gl.ZERO, gl.ONE_MINUS_SRC_COLOR, gl.ZERO, gl.ONE);
              break;
            case MultiplyBlending:
              gl.blendFunc(gl.ZERO, gl.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", blending);
              break;
          }
        }
        currentBlendSrc = null;
        currentBlendDst = null;
        currentBlendSrcAlpha = null;
        currentBlendDstAlpha = null;
        currentBlending = blending;
        currentPremultipledAlpha = premultipliedAlpha;
      }
      return;
    }
    blendEquationAlpha = blendEquationAlpha || blendEquation;
    blendSrcAlpha = blendSrcAlpha || blendSrc;
    blendDstAlpha = blendDstAlpha || blendDst;
    if (blendEquation !== currentBlendEquation || blendEquationAlpha !== currentBlendEquationAlpha) {
      gl.blendEquationSeparate(equationToGL[blendEquation], equationToGL[blendEquationAlpha]);
      currentBlendEquation = blendEquation;
      currentBlendEquationAlpha = blendEquationAlpha;
    }
    if (blendSrc !== currentBlendSrc || blendDst !== currentBlendDst || blendSrcAlpha !== currentBlendSrcAlpha || blendDstAlpha !== currentBlendDstAlpha) {
      gl.blendFuncSeparate(factorToGL[blendSrc], factorToGL[blendDst], factorToGL[blendSrcAlpha], factorToGL[blendDstAlpha]);
      currentBlendSrc = blendSrc;
      currentBlendDst = blendDst;
      currentBlendSrcAlpha = blendSrcAlpha;
      currentBlendDstAlpha = blendDstAlpha;
    }
    currentBlending = blending;
    currentPremultipledAlpha = false;
  }
  function setMaterial(material, frontFaceCW) {
    material.side === DoubleSide ? disable(gl.CULL_FACE) : enable(gl.CULL_FACE);
    let flipSided = material.side === BackSide;
    if (frontFaceCW)
      flipSided = !flipSided;
    setFlipSided(flipSided);
    material.blending === NormalBlending && material.transparent === false ? setBlending(NoBlending) : setBlending(material.blending, material.blendEquation, material.blendSrc, material.blendDst, material.blendEquationAlpha, material.blendSrcAlpha, material.blendDstAlpha, material.premultipliedAlpha);
    depthBuffer.setFunc(material.depthFunc);
    depthBuffer.setTest(material.depthTest);
    depthBuffer.setMask(material.depthWrite);
    colorBuffer.setMask(material.colorWrite);
    const stencilWrite = material.stencilWrite;
    stencilBuffer.setTest(stencilWrite);
    if (stencilWrite) {
      stencilBuffer.setMask(material.stencilWriteMask);
      stencilBuffer.setFunc(material.stencilFunc, material.stencilRef, material.stencilFuncMask);
      stencilBuffer.setOp(material.stencilFail, material.stencilZFail, material.stencilZPass);
    }
    setPolygonOffset(material.polygonOffset, material.polygonOffsetFactor, material.polygonOffsetUnits);
    material.alphaToCoverage === true ? enable(gl.SAMPLE_ALPHA_TO_COVERAGE) : disable(gl.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function setFlipSided(flipSided) {
    if (currentFlipSided !== flipSided) {
      if (flipSided) {
        gl.frontFace(gl.CW);
      } else {
        gl.frontFace(gl.CCW);
      }
      currentFlipSided = flipSided;
    }
  }
  function setCullFace(cullFace) {
    if (cullFace !== CullFaceNone) {
      enable(gl.CULL_FACE);
      if (cullFace !== currentCullFace) {
        if (cullFace === CullFaceBack) {
          gl.cullFace(gl.BACK);
        } else if (cullFace === CullFaceFront) {
          gl.cullFace(gl.FRONT);
        } else {
          gl.cullFace(gl.FRONT_AND_BACK);
        }
      }
    } else {
      disable(gl.CULL_FACE);
    }
    currentCullFace = cullFace;
  }
  function setLineWidth(width) {
    if (width !== currentLineWidth) {
      if (lineWidthAvailable)
        gl.lineWidth(width);
      currentLineWidth = width;
    }
  }
  function setPolygonOffset(polygonOffset, factor, units) {
    if (polygonOffset) {
      enable(gl.POLYGON_OFFSET_FILL);
      if (currentPolygonOffsetFactor !== factor || currentPolygonOffsetUnits !== units) {
        gl.polygonOffset(factor, units);
        currentPolygonOffsetFactor = factor;
        currentPolygonOffsetUnits = units;
      }
    } else {
      disable(gl.POLYGON_OFFSET_FILL);
    }
  }
  function setScissorTest(scissorTest) {
    if (scissorTest) {
      enable(gl.SCISSOR_TEST);
    } else {
      disable(gl.SCISSOR_TEST);
    }
  }
  function activeTexture(webglSlot) {
    if (webglSlot === void 0)
      webglSlot = gl.TEXTURE0 + maxTextures - 1;
    if (currentTextureSlot !== webglSlot) {
      gl.activeTexture(webglSlot);
      currentTextureSlot = webglSlot;
    }
  }
  function bindTexture(webglType, webglTexture, webglSlot) {
    if (webglSlot === void 0) {
      if (currentTextureSlot === null) {
        webglSlot = gl.TEXTURE0 + maxTextures - 1;
      } else {
        webglSlot = currentTextureSlot;
      }
    }
    let boundTexture = currentBoundTextures[webglSlot];
    if (boundTexture === void 0) {
      boundTexture = { type: void 0, texture: void 0 };
      currentBoundTextures[webglSlot] = boundTexture;
    }
    if (boundTexture.type !== webglType || boundTexture.texture !== webglTexture) {
      if (currentTextureSlot !== webglSlot) {
        gl.activeTexture(webglSlot);
        currentTextureSlot = webglSlot;
      }
      gl.bindTexture(webglType, webglTexture || emptyTextures[webglType]);
      boundTexture.type = webglType;
      boundTexture.texture = webglTexture;
    }
  }
  function unbindTexture() {
    const boundTexture = currentBoundTextures[currentTextureSlot];
    if (boundTexture !== void 0 && boundTexture.type !== void 0) {
      gl.bindTexture(boundTexture.type, null);
      boundTexture.type = void 0;
      boundTexture.texture = void 0;
    }
  }
  function compressedTexImage2D() {
    try {
      gl.compressedTexImage2D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function compressedTexImage3D() {
    try {
      gl.compressedTexImage3D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texSubImage2D() {
    try {
      gl.texSubImage2D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texSubImage3D() {
    try {
      gl.texSubImage3D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function compressedTexSubImage2D() {
    try {
      gl.compressedTexSubImage2D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function compressedTexSubImage3D() {
    try {
      gl.compressedTexSubImage3D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texStorage2D() {
    try {
      gl.texStorage2D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texStorage3D() {
    try {
      gl.texStorage3D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texImage2D() {
    try {
      gl.texImage2D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texImage3D() {
    try {
      gl.texImage3D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function scissor(scissor2) {
    if (currentScissor.equals(scissor2) === false) {
      gl.scissor(scissor2.x, scissor2.y, scissor2.z, scissor2.w);
      currentScissor.copy(scissor2);
    }
  }
  function viewport(viewport2) {
    if (currentViewport.equals(viewport2) === false) {
      gl.viewport(viewport2.x, viewport2.y, viewport2.z, viewport2.w);
      currentViewport.copy(viewport2);
    }
  }
  function updateUBOMapping(uniformsGroup, program) {
    let mapping = uboProgramMap.get(program);
    if (mapping === void 0) {
      mapping = /* @__PURE__ */ new WeakMap();
      uboProgramMap.set(program, mapping);
    }
    let blockIndex = mapping.get(uniformsGroup);
    if (blockIndex === void 0) {
      blockIndex = gl.getUniformBlockIndex(program, uniformsGroup.name);
      mapping.set(uniformsGroup, blockIndex);
    }
  }
  function uniformBlockBinding(uniformsGroup, program) {
    const mapping = uboProgramMap.get(program);
    const blockIndex = mapping.get(uniformsGroup);
    if (uboBindings.get(program) !== blockIndex) {
      gl.uniformBlockBinding(program, blockIndex, uniformsGroup.__bindingPointIndex);
      uboBindings.set(program, blockIndex);
    }
  }
  function reset() {
    gl.disable(gl.BLEND);
    gl.disable(gl.CULL_FACE);
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.POLYGON_OFFSET_FILL);
    gl.disable(gl.SCISSOR_TEST);
    gl.disable(gl.STENCIL_TEST);
    gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE);
    gl.blendEquation(gl.FUNC_ADD);
    gl.blendFunc(gl.ONE, gl.ZERO);
    gl.blendFuncSeparate(gl.ONE, gl.ZERO, gl.ONE, gl.ZERO);
    gl.colorMask(true, true, true, true);
    gl.clearColor(0, 0, 0, 0);
    gl.depthMask(true);
    gl.depthFunc(gl.LESS);
    gl.clearDepth(1);
    gl.stencilMask(4294967295);
    gl.stencilFunc(gl.ALWAYS, 0, 4294967295);
    gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
    gl.clearStencil(0);
    gl.cullFace(gl.BACK);
    gl.frontFace(gl.CCW);
    gl.polygonOffset(0, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    if (isWebGL2 === true) {
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
      gl.bindFramebuffer(gl.READ_FRAMEBUFFER, null);
    }
    gl.useProgram(null);
    gl.lineWidth(1);
    gl.scissor(0, 0, gl.canvas.width, gl.canvas.height);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    enabledCapabilities = {};
    currentTextureSlot = null;
    currentBoundTextures = {};
    currentBoundFramebuffers = {};
    currentDrawbuffers = /* @__PURE__ */ new WeakMap();
    defaultDrawbuffers = [];
    currentProgram = null;
    currentBlendingEnabled = false;
    currentBlending = null;
    currentBlendEquation = null;
    currentBlendSrc = null;
    currentBlendDst = null;
    currentBlendEquationAlpha = null;
    currentBlendSrcAlpha = null;
    currentBlendDstAlpha = null;
    currentPremultipledAlpha = false;
    currentFlipSided = null;
    currentCullFace = null;
    currentLineWidth = null;
    currentPolygonOffsetFactor = null;
    currentPolygonOffsetUnits = null;
    currentScissor.set(0, 0, gl.canvas.width, gl.canvas.height);
    currentViewport.set(0, 0, gl.canvas.width, gl.canvas.height);
    colorBuffer.reset();
    depthBuffer.reset();
    stencilBuffer.reset();
  }
  return {
    buffers: {
      color: colorBuffer,
      depth: depthBuffer,
      stencil: stencilBuffer
    },
    enable,
    disable,
    bindFramebuffer,
    drawBuffers,
    useProgram,
    setBlending,
    setMaterial,
    setFlipSided,
    setCullFace,
    setLineWidth,
    setPolygonOffset,
    setScissorTest,
    activeTexture,
    bindTexture,
    unbindTexture,
    compressedTexImage2D,
    compressedTexImage3D,
    texImage2D,
    texImage3D,
    updateUBOMapping,
    uniformBlockBinding,
    texStorage2D,
    texStorage3D,
    texSubImage2D,
    texSubImage3D,
    compressedTexSubImage2D,
    compressedTexSubImage3D,
    scissor,
    viewport,
    reset
  };
}
function WebGLTextures(_gl, extensions, state, properties, capabilities, utils, info) {
  const isWebGL2 = capabilities.isWebGL2;
  const maxTextures = capabilities.maxTextures;
  const maxCubemapSize = capabilities.maxCubemapSize;
  const maxTextureSize = capabilities.maxTextureSize;
  const maxSamples = capabilities.maxSamples;
  const multisampledRTTExt = extensions.has("WEBGL_multisampled_render_to_texture") ? extensions.get("WEBGL_multisampled_render_to_texture") : null;
  const supportsInvalidateFramebuffer = typeof navigator === "undefined" ? false : /OculusBrowser/g.test(navigator.userAgent);
  const _videoTextures = /* @__PURE__ */ new WeakMap();
  let _canvas2;
  const _sources = /* @__PURE__ */ new WeakMap();
  let useOffscreenCanvas = false;
  try {
    useOffscreenCanvas = typeof OffscreenCanvas !== "undefined" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch (err) {
  }
  function createCanvas(width, height) {
    return useOffscreenCanvas ? new OffscreenCanvas(width, height) : createElementNS("canvas");
  }
  function resizeImage(image, needsPowerOfTwo, needsNewCanvas, maxSize) {
    let scale = 1;
    if (image.width > maxSize || image.height > maxSize) {
      scale = maxSize / Math.max(image.width, image.height);
    }
    if (scale < 1 || needsPowerOfTwo === true) {
      if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
        const floor = needsPowerOfTwo ? floorPowerOfTwo : Math.floor;
        const width = floor(scale * image.width);
        const height = floor(scale * image.height);
        if (_canvas2 === void 0)
          _canvas2 = createCanvas(width, height);
        const canvas = needsNewCanvas ? createCanvas(width, height) : _canvas2;
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, width, height);
        console.warn("THREE.WebGLRenderer: Texture has been resized from (" + image.width + "x" + image.height + ") to (" + width + "x" + height + ").");
        return canvas;
      } else {
        if ("data" in image) {
          console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + image.width + "x" + image.height + ").");
        }
        return image;
      }
    }
    return image;
  }
  function isPowerOfTwo$1(image) {
    return isPowerOfTwo(image.width) && isPowerOfTwo(image.height);
  }
  function textureNeedsPowerOfTwo(texture) {
    if (isWebGL2)
      return false;
    return texture.wrapS !== ClampToEdgeWrapping || texture.wrapT !== ClampToEdgeWrapping || texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter;
  }
  function textureNeedsGenerateMipmaps(texture, supportsMips) {
    return texture.generateMipmaps && supportsMips && texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter;
  }
  function generateMipmap(target) {
    _gl.generateMipmap(target);
  }
  function getInternalFormat(internalFormatName, glFormat, glType, colorSpace, forceLinearTransfer = false) {
    if (isWebGL2 === false)
      return glFormat;
    if (internalFormatName !== null) {
      if (_gl[internalFormatName] !== void 0)
        return _gl[internalFormatName];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + internalFormatName + "'");
    }
    let internalFormat = glFormat;
    if (glFormat === _gl.RED) {
      if (glType === _gl.FLOAT)
        internalFormat = _gl.R32F;
      if (glType === _gl.HALF_FLOAT)
        internalFormat = _gl.R16F;
      if (glType === _gl.UNSIGNED_BYTE)
        internalFormat = _gl.R8;
    }
    if (glFormat === _gl.RG) {
      if (glType === _gl.FLOAT)
        internalFormat = _gl.RG32F;
      if (glType === _gl.HALF_FLOAT)
        internalFormat = _gl.RG16F;
      if (glType === _gl.UNSIGNED_BYTE)
        internalFormat = _gl.RG8;
    }
    if (glFormat === _gl.RGBA) {
      if (glType === _gl.FLOAT)
        internalFormat = _gl.RGBA32F;
      if (glType === _gl.HALF_FLOAT)
        internalFormat = _gl.RGBA16F;
      if (glType === _gl.UNSIGNED_BYTE)
        internalFormat = colorSpace === SRGBColorSpace && forceLinearTransfer === false ? _gl.SRGB8_ALPHA8 : _gl.RGBA8;
      if (glType === _gl.UNSIGNED_SHORT_4_4_4_4)
        internalFormat = _gl.RGBA4;
      if (glType === _gl.UNSIGNED_SHORT_5_5_5_1)
        internalFormat = _gl.RGB5_A1;
    }
    if (internalFormat === _gl.R16F || internalFormat === _gl.R32F || internalFormat === _gl.RG16F || internalFormat === _gl.RG32F || internalFormat === _gl.RGBA16F || internalFormat === _gl.RGBA32F) {
      extensions.get("EXT_color_buffer_float");
    }
    return internalFormat;
  }
  function getMipLevels(texture, image, supportsMips) {
    if (textureNeedsGenerateMipmaps(texture, supportsMips) === true || texture.isFramebufferTexture && texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter) {
      return Math.log2(Math.max(image.width, image.height)) + 1;
    } else if (texture.mipmaps !== void 0 && texture.mipmaps.length > 0) {
      return texture.mipmaps.length;
    } else if (texture.isCompressedTexture && Array.isArray(texture.image)) {
      return image.mipmaps.length;
    } else {
      return 1;
    }
  }
  function filterFallback(f) {
    if (f === NearestFilter || f === NearestMipmapNearestFilter || f === NearestMipmapLinearFilter) {
      return _gl.NEAREST;
    }
    return _gl.LINEAR;
  }
  function onTextureDispose(event) {
    const texture = event.target;
    texture.removeEventListener("dispose", onTextureDispose);
    deallocateTexture(texture);
    if (texture.isVideoTexture) {
      _videoTextures.delete(texture);
    }
  }
  function onRenderTargetDispose(event) {
    const renderTarget = event.target;
    renderTarget.removeEventListener("dispose", onRenderTargetDispose);
    deallocateRenderTarget(renderTarget);
  }
  function deallocateTexture(texture) {
    const textureProperties = properties.get(texture);
    if (textureProperties.__webglInit === void 0)
      return;
    const source = texture.source;
    const webglTextures = _sources.get(source);
    if (webglTextures) {
      const webglTexture = webglTextures[textureProperties.__cacheKey];
      webglTexture.usedTimes--;
      if (webglTexture.usedTimes === 0) {
        deleteTexture(texture);
      }
      if (Object.keys(webglTextures).length === 0) {
        _sources.delete(source);
      }
    }
    properties.remove(texture);
  }
  function deleteTexture(texture) {
    const textureProperties = properties.get(texture);
    _gl.deleteTexture(textureProperties.__webglTexture);
    const source = texture.source;
    const webglTextures = _sources.get(source);
    delete webglTextures[textureProperties.__cacheKey];
    info.memory.textures--;
  }
  function deallocateRenderTarget(renderTarget) {
    const texture = renderTarget.texture;
    const renderTargetProperties = properties.get(renderTarget);
    const textureProperties = properties.get(texture);
    if (textureProperties.__webglTexture !== void 0) {
      _gl.deleteTexture(textureProperties.__webglTexture);
      info.memory.textures--;
    }
    if (renderTarget.depthTexture) {
      renderTarget.depthTexture.dispose();
    }
    if (renderTarget.isWebGLCubeRenderTarget) {
      for (let i = 0; i < 6; i++) {
        _gl.deleteFramebuffer(renderTargetProperties.__webglFramebuffer[i]);
        if (renderTargetProperties.__webglDepthbuffer)
          _gl.deleteRenderbuffer(renderTargetProperties.__webglDepthbuffer[i]);
      }
    } else {
      _gl.deleteFramebuffer(renderTargetProperties.__webglFramebuffer);
      if (renderTargetProperties.__webglDepthbuffer)
        _gl.deleteRenderbuffer(renderTargetProperties.__webglDepthbuffer);
      if (renderTargetProperties.__webglMultisampledFramebuffer)
        _gl.deleteFramebuffer(renderTargetProperties.__webglMultisampledFramebuffer);
      if (renderTargetProperties.__webglColorRenderbuffer) {
        for (let i = 0; i < renderTargetProperties.__webglColorRenderbuffer.length; i++) {
          if (renderTargetProperties.__webglColorRenderbuffer[i])
            _gl.deleteRenderbuffer(renderTargetProperties.__webglColorRenderbuffer[i]);
        }
      }
      if (renderTargetProperties.__webglDepthRenderbuffer)
        _gl.deleteRenderbuffer(renderTargetProperties.__webglDepthRenderbuffer);
    }
    if (renderTarget.isWebGLMultipleRenderTargets) {
      for (let i = 0, il = texture.length; i < il; i++) {
        const attachmentProperties = properties.get(texture[i]);
        if (attachmentProperties.__webglTexture) {
          _gl.deleteTexture(attachmentProperties.__webglTexture);
          info.memory.textures--;
        }
        properties.remove(texture[i]);
      }
    }
    properties.remove(texture);
    properties.remove(renderTarget);
  }
  let textureUnits = 0;
  function resetTextureUnits() {
    textureUnits = 0;
  }
  function allocateTextureUnit() {
    const textureUnit = textureUnits;
    if (textureUnit >= maxTextures) {
      console.warn("THREE.WebGLTextures: Trying to use " + textureUnit + " texture units while this GPU supports only " + maxTextures);
    }
    textureUnits += 1;
    return textureUnit;
  }
  function getTextureCacheKey(texture) {
    const array = [];
    array.push(texture.wrapS);
    array.push(texture.wrapT);
    array.push(texture.wrapR || 0);
    array.push(texture.magFilter);
    array.push(texture.minFilter);
    array.push(texture.anisotropy);
    array.push(texture.internalFormat);
    array.push(texture.format);
    array.push(texture.type);
    array.push(texture.generateMipmaps);
    array.push(texture.premultiplyAlpha);
    array.push(texture.flipY);
    array.push(texture.unpackAlignment);
    array.push(texture.colorSpace);
    return array.join();
  }
  function setTexture2D(texture, slot) {
    const textureProperties = properties.get(texture);
    if (texture.isVideoTexture)
      updateVideoTexture(texture);
    if (texture.isRenderTargetTexture === false && texture.version > 0 && textureProperties.__version !== texture.version) {
      const image = texture.image;
      if (image === null) {
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      } else if (image.complete === false) {
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      } else {
        uploadTexture(textureProperties, texture, slot);
        return;
      }
    }
    state.bindTexture(_gl.TEXTURE_2D, textureProperties.__webglTexture, _gl.TEXTURE0 + slot);
  }
  function setTexture2DArray(texture, slot) {
    const textureProperties = properties.get(texture);
    if (texture.version > 0 && textureProperties.__version !== texture.version) {
      uploadTexture(textureProperties, texture, slot);
      return;
    }
    state.bindTexture(_gl.TEXTURE_2D_ARRAY, textureProperties.__webglTexture, _gl.TEXTURE0 + slot);
  }
  function setTexture3D(texture, slot) {
    const textureProperties = properties.get(texture);
    if (texture.version > 0 && textureProperties.__version !== texture.version) {
      uploadTexture(textureProperties, texture, slot);
      return;
    }
    state.bindTexture(_gl.TEXTURE_3D, textureProperties.__webglTexture, _gl.TEXTURE0 + slot);
  }
  function setTextureCube(texture, slot) {
    const textureProperties = properties.get(texture);
    if (texture.version > 0 && textureProperties.__version !== texture.version) {
      uploadCubeTexture(textureProperties, texture, slot);
      return;
    }
    state.bindTexture(_gl.TEXTURE_CUBE_MAP, textureProperties.__webglTexture, _gl.TEXTURE0 + slot);
  }
  const wrappingToGL = {
    [RepeatWrapping]: _gl.REPEAT,
    [ClampToEdgeWrapping]: _gl.CLAMP_TO_EDGE,
    [MirroredRepeatWrapping]: _gl.MIRRORED_REPEAT
  };
  const filterToGL = {
    [NearestFilter]: _gl.NEAREST,
    [NearestMipmapNearestFilter]: _gl.NEAREST_MIPMAP_NEAREST,
    [NearestMipmapLinearFilter]: _gl.NEAREST_MIPMAP_LINEAR,
    [LinearFilter]: _gl.LINEAR,
    [LinearMipmapNearestFilter]: _gl.LINEAR_MIPMAP_NEAREST,
    [LinearMipmapLinearFilter]: _gl.LINEAR_MIPMAP_LINEAR
  };
  function setTextureParameters(textureType, texture, supportsMips) {
    if (supportsMips) {
      _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_S, wrappingToGL[texture.wrapS]);
      _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_T, wrappingToGL[texture.wrapT]);
      if (textureType === _gl.TEXTURE_3D || textureType === _gl.TEXTURE_2D_ARRAY) {
        _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_R, wrappingToGL[texture.wrapR]);
      }
      _gl.texParameteri(textureType, _gl.TEXTURE_MAG_FILTER, filterToGL[texture.magFilter]);
      _gl.texParameteri(textureType, _gl.TEXTURE_MIN_FILTER, filterToGL[texture.minFilter]);
    } else {
      _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_S, _gl.CLAMP_TO_EDGE);
      _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_T, _gl.CLAMP_TO_EDGE);
      if (textureType === _gl.TEXTURE_3D || textureType === _gl.TEXTURE_2D_ARRAY) {
        _gl.texParameteri(textureType, _gl.TEXTURE_WRAP_R, _gl.CLAMP_TO_EDGE);
      }
      if (texture.wrapS !== ClampToEdgeWrapping || texture.wrapT !== ClampToEdgeWrapping) {
        console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.");
      }
      _gl.texParameteri(textureType, _gl.TEXTURE_MAG_FILTER, filterFallback(texture.magFilter));
      _gl.texParameteri(textureType, _gl.TEXTURE_MIN_FILTER, filterFallback(texture.minFilter));
      if (texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter) {
        console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.");
      }
    }
    if (extensions.has("EXT_texture_filter_anisotropic") === true) {
      const extension = extensions.get("EXT_texture_filter_anisotropic");
      if (texture.magFilter === NearestFilter)
        return;
      if (texture.minFilter !== NearestMipmapLinearFilter && texture.minFilter !== LinearMipmapLinearFilter)
        return;
      if (texture.type === FloatType && extensions.has("OES_texture_float_linear") === false)
        return;
      if (isWebGL2 === false && (texture.type === HalfFloatType && extensions.has("OES_texture_half_float_linear") === false))
        return;
      if (texture.anisotropy > 1 || properties.get(texture).__currentAnisotropy) {
        _gl.texParameterf(textureType, extension.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(texture.anisotropy, capabilities.getMaxAnisotropy()));
        properties.get(texture).__currentAnisotropy = texture.anisotropy;
      }
    }
  }
  function initTexture(textureProperties, texture) {
    let forceUpload = false;
    if (textureProperties.__webglInit === void 0) {
      textureProperties.__webglInit = true;
      texture.addEventListener("dispose", onTextureDispose);
    }
    const source = texture.source;
    let webglTextures = _sources.get(source);
    if (webglTextures === void 0) {
      webglTextures = {};
      _sources.set(source, webglTextures);
    }
    const textureCacheKey = getTextureCacheKey(texture);
    if (textureCacheKey !== textureProperties.__cacheKey) {
      if (webglTextures[textureCacheKey] === void 0) {
        webglTextures[textureCacheKey] = {
          texture: _gl.createTexture(),
          usedTimes: 0
        };
        info.memory.textures++;
        forceUpload = true;
      }
      webglTextures[textureCacheKey].usedTimes++;
      const webglTexture = webglTextures[textureProperties.__cacheKey];
      if (webglTexture !== void 0) {
        webglTextures[textureProperties.__cacheKey].usedTimes--;
        if (webglTexture.usedTimes === 0) {
          deleteTexture(texture);
        }
      }
      textureProperties.__cacheKey = textureCacheKey;
      textureProperties.__webglTexture = webglTextures[textureCacheKey].texture;
    }
    return forceUpload;
  }
  function uploadTexture(textureProperties, texture, slot) {
    let textureType = _gl.TEXTURE_2D;
    if (texture.isDataArrayTexture || texture.isCompressedArrayTexture)
      textureType = _gl.TEXTURE_2D_ARRAY;
    if (texture.isData3DTexture)
      textureType = _gl.TEXTURE_3D;
    const forceUpload = initTexture(textureProperties, texture);
    const source = texture.source;
    state.bindTexture(textureType, textureProperties.__webglTexture, _gl.TEXTURE0 + slot);
    const sourceProperties = properties.get(source);
    if (source.version !== sourceProperties.__version || forceUpload === true) {
      state.activeTexture(_gl.TEXTURE0 + slot);
      _gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, texture.flipY);
      _gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultiplyAlpha);
      _gl.pixelStorei(_gl.UNPACK_ALIGNMENT, texture.unpackAlignment);
      _gl.pixelStorei(_gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, _gl.NONE);
      const needsPowerOfTwo = textureNeedsPowerOfTwo(texture) && isPowerOfTwo$1(texture.image) === false;
      let image = resizeImage(texture.image, needsPowerOfTwo, false, maxTextureSize);
      image = verifyColorSpace(texture, image);
      const supportsMips = isPowerOfTwo$1(image) || isWebGL2, glFormat = utils.convert(texture.format, texture.colorSpace);
      let glType = utils.convert(texture.type), glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.colorSpace);
      setTextureParameters(textureType, texture, supportsMips);
      let mipmap;
      const mipmaps = texture.mipmaps;
      const useTexStorage = isWebGL2 && texture.isVideoTexture !== true;
      const allocateMemory = sourceProperties.__version === void 0 || forceUpload === true;
      const levels = getMipLevels(texture, image, supportsMips);
      if (texture.isDepthTexture) {
        glInternalFormat = _gl.DEPTH_COMPONENT;
        if (isWebGL2) {
          if (texture.type === FloatType) {
            glInternalFormat = _gl.DEPTH_COMPONENT32F;
          } else if (texture.type === UnsignedIntType) {
            glInternalFormat = _gl.DEPTH_COMPONENT24;
          } else if (texture.type === UnsignedInt248Type) {
            glInternalFormat = _gl.DEPTH24_STENCIL8;
          } else {
            glInternalFormat = _gl.DEPTH_COMPONENT16;
          }
        } else {
          if (texture.type === FloatType) {
            console.error("WebGLRenderer: Floating point depth texture requires WebGL2.");
          }
        }
        if (texture.format === DepthFormat && glInternalFormat === _gl.DEPTH_COMPONENT) {
          if (texture.type !== UnsignedShortType && texture.type !== UnsignedIntType) {
            console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.");
            texture.type = UnsignedIntType;
            glType = utils.convert(texture.type);
          }
        }
        if (texture.format === DepthStencilFormat && glInternalFormat === _gl.DEPTH_COMPONENT) {
          glInternalFormat = _gl.DEPTH_STENCIL;
          if (texture.type !== UnsignedInt248Type) {
            console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.");
            texture.type = UnsignedInt248Type;
            glType = utils.convert(texture.type);
          }
        }
        if (allocateMemory) {
          if (useTexStorage) {
            state.texStorage2D(_gl.TEXTURE_2D, 1, glInternalFormat, image.width, image.height);
          } else {
            state.texImage2D(_gl.TEXTURE_2D, 0, glInternalFormat, image.width, image.height, 0, glFormat, glType, null);
          }
        }
      } else if (texture.isDataTexture) {
        if (mipmaps.length > 0 && supportsMips) {
          if (useTexStorage && allocateMemory) {
            state.texStorage2D(_gl.TEXTURE_2D, levels, glInternalFormat, mipmaps[0].width, mipmaps[0].height);
          }
          for (let i = 0, il = mipmaps.length; i < il; i++) {
            mipmap = mipmaps[i];
            if (useTexStorage) {
              state.texSubImage2D(_gl.TEXTURE_2D, i, 0, 0, mipmap.width, mipmap.height, glFormat, glType, mipmap.data);
            } else {
              state.texImage2D(_gl.TEXTURE_2D, i, glInternalFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data);
            }
          }
          texture.generateMipmaps = false;
        } else {
          if (useTexStorage) {
            if (allocateMemory) {
              state.texStorage2D(_gl.TEXTURE_2D, levels, glInternalFormat, image.width, image.height);
            }
            state.texSubImage2D(_gl.TEXTURE_2D, 0, 0, 0, image.width, image.height, glFormat, glType, image.data);
          } else {
            state.texImage2D(_gl.TEXTURE_2D, 0, glInternalFormat, image.width, image.height, 0, glFormat, glType, image.data);
          }
        }
      } else if (texture.isCompressedTexture) {
        if (texture.isCompressedArrayTexture) {
          if (useTexStorage && allocateMemory) {
            state.texStorage3D(_gl.TEXTURE_2D_ARRAY, levels, glInternalFormat, mipmaps[0].width, mipmaps[0].height, image.depth);
          }
          for (let i = 0, il = mipmaps.length; i < il; i++) {
            mipmap = mipmaps[i];
            if (texture.format !== RGBAFormat) {
              if (glFormat !== null) {
                if (useTexStorage) {
                  state.compressedTexSubImage3D(_gl.TEXTURE_2D_ARRAY, i, 0, 0, 0, mipmap.width, mipmap.height, image.depth, glFormat, mipmap.data, 0, 0);
                } else {
                  state.compressedTexImage3D(_gl.TEXTURE_2D_ARRAY, i, glInternalFormat, mipmap.width, mipmap.height, image.depth, 0, mipmap.data, 0, 0);
                }
              } else {
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
              }
            } else {
              if (useTexStorage) {
                state.texSubImage3D(_gl.TEXTURE_2D_ARRAY, i, 0, 0, 0, mipmap.width, mipmap.height, image.depth, glFormat, glType, mipmap.data);
              } else {
                state.texImage3D(_gl.TEXTURE_2D_ARRAY, i, glInternalFormat, mipmap.width, mipmap.height, image.depth, 0, glFormat, glType, mipmap.data);
              }
            }
          }
        } else {
          if (useTexStorage && allocateMemory) {
            state.texStorage2D(_gl.TEXTURE_2D, levels, glInternalFormat, mipmaps[0].width, mipmaps[0].height);
          }
          for (let i = 0, il = mipmaps.length; i < il; i++) {
            mipmap = mipmaps[i];
            if (texture.format !== RGBAFormat) {
              if (glFormat !== null) {
                if (useTexStorage) {
                  state.compressedTexSubImage2D(_gl.TEXTURE_2D, i, 0, 0, mipmap.width, mipmap.height, glFormat, mipmap.data);
                } else {
                  state.compressedTexImage2D(_gl.TEXTURE_2D, i, glInternalFormat, mipmap.width, mipmap.height, 0, mipmap.data);
                }
              } else {
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
              }
            } else {
              if (useTexStorage) {
                state.texSubImage2D(_gl.TEXTURE_2D, i, 0, 0, mipmap.width, mipmap.height, glFormat, glType, mipmap.data);
              } else {
                state.texImage2D(_gl.TEXTURE_2D, i, glInternalFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data);
              }
            }
          }
        }
      } else if (texture.isDataArrayTexture) {
        if (useTexStorage) {
          if (allocateMemory) {
            state.texStorage3D(_gl.TEXTURE_2D_ARRAY, levels, glInternalFormat, image.width, image.height, image.depth);
          }
          state.texSubImage3D(_gl.TEXTURE_2D_ARRAY, 0, 0, 0, 0, image.width, image.height, image.depth, glFormat, glType, image.data);
        } else {
          state.texImage3D(_gl.TEXTURE_2D_ARRAY, 0, glInternalFormat, image.width, image.height, image.depth, 0, glFormat, glType, image.data);
        }
      } else if (texture.isData3DTexture) {
        if (useTexStorage) {
          if (allocateMemory) {
            state.texStorage3D(_gl.TEXTURE_3D, levels, glInternalFormat, image.width, image.height, image.depth);
          }
          state.texSubImage3D(_gl.TEXTURE_3D, 0, 0, 0, 0, image.width, image.height, image.depth, glFormat, glType, image.data);
        } else {
          state.texImage3D(_gl.TEXTURE_3D, 0, glInternalFormat, image.width, image.height, image.depth, 0, glFormat, glType, image.data);
        }
      } else if (texture.isFramebufferTexture) {
        if (allocateMemory) {
          if (useTexStorage) {
            state.texStorage2D(_gl.TEXTURE_2D, levels, glInternalFormat, image.width, image.height);
          } else {
            let width = image.width, height = image.height;
            for (let i = 0; i < levels; i++) {
              state.texImage2D(_gl.TEXTURE_2D, i, glInternalFormat, width, height, 0, glFormat, glType, null);
              width >>= 1;
              height >>= 1;
            }
          }
        }
      } else {
        if (mipmaps.length > 0 && supportsMips) {
          if (useTexStorage && allocateMemory) {
            state.texStorage2D(_gl.TEXTURE_2D, levels, glInternalFormat, mipmaps[0].width, mipmaps[0].height);
          }
          for (let i = 0, il = mipmaps.length; i < il; i++) {
            mipmap = mipmaps[i];
            if (useTexStorage) {
              state.texSubImage2D(_gl.TEXTURE_2D, i, 0, 0, glFormat, glType, mipmap);
            } else {
              state.texImage2D(_gl.TEXTURE_2D, i, glInternalFormat, glFormat, glType, mipmap);
            }
          }
          texture.generateMipmaps = false;
        } else {
          if (useTexStorage) {
            if (allocateMemory) {
              state.texStorage2D(_gl.TEXTURE_2D, levels, glInternalFormat, image.width, image.height);
            }
            state.texSubImage2D(_gl.TEXTURE_2D, 0, 0, 0, glFormat, glType, image);
          } else {
            state.texImage2D(_gl.TEXTURE_2D, 0, glInternalFormat, glFormat, glType, image);
          }
        }
      }
      if (textureNeedsGenerateMipmaps(texture, supportsMips)) {
        generateMipmap(textureType);
      }
      sourceProperties.__version = source.version;
      if (texture.onUpdate)
        texture.onUpdate(texture);
    }
    textureProperties.__version = texture.version;
  }
  function uploadCubeTexture(textureProperties, texture, slot) {
    if (texture.image.length !== 6)
      return;
    const forceUpload = initTexture(textureProperties, texture);
    const source = texture.source;
    state.bindTexture(_gl.TEXTURE_CUBE_MAP, textureProperties.__webglTexture, _gl.TEXTURE0 + slot);
    const sourceProperties = properties.get(source);
    if (source.version !== sourceProperties.__version || forceUpload === true) {
      state.activeTexture(_gl.TEXTURE0 + slot);
      _gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, texture.flipY);
      _gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultiplyAlpha);
      _gl.pixelStorei(_gl.UNPACK_ALIGNMENT, texture.unpackAlignment);
      _gl.pixelStorei(_gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, _gl.NONE);
      const isCompressed = texture.isCompressedTexture || texture.image[0].isCompressedTexture;
      const isDataTexture = texture.image[0] && texture.image[0].isDataTexture;
      const cubeImage = [];
      for (let i = 0; i < 6; i++) {
        if (!isCompressed && !isDataTexture) {
          cubeImage[i] = resizeImage(texture.image[i], false, true, maxCubemapSize);
        } else {
          cubeImage[i] = isDataTexture ? texture.image[i].image : texture.image[i];
        }
        cubeImage[i] = verifyColorSpace(texture, cubeImage[i]);
      }
      const image = cubeImage[0], supportsMips = isPowerOfTwo$1(image) || isWebGL2, glFormat = utils.convert(texture.format, texture.colorSpace), glType = utils.convert(texture.type), glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.colorSpace);
      const useTexStorage = isWebGL2 && texture.isVideoTexture !== true;
      const allocateMemory = sourceProperties.__version === void 0 || forceUpload === true;
      let levels = getMipLevels(texture, image, supportsMips);
      setTextureParameters(_gl.TEXTURE_CUBE_MAP, texture, supportsMips);
      let mipmaps;
      if (isCompressed) {
        if (useTexStorage && allocateMemory) {
          state.texStorage2D(_gl.TEXTURE_CUBE_MAP, levels, glInternalFormat, image.width, image.height);
        }
        for (let i = 0; i < 6; i++) {
          mipmaps = cubeImage[i].mipmaps;
          for (let j = 0; j < mipmaps.length; j++) {
            const mipmap = mipmaps[j];
            if (texture.format !== RGBAFormat) {
              if (glFormat !== null) {
                if (useTexStorage) {
                  state.compressedTexSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, 0, 0, mipmap.width, mipmap.height, glFormat, mipmap.data);
                } else {
                  state.compressedTexImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, glInternalFormat, mipmap.width, mipmap.height, 0, mipmap.data);
                }
              } else {
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");
              }
            } else {
              if (useTexStorage) {
                state.texSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, 0, 0, mipmap.width, mipmap.height, glFormat, glType, mipmap.data);
              } else {
                state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, glInternalFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data);
              }
            }
          }
        }
      } else {
        mipmaps = texture.mipmaps;
        if (useTexStorage && allocateMemory) {
          if (mipmaps.length > 0)
            levels++;
          state.texStorage2D(_gl.TEXTURE_CUBE_MAP, levels, glInternalFormat, cubeImage[0].width, cubeImage[0].height);
        }
        for (let i = 0; i < 6; i++) {
          if (isDataTexture) {
            if (useTexStorage) {
              state.texSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, 0, 0, cubeImage[i].width, cubeImage[i].height, glFormat, glType, cubeImage[i].data);
            } else {
              state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glInternalFormat, cubeImage[i].width, cubeImage[i].height, 0, glFormat, glType, cubeImage[i].data);
            }
            for (let j = 0; j < mipmaps.length; j++) {
              const mipmap = mipmaps[j];
              const mipmapImage = mipmap.image[i].image;
              if (useTexStorage) {
                state.texSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j + 1, 0, 0, mipmapImage.width, mipmapImage.height, glFormat, glType, mipmapImage.data);
              } else {
                state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j + 1, glInternalFormat, mipmapImage.width, mipmapImage.height, 0, glFormat, glType, mipmapImage.data);
              }
            }
          } else {
            if (useTexStorage) {
              state.texSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, 0, 0, glFormat, glType, cubeImage[i]);
            } else {
              state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glInternalFormat, glFormat, glType, cubeImage[i]);
            }
            for (let j = 0; j < mipmaps.length; j++) {
              const mipmap = mipmaps[j];
              if (useTexStorage) {
                state.texSubImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j + 1, 0, 0, glFormat, glType, mipmap.image[i]);
              } else {
                state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j + 1, glInternalFormat, glFormat, glType, mipmap.image[i]);
              }
            }
          }
        }
      }
      if (textureNeedsGenerateMipmaps(texture, supportsMips)) {
        generateMipmap(_gl.TEXTURE_CUBE_MAP);
      }
      sourceProperties.__version = source.version;
      if (texture.onUpdate)
        texture.onUpdate(texture);
    }
    textureProperties.__version = texture.version;
  }
  function setupFrameBufferTexture(framebuffer, renderTarget, texture, attachment, textureTarget) {
    const glFormat = utils.convert(texture.format, texture.colorSpace);
    const glType = utils.convert(texture.type);
    const glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.colorSpace);
    const renderTargetProperties = properties.get(renderTarget);
    if (!renderTargetProperties.__hasExternalTextures) {
      if (textureTarget === _gl.TEXTURE_3D || textureTarget === _gl.TEXTURE_2D_ARRAY) {
        state.texImage3D(textureTarget, 0, glInternalFormat, renderTarget.width, renderTarget.height, renderTarget.depth, 0, glFormat, glType, null);
      } else {
        state.texImage2D(textureTarget, 0, glInternalFormat, renderTarget.width, renderTarget.height, 0, glFormat, glType, null);
      }
    }
    state.bindFramebuffer(_gl.FRAMEBUFFER, framebuffer);
    if (useMultisampledRTT(renderTarget)) {
      multisampledRTTExt.framebufferTexture2DMultisampleEXT(_gl.FRAMEBUFFER, attachment, textureTarget, properties.get(texture).__webglTexture, 0, getRenderTargetSamples(renderTarget));
    } else if (textureTarget === _gl.TEXTURE_2D || textureTarget >= _gl.TEXTURE_CUBE_MAP_POSITIVE_X && textureTarget <= _gl.TEXTURE_CUBE_MAP_NEGATIVE_Z) {
      _gl.framebufferTexture2D(_gl.FRAMEBUFFER, attachment, textureTarget, properties.get(texture).__webglTexture, 0);
    }
    state.bindFramebuffer(_gl.FRAMEBUFFER, null);
  }
  function setupRenderBufferStorage(renderbuffer, renderTarget, isMultisample) {
    _gl.bindRenderbuffer(_gl.RENDERBUFFER, renderbuffer);
    if (renderTarget.depthBuffer && !renderTarget.stencilBuffer) {
      let glInternalFormat = _gl.DEPTH_COMPONENT16;
      if (isMultisample || useMultisampledRTT(renderTarget)) {
        const depthTexture = renderTarget.depthTexture;
        if (depthTexture && depthTexture.isDepthTexture) {
          if (depthTexture.type === FloatType) {
            glInternalFormat = _gl.DEPTH_COMPONENT32F;
          } else if (depthTexture.type === UnsignedIntType) {
            glInternalFormat = _gl.DEPTH_COMPONENT24;
          }
        }
        const samples = getRenderTargetSamples(renderTarget);
        if (useMultisampledRTT(renderTarget)) {
          multisampledRTTExt.renderbufferStorageMultisampleEXT(_gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height);
        } else {
          _gl.renderbufferStorageMultisample(_gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height);
        }
      } else {
        _gl.renderbufferStorage(_gl.RENDERBUFFER, glInternalFormat, renderTarget.width, renderTarget.height);
      }
      _gl.framebufferRenderbuffer(_gl.FRAMEBUFFER, _gl.DEPTH_ATTACHMENT, _gl.RENDERBUFFER, renderbuffer);
    } else if (renderTarget.depthBuffer && renderTarget.stencilBuffer) {
      const samples = getRenderTargetSamples(renderTarget);
      if (isMultisample && useMultisampledRTT(renderTarget) === false) {
        _gl.renderbufferStorageMultisample(_gl.RENDERBUFFER, samples, _gl.DEPTH24_STENCIL8, renderTarget.width, renderTarget.height);
      } else if (useMultisampledRTT(renderTarget)) {
        multisampledRTTExt.renderbufferStorageMultisampleEXT(_gl.RENDERBUFFER, samples, _gl.DEPTH24_STENCIL8, renderTarget.width, renderTarget.height);
      } else {
        _gl.renderbufferStorage(_gl.RENDERBUFFER, _gl.DEPTH_STENCIL, renderTarget.width, renderTarget.height);
      }
      _gl.framebufferRenderbuffer(_gl.FRAMEBUFFER, _gl.DEPTH_STENCIL_ATTACHMENT, _gl.RENDERBUFFER, renderbuffer);
    } else {
      const textures = renderTarget.isWebGLMultipleRenderTargets === true ? renderTarget.texture : [renderTarget.texture];
      for (let i = 0; i < textures.length; i++) {
        const texture = textures[i];
        const glFormat = utils.convert(texture.format, texture.colorSpace);
        const glType = utils.convert(texture.type);
        const glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.colorSpace);
        const samples = getRenderTargetSamples(renderTarget);
        if (isMultisample && useMultisampledRTT(renderTarget) === false) {
          _gl.renderbufferStorageMultisample(_gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height);
        } else if (useMultisampledRTT(renderTarget)) {
          multisampledRTTExt.renderbufferStorageMultisampleEXT(_gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height);
        } else {
          _gl.renderbufferStorage(_gl.RENDERBUFFER, glInternalFormat, renderTarget.width, renderTarget.height);
        }
      }
    }
    _gl.bindRenderbuffer(_gl.RENDERBUFFER, null);
  }
  function setupDepthTexture(framebuffer, renderTarget) {
    const isCube = renderTarget && renderTarget.isWebGLCubeRenderTarget;
    if (isCube)
      throw new Error("Depth Texture with cube render targets is not supported");
    state.bindFramebuffer(_gl.FRAMEBUFFER, framebuffer);
    if (!(renderTarget.depthTexture && renderTarget.depthTexture.isDepthTexture)) {
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    }
    if (!properties.get(renderTarget.depthTexture).__webglTexture || renderTarget.depthTexture.image.width !== renderTarget.width || renderTarget.depthTexture.image.height !== renderTarget.height) {
      renderTarget.depthTexture.image.width = renderTarget.width;
      renderTarget.depthTexture.image.height = renderTarget.height;
      renderTarget.depthTexture.needsUpdate = true;
    }
    setTexture2D(renderTarget.depthTexture, 0);
    const webglDepthTexture = properties.get(renderTarget.depthTexture).__webglTexture;
    const samples = getRenderTargetSamples(renderTarget);
    if (renderTarget.depthTexture.format === DepthFormat) {
      if (useMultisampledRTT(renderTarget)) {
        multisampledRTTExt.framebufferTexture2DMultisampleEXT(_gl.FRAMEBUFFER, _gl.DEPTH_ATTACHMENT, _gl.TEXTURE_2D, webglDepthTexture, 0, samples);
      } else {
        _gl.framebufferTexture2D(_gl.FRAMEBUFFER, _gl.DEPTH_ATTACHMENT, _gl.TEXTURE_2D, webglDepthTexture, 0);
      }
    } else if (renderTarget.depthTexture.format === DepthStencilFormat) {
      if (useMultisampledRTT(renderTarget)) {
        multisampledRTTExt.framebufferTexture2DMultisampleEXT(_gl.FRAMEBUFFER, _gl.DEPTH_STENCIL_ATTACHMENT, _gl.TEXTURE_2D, webglDepthTexture, 0, samples);
      } else {
        _gl.framebufferTexture2D(_gl.FRAMEBUFFER, _gl.DEPTH_STENCIL_ATTACHMENT, _gl.TEXTURE_2D, webglDepthTexture, 0);
      }
    } else {
      throw new Error("Unknown depthTexture format");
    }
  }
  function setupDepthRenderbuffer(renderTarget) {
    const renderTargetProperties = properties.get(renderTarget);
    const isCube = renderTarget.isWebGLCubeRenderTarget === true;
    if (renderTarget.depthTexture && !renderTargetProperties.__autoAllocateDepthBuffer) {
      if (isCube)
        throw new Error("target.depthTexture not supported in Cube render targets");
      setupDepthTexture(renderTargetProperties.__webglFramebuffer, renderTarget);
    } else {
      if (isCube) {
        renderTargetProperties.__webglDepthbuffer = [];
        for (let i = 0; i < 6; i++) {
          state.bindFramebuffer(_gl.FRAMEBUFFER, renderTargetProperties.__webglFramebuffer[i]);
          renderTargetProperties.__webglDepthbuffer[i] = _gl.createRenderbuffer();
          setupRenderBufferStorage(renderTargetProperties.__webglDepthbuffer[i], renderTarget, false);
        }
      } else {
        state.bindFramebuffer(_gl.FRAMEBUFFER, renderTargetProperties.__webglFramebuffer);
        renderTargetProperties.__webglDepthbuffer = _gl.createRenderbuffer();
        setupRenderBufferStorage(renderTargetProperties.__webglDepthbuffer, renderTarget, false);
      }
    }
    state.bindFramebuffer(_gl.FRAMEBUFFER, null);
  }
  function rebindTextures(renderTarget, colorTexture, depthTexture) {
    const renderTargetProperties = properties.get(renderTarget);
    if (colorTexture !== void 0) {
      setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer, renderTarget, renderTarget.texture, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_2D);
    }
    if (depthTexture !== void 0) {
      setupDepthRenderbuffer(renderTarget);
    }
  }
  function setupRenderTarget(renderTarget) {
    const texture = renderTarget.texture;
    const renderTargetProperties = properties.get(renderTarget);
    const textureProperties = properties.get(texture);
    renderTarget.addEventListener("dispose", onRenderTargetDispose);
    if (renderTarget.isWebGLMultipleRenderTargets !== true) {
      if (textureProperties.__webglTexture === void 0) {
        textureProperties.__webglTexture = _gl.createTexture();
      }
      textureProperties.__version = texture.version;
      info.memory.textures++;
    }
    const isCube = renderTarget.isWebGLCubeRenderTarget === true;
    const isMultipleRenderTargets = renderTarget.isWebGLMultipleRenderTargets === true;
    const supportsMips = isPowerOfTwo$1(renderTarget) || isWebGL2;
    if (isCube) {
      renderTargetProperties.__webglFramebuffer = [];
      for (let i = 0; i < 6; i++) {
        renderTargetProperties.__webglFramebuffer[i] = _gl.createFramebuffer();
      }
    } else {
      renderTargetProperties.__webglFramebuffer = _gl.createFramebuffer();
      if (isMultipleRenderTargets) {
        if (capabilities.drawBuffers) {
          const textures = renderTarget.texture;
          for (let i = 0, il = textures.length; i < il; i++) {
            const attachmentProperties = properties.get(textures[i]);
            if (attachmentProperties.__webglTexture === void 0) {
              attachmentProperties.__webglTexture = _gl.createTexture();
              info.memory.textures++;
            }
          }
        } else {
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
        }
      }
      if (isWebGL2 && renderTarget.samples > 0 && useMultisampledRTT(renderTarget) === false) {
        const textures = isMultipleRenderTargets ? texture : [texture];
        renderTargetProperties.__webglMultisampledFramebuffer = _gl.createFramebuffer();
        renderTargetProperties.__webglColorRenderbuffer = [];
        state.bindFramebuffer(_gl.FRAMEBUFFER, renderTargetProperties.__webglMultisampledFramebuffer);
        for (let i = 0; i < textures.length; i++) {
          const texture2 = textures[i];
          renderTargetProperties.__webglColorRenderbuffer[i] = _gl.createRenderbuffer();
          _gl.bindRenderbuffer(_gl.RENDERBUFFER, renderTargetProperties.__webglColorRenderbuffer[i]);
          const glFormat = utils.convert(texture2.format, texture2.colorSpace);
          const glType = utils.convert(texture2.type);
          const glInternalFormat = getInternalFormat(texture2.internalFormat, glFormat, glType, texture2.colorSpace, renderTarget.isXRRenderTarget === true);
          const samples = getRenderTargetSamples(renderTarget);
          _gl.renderbufferStorageMultisample(_gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height);
          _gl.framebufferRenderbuffer(_gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0 + i, _gl.RENDERBUFFER, renderTargetProperties.__webglColorRenderbuffer[i]);
        }
        _gl.bindRenderbuffer(_gl.RENDERBUFFER, null);
        if (renderTarget.depthBuffer) {
          renderTargetProperties.__webglDepthRenderbuffer = _gl.createRenderbuffer();
          setupRenderBufferStorage(renderTargetProperties.__webglDepthRenderbuffer, renderTarget, true);
        }
        state.bindFramebuffer(_gl.FRAMEBUFFER, null);
      }
    }
    if (isCube) {
      state.bindTexture(_gl.TEXTURE_CUBE_MAP, textureProperties.__webglTexture);
      setTextureParameters(_gl.TEXTURE_CUBE_MAP, texture, supportsMips);
      for (let i = 0; i < 6; i++) {
        setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer[i], renderTarget, texture, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i);
      }
      if (textureNeedsGenerateMipmaps(texture, supportsMips)) {
        generateMipmap(_gl.TEXTURE_CUBE_MAP);
      }
      state.unbindTexture();
    } else if (isMultipleRenderTargets) {
      const textures = renderTarget.texture;
      for (let i = 0, il = textures.length; i < il; i++) {
        const attachment = textures[i];
        const attachmentProperties = properties.get(attachment);
        state.bindTexture(_gl.TEXTURE_2D, attachmentProperties.__webglTexture);
        setTextureParameters(_gl.TEXTURE_2D, attachment, supportsMips);
        setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer, renderTarget, attachment, _gl.COLOR_ATTACHMENT0 + i, _gl.TEXTURE_2D);
        if (textureNeedsGenerateMipmaps(attachment, supportsMips)) {
          generateMipmap(_gl.TEXTURE_2D);
        }
      }
      state.unbindTexture();
    } else {
      let glTextureType = _gl.TEXTURE_2D;
      if (renderTarget.isWebGL3DRenderTarget || renderTarget.isWebGLArrayRenderTarget) {
        if (isWebGL2) {
          glTextureType = renderTarget.isWebGL3DRenderTarget ? _gl.TEXTURE_3D : _gl.TEXTURE_2D_ARRAY;
        } else {
          console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.");
        }
      }
      state.bindTexture(glTextureType, textureProperties.__webglTexture);
      setTextureParameters(glTextureType, texture, supportsMips);
      setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer, renderTarget, texture, _gl.COLOR_ATTACHMENT0, glTextureType);
      if (textureNeedsGenerateMipmaps(texture, supportsMips)) {
        generateMipmap(glTextureType);
      }
      state.unbindTexture();
    }
    if (renderTarget.depthBuffer) {
      setupDepthRenderbuffer(renderTarget);
    }
  }
  function updateRenderTargetMipmap(renderTarget) {
    const supportsMips = isPowerOfTwo$1(renderTarget) || isWebGL2;
    const textures = renderTarget.isWebGLMultipleRenderTargets === true ? renderTarget.texture : [renderTarget.texture];
    for (let i = 0, il = textures.length; i < il; i++) {
      const texture = textures[i];
      if (textureNeedsGenerateMipmaps(texture, supportsMips)) {
        const target = renderTarget.isWebGLCubeRenderTarget ? _gl.TEXTURE_CUBE_MAP : _gl.TEXTURE_2D;
        const webglTexture = properties.get(texture).__webglTexture;
        state.bindTexture(target, webglTexture);
        generateMipmap(target);
        state.unbindTexture();
      }
    }
  }
  function updateMultisampleRenderTarget(renderTarget) {
    if (isWebGL2 && renderTarget.samples > 0 && useMultisampledRTT(renderTarget) === false) {
      const textures = renderTarget.isWebGLMultipleRenderTargets ? renderTarget.texture : [renderTarget.texture];
      const width = renderTarget.width;
      const height = renderTarget.height;
      let mask = _gl.COLOR_BUFFER_BIT;
      const invalidationArray = [];
      const depthStyle = renderTarget.stencilBuffer ? _gl.DEPTH_STENCIL_ATTACHMENT : _gl.DEPTH_ATTACHMENT;
      const renderTargetProperties = properties.get(renderTarget);
      const isMultipleRenderTargets = renderTarget.isWebGLMultipleRenderTargets === true;
      if (isMultipleRenderTargets) {
        for (let i = 0; i < textures.length; i++) {
          state.bindFramebuffer(_gl.FRAMEBUFFER, renderTargetProperties.__webglMultisampledFramebuffer);
          _gl.framebufferRenderbuffer(_gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0 + i, _gl.RENDERBUFFER, null);
          state.bindFramebuffer(_gl.FRAMEBUFFER, renderTargetProperties.__webglFramebuffer);
          _gl.framebufferTexture2D(_gl.DRAW_FRAMEBUFFER, _gl.COLOR_ATTACHMENT0 + i, _gl.TEXTURE_2D, null, 0);
        }
      }
      state.bindFramebuffer(_gl.READ_FRAMEBUFFER, renderTargetProperties.__webglMultisampledFramebuffer);
      state.bindFramebuffer(_gl.DRAW_FRAMEBUFFER, renderTargetProperties.__webglFramebuffer);
      for (let i = 0; i < textures.length; i++) {
        invalidationArray.push(_gl.COLOR_ATTACHMENT0 + i);
        if (renderTarget.depthBuffer) {
          invalidationArray.push(depthStyle);
        }
        const ignoreDepthValues = renderTargetProperties.__ignoreDepthValues !== void 0 ? renderTargetProperties.__ignoreDepthValues : false;
        if (ignoreDepthValues === false) {
          if (renderTarget.depthBuffer)
            mask |= _gl.DEPTH_BUFFER_BIT;
          if (renderTarget.stencilBuffer)
            mask |= _gl.STENCIL_BUFFER_BIT;
        }
        if (isMultipleRenderTargets) {
          _gl.framebufferRenderbuffer(_gl.READ_FRAMEBUFFER, _gl.COLOR_ATTACHMENT0, _gl.RENDERBUFFER, renderTargetProperties.__webglColorRenderbuffer[i]);
        }
        if (ignoreDepthValues === true) {
          _gl.invalidateFramebuffer(_gl.READ_FRAMEBUFFER, [depthStyle]);
          _gl.invalidateFramebuffer(_gl.DRAW_FRAMEBUFFER, [depthStyle]);
        }
        if (isMultipleRenderTargets) {
          const webglTexture = properties.get(textures[i]).__webglTexture;
          _gl.framebufferTexture2D(_gl.DRAW_FRAMEBUFFER, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_2D, webglTexture, 0);
        }
        _gl.blitFramebuffer(0, 0, width, height, 0, 0, width, height, mask, _gl.NEAREST);
        if (supportsInvalidateFramebuffer) {
          _gl.invalidateFramebuffer(_gl.READ_FRAMEBUFFER, invalidationArray);
        }
      }
      state.bindFramebuffer(_gl.READ_FRAMEBUFFER, null);
      state.bindFramebuffer(_gl.DRAW_FRAMEBUFFER, null);
      if (isMultipleRenderTargets) {
        for (let i = 0; i < textures.length; i++) {
          state.bindFramebuffer(_gl.FRAMEBUFFER, renderTargetProperties.__webglMultisampledFramebuffer);
          _gl.framebufferRenderbuffer(_gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0 + i, _gl.RENDERBUFFER, renderTargetProperties.__webglColorRenderbuffer[i]);
          const webglTexture = properties.get(textures[i]).__webglTexture;
          state.bindFramebuffer(_gl.FRAMEBUFFER, renderTargetProperties.__webglFramebuffer);
          _gl.framebufferTexture2D(_gl.DRAW_FRAMEBUFFER, _gl.COLOR_ATTACHMENT0 + i, _gl.TEXTURE_2D, webglTexture, 0);
        }
      }
      state.bindFramebuffer(_gl.DRAW_FRAMEBUFFER, renderTargetProperties.__webglMultisampledFramebuffer);
    }
  }
  function getRenderTargetSamples(renderTarget) {
    return Math.min(maxSamples, renderTarget.samples);
  }
  function useMultisampledRTT(renderTarget) {
    const renderTargetProperties = properties.get(renderTarget);
    return isWebGL2 && renderTarget.samples > 0 && extensions.has("WEBGL_multisampled_render_to_texture") === true && renderTargetProperties.__useRenderToTexture !== false;
  }
  function updateVideoTexture(texture) {
    const frame = info.render.frame;
    if (_videoTextures.get(texture) !== frame) {
      _videoTextures.set(texture, frame);
      texture.update();
    }
  }
  function verifyColorSpace(texture, image) {
    const colorSpace = texture.colorSpace;
    const format = texture.format;
    const type = texture.type;
    if (texture.isCompressedTexture === true || texture.format === _SRGBAFormat)
      return image;
    if (colorSpace !== LinearSRGBColorSpace && colorSpace !== NoColorSpace) {
      if (colorSpace === SRGBColorSpace) {
        if (isWebGL2 === false) {
          if (extensions.has("EXT_sRGB") === true && format === RGBAFormat) {
            texture.format = _SRGBAFormat;
            texture.minFilter = LinearFilter;
            texture.generateMipmaps = false;
          } else {
            image = ImageUtils.sRGBToLinear(image);
          }
        } else {
          if (format !== RGBAFormat || type !== UnsignedByteType) {
            console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.");
          }
        }
      } else {
        console.error("THREE.WebGLTextures: Unsupported texture color space:", colorSpace);
      }
    }
    return image;
  }
  this.allocateTextureUnit = allocateTextureUnit;
  this.resetTextureUnits = resetTextureUnits;
  this.setTexture2D = setTexture2D;
  this.setTexture2DArray = setTexture2DArray;
  this.setTexture3D = setTexture3D;
  this.setTextureCube = setTextureCube;
  this.rebindTextures = rebindTextures;
  this.setupRenderTarget = setupRenderTarget;
  this.updateRenderTargetMipmap = updateRenderTargetMipmap;
  this.updateMultisampleRenderTarget = updateMultisampleRenderTarget;
  this.setupDepthRenderbuffer = setupDepthRenderbuffer;
  this.setupFrameBufferTexture = setupFrameBufferTexture;
  this.useMultisampledRTT = useMultisampledRTT;
}
function WebGLUtils(gl, extensions, capabilities) {
  const isWebGL2 = capabilities.isWebGL2;
  function convert(p, colorSpace = NoColorSpace) {
    let extension;
    if (p === UnsignedByteType)
      return gl.UNSIGNED_BYTE;
    if (p === UnsignedShort4444Type)
      return gl.UNSIGNED_SHORT_4_4_4_4;
    if (p === UnsignedShort5551Type)
      return gl.UNSIGNED_SHORT_5_5_5_1;
    if (p === ByteType)
      return gl.BYTE;
    if (p === ShortType)
      return gl.SHORT;
    if (p === UnsignedShortType)
      return gl.UNSIGNED_SHORT;
    if (p === IntType)
      return gl.INT;
    if (p === UnsignedIntType)
      return gl.UNSIGNED_INT;
    if (p === FloatType)
      return gl.FLOAT;
    if (p === HalfFloatType) {
      if (isWebGL2)
        return gl.HALF_FLOAT;
      extension = extensions.get("OES_texture_half_float");
      if (extension !== null) {
        return extension.HALF_FLOAT_OES;
      } else {
        return null;
      }
    }
    if (p === AlphaFormat)
      return gl.ALPHA;
    if (p === RGBAFormat)
      return gl.RGBA;
    if (p === LuminanceFormat)
      return gl.LUMINANCE;
    if (p === LuminanceAlphaFormat)
      return gl.LUMINANCE_ALPHA;
    if (p === DepthFormat)
      return gl.DEPTH_COMPONENT;
    if (p === DepthStencilFormat)
      return gl.DEPTH_STENCIL;
    if (p === _SRGBAFormat) {
      extension = extensions.get("EXT_sRGB");
      if (extension !== null) {
        return extension.SRGB_ALPHA_EXT;
      } else {
        return null;
      }
    }
    if (p === RedFormat)
      return gl.RED;
    if (p === RedIntegerFormat)
      return gl.RED_INTEGER;
    if (p === RGFormat)
      return gl.RG;
    if (p === RGIntegerFormat)
      return gl.RG_INTEGER;
    if (p === RGBAIntegerFormat)
      return gl.RGBA_INTEGER;
    if (p === RGB_S3TC_DXT1_Format || p === RGBA_S3TC_DXT1_Format || p === RGBA_S3TC_DXT3_Format || p === RGBA_S3TC_DXT5_Format) {
      if (colorSpace === SRGBColorSpace) {
        extension = extensions.get("WEBGL_compressed_texture_s3tc_srgb");
        if (extension !== null) {
          if (p === RGB_S3TC_DXT1_Format)
            return extension.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (p === RGBA_S3TC_DXT1_Format)
            return extension.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (p === RGBA_S3TC_DXT3_Format)
            return extension.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (p === RGBA_S3TC_DXT5_Format)
            return extension.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else {
          return null;
        }
      } else {
        extension = extensions.get("WEBGL_compressed_texture_s3tc");
        if (extension !== null) {
          if (p === RGB_S3TC_DXT1_Format)
            return extension.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (p === RGBA_S3TC_DXT1_Format)
            return extension.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (p === RGBA_S3TC_DXT3_Format)
            return extension.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (p === RGBA_S3TC_DXT5_Format)
            return extension.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        } else {
          return null;
        }
      }
    }
    if (p === RGB_PVRTC_4BPPV1_Format || p === RGB_PVRTC_2BPPV1_Format || p === RGBA_PVRTC_4BPPV1_Format || p === RGBA_PVRTC_2BPPV1_Format) {
      extension = extensions.get("WEBGL_compressed_texture_pvrtc");
      if (extension !== null) {
        if (p === RGB_PVRTC_4BPPV1_Format)
          return extension.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (p === RGB_PVRTC_2BPPV1_Format)
          return extension.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (p === RGBA_PVRTC_4BPPV1_Format)
          return extension.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (p === RGBA_PVRTC_2BPPV1_Format)
          return extension.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else {
        return null;
      }
    }
    if (p === RGB_ETC1_Format) {
      extension = extensions.get("WEBGL_compressed_texture_etc1");
      if (extension !== null) {
        return extension.COMPRESSED_RGB_ETC1_WEBGL;
      } else {
        return null;
      }
    }
    if (p === RGB_ETC2_Format || p === RGBA_ETC2_EAC_Format) {
      extension = extensions.get("WEBGL_compressed_texture_etc");
      if (extension !== null) {
        if (p === RGB_ETC2_Format)
          return colorSpace === SRGBColorSpace ? extension.COMPRESSED_SRGB8_ETC2 : extension.COMPRESSED_RGB8_ETC2;
        if (p === RGBA_ETC2_EAC_Format)
          return colorSpace === SRGBColorSpace ? extension.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : extension.COMPRESSED_RGBA8_ETC2_EAC;
      } else {
        return null;
      }
    }
    if (p === RGBA_ASTC_4x4_Format || p === RGBA_ASTC_5x4_Format || p === RGBA_ASTC_5x5_Format || p === RGBA_ASTC_6x5_Format || p === RGBA_ASTC_6x6_Format || p === RGBA_ASTC_8x5_Format || p === RGBA_ASTC_8x6_Format || p === RGBA_ASTC_8x8_Format || p === RGBA_ASTC_10x5_Format || p === RGBA_ASTC_10x6_Format || p === RGBA_ASTC_10x8_Format || p === RGBA_ASTC_10x10_Format || p === RGBA_ASTC_12x10_Format || p === RGBA_ASTC_12x12_Format) {
      extension = extensions.get("WEBGL_compressed_texture_astc");
      if (extension !== null) {
        if (p === RGBA_ASTC_4x4_Format)
          return colorSpace === SRGBColorSpace ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : extension.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (p === RGBA_ASTC_5x4_Format)
          return colorSpace === SRGBColorSpace ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : extension.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (p === RGBA_ASTC_5x5_Format)
          return colorSpace === SRGBColorSpace ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : extension.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (p === RGBA_ASTC_6x5_Format)
          return colorSpace === SRGBColorSpace ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : extension.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (p === RGBA_ASTC_6x6_Format)
          return colorSpace === SRGBColorSpace ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : extension.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (p === RGBA_ASTC_8x5_Format)
          return colorSpace === SRGBColorSpace ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : extension.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (p === RGBA_ASTC_8x6_Format)
          return colorSpace === SRGBColorSpace ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : extension.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (p === RGBA_ASTC_8x8_Format)
          return colorSpace === SRGBColorSpace ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : extension.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (p === RGBA_ASTC_10x5_Format)
          return colorSpace === SRGBColorSpace ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : extension.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (p === RGBA_ASTC_10x6_Format)
          return colorSpace === SRGBColorSpace ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : extension.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (p === RGBA_ASTC_10x8_Format)
          return colorSpace === SRGBColorSpace ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : extension.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (p === RGBA_ASTC_10x10_Format)
          return colorSpace === SRGBColorSpace ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : extension.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (p === RGBA_ASTC_12x10_Format)
          return colorSpace === SRGBColorSpace ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : extension.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (p === RGBA_ASTC_12x12_Format)
          return colorSpace === SRGBColorSpace ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : extension.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else {
        return null;
      }
    }
    if (p === RGBA_BPTC_Format) {
      extension = extensions.get("EXT_texture_compression_bptc");
      if (extension !== null) {
        if (p === RGBA_BPTC_Format)
          return colorSpace === SRGBColorSpace ? extension.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : extension.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else {
        return null;
      }
    }
    if (p === RED_RGTC1_Format || p === SIGNED_RED_RGTC1_Format || p === RED_GREEN_RGTC2_Format || p === SIGNED_RED_GREEN_RGTC2_Format) {
      extension = extensions.get("EXT_texture_compression_rgtc");
      if (extension !== null) {
        if (p === RGBA_BPTC_Format)
          return extension.COMPRESSED_RED_RGTC1_EXT;
        if (p === SIGNED_RED_RGTC1_Format)
          return extension.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (p === RED_GREEN_RGTC2_Format)
          return extension.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (p === SIGNED_RED_GREEN_RGTC2_Format)
          return extension.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else {
        return null;
      }
    }
    if (p === UnsignedInt248Type) {
      if (isWebGL2)
        return gl.UNSIGNED_INT_24_8;
      extension = extensions.get("WEBGL_depth_texture");
      if (extension !== null) {
        return extension.UNSIGNED_INT_24_8_WEBGL;
      } else {
        return null;
      }
    }
    return gl[p] !== void 0 ? gl[p] : null;
  }
  return { convert };
}
class ArrayCamera extends PerspectiveCamera {
  constructor(array = []) {
    super();
    this.isArrayCamera = true;
    this.cameras = array;
  }
}
class Group extends Object3D {
  constructor() {
    super();
    this.isGroup = true;
    this.type = "Group";
  }
}
const _moveEvent = { type: "move" };
class WebXRController {
  constructor() {
    this._targetRay = null;
    this._grip = null;
    this._hand = null;
  }
  getHandSpace() {
    if (this._hand === null) {
      this._hand = new Group();
      this._hand.matrixAutoUpdate = false;
      this._hand.visible = false;
      this._hand.joints = {};
      this._hand.inputState = { pinching: false };
    }
    return this._hand;
  }
  getTargetRaySpace() {
    if (this._targetRay === null) {
      this._targetRay = new Group();
      this._targetRay.matrixAutoUpdate = false;
      this._targetRay.visible = false;
      this._targetRay.hasLinearVelocity = false;
      this._targetRay.linearVelocity = new Vector3();
      this._targetRay.hasAngularVelocity = false;
      this._targetRay.angularVelocity = new Vector3();
    }
    return this._targetRay;
  }
  getGripSpace() {
    if (this._grip === null) {
      this._grip = new Group();
      this._grip.matrixAutoUpdate = false;
      this._grip.visible = false;
      this._grip.hasLinearVelocity = false;
      this._grip.linearVelocity = new Vector3();
      this._grip.hasAngularVelocity = false;
      this._grip.angularVelocity = new Vector3();
    }
    return this._grip;
  }
  dispatchEvent(event) {
    if (this._targetRay !== null) {
      this._targetRay.dispatchEvent(event);
    }
    if (this._grip !== null) {
      this._grip.dispatchEvent(event);
    }
    if (this._hand !== null) {
      this._hand.dispatchEvent(event);
    }
    return this;
  }
  connect(inputSource) {
    if (inputSource && inputSource.hand) {
      const hand = this._hand;
      if (hand) {
        for (const inputjoint of inputSource.hand.values()) {
          this._getHandJoint(hand, inputjoint);
        }
      }
    }
    this.dispatchEvent({ type: "connected", data: inputSource });
    return this;
  }
  disconnect(inputSource) {
    this.dispatchEvent({ type: "disconnected", data: inputSource });
    if (this._targetRay !== null) {
      this._targetRay.visible = false;
    }
    if (this._grip !== null) {
      this._grip.visible = false;
    }
    if (this._hand !== null) {
      this._hand.visible = false;
    }
    return this;
  }
  update(inputSource, frame, referenceSpace) {
    let inputPose = null;
    let gripPose = null;
    let handPose = null;
    const targetRay = this._targetRay;
    const grip = this._grip;
    const hand = this._hand;
    if (inputSource && frame.session.visibilityState !== "visible-blurred") {
      if (hand && inputSource.hand) {
        handPose = true;
        for (const inputjoint of inputSource.hand.values()) {
          const jointPose = frame.getJointPose(inputjoint, referenceSpace);
          const joint = this._getHandJoint(hand, inputjoint);
          if (jointPose !== null) {
            joint.matrix.fromArray(jointPose.transform.matrix);
            joint.matrix.decompose(joint.position, joint.rotation, joint.scale);
            joint.matrixWorldNeedsUpdate = true;
            joint.jointRadius = jointPose.radius;
          }
          joint.visible = jointPose !== null;
        }
        const indexTip = hand.joints["index-finger-tip"];
        const thumbTip = hand.joints["thumb-tip"];
        const distance = indexTip.position.distanceTo(thumbTip.position);
        const distanceToPinch = 0.02;
        const threshold = 5e-3;
        if (hand.inputState.pinching && distance > distanceToPinch + threshold) {
          hand.inputState.pinching = false;
          this.dispatchEvent({
            type: "pinchend",
            handedness: inputSource.handedness,
            target: this
          });
        } else if (!hand.inputState.pinching && distance <= distanceToPinch - threshold) {
          hand.inputState.pinching = true;
          this.dispatchEvent({
            type: "pinchstart",
            handedness: inputSource.handedness,
            target: this
          });
        }
      } else {
        if (grip !== null && inputSource.gripSpace) {
          gripPose = frame.getPose(inputSource.gripSpace, referenceSpace);
          if (gripPose !== null) {
            grip.matrix.fromArray(gripPose.transform.matrix);
            grip.matrix.decompose(grip.position, grip.rotation, grip.scale);
            grip.matrixWorldNeedsUpdate = true;
            if (gripPose.linearVelocity) {
              grip.hasLinearVelocity = true;
              grip.linearVelocity.copy(gripPose.linearVelocity);
            } else {
              grip.hasLinearVelocity = false;
            }
            if (gripPose.angularVelocity) {
              grip.hasAngularVelocity = true;
              grip.angularVelocity.copy(gripPose.angularVelocity);
            } else {
              grip.hasAngularVelocity = false;
            }
          }
        }
      }
      if (targetRay !== null) {
        inputPose = frame.getPose(inputSource.targetRaySpace, referenceSpace);
        if (inputPose === null && gripPose !== null) {
          inputPose = gripPose;
        }
        if (inputPose !== null) {
          targetRay.matrix.fromArray(inputPose.transform.matrix);
          targetRay.matrix.decompose(targetRay.position, targetRay.rotation, targetRay.scale);
          targetRay.matrixWorldNeedsUpdate = true;
          if (inputPose.linearVelocity) {
            targetRay.hasLinearVelocity = true;
            targetRay.linearVelocity.copy(inputPose.linearVelocity);
          } else {
            targetRay.hasLinearVelocity = false;
          }
          if (inputPose.angularVelocity) {
            targetRay.hasAngularVelocity = true;
            targetRay.angularVelocity.copy(inputPose.angularVelocity);
          } else {
            targetRay.hasAngularVelocity = false;
          }
          this.dispatchEvent(_moveEvent);
        }
      }
    }
    if (targetRay !== null) {
      targetRay.visible = inputPose !== null;
    }
    if (grip !== null) {
      grip.visible = gripPose !== null;
    }
    if (hand !== null) {
      hand.visible = handPose !== null;
    }
    return this;
  }
  _getHandJoint(hand, inputjoint) {
    if (hand.joints[inputjoint.jointName] === void 0) {
      const joint = new Group();
      joint.matrixAutoUpdate = false;
      joint.visible = false;
      hand.joints[inputjoint.jointName] = joint;
      hand.add(joint);
    }
    return hand.joints[inputjoint.jointName];
  }
}
class DepthTexture extends Texture {
  constructor(width, height, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, format) {
    format = format !== void 0 ? format : DepthFormat;
    if (format !== DepthFormat && format !== DepthStencilFormat) {
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    }
    if (type === void 0 && format === DepthFormat)
      type = UnsignedIntType;
    if (type === void 0 && format === DepthStencilFormat)
      type = UnsignedInt248Type;
    super(null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);
    this.isDepthTexture = true;
    this.image = { width, height };
    this.magFilter = magFilter !== void 0 ? magFilter : NearestFilter;
    this.minFilter = minFilter !== void 0 ? minFilter : NearestFilter;
    this.flipY = false;
    this.generateMipmaps = false;
  }
}
class WebXRManager extends EventDispatcher {
  constructor(renderer, gl) {
    super();
    const scope = this;
    let session = null;
    let framebufferScaleFactor = 1;
    let referenceSpace = null;
    let referenceSpaceType = "local-floor";
    let foveation = 1;
    let customReferenceSpace = null;
    let pose = null;
    let glBinding = null;
    let glProjLayer = null;
    let glBaseLayer = null;
    let xrFrame = null;
    const attributes = gl.getContextAttributes();
    let initialRenderTarget = null;
    let newRenderTarget = null;
    const controllers = [];
    const controllerInputSources = [];
    const planes = /* @__PURE__ */ new Set();
    const planesLastChangedTimes = /* @__PURE__ */ new Map();
    const cameraL = new PerspectiveCamera();
    cameraL.layers.enable(1);
    cameraL.viewport = new Vector4();
    const cameraR = new PerspectiveCamera();
    cameraR.layers.enable(2);
    cameraR.viewport = new Vector4();
    const cameras = [cameraL, cameraR];
    const cameraVR = new ArrayCamera();
    cameraVR.layers.enable(1);
    cameraVR.layers.enable(2);
    let _currentDepthNear = null;
    let _currentDepthFar = null;
    this.cameraAutoUpdate = true;
    this.enabled = false;
    this.isPresenting = false;
    this.getController = function(index) {
      let controller = controllers[index];
      if (controller === void 0) {
        controller = new WebXRController();
        controllers[index] = controller;
      }
      return controller.getTargetRaySpace();
    };
    this.getControllerGrip = function(index) {
      let controller = controllers[index];
      if (controller === void 0) {
        controller = new WebXRController();
        controllers[index] = controller;
      }
      return controller.getGripSpace();
    };
    this.getHand = function(index) {
      let controller = controllers[index];
      if (controller === void 0) {
        controller = new WebXRController();
        controllers[index] = controller;
      }
      return controller.getHandSpace();
    };
    function onSessionEvent(event) {
      const controllerIndex = controllerInputSources.indexOf(event.inputSource);
      if (controllerIndex === -1) {
        return;
      }
      const controller = controllers[controllerIndex];
      if (controller !== void 0) {
        controller.update(event.inputSource, event.frame, customReferenceSpace || referenceSpace);
        controller.dispatchEvent({ type: event.type, data: event.inputSource });
      }
    }
    function onSessionEnd() {
      session.removeEventListener("select", onSessionEvent);
      session.removeEventListener("selectstart", onSessionEvent);
      session.removeEventListener("selectend", onSessionEvent);
      session.removeEventListener("squeeze", onSessionEvent);
      session.removeEventListener("squeezestart", onSessionEvent);
      session.removeEventListener("squeezeend", onSessionEvent);
      session.removeEventListener("end", onSessionEnd);
      session.removeEventListener("inputsourceschange", onInputSourcesChange);
      for (let i = 0; i < controllers.length; i++) {
        const inputSource = controllerInputSources[i];
        if (inputSource === null)
          continue;
        controllerInputSources[i] = null;
        controllers[i].disconnect(inputSource);
      }
      _currentDepthNear = null;
      _currentDepthFar = null;
      renderer.setRenderTarget(initialRenderTarget);
      glBaseLayer = null;
      glProjLayer = null;
      glBinding = null;
      session = null;
      newRenderTarget = null;
      animation.stop();
      scope.isPresenting = false;
      scope.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(value) {
      framebufferScaleFactor = value;
      if (scope.isPresenting === true) {
        console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
      }
    };
    this.setReferenceSpaceType = function(value) {
      referenceSpaceType = value;
      if (scope.isPresenting === true) {
        console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
      }
    };
    this.getReferenceSpace = function() {
      return customReferenceSpace || referenceSpace;
    };
    this.setReferenceSpace = function(space) {
      customReferenceSpace = space;
    };
    this.getBaseLayer = function() {
      return glProjLayer !== null ? glProjLayer : glBaseLayer;
    };
    this.getBinding = function() {
      return glBinding;
    };
    this.getFrame = function() {
      return xrFrame;
    };
    this.getSession = function() {
      return session;
    };
    this.setSession = async function(value) {
      session = value;
      if (session !== null) {
        initialRenderTarget = renderer.getRenderTarget();
        session.addEventListener("select", onSessionEvent);
        session.addEventListener("selectstart", onSessionEvent);
        session.addEventListener("selectend", onSessionEvent);
        session.addEventListener("squeeze", onSessionEvent);
        session.addEventListener("squeezestart", onSessionEvent);
        session.addEventListener("squeezeend", onSessionEvent);
        session.addEventListener("end", onSessionEnd);
        session.addEventListener("inputsourceschange", onInputSourcesChange);
        if (attributes.xrCompatible !== true) {
          await gl.makeXRCompatible();
        }
        if (session.renderState.layers === void 0 || renderer.capabilities.isWebGL2 === false) {
          const layerInit = {
            antialias: session.renderState.layers === void 0 ? attributes.antialias : true,
            alpha: true,
            depth: attributes.depth,
            stencil: attributes.stencil,
            framebufferScaleFactor
          };
          glBaseLayer = new XRWebGLLayer(session, gl, layerInit);
          session.updateRenderState({ baseLayer: glBaseLayer });
          newRenderTarget = new WebGLRenderTarget(
            glBaseLayer.framebufferWidth,
            glBaseLayer.framebufferHeight,
            {
              format: RGBAFormat,
              type: UnsignedByteType,
              colorSpace: renderer.outputColorSpace,
              stencilBuffer: attributes.stencil
            }
          );
        } else {
          let depthFormat = null;
          let depthType = null;
          let glDepthFormat = null;
          if (attributes.depth) {
            glDepthFormat = attributes.stencil ? gl.DEPTH24_STENCIL8 : gl.DEPTH_COMPONENT24;
            depthFormat = attributes.stencil ? DepthStencilFormat : DepthFormat;
            depthType = attributes.stencil ? UnsignedInt248Type : UnsignedIntType;
          }
          const projectionlayerInit = {
            colorFormat: gl.RGBA8,
            depthFormat: glDepthFormat,
            scaleFactor: framebufferScaleFactor
          };
          glBinding = new XRWebGLBinding(session, gl);
          glProjLayer = glBinding.createProjectionLayer(projectionlayerInit);
          session.updateRenderState({ layers: [glProjLayer] });
          newRenderTarget = new WebGLRenderTarget(
            glProjLayer.textureWidth,
            glProjLayer.textureHeight,
            {
              format: RGBAFormat,
              type: UnsignedByteType,
              depthTexture: new DepthTexture(glProjLayer.textureWidth, glProjLayer.textureHeight, depthType, void 0, void 0, void 0, void 0, void 0, void 0, depthFormat),
              stencilBuffer: attributes.stencil,
              colorSpace: renderer.outputColorSpace,
              samples: attributes.antialias ? 4 : 0
            }
          );
          const renderTargetProperties = renderer.properties.get(newRenderTarget);
          renderTargetProperties.__ignoreDepthValues = glProjLayer.ignoreDepthValues;
        }
        newRenderTarget.isXRRenderTarget = true;
        this.setFoveation(foveation);
        customReferenceSpace = null;
        referenceSpace = await session.requestReferenceSpace(referenceSpaceType);
        animation.setContext(session);
        animation.start();
        scope.isPresenting = true;
        scope.dispatchEvent({ type: "sessionstart" });
      }
    };
    this.getEnvironmentBlendMode = function() {
      if (session !== null) {
        return session.environmentBlendMode;
      }
    };
    function onInputSourcesChange(event) {
      for (let i = 0; i < event.removed.length; i++) {
        const inputSource = event.removed[i];
        const index = controllerInputSources.indexOf(inputSource);
        if (index >= 0) {
          controllerInputSources[index] = null;
          controllers[index].disconnect(inputSource);
        }
      }
      for (let i = 0; i < event.added.length; i++) {
        const inputSource = event.added[i];
        let controllerIndex = controllerInputSources.indexOf(inputSource);
        if (controllerIndex === -1) {
          for (let i2 = 0; i2 < controllers.length; i2++) {
            if (i2 >= controllerInputSources.length) {
              controllerInputSources.push(inputSource);
              controllerIndex = i2;
              break;
            } else if (controllerInputSources[i2] === null) {
              controllerInputSources[i2] = inputSource;
              controllerIndex = i2;
              break;
            }
          }
          if (controllerIndex === -1)
            break;
        }
        const controller = controllers[controllerIndex];
        if (controller) {
          controller.connect(inputSource);
        }
      }
    }
    const cameraLPos = new Vector3();
    const cameraRPos = new Vector3();
    function setProjectionFromUnion(camera, cameraL2, cameraR2) {
      cameraLPos.setFromMatrixPosition(cameraL2.matrixWorld);
      cameraRPos.setFromMatrixPosition(cameraR2.matrixWorld);
      const ipd = cameraLPos.distanceTo(cameraRPos);
      const projL = cameraL2.projectionMatrix.elements;
      const projR = cameraR2.projectionMatrix.elements;
      const near = projL[14] / (projL[10] - 1);
      const far = projL[14] / (projL[10] + 1);
      const topFov = (projL[9] + 1) / projL[5];
      const bottomFov = (projL[9] - 1) / projL[5];
      const leftFov = (projL[8] - 1) / projL[0];
      const rightFov = (projR[8] + 1) / projR[0];
      const left = near * leftFov;
      const right = near * rightFov;
      const zOffset = ipd / (-leftFov + rightFov);
      const xOffset = zOffset * -leftFov;
      cameraL2.matrixWorld.decompose(camera.position, camera.quaternion, camera.scale);
      camera.translateX(xOffset);
      camera.translateZ(zOffset);
      camera.matrixWorld.compose(camera.position, camera.quaternion, camera.scale);
      camera.matrixWorldInverse.copy(camera.matrixWorld).invert();
      const near2 = near + zOffset;
      const far2 = far + zOffset;
      const left2 = left - xOffset;
      const right2 = right + (ipd - xOffset);
      const top2 = topFov * far / far2 * near2;
      const bottom2 = bottomFov * far / far2 * near2;
      camera.projectionMatrix.makePerspective(left2, right2, top2, bottom2, near2, far2);
      camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
    }
    function updateCamera(camera, parent) {
      if (parent === null) {
        camera.matrixWorld.copy(camera.matrix);
      } else {
        camera.matrixWorld.multiplyMatrices(parent.matrixWorld, camera.matrix);
      }
      camera.matrixWorldInverse.copy(camera.matrixWorld).invert();
    }
    this.updateCamera = function(camera) {
      if (session === null)
        return;
      cameraVR.near = cameraR.near = cameraL.near = camera.near;
      cameraVR.far = cameraR.far = cameraL.far = camera.far;
      if (_currentDepthNear !== cameraVR.near || _currentDepthFar !== cameraVR.far) {
        session.updateRenderState({
          depthNear: cameraVR.near,
          depthFar: cameraVR.far
        });
        _currentDepthNear = cameraVR.near;
        _currentDepthFar = cameraVR.far;
      }
      const parent = camera.parent;
      const cameras2 = cameraVR.cameras;
      updateCamera(cameraVR, parent);
      for (let i = 0; i < cameras2.length; i++) {
        updateCamera(cameras2[i], parent);
      }
      if (cameras2.length === 2) {
        setProjectionFromUnion(cameraVR, cameraL, cameraR);
      } else {
        cameraVR.projectionMatrix.copy(cameraL.projectionMatrix);
      }
      updateUserCamera(camera, cameraVR, parent);
    };
    function updateUserCamera(camera, cameraVR2, parent) {
      if (parent === null) {
        camera.matrix.copy(cameraVR2.matrixWorld);
      } else {
        camera.matrix.copy(parent.matrixWorld);
        camera.matrix.invert();
        camera.matrix.multiply(cameraVR2.matrixWorld);
      }
      camera.matrix.decompose(camera.position, camera.quaternion, camera.scale);
      camera.updateMatrixWorld(true);
      const children = camera.children;
      for (let i = 0, l = children.length; i < l; i++) {
        children[i].updateMatrixWorld(true);
      }
      camera.projectionMatrix.copy(cameraVR2.projectionMatrix);
      camera.projectionMatrixInverse.copy(cameraVR2.projectionMatrixInverse);
      if (camera.isPerspectiveCamera) {
        camera.fov = RAD2DEG * 2 * Math.atan(1 / camera.projectionMatrix.elements[5]);
        camera.zoom = 1;
      }
    }
    this.getCamera = function() {
      return cameraVR;
    };
    this.getFoveation = function() {
      if (glProjLayer === null && glBaseLayer === null) {
        return void 0;
      }
      return foveation;
    };
    this.setFoveation = function(value) {
      foveation = value;
      if (glProjLayer !== null) {
        glProjLayer.fixedFoveation = value;
      }
      if (glBaseLayer !== null && glBaseLayer.fixedFoveation !== void 0) {
        glBaseLayer.fixedFoveation = value;
      }
    };
    this.getPlanes = function() {
      return planes;
    };
    let onAnimationFrameCallback = null;
    function onAnimationFrame(time, frame) {
      pose = frame.getViewerPose(customReferenceSpace || referenceSpace);
      xrFrame = frame;
      if (pose !== null) {
        const views = pose.views;
        if (glBaseLayer !== null) {
          renderer.setRenderTargetFramebuffer(newRenderTarget, glBaseLayer.framebuffer);
          renderer.setRenderTarget(newRenderTarget);
        }
        let cameraVRNeedsUpdate = false;
        if (views.length !== cameraVR.cameras.length) {
          cameraVR.cameras.length = 0;
          cameraVRNeedsUpdate = true;
        }
        for (let i = 0; i < views.length; i++) {
          const view = views[i];
          let viewport = null;
          if (glBaseLayer !== null) {
            viewport = glBaseLayer.getViewport(view);
          } else {
            const glSubImage = glBinding.getViewSubImage(glProjLayer, view);
            viewport = glSubImage.viewport;
            if (i === 0) {
              renderer.setRenderTargetTextures(
                newRenderTarget,
                glSubImage.colorTexture,
                glProjLayer.ignoreDepthValues ? void 0 : glSubImage.depthStencilTexture
              );
              renderer.setRenderTarget(newRenderTarget);
            }
          }
          let camera = cameras[i];
          if (camera === void 0) {
            camera = new PerspectiveCamera();
            camera.layers.enable(i);
            camera.viewport = new Vector4();
            cameras[i] = camera;
          }
          camera.matrix.fromArray(view.transform.matrix);
          camera.matrix.decompose(camera.position, camera.quaternion, camera.scale);
          camera.projectionMatrix.fromArray(view.projectionMatrix);
          camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
          camera.viewport.set(viewport.x, viewport.y, viewport.width, viewport.height);
          if (i === 0) {
            cameraVR.matrix.copy(camera.matrix);
            cameraVR.matrix.decompose(cameraVR.position, cameraVR.quaternion, cameraVR.scale);
          }
          if (cameraVRNeedsUpdate === true) {
            cameraVR.cameras.push(camera);
          }
        }
      }
      for (let i = 0; i < controllers.length; i++) {
        const inputSource = controllerInputSources[i];
        const controller = controllers[i];
        if (inputSource !== null && controller !== void 0) {
          controller.update(inputSource, frame, customReferenceSpace || referenceSpace);
        }
      }
      if (onAnimationFrameCallback)
        onAnimationFrameCallback(time, frame);
      if (frame.detectedPlanes) {
        scope.dispatchEvent({ type: "planesdetected", data: frame.detectedPlanes });
        let planesToRemove = null;
        for (const plane of planes) {
          if (!frame.detectedPlanes.has(plane)) {
            if (planesToRemove === null) {
              planesToRemove = [];
            }
            planesToRemove.push(plane);
          }
        }
        if (planesToRemove !== null) {
          for (const plane of planesToRemove) {
            planes.delete(plane);
            planesLastChangedTimes.delete(plane);
            scope.dispatchEvent({ type: "planeremoved", data: plane });
          }
        }
        for (const plane of frame.detectedPlanes) {
          if (!planes.has(plane)) {
            planes.add(plane);
            planesLastChangedTimes.set(plane, frame.lastChangedTime);
            scope.dispatchEvent({ type: "planeadded", data: plane });
          } else {
            const lastKnownTime = planesLastChangedTimes.get(plane);
            if (plane.lastChangedTime > lastKnownTime) {
              planesLastChangedTimes.set(plane, plane.lastChangedTime);
              scope.dispatchEvent({ type: "planechanged", data: plane });
            }
          }
        }
      }
      xrFrame = null;
    }
    const animation = new WebGLAnimation();
    animation.setAnimationLoop(onAnimationFrame);
    this.setAnimationLoop = function(callback) {
      onAnimationFrameCallback = callback;
    };
    this.dispose = function() {
    };
  }
}
function WebGLMaterials(renderer, properties) {
  function refreshTransformUniform(map, uniform) {
    if (map.matrixAutoUpdate === true) {
      map.updateMatrix();
    }
    uniform.value.copy(map.matrix);
  }
  function refreshFogUniforms(uniforms, fog) {
    fog.color.getRGB(uniforms.fogColor.value, getUnlitUniformColorSpace(renderer));
    if (fog.isFog) {
      uniforms.fogNear.value = fog.near;
      uniforms.fogFar.value = fog.far;
    } else if (fog.isFogExp2) {
      uniforms.fogDensity.value = fog.density;
    }
  }
  function refreshMaterialUniforms(uniforms, material, pixelRatio, height, transmissionRenderTarget) {
    if (material.isMeshBasicMaterial) {
      refreshUniformsCommon(uniforms, material);
    } else if (material.isMeshLambertMaterial) {
      refreshUniformsCommon(uniforms, material);
    } else if (material.isMeshToonMaterial) {
      refreshUniformsCommon(uniforms, material);
      refreshUniformsToon(uniforms, material);
    } else if (material.isMeshPhongMaterial) {
      refreshUniformsCommon(uniforms, material);
      refreshUniformsPhong(uniforms, material);
    } else if (material.isMeshStandardMaterial) {
      refreshUniformsCommon(uniforms, material);
      refreshUniformsStandard(uniforms, material);
      if (material.isMeshPhysicalMaterial) {
        refreshUniformsPhysical(uniforms, material, transmissionRenderTarget);
      }
    } else if (material.isMeshMatcapMaterial) {
      refreshUniformsCommon(uniforms, material);
      refreshUniformsMatcap(uniforms, material);
    } else if (material.isMeshDepthMaterial) {
      refreshUniformsCommon(uniforms, material);
    } else if (material.isMeshDistanceMaterial) {
      refreshUniformsCommon(uniforms, material);
      refreshUniformsDistance(uniforms, material);
    } else if (material.isMeshNormalMaterial) {
      refreshUniformsCommon(uniforms, material);
    } else if (material.isLineBasicMaterial) {
      refreshUniformsLine(uniforms, material);
      if (material.isLineDashedMaterial) {
        refreshUniformsDash(uniforms, material);
      }
    } else if (material.isPointsMaterial) {
      refreshUniformsPoints(uniforms, material, pixelRatio, height);
    } else if (material.isSpriteMaterial) {
      refreshUniformsSprites(uniforms, material);
    } else if (material.isShadowMaterial) {
      uniforms.color.value.copy(material.color);
      uniforms.opacity.value = material.opacity;
    } else if (material.isShaderMaterial) {
      material.uniformsNeedUpdate = false;
    }
  }
  function refreshUniformsCommon(uniforms, material) {
    uniforms.opacity.value = material.opacity;
    if (material.color) {
      uniforms.diffuse.value.copy(material.color);
    }
    if (material.emissive) {
      uniforms.emissive.value.copy(material.emissive).multiplyScalar(material.emissiveIntensity);
    }
    if (material.map) {
      uniforms.map.value = material.map;
      refreshTransformUniform(material.map, uniforms.mapTransform);
    }
    if (material.alphaMap) {
      uniforms.alphaMap.value = material.alphaMap;
      refreshTransformUniform(material.alphaMap, uniforms.alphaMapTransform);
    }
    if (material.bumpMap) {
      uniforms.bumpMap.value = material.bumpMap;
      refreshTransformUniform(material.bumpMap, uniforms.bumpMapTransform);
      uniforms.bumpScale.value = material.bumpScale;
      if (material.side === BackSide) {
        uniforms.bumpScale.value *= -1;
      }
    }
    if (material.normalMap) {
      uniforms.normalMap.value = material.normalMap;
      refreshTransformUniform(material.normalMap, uniforms.normalMapTransform);
      uniforms.normalScale.value.copy(material.normalScale);
      if (material.side === BackSide) {
        uniforms.normalScale.value.negate();
      }
    }
    if (material.displacementMap) {
      uniforms.displacementMap.value = material.displacementMap;
      refreshTransformUniform(material.displacementMap, uniforms.displacementMapTransform);
      uniforms.displacementScale.value = material.displacementScale;
      uniforms.displacementBias.value = material.displacementBias;
    }
    if (material.emissiveMap) {
      uniforms.emissiveMap.value = material.emissiveMap;
      refreshTransformUniform(material.emissiveMap, uniforms.emissiveMapTransform);
    }
    if (material.specularMap) {
      uniforms.specularMap.value = material.specularMap;
      refreshTransformUniform(material.specularMap, uniforms.specularMapTransform);
    }
    if (material.alphaTest > 0) {
      uniforms.alphaTest.value = material.alphaTest;
    }
    const envMap = properties.get(material).envMap;
    if (envMap) {
      uniforms.envMap.value = envMap;
      uniforms.flipEnvMap.value = envMap.isCubeTexture && envMap.isRenderTargetTexture === false ? -1 : 1;
      uniforms.reflectivity.value = material.reflectivity;
      uniforms.ior.value = material.ior;
      uniforms.refractionRatio.value = material.refractionRatio;
    }
    if (material.lightMap) {
      uniforms.lightMap.value = material.lightMap;
      const scaleFactor = renderer.useLegacyLights === true ? Math.PI : 1;
      uniforms.lightMapIntensity.value = material.lightMapIntensity * scaleFactor;
      refreshTransformUniform(material.lightMap, uniforms.lightMapTransform);
    }
    if (material.aoMap) {
      uniforms.aoMap.value = material.aoMap;
      uniforms.aoMapIntensity.value = material.aoMapIntensity;
      refreshTransformUniform(material.aoMap, uniforms.aoMapTransform);
    }
  }
  function refreshUniformsLine(uniforms, material) {
    uniforms.diffuse.value.copy(material.color);
    uniforms.opacity.value = material.opacity;
    if (material.map) {
      uniforms.map.value = material.map;
      refreshTransformUniform(material.map, uniforms.mapTransform);
    }
  }
  function refreshUniformsDash(uniforms, material) {
    uniforms.dashSize.value = material.dashSize;
    uniforms.totalSize.value = material.dashSize + material.gapSize;
    uniforms.scale.value = material.scale;
  }
  function refreshUniformsPoints(uniforms, material, pixelRatio, height) {
    uniforms.diffuse.value.copy(material.color);
    uniforms.opacity.value = material.opacity;
    uniforms.size.value = material.size * pixelRatio;
    uniforms.scale.value = height * 0.5;
    if (material.map) {
      uniforms.map.value = material.map;
      refreshTransformUniform(material.map, uniforms.uvTransform);
    }
    if (material.alphaMap) {
      uniforms.alphaMap.value = material.alphaMap;
    }
    if (material.alphaTest > 0) {
      uniforms.alphaTest.value = material.alphaTest;
    }
  }
  function refreshUniformsSprites(uniforms, material) {
    uniforms.diffuse.value.copy(material.color);
    uniforms.opacity.value = material.opacity;
    uniforms.rotation.value = material.rotation;
    if (material.map) {
      uniforms.map.value = material.map;
      refreshTransformUniform(material.map, uniforms.mapTransform);
    }
    if (material.alphaMap) {
      uniforms.alphaMap.value = material.alphaMap;
    }
    if (material.alphaTest > 0) {
      uniforms.alphaTest.value = material.alphaTest;
    }
  }
  function refreshUniformsPhong(uniforms, material) {
    uniforms.specular.value.copy(material.specular);
    uniforms.shininess.value = Math.max(material.shininess, 1e-4);
  }
  function refreshUniformsToon(uniforms, material) {
    if (material.gradientMap) {
      uniforms.gradientMap.value = material.gradientMap;
    }
  }
  function refreshUniformsStandard(uniforms, material) {
    uniforms.metalness.value = material.metalness;
    if (material.metalnessMap) {
      uniforms.metalnessMap.value = material.metalnessMap;
      refreshTransformUniform(material.metalnessMap, uniforms.metalnessMapTransform);
    }
    uniforms.roughness.value = material.roughness;
    if (material.roughnessMap) {
      uniforms.roughnessMap.value = material.roughnessMap;
      refreshTransformUniform(material.roughnessMap, uniforms.roughnessMapTransform);
    }
    const envMap = properties.get(material).envMap;
    if (envMap) {
      uniforms.envMapIntensity.value = material.envMapIntensity;
    }
  }
  function refreshUniformsPhysical(uniforms, material, transmissionRenderTarget) {
    uniforms.ior.value = material.ior;
    if (material.sheen > 0) {
      uniforms.sheenColor.value.copy(material.sheenColor).multiplyScalar(material.sheen);
      uniforms.sheenRoughness.value = material.sheenRoughness;
      if (material.sheenColorMap) {
        uniforms.sheenColorMap.value = material.sheenColorMap;
        refreshTransformUniform(material.sheenColorMap, uniforms.sheenColorMapTransform);
      }
      if (material.sheenRoughnessMap) {
        uniforms.sheenRoughnessMap.value = material.sheenRoughnessMap;
        refreshTransformUniform(material.sheenRoughnessMap, uniforms.sheenRoughnessMapTransform);
      }
    }
    if (material.clearcoat > 0) {
      uniforms.clearcoat.value = material.clearcoat;
      uniforms.clearcoatRoughness.value = material.clearcoatRoughness;
      if (material.clearcoatMap) {
        uniforms.clearcoatMap.value = material.clearcoatMap;
        refreshTransformUniform(material.clearcoatMap, uniforms.clearcoatMapTransform);
      }
      if (material.clearcoatRoughnessMap) {
        uniforms.clearcoatRoughnessMap.value = material.clearcoatRoughnessMap;
        refreshTransformUniform(material.clearcoatRoughnessMap, uniforms.clearcoatRoughnessMapTransform);
      }
      if (material.clearcoatNormalMap) {
        uniforms.clearcoatNormalMap.value = material.clearcoatNormalMap;
        refreshTransformUniform(material.clearcoatNormalMap, uniforms.clearcoatNormalMapTransform);
        uniforms.clearcoatNormalScale.value.copy(material.clearcoatNormalScale);
        if (material.side === BackSide) {
          uniforms.clearcoatNormalScale.value.negate();
        }
      }
    }
    if (material.iridescence > 0) {
      uniforms.iridescence.value = material.iridescence;
      uniforms.iridescenceIOR.value = material.iridescenceIOR;
      uniforms.iridescenceThicknessMinimum.value = material.iridescenceThicknessRange[0];
      uniforms.iridescenceThicknessMaximum.value = material.iridescenceThicknessRange[1];
      if (material.iridescenceMap) {
        uniforms.iridescenceMap.value = material.iridescenceMap;
        refreshTransformUniform(material.iridescenceMap, uniforms.iridescenceMapTransform);
      }
      if (material.iridescenceThicknessMap) {
        uniforms.iridescenceThicknessMap.value = material.iridescenceThicknessMap;
        refreshTransformUniform(material.iridescenceThicknessMap, uniforms.iridescenceThicknessMapTransform);
      }
    }
    if (material.transmission > 0) {
      uniforms.transmission.value = material.transmission;
      uniforms.transmissionSamplerMap.value = transmissionRenderTarget.texture;
      uniforms.transmissionSamplerSize.value.set(transmissionRenderTarget.width, transmissionRenderTarget.height);
      if (material.transmissionMap) {
        uniforms.transmissionMap.value = material.transmissionMap;
        refreshTransformUniform(material.transmissionMap, uniforms.transmissionMapTransform);
      }
      uniforms.thickness.value = material.thickness;
      if (material.thicknessMap) {
        uniforms.thicknessMap.value = material.thicknessMap;
        refreshTransformUniform(material.thicknessMap, uniforms.thicknessMapTransform);
      }
      uniforms.attenuationDistance.value = material.attenuationDistance;
      uniforms.attenuationColor.value.copy(material.attenuationColor);
    }
    uniforms.specularIntensity.value = material.specularIntensity;
    uniforms.specularColor.value.copy(material.specularColor);
    if (material.specularColorMap) {
      uniforms.specularColorMap.value = material.specularColorMap;
      refreshTransformUniform(material.specularColorMap, uniforms.specularColorMapTransform);
    }
    if (material.specularIntensityMap) {
      uniforms.specularIntensityMap.value = material.specularIntensityMap;
      refreshTransformUniform(material.specularIntensityMap, uniforms.specularIntensityMapTransform);
    }
  }
  function refreshUniformsMatcap(uniforms, material) {
    if (material.matcap) {
      uniforms.matcap.value = material.matcap;
    }
  }
  function refreshUniformsDistance(uniforms, material) {
    const light = properties.get(material).light;
    uniforms.referencePosition.value.setFromMatrixPosition(light.matrixWorld);
    uniforms.nearDistance.value = light.shadow.camera.near;
    uniforms.farDistance.value = light.shadow.camera.far;
  }
  return {
    refreshFogUniforms,
    refreshMaterialUniforms
  };
}
function WebGLUniformsGroups(gl, info, capabilities, state) {
  let buffers = {};
  let updateList = {};
  let allocatedBindingPoints = [];
  const maxBindingPoints = capabilities.isWebGL2 ? gl.getParameter(gl.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function bind(uniformsGroup, program) {
    const webglProgram = program.program;
    state.uniformBlockBinding(uniformsGroup, webglProgram);
  }
  function update(uniformsGroup, program) {
    let buffer = buffers[uniformsGroup.id];
    if (buffer === void 0) {
      prepareUniformsGroup(uniformsGroup);
      buffer = createBuffer(uniformsGroup);
      buffers[uniformsGroup.id] = buffer;
      uniformsGroup.addEventListener("dispose", onUniformsGroupsDispose);
    }
    const webglProgram = program.program;
    state.updateUBOMapping(uniformsGroup, webglProgram);
    const frame = info.render.frame;
    if (updateList[uniformsGroup.id] !== frame) {
      updateBufferData(uniformsGroup);
      updateList[uniformsGroup.id] = frame;
    }
  }
  function createBuffer(uniformsGroup) {
    const bindingPointIndex = allocateBindingPointIndex();
    uniformsGroup.__bindingPointIndex = bindingPointIndex;
    const buffer = gl.createBuffer();
    const size = uniformsGroup.__size;
    const usage = uniformsGroup.usage;
    gl.bindBuffer(gl.UNIFORM_BUFFER, buffer);
    gl.bufferData(gl.UNIFORM_BUFFER, size, usage);
    gl.bindBuffer(gl.UNIFORM_BUFFER, null);
    gl.bindBufferBase(gl.UNIFORM_BUFFER, bindingPointIndex, buffer);
    return buffer;
  }
  function allocateBindingPointIndex() {
    for (let i = 0; i < maxBindingPoints; i++) {
      if (allocatedBindingPoints.indexOf(i) === -1) {
        allocatedBindingPoints.push(i);
        return i;
      }
    }
    console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.");
    return 0;
  }
  function updateBufferData(uniformsGroup) {
    const buffer = buffers[uniformsGroup.id];
    const uniforms = uniformsGroup.uniforms;
    const cache = uniformsGroup.__cache;
    gl.bindBuffer(gl.UNIFORM_BUFFER, buffer);
    for (let i = 0, il = uniforms.length; i < il; i++) {
      const uniform = uniforms[i];
      if (hasUniformChanged(uniform, i, cache) === true) {
        const offset = uniform.__offset;
        const values = Array.isArray(uniform.value) ? uniform.value : [uniform.value];
        let arrayOffset = 0;
        for (let i2 = 0; i2 < values.length; i2++) {
          const value = values[i2];
          const info2 = getUniformSize(value);
          if (typeof value === "number") {
            uniform.__data[0] = value;
            gl.bufferSubData(gl.UNIFORM_BUFFER, offset + arrayOffset, uniform.__data);
          } else if (value.isMatrix3) {
            uniform.__data[0] = value.elements[0];
            uniform.__data[1] = value.elements[1];
            uniform.__data[2] = value.elements[2];
            uniform.__data[3] = value.elements[0];
            uniform.__data[4] = value.elements[3];
            uniform.__data[5] = value.elements[4];
            uniform.__data[6] = value.elements[5];
            uniform.__data[7] = value.elements[0];
            uniform.__data[8] = value.elements[6];
            uniform.__data[9] = value.elements[7];
            uniform.__data[10] = value.elements[8];
            uniform.__data[11] = value.elements[0];
          } else {
            value.toArray(uniform.__data, arrayOffset);
            arrayOffset += info2.storage / Float32Array.BYTES_PER_ELEMENT;
          }
        }
        gl.bufferSubData(gl.UNIFORM_BUFFER, offset, uniform.__data);
      }
    }
    gl.bindBuffer(gl.UNIFORM_BUFFER, null);
  }
  function hasUniformChanged(uniform, index, cache) {
    const value = uniform.value;
    if (cache[index] === void 0) {
      if (typeof value === "number") {
        cache[index] = value;
      } else {
        const values = Array.isArray(value) ? value : [value];
        const tempValues = [];
        for (let i = 0; i < values.length; i++) {
          tempValues.push(values[i].clone());
        }
        cache[index] = tempValues;
      }
      return true;
    } else {
      if (typeof value === "number") {
        if (cache[index] !== value) {
          cache[index] = value;
          return true;
        }
      } else {
        const cachedObjects = Array.isArray(cache[index]) ? cache[index] : [cache[index]];
        const values = Array.isArray(value) ? value : [value];
        for (let i = 0; i < cachedObjects.length; i++) {
          const cachedObject = cachedObjects[i];
          if (cachedObject.equals(values[i]) === false) {
            cachedObject.copy(values[i]);
            return true;
          }
        }
      }
    }
    return false;
  }
  function prepareUniformsGroup(uniformsGroup) {
    const uniforms = uniformsGroup.uniforms;
    let offset = 0;
    const chunkSize = 16;
    let chunkOffset = 0;
    for (let i = 0, l = uniforms.length; i < l; i++) {
      const uniform = uniforms[i];
      const infos = {
        boundary: 0,
        storage: 0
      };
      const values = Array.isArray(uniform.value) ? uniform.value : [uniform.value];
      for (let j = 0, jl = values.length; j < jl; j++) {
        const value = values[j];
        const info2 = getUniformSize(value);
        infos.boundary += info2.boundary;
        infos.storage += info2.storage;
      }
      uniform.__data = new Float32Array(infos.storage / Float32Array.BYTES_PER_ELEMENT);
      uniform.__offset = offset;
      if (i > 0) {
        chunkOffset = offset % chunkSize;
        const remainingSizeInChunk = chunkSize - chunkOffset;
        if (chunkOffset !== 0 && remainingSizeInChunk - infos.boundary < 0) {
          offset += chunkSize - chunkOffset;
          uniform.__offset = offset;
        }
      }
      offset += infos.storage;
    }
    chunkOffset = offset % chunkSize;
    if (chunkOffset > 0)
      offset += chunkSize - chunkOffset;
    uniformsGroup.__size = offset;
    uniformsGroup.__cache = {};
    return this;
  }
  function getUniformSize(value) {
    const info2 = {
      boundary: 0,
      storage: 0
    };
    if (typeof value === "number") {
      info2.boundary = 4;
      info2.storage = 4;
    } else if (value.isVector2) {
      info2.boundary = 8;
      info2.storage = 8;
    } else if (value.isVector3 || value.isColor) {
      info2.boundary = 16;
      info2.storage = 12;
    } else if (value.isVector4) {
      info2.boundary = 16;
      info2.storage = 16;
    } else if (value.isMatrix3) {
      info2.boundary = 48;
      info2.storage = 48;
    } else if (value.isMatrix4) {
      info2.boundary = 64;
      info2.storage = 64;
    } else if (value.isTexture) {
      console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");
    } else {
      console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", value);
    }
    return info2;
  }
  function onUniformsGroupsDispose(event) {
    const uniformsGroup = event.target;
    uniformsGroup.removeEventListener("dispose", onUniformsGroupsDispose);
    const index = allocatedBindingPoints.indexOf(uniformsGroup.__bindingPointIndex);
    allocatedBindingPoints.splice(index, 1);
    gl.deleteBuffer(buffers[uniformsGroup.id]);
    delete buffers[uniformsGroup.id];
    delete updateList[uniformsGroup.id];
  }
  function dispose() {
    for (const id in buffers) {
      gl.deleteBuffer(buffers[id]);
    }
    allocatedBindingPoints = [];
    buffers = {};
    updateList = {};
  }
  return {
    bind,
    update,
    dispose
  };
}
function createCanvasElement() {
  const canvas = createElementNS("canvas");
  canvas.style.display = "block";
  return canvas;
}
class WebGLRenderer {
  constructor(parameters = {}) {
    const {
      canvas = createCanvasElement(),
      context = null,
      depth = true,
      stencil = true,
      alpha = false,
      antialias = false,
      premultipliedAlpha = true,
      preserveDrawingBuffer = false,
      powerPreference = "default",
      failIfMajorPerformanceCaveat = false
    } = parameters;
    this.isWebGLRenderer = true;
    let _alpha;
    if (context !== null) {
      _alpha = context.getContextAttributes().alpha;
    } else {
      _alpha = alpha;
    }
    let currentRenderList = null;
    let currentRenderState = null;
    const renderListStack = [];
    const renderStateStack = [];
    this.domElement = canvas;
    this.debug = {
      checkShaderErrors: true,
      onShaderError: null
    };
    this.autoClear = true;
    this.autoClearColor = true;
    this.autoClearDepth = true;
    this.autoClearStencil = true;
    this.sortObjects = true;
    this.clippingPlanes = [];
    this.localClippingEnabled = false;
    this.outputColorSpace = SRGBColorSpace;
    this.useLegacyLights = true;
    this.toneMapping = NoToneMapping;
    this.toneMappingExposure = 1;
    const _this = this;
    let _isContextLost = false;
    let _currentActiveCubeFace = 0;
    let _currentActiveMipmapLevel = 0;
    let _currentRenderTarget = null;
    let _currentMaterialId = -1;
    let _currentCamera = null;
    const _currentViewport = new Vector4();
    const _currentScissor = new Vector4();
    let _currentScissorTest = null;
    let _width = canvas.width;
    let _height = canvas.height;
    let _pixelRatio = 1;
    let _opaqueSort = null;
    let _transparentSort = null;
    const _viewport = new Vector4(0, 0, _width, _height);
    const _scissor = new Vector4(0, 0, _width, _height);
    let _scissorTest = false;
    const _frustum = new Frustum();
    let _clippingEnabled = false;
    let _localClippingEnabled = false;
    let _transmissionRenderTarget = null;
    const _projScreenMatrix = new Matrix4();
    const _vector3 = new Vector3();
    const _emptyScene = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    function getTargetPixelRatio() {
      return _currentRenderTarget === null ? _pixelRatio : 1;
    }
    let _gl = context;
    function getContext(contextNames, contextAttributes) {
      for (let i = 0; i < contextNames.length; i++) {
        const contextName = contextNames[i];
        const context2 = canvas.getContext(contextName, contextAttributes);
        if (context2 !== null)
          return context2;
      }
      return null;
    }
    try {
      const contextAttributes = {
        alpha: true,
        depth,
        stencil,
        antialias,
        premultipliedAlpha,
        preserveDrawingBuffer,
        powerPreference,
        failIfMajorPerformanceCaveat
      };
      if ("setAttribute" in canvas)
        canvas.setAttribute("data-engine", `three.js r${REVISION}`);
      canvas.addEventListener("webglcontextlost", onContextLost, false);
      canvas.addEventListener("webglcontextrestored", onContextRestore, false);
      canvas.addEventListener("webglcontextcreationerror", onContextCreationError, false);
      if (_gl === null) {
        const contextNames = ["webgl2", "webgl", "experimental-webgl"];
        if (_this.isWebGL1Renderer === true) {
          contextNames.shift();
        }
        _gl = getContext(contextNames, contextAttributes);
        if (_gl === null) {
          if (getContext(contextNames)) {
            throw new Error("Error creating WebGL context with your selected attributes.");
          } else {
            throw new Error("Error creating WebGL context.");
          }
        }
      }
      if (_gl.getShaderPrecisionFormat === void 0) {
        _gl.getShaderPrecisionFormat = function() {
          return { "rangeMin": 1, "rangeMax": 1, "precision": 1 };
        };
      }
    } catch (error) {
      console.error("THREE.WebGLRenderer: " + error.message);
      throw error;
    }
    let extensions, capabilities, state, info;
    let properties, textures, cubemaps, cubeuvmaps, attributes, geometries, objects;
    let programCache, materials, renderLists, renderStates, clipping, shadowMap;
    let background, morphtargets, bufferRenderer, indexedBufferRenderer;
    let utils, bindingStates, uniformsGroups;
    function initGLContext() {
      extensions = new WebGLExtensions(_gl);
      capabilities = new WebGLCapabilities(_gl, extensions, parameters);
      extensions.init(capabilities);
      utils = new WebGLUtils(_gl, extensions, capabilities);
      state = new WebGLState(_gl, extensions, capabilities);
      info = new WebGLInfo(_gl);
      properties = new WebGLProperties();
      textures = new WebGLTextures(_gl, extensions, state, properties, capabilities, utils, info);
      cubemaps = new WebGLCubeMaps(_this);
      cubeuvmaps = new WebGLCubeUVMaps(_this);
      attributes = new WebGLAttributes(_gl, capabilities);
      bindingStates = new WebGLBindingStates(_gl, extensions, attributes, capabilities);
      geometries = new WebGLGeometries(_gl, attributes, info, bindingStates);
      objects = new WebGLObjects(_gl, geometries, attributes, info);
      morphtargets = new WebGLMorphtargets(_gl, capabilities, textures);
      clipping = new WebGLClipping(properties);
      programCache = new WebGLPrograms(_this, cubemaps, cubeuvmaps, extensions, capabilities, bindingStates, clipping);
      materials = new WebGLMaterials(_this, properties);
      renderLists = new WebGLRenderLists();
      renderStates = new WebGLRenderStates(extensions, capabilities);
      background = new WebGLBackground(_this, cubemaps, cubeuvmaps, state, objects, _alpha, premultipliedAlpha);
      shadowMap = new WebGLShadowMap(_this, objects, capabilities);
      uniformsGroups = new WebGLUniformsGroups(_gl, info, capabilities, state);
      bufferRenderer = new WebGLBufferRenderer(_gl, extensions, info, capabilities);
      indexedBufferRenderer = new WebGLIndexedBufferRenderer(_gl, extensions, info, capabilities);
      info.programs = programCache.programs;
      _this.capabilities = capabilities;
      _this.extensions = extensions;
      _this.properties = properties;
      _this.renderLists = renderLists;
      _this.shadowMap = shadowMap;
      _this.state = state;
      _this.info = info;
    }
    initGLContext();
    const xr = new WebXRManager(_this, _gl);
    this.xr = xr;
    this.getContext = function() {
      return _gl;
    };
    this.getContextAttributes = function() {
      return _gl.getContextAttributes();
    };
    this.forceContextLoss = function() {
      const extension = extensions.get("WEBGL_lose_context");
      if (extension)
        extension.loseContext();
    };
    this.forceContextRestore = function() {
      const extension = extensions.get("WEBGL_lose_context");
      if (extension)
        extension.restoreContext();
    };
    this.getPixelRatio = function() {
      return _pixelRatio;
    };
    this.setPixelRatio = function(value) {
      if (value === void 0)
        return;
      _pixelRatio = value;
      this.setSize(_width, _height, false);
    };
    this.getSize = function(target) {
      return target.set(_width, _height);
    };
    this.setSize = function(width, height, updateStyle = true) {
      if (xr.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      _width = width;
      _height = height;
      canvas.width = Math.floor(width * _pixelRatio);
      canvas.height = Math.floor(height * _pixelRatio);
      if (updateStyle === true) {
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
      }
      this.setViewport(0, 0, width, height);
    };
    this.getDrawingBufferSize = function(target) {
      return target.set(_width * _pixelRatio, _height * _pixelRatio).floor();
    };
    this.setDrawingBufferSize = function(width, height, pixelRatio) {
      _width = width;
      _height = height;
      _pixelRatio = pixelRatio;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      this.setViewport(0, 0, width, height);
    };
    this.getCurrentViewport = function(target) {
      return target.copy(_currentViewport);
    };
    this.getViewport = function(target) {
      return target.copy(_viewport);
    };
    this.setViewport = function(x, y, width, height) {
      if (x.isVector4) {
        _viewport.set(x.x, x.y, x.z, x.w);
      } else {
        _viewport.set(x, y, width, height);
      }
      state.viewport(_currentViewport.copy(_viewport).multiplyScalar(_pixelRatio).floor());
    };
    this.getScissor = function(target) {
      return target.copy(_scissor);
    };
    this.setScissor = function(x, y, width, height) {
      if (x.isVector4) {
        _scissor.set(x.x, x.y, x.z, x.w);
      } else {
        _scissor.set(x, y, width, height);
      }
      state.scissor(_currentScissor.copy(_scissor).multiplyScalar(_pixelRatio).floor());
    };
    this.getScissorTest = function() {
      return _scissorTest;
    };
    this.setScissorTest = function(boolean) {
      state.setScissorTest(_scissorTest = boolean);
    };
    this.setOpaqueSort = function(method) {
      _opaqueSort = method;
    };
    this.setTransparentSort = function(method) {
      _transparentSort = method;
    };
    this.getClearColor = function(target) {
      return target.copy(background.getClearColor());
    };
    this.setClearColor = function() {
      background.setClearColor.apply(background, arguments);
    };
    this.getClearAlpha = function() {
      return background.getClearAlpha();
    };
    this.setClearAlpha = function() {
      background.setClearAlpha.apply(background, arguments);
    };
    this.clear = function(color = true, depth2 = true, stencil2 = true) {
      let bits = 0;
      if (color)
        bits |= _gl.COLOR_BUFFER_BIT;
      if (depth2)
        bits |= _gl.DEPTH_BUFFER_BIT;
      if (stencil2)
        bits |= _gl.STENCIL_BUFFER_BIT;
      _gl.clear(bits);
    };
    this.clearColor = function() {
      this.clear(true, false, false);
    };
    this.clearDepth = function() {
      this.clear(false, true, false);
    };
    this.clearStencil = function() {
      this.clear(false, false, true);
    };
    this.dispose = function() {
      canvas.removeEventListener("webglcontextlost", onContextLost, false);
      canvas.removeEventListener("webglcontextrestored", onContextRestore, false);
      canvas.removeEventListener("webglcontextcreationerror", onContextCreationError, false);
      renderLists.dispose();
      renderStates.dispose();
      properties.dispose();
      cubemaps.dispose();
      cubeuvmaps.dispose();
      objects.dispose();
      bindingStates.dispose();
      uniformsGroups.dispose();
      programCache.dispose();
      xr.dispose();
      xr.removeEventListener("sessionstart", onXRSessionStart);
      xr.removeEventListener("sessionend", onXRSessionEnd);
      if (_transmissionRenderTarget) {
        _transmissionRenderTarget.dispose();
        _transmissionRenderTarget = null;
      }
      animation.stop();
    };
    function onContextLost(event) {
      event.preventDefault();
      console.log("THREE.WebGLRenderer: Context Lost.");
      _isContextLost = true;
    }
    function onContextRestore() {
      console.log("THREE.WebGLRenderer: Context Restored.");
      _isContextLost = false;
      const infoAutoReset = info.autoReset;
      const shadowMapEnabled = shadowMap.enabled;
      const shadowMapAutoUpdate = shadowMap.autoUpdate;
      const shadowMapNeedsUpdate = shadowMap.needsUpdate;
      const shadowMapType = shadowMap.type;
      initGLContext();
      info.autoReset = infoAutoReset;
      shadowMap.enabled = shadowMapEnabled;
      shadowMap.autoUpdate = shadowMapAutoUpdate;
      shadowMap.needsUpdate = shadowMapNeedsUpdate;
      shadowMap.type = shadowMapType;
    }
    function onContextCreationError(event) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", event.statusMessage);
    }
    function onMaterialDispose(event) {
      const material = event.target;
      material.removeEventListener("dispose", onMaterialDispose);
      deallocateMaterial(material);
    }
    function deallocateMaterial(material) {
      releaseMaterialProgramReferences(material);
      properties.remove(material);
    }
    function releaseMaterialProgramReferences(material) {
      const programs = properties.get(material).programs;
      if (programs !== void 0) {
        programs.forEach(function(program) {
          programCache.releaseProgram(program);
        });
        if (material.isShaderMaterial) {
          programCache.releaseShaderCache(material);
        }
      }
    }
    this.renderBufferDirect = function(camera, scene, geometry, material, object, group) {
      if (scene === null)
        scene = _emptyScene;
      const frontFaceCW = object.isMesh && object.matrixWorld.determinant() < 0;
      const program = setProgram(camera, scene, geometry, material, object);
      state.setMaterial(material, frontFaceCW);
      let index = geometry.index;
      let rangeFactor = 1;
      if (material.wireframe === true) {
        index = geometries.getWireframeAttribute(geometry);
        rangeFactor = 2;
      }
      const drawRange = geometry.drawRange;
      const position = geometry.attributes.position;
      let drawStart = drawRange.start * rangeFactor;
      let drawEnd = (drawRange.start + drawRange.count) * rangeFactor;
      if (group !== null) {
        drawStart = Math.max(drawStart, group.start * rangeFactor);
        drawEnd = Math.min(drawEnd, (group.start + group.count) * rangeFactor);
      }
      if (index !== null) {
        drawStart = Math.max(drawStart, 0);
        drawEnd = Math.min(drawEnd, index.count);
      } else if (position !== void 0 && position !== null) {
        drawStart = Math.max(drawStart, 0);
        drawEnd = Math.min(drawEnd, position.count);
      }
      const drawCount = drawEnd - drawStart;
      if (drawCount < 0 || drawCount === Infinity)
        return;
      bindingStates.setup(object, material, program, geometry, index);
      let attribute;
      let renderer = bufferRenderer;
      if (index !== null) {
        attribute = attributes.get(index);
        renderer = indexedBufferRenderer;
        renderer.setIndex(attribute);
      }
      if (object.isMesh) {
        if (material.wireframe === true) {
          state.setLineWidth(material.wireframeLinewidth * getTargetPixelRatio());
          renderer.setMode(_gl.LINES);
        } else {
          renderer.setMode(_gl.TRIANGLES);
        }
      } else if (object.isLine) {
        let lineWidth = material.linewidth;
        if (lineWidth === void 0)
          lineWidth = 1;
        state.setLineWidth(lineWidth * getTargetPixelRatio());
        if (object.isLineSegments) {
          renderer.setMode(_gl.LINES);
        } else if (object.isLineLoop) {
          renderer.setMode(_gl.LINE_LOOP);
        } else {
          renderer.setMode(_gl.LINE_STRIP);
        }
      } else if (object.isPoints) {
        renderer.setMode(_gl.POINTS);
      } else if (object.isSprite) {
        renderer.setMode(_gl.TRIANGLES);
      }
      if (object.isInstancedMesh) {
        renderer.renderInstances(drawStart, drawCount, object.count);
      } else if (geometry.isInstancedBufferGeometry) {
        const maxInstanceCount = geometry._maxInstanceCount !== void 0 ? geometry._maxInstanceCount : Infinity;
        const instanceCount = Math.min(geometry.instanceCount, maxInstanceCount);
        renderer.renderInstances(drawStart, drawCount, instanceCount);
      } else {
        renderer.render(drawStart, drawCount);
      }
    };
    this.compile = function(scene, camera) {
      function prepare(material, scene2, object) {
        if (material.transparent === true && material.side === DoubleSide && material.forceSinglePass === false) {
          material.side = BackSide;
          material.needsUpdate = true;
          getProgram(material, scene2, object);
          material.side = FrontSide;
          material.needsUpdate = true;
          getProgram(material, scene2, object);
          material.side = DoubleSide;
        } else {
          getProgram(material, scene2, object);
        }
      }
      currentRenderState = renderStates.get(scene);
      currentRenderState.init();
      renderStateStack.push(currentRenderState);
      scene.traverseVisible(function(object) {
        if (object.isLight && object.layers.test(camera.layers)) {
          currentRenderState.pushLight(object);
          if (object.castShadow) {
            currentRenderState.pushShadow(object);
          }
        }
      });
      currentRenderState.setupLights(_this.useLegacyLights);
      scene.traverse(function(object) {
        const material = object.material;
        if (material) {
          if (Array.isArray(material)) {
            for (let i = 0; i < material.length; i++) {
              const material2 = material[i];
              prepare(material2, scene, object);
            }
          } else {
            prepare(material, scene, object);
          }
        }
      });
      renderStateStack.pop();
      currentRenderState = null;
    };
    let onAnimationFrameCallback = null;
    function onAnimationFrame(time) {
      if (onAnimationFrameCallback)
        onAnimationFrameCallback(time);
    }
    function onXRSessionStart() {
      animation.stop();
    }
    function onXRSessionEnd() {
      animation.start();
    }
    const animation = new WebGLAnimation();
    animation.setAnimationLoop(onAnimationFrame);
    if (typeof self !== "undefined")
      animation.setContext(self);
    this.setAnimationLoop = function(callback) {
      onAnimationFrameCallback = callback;
      xr.setAnimationLoop(callback);
      callback === null ? animation.stop() : animation.start();
    };
    xr.addEventListener("sessionstart", onXRSessionStart);
    xr.addEventListener("sessionend", onXRSessionEnd);
    this.render = function(scene, camera) {
      if (camera !== void 0 && camera.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (_isContextLost === true)
        return;
      if (scene.matrixWorldAutoUpdate === true)
        scene.updateMatrixWorld();
      if (camera.parent === null && camera.matrixWorldAutoUpdate === true)
        camera.updateMatrixWorld();
      if (xr.enabled === true && xr.isPresenting === true) {
        if (xr.cameraAutoUpdate === true)
          xr.updateCamera(camera);
        camera = xr.getCamera();
      }
      if (scene.isScene === true)
        scene.onBeforeRender(_this, scene, camera, _currentRenderTarget);
      currentRenderState = renderStates.get(scene, renderStateStack.length);
      currentRenderState.init();
      renderStateStack.push(currentRenderState);
      _projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
      _frustum.setFromProjectionMatrix(_projScreenMatrix);
      _localClippingEnabled = this.localClippingEnabled;
      _clippingEnabled = clipping.init(this.clippingPlanes, _localClippingEnabled);
      currentRenderList = renderLists.get(scene, renderListStack.length);
      currentRenderList.init();
      renderListStack.push(currentRenderList);
      projectObject(scene, camera, 0, _this.sortObjects);
      currentRenderList.finish();
      if (_this.sortObjects === true) {
        currentRenderList.sort(_opaqueSort, _transparentSort);
      }
      if (_clippingEnabled === true)
        clipping.beginShadows();
      const shadowsArray = currentRenderState.state.shadowsArray;
      shadowMap.render(shadowsArray, scene, camera);
      if (_clippingEnabled === true)
        clipping.endShadows();
      if (this.info.autoReset === true)
        this.info.reset();
      background.render(currentRenderList, scene);
      currentRenderState.setupLights(_this.useLegacyLights);
      if (camera.isArrayCamera) {
        const cameras = camera.cameras;
        for (let i = 0, l = cameras.length; i < l; i++) {
          const camera2 = cameras[i];
          renderScene(currentRenderList, scene, camera2, camera2.viewport);
        }
      } else {
        renderScene(currentRenderList, scene, camera);
      }
      if (_currentRenderTarget !== null) {
        textures.updateMultisampleRenderTarget(_currentRenderTarget);
        textures.updateRenderTargetMipmap(_currentRenderTarget);
      }
      if (scene.isScene === true)
        scene.onAfterRender(_this, scene, camera);
      bindingStates.resetDefaultState();
      _currentMaterialId = -1;
      _currentCamera = null;
      renderStateStack.pop();
      if (renderStateStack.length > 0) {
        currentRenderState = renderStateStack[renderStateStack.length - 1];
      } else {
        currentRenderState = null;
      }
      renderListStack.pop();
      if (renderListStack.length > 0) {
        currentRenderList = renderListStack[renderListStack.length - 1];
      } else {
        currentRenderList = null;
      }
    };
    function projectObject(object, camera, groupOrder, sortObjects) {
      if (object.visible === false)
        return;
      const visible = object.layers.test(camera.layers);
      if (visible) {
        if (object.isGroup) {
          groupOrder = object.renderOrder;
        } else if (object.isLOD) {
          if (object.autoUpdate === true)
            object.update(camera);
        } else if (object.isLight) {
          currentRenderState.pushLight(object);
          if (object.castShadow) {
            currentRenderState.pushShadow(object);
          }
        } else if (object.isSprite) {
          if (!object.frustumCulled || _frustum.intersectsSprite(object)) {
            if (sortObjects) {
              _vector3.setFromMatrixPosition(object.matrixWorld).applyMatrix4(_projScreenMatrix);
            }
            const geometry = objects.update(object);
            const material = object.material;
            if (material.visible) {
              currentRenderList.push(object, geometry, material, groupOrder, _vector3.z, null);
            }
          }
        } else if (object.isMesh || object.isLine || object.isPoints) {
          if (!object.frustumCulled || _frustum.intersectsObject(object)) {
            if (object.isSkinnedMesh) {
              if (object.skeleton.frame !== info.render.frame) {
                object.skeleton.update();
                object.skeleton.frame = info.render.frame;
              }
            }
            const geometry = objects.update(object);
            const material = object.material;
            if (sortObjects) {
              if (geometry.boundingSphere === null)
                geometry.computeBoundingSphere();
              _vector3.copy(geometry.boundingSphere.center).applyMatrix4(object.matrixWorld).applyMatrix4(_projScreenMatrix);
            }
            if (Array.isArray(material)) {
              const groups = geometry.groups;
              for (let i = 0, l = groups.length; i < l; i++) {
                const group = groups[i];
                const groupMaterial = material[group.materialIndex];
                if (groupMaterial && groupMaterial.visible) {
                  currentRenderList.push(object, geometry, groupMaterial, groupOrder, _vector3.z, group);
                }
              }
            } else if (material.visible) {
              currentRenderList.push(object, geometry, material, groupOrder, _vector3.z, null);
            }
          }
        }
      }
      const children = object.children;
      for (let i = 0, l = children.length; i < l; i++) {
        projectObject(children[i], camera, groupOrder, sortObjects);
      }
    }
    function renderScene(currentRenderList2, scene, camera, viewport) {
      const opaqueObjects = currentRenderList2.opaque;
      const transmissiveObjects = currentRenderList2.transmissive;
      const transparentObjects = currentRenderList2.transparent;
      currentRenderState.setupLightsView(camera);
      if (_clippingEnabled === true)
        clipping.setGlobalState(_this.clippingPlanes, camera);
      if (transmissiveObjects.length > 0)
        renderTransmissionPass(opaqueObjects, transmissiveObjects, scene, camera);
      if (viewport)
        state.viewport(_currentViewport.copy(viewport));
      if (opaqueObjects.length > 0)
        renderObjects(opaqueObjects, scene, camera);
      if (transmissiveObjects.length > 0)
        renderObjects(transmissiveObjects, scene, camera);
      if (transparentObjects.length > 0)
        renderObjects(transparentObjects, scene, camera);
      state.buffers.depth.setTest(true);
      state.buffers.depth.setMask(true);
      state.buffers.color.setMask(true);
      state.setPolygonOffset(false);
    }
    function renderTransmissionPass(opaqueObjects, transmissiveObjects, scene, camera) {
      if (_transmissionRenderTarget === null) {
        const isWebGL2 = capabilities.isWebGL2;
        _transmissionRenderTarget = new WebGLRenderTarget(1024, 1024, {
          generateMipmaps: true,
          type: extensions.has("EXT_color_buffer_half_float") ? HalfFloatType : UnsignedByteType,
          minFilter: LinearMipmapLinearFilter,
          samples: isWebGL2 && antialias === true ? 4 : 0
        });
      }
      const currentRenderTarget = _this.getRenderTarget();
      _this.setRenderTarget(_transmissionRenderTarget);
      _this.clear();
      const currentToneMapping = _this.toneMapping;
      _this.toneMapping = NoToneMapping;
      renderObjects(opaqueObjects, scene, camera);
      textures.updateMultisampleRenderTarget(_transmissionRenderTarget);
      textures.updateRenderTargetMipmap(_transmissionRenderTarget);
      let renderTargetNeedsUpdate = false;
      for (let i = 0, l = transmissiveObjects.length; i < l; i++) {
        const renderItem = transmissiveObjects[i];
        const object = renderItem.object;
        const geometry = renderItem.geometry;
        const material = renderItem.material;
        const group = renderItem.group;
        if (material.side === DoubleSide && object.layers.test(camera.layers)) {
          const currentSide = material.side;
          material.side = BackSide;
          material.needsUpdate = true;
          renderObject(object, scene, camera, geometry, material, group);
          material.side = currentSide;
          material.needsUpdate = true;
          renderTargetNeedsUpdate = true;
        }
      }
      if (renderTargetNeedsUpdate === true) {
        textures.updateMultisampleRenderTarget(_transmissionRenderTarget);
        textures.updateRenderTargetMipmap(_transmissionRenderTarget);
      }
      _this.setRenderTarget(currentRenderTarget);
      _this.toneMapping = currentToneMapping;
    }
    function renderObjects(renderList, scene, camera) {
      const overrideMaterial = scene.isScene === true ? scene.overrideMaterial : null;
      for (let i = 0, l = renderList.length; i < l; i++) {
        const renderItem = renderList[i];
        const object = renderItem.object;
        const geometry = renderItem.geometry;
        const material = overrideMaterial === null ? renderItem.material : overrideMaterial;
        const group = renderItem.group;
        if (object.layers.test(camera.layers)) {
          renderObject(object, scene, camera, geometry, material, group);
        }
      }
    }
    function renderObject(object, scene, camera, geometry, material, group) {
      object.onBeforeRender(_this, scene, camera, geometry, material, group);
      object.modelViewMatrix.multiplyMatrices(camera.matrixWorldInverse, object.matrixWorld);
      object.normalMatrix.getNormalMatrix(object.modelViewMatrix);
      material.onBeforeRender(_this, scene, camera, geometry, object, group);
      if (material.transparent === true && material.side === DoubleSide && material.forceSinglePass === false) {
        material.side = BackSide;
        material.needsUpdate = true;
        _this.renderBufferDirect(camera, scene, geometry, material, object, group);
        material.side = FrontSide;
        material.needsUpdate = true;
        _this.renderBufferDirect(camera, scene, geometry, material, object, group);
        material.side = DoubleSide;
      } else {
        _this.renderBufferDirect(camera, scene, geometry, material, object, group);
      }
      object.onAfterRender(_this, scene, camera, geometry, material, group);
    }
    function getProgram(material, scene, object) {
      if (scene.isScene !== true)
        scene = _emptyScene;
      const materialProperties = properties.get(material);
      const lights = currentRenderState.state.lights;
      const shadowsArray = currentRenderState.state.shadowsArray;
      const lightsStateVersion = lights.state.version;
      const parameters2 = programCache.getParameters(material, lights.state, shadowsArray, scene, object);
      const programCacheKey = programCache.getProgramCacheKey(parameters2);
      let programs = materialProperties.programs;
      materialProperties.environment = material.isMeshStandardMaterial ? scene.environment : null;
      materialProperties.fog = scene.fog;
      materialProperties.envMap = (material.isMeshStandardMaterial ? cubeuvmaps : cubemaps).get(material.envMap || materialProperties.environment);
      if (programs === void 0) {
        material.addEventListener("dispose", onMaterialDispose);
        programs = /* @__PURE__ */ new Map();
        materialProperties.programs = programs;
      }
      let program = programs.get(programCacheKey);
      if (program !== void 0) {
        if (materialProperties.currentProgram === program && materialProperties.lightsStateVersion === lightsStateVersion) {
          updateCommonMaterialProperties(material, parameters2);
          return program;
        }
      } else {
        parameters2.uniforms = programCache.getUniforms(material);
        material.onBuild(object, parameters2, _this);
        material.onBeforeCompile(parameters2, _this);
        program = programCache.acquireProgram(parameters2, programCacheKey);
        programs.set(programCacheKey, program);
        materialProperties.uniforms = parameters2.uniforms;
      }
      const uniforms = materialProperties.uniforms;
      if (!material.isShaderMaterial && !material.isRawShaderMaterial || material.clipping === true) {
        uniforms.clippingPlanes = clipping.uniform;
      }
      updateCommonMaterialProperties(material, parameters2);
      materialProperties.needsLights = materialNeedsLights(material);
      materialProperties.lightsStateVersion = lightsStateVersion;
      if (materialProperties.needsLights) {
        uniforms.ambientLightColor.value = lights.state.ambient;
        uniforms.lightProbe.value = lights.state.probe;
        uniforms.directionalLights.value = lights.state.directional;
        uniforms.directionalLightShadows.value = lights.state.directionalShadow;
        uniforms.spotLights.value = lights.state.spot;
        uniforms.spotLightShadows.value = lights.state.spotShadow;
        uniforms.rectAreaLights.value = lights.state.rectArea;
        uniforms.ltc_1.value = lights.state.rectAreaLTC1;
        uniforms.ltc_2.value = lights.state.rectAreaLTC2;
        uniforms.pointLights.value = lights.state.point;
        uniforms.pointLightShadows.value = lights.state.pointShadow;
        uniforms.hemisphereLights.value = lights.state.hemi;
        uniforms.directionalShadowMap.value = lights.state.directionalShadowMap;
        uniforms.directionalShadowMatrix.value = lights.state.directionalShadowMatrix;
        uniforms.spotShadowMap.value = lights.state.spotShadowMap;
        uniforms.spotLightMatrix.value = lights.state.spotLightMatrix;
        uniforms.spotLightMap.value = lights.state.spotLightMap;
        uniforms.pointShadowMap.value = lights.state.pointShadowMap;
        uniforms.pointShadowMatrix.value = lights.state.pointShadowMatrix;
      }
      const progUniforms = program.getUniforms();
      const uniformsList = WebGLUniforms.seqWithValue(progUniforms.seq, uniforms);
      materialProperties.currentProgram = program;
      materialProperties.uniformsList = uniformsList;
      return program;
    }
    function updateCommonMaterialProperties(material, parameters2) {
      const materialProperties = properties.get(material);
      materialProperties.outputColorSpace = parameters2.outputColorSpace;
      materialProperties.instancing = parameters2.instancing;
      materialProperties.skinning = parameters2.skinning;
      materialProperties.morphTargets = parameters2.morphTargets;
      materialProperties.morphNormals = parameters2.morphNormals;
      materialProperties.morphColors = parameters2.morphColors;
      materialProperties.morphTargetsCount = parameters2.morphTargetsCount;
      materialProperties.numClippingPlanes = parameters2.numClippingPlanes;
      materialProperties.numIntersection = parameters2.numClipIntersection;
      materialProperties.vertexAlphas = parameters2.vertexAlphas;
      materialProperties.vertexTangents = parameters2.vertexTangents;
      materialProperties.toneMapping = parameters2.toneMapping;
    }
    function setProgram(camera, scene, geometry, material, object) {
      if (scene.isScene !== true)
        scene = _emptyScene;
      textures.resetTextureUnits();
      const fog = scene.fog;
      const environment = material.isMeshStandardMaterial ? scene.environment : null;
      const colorSpace = _currentRenderTarget === null ? _this.outputColorSpace : _currentRenderTarget.isXRRenderTarget === true ? _currentRenderTarget.texture.colorSpace : LinearSRGBColorSpace;
      const envMap = (material.isMeshStandardMaterial ? cubeuvmaps : cubemaps).get(material.envMap || environment);
      const vertexAlphas = material.vertexColors === true && !!geometry.attributes.color && geometry.attributes.color.itemSize === 4;
      const vertexTangents = !!material.normalMap && !!geometry.attributes.tangent;
      const morphTargets = !!geometry.morphAttributes.position;
      const morphNormals = !!geometry.morphAttributes.normal;
      const morphColors = !!geometry.morphAttributes.color;
      const toneMapping = material.toneMapped ? _this.toneMapping : NoToneMapping;
      const morphAttribute = geometry.morphAttributes.position || geometry.morphAttributes.normal || geometry.morphAttributes.color;
      const morphTargetsCount = morphAttribute !== void 0 ? morphAttribute.length : 0;
      const materialProperties = properties.get(material);
      const lights = currentRenderState.state.lights;
      if (_clippingEnabled === true) {
        if (_localClippingEnabled === true || camera !== _currentCamera) {
          const useCache = camera === _currentCamera && material.id === _currentMaterialId;
          clipping.setState(material, camera, useCache);
        }
      }
      let needsProgramChange = false;
      if (material.version === materialProperties.__version) {
        if (materialProperties.needsLights && materialProperties.lightsStateVersion !== lights.state.version) {
          needsProgramChange = true;
        } else if (materialProperties.outputColorSpace !== colorSpace) {
          needsProgramChange = true;
        } else if (object.isInstancedMesh && materialProperties.instancing === false) {
          needsProgramChange = true;
        } else if (!object.isInstancedMesh && materialProperties.instancing === true) {
          needsProgramChange = true;
        } else if (object.isSkinnedMesh && materialProperties.skinning === false) {
          needsProgramChange = true;
        } else if (!object.isSkinnedMesh && materialProperties.skinning === true) {
          needsProgramChange = true;
        } else if (materialProperties.envMap !== envMap) {
          needsProgramChange = true;
        } else if (material.fog === true && materialProperties.fog !== fog) {
          needsProgramChange = true;
        } else if (materialProperties.numClippingPlanes !== void 0 && (materialProperties.numClippingPlanes !== clipping.numPlanes || materialProperties.numIntersection !== clipping.numIntersection)) {
          needsProgramChange = true;
        } else if (materialProperties.vertexAlphas !== vertexAlphas) {
          needsProgramChange = true;
        } else if (materialProperties.vertexTangents !== vertexTangents) {
          needsProgramChange = true;
        } else if (materialProperties.morphTargets !== morphTargets) {
          needsProgramChange = true;
        } else if (materialProperties.morphNormals !== morphNormals) {
          needsProgramChange = true;
        } else if (materialProperties.morphColors !== morphColors) {
          needsProgramChange = true;
        } else if (materialProperties.toneMapping !== toneMapping) {
          needsProgramChange = true;
        } else if (capabilities.isWebGL2 === true && materialProperties.morphTargetsCount !== morphTargetsCount) {
          needsProgramChange = true;
        }
      } else {
        needsProgramChange = true;
        materialProperties.__version = material.version;
      }
      let program = materialProperties.currentProgram;
      if (needsProgramChange === true) {
        program = getProgram(material, scene, object);
      }
      let refreshProgram = false;
      let refreshMaterial = false;
      let refreshLights = false;
      const p_uniforms = program.getUniforms(), m_uniforms = materialProperties.uniforms;
      if (state.useProgram(program.program)) {
        refreshProgram = true;
        refreshMaterial = true;
        refreshLights = true;
      }
      if (material.id !== _currentMaterialId) {
        _currentMaterialId = material.id;
        refreshMaterial = true;
      }
      if (refreshProgram || _currentCamera !== camera) {
        p_uniforms.setValue(_gl, "projectionMatrix", camera.projectionMatrix);
        if (capabilities.logarithmicDepthBuffer) {
          p_uniforms.setValue(
            _gl,
            "logDepthBufFC",
            2 / (Math.log(camera.far + 1) / Math.LN2)
          );
        }
        if (_currentCamera !== camera) {
          _currentCamera = camera;
          refreshMaterial = true;
          refreshLights = true;
        }
        if (material.isShaderMaterial || material.isMeshPhongMaterial || material.isMeshToonMaterial || material.isMeshStandardMaterial || material.envMap) {
          const uCamPos = p_uniforms.map.cameraPosition;
          if (uCamPos !== void 0) {
            uCamPos.setValue(
              _gl,
              _vector3.setFromMatrixPosition(camera.matrixWorld)
            );
          }
        }
        if (material.isMeshPhongMaterial || material.isMeshToonMaterial || material.isMeshLambertMaterial || material.isMeshBasicMaterial || material.isMeshStandardMaterial || material.isShaderMaterial) {
          p_uniforms.setValue(_gl, "isOrthographic", camera.isOrthographicCamera === true);
        }
        if (material.isMeshPhongMaterial || material.isMeshToonMaterial || material.isMeshLambertMaterial || material.isMeshBasicMaterial || material.isMeshStandardMaterial || material.isShaderMaterial || material.isShadowMaterial || object.isSkinnedMesh) {
          p_uniforms.setValue(_gl, "viewMatrix", camera.matrixWorldInverse);
        }
      }
      if (object.isSkinnedMesh) {
        p_uniforms.setOptional(_gl, object, "bindMatrix");
        p_uniforms.setOptional(_gl, object, "bindMatrixInverse");
        const skeleton = object.skeleton;
        if (skeleton) {
          if (capabilities.floatVertexTextures) {
            if (skeleton.boneTexture === null)
              skeleton.computeBoneTexture();
            p_uniforms.setValue(_gl, "boneTexture", skeleton.boneTexture, textures);
            p_uniforms.setValue(_gl, "boneTextureSize", skeleton.boneTextureSize);
          } else {
            console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.");
          }
        }
      }
      const morphAttributes = geometry.morphAttributes;
      if (morphAttributes.position !== void 0 || morphAttributes.normal !== void 0 || morphAttributes.color !== void 0 && capabilities.isWebGL2 === true) {
        morphtargets.update(object, geometry, program);
      }
      if (refreshMaterial || materialProperties.receiveShadow !== object.receiveShadow) {
        materialProperties.receiveShadow = object.receiveShadow;
        p_uniforms.setValue(_gl, "receiveShadow", object.receiveShadow);
      }
      if (material.isMeshGouraudMaterial && material.envMap !== null) {
        m_uniforms.envMap.value = envMap;
        m_uniforms.flipEnvMap.value = envMap.isCubeTexture && envMap.isRenderTargetTexture === false ? -1 : 1;
      }
      if (refreshMaterial) {
        p_uniforms.setValue(_gl, "toneMappingExposure", _this.toneMappingExposure);
        if (materialProperties.needsLights) {
          markUniformsLightsNeedsUpdate(m_uniforms, refreshLights);
        }
        if (fog && material.fog === true) {
          materials.refreshFogUniforms(m_uniforms, fog);
        }
        materials.refreshMaterialUniforms(m_uniforms, material, _pixelRatio, _height, _transmissionRenderTarget);
        WebGLUniforms.upload(_gl, materialProperties.uniformsList, m_uniforms, textures);
      }
      if (material.isShaderMaterial && material.uniformsNeedUpdate === true) {
        WebGLUniforms.upload(_gl, materialProperties.uniformsList, m_uniforms, textures);
        material.uniformsNeedUpdate = false;
      }
      if (material.isSpriteMaterial) {
        p_uniforms.setValue(_gl, "center", object.center);
      }
      p_uniforms.setValue(_gl, "modelViewMatrix", object.modelViewMatrix);
      p_uniforms.setValue(_gl, "normalMatrix", object.normalMatrix);
      p_uniforms.setValue(_gl, "modelMatrix", object.matrixWorld);
      if (material.isShaderMaterial || material.isRawShaderMaterial) {
        const groups = material.uniformsGroups;
        for (let i = 0, l = groups.length; i < l; i++) {
          if (capabilities.isWebGL2) {
            const group = groups[i];
            uniformsGroups.update(group, program);
            uniformsGroups.bind(group, program);
          } else {
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
          }
        }
      }
      return program;
    }
    function markUniformsLightsNeedsUpdate(uniforms, value) {
      uniforms.ambientLightColor.needsUpdate = value;
      uniforms.lightProbe.needsUpdate = value;
      uniforms.directionalLights.needsUpdate = value;
      uniforms.directionalLightShadows.needsUpdate = value;
      uniforms.pointLights.needsUpdate = value;
      uniforms.pointLightShadows.needsUpdate = value;
      uniforms.spotLights.needsUpdate = value;
      uniforms.spotLightShadows.needsUpdate = value;
      uniforms.rectAreaLights.needsUpdate = value;
      uniforms.hemisphereLights.needsUpdate = value;
    }
    function materialNeedsLights(material) {
      return material.isMeshLambertMaterial || material.isMeshToonMaterial || material.isMeshPhongMaterial || material.isMeshStandardMaterial || material.isShadowMaterial || material.isShaderMaterial && material.lights === true;
    }
    this.getActiveCubeFace = function() {
      return _currentActiveCubeFace;
    };
    this.getActiveMipmapLevel = function() {
      return _currentActiveMipmapLevel;
    };
    this.getRenderTarget = function() {
      return _currentRenderTarget;
    };
    this.setRenderTargetTextures = function(renderTarget, colorTexture, depthTexture) {
      properties.get(renderTarget.texture).__webglTexture = colorTexture;
      properties.get(renderTarget.depthTexture).__webglTexture = depthTexture;
      const renderTargetProperties = properties.get(renderTarget);
      renderTargetProperties.__hasExternalTextures = true;
      if (renderTargetProperties.__hasExternalTextures) {
        renderTargetProperties.__autoAllocateDepthBuffer = depthTexture === void 0;
        if (!renderTargetProperties.__autoAllocateDepthBuffer) {
          if (extensions.has("WEBGL_multisampled_render_to_texture") === true) {
            console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided");
            renderTargetProperties.__useRenderToTexture = false;
          }
        }
      }
    };
    this.setRenderTargetFramebuffer = function(renderTarget, defaultFramebuffer) {
      const renderTargetProperties = properties.get(renderTarget);
      renderTargetProperties.__webglFramebuffer = defaultFramebuffer;
      renderTargetProperties.__useDefaultFramebuffer = defaultFramebuffer === void 0;
    };
    this.setRenderTarget = function(renderTarget, activeCubeFace = 0, activeMipmapLevel = 0) {
      _currentRenderTarget = renderTarget;
      _currentActiveCubeFace = activeCubeFace;
      _currentActiveMipmapLevel = activeMipmapLevel;
      let useDefaultFramebuffer = true;
      let framebuffer = null;
      let isCube = false;
      let isRenderTarget3D = false;
      if (renderTarget) {
        const renderTargetProperties = properties.get(renderTarget);
        if (renderTargetProperties.__useDefaultFramebuffer !== void 0) {
          state.bindFramebuffer(_gl.FRAMEBUFFER, null);
          useDefaultFramebuffer = false;
        } else if (renderTargetProperties.__webglFramebuffer === void 0) {
          textures.setupRenderTarget(renderTarget);
        } else if (renderTargetProperties.__hasExternalTextures) {
          textures.rebindTextures(renderTarget, properties.get(renderTarget.texture).__webglTexture, properties.get(renderTarget.depthTexture).__webglTexture);
        }
        const texture = renderTarget.texture;
        if (texture.isData3DTexture || texture.isDataArrayTexture || texture.isCompressedArrayTexture) {
          isRenderTarget3D = true;
        }
        const __webglFramebuffer = properties.get(renderTarget).__webglFramebuffer;
        if (renderTarget.isWebGLCubeRenderTarget) {
          framebuffer = __webglFramebuffer[activeCubeFace];
          isCube = true;
        } else if (capabilities.isWebGL2 && renderTarget.samples > 0 && textures.useMultisampledRTT(renderTarget) === false) {
          framebuffer = properties.get(renderTarget).__webglMultisampledFramebuffer;
        } else {
          framebuffer = __webglFramebuffer;
        }
        _currentViewport.copy(renderTarget.viewport);
        _currentScissor.copy(renderTarget.scissor);
        _currentScissorTest = renderTarget.scissorTest;
      } else {
        _currentViewport.copy(_viewport).multiplyScalar(_pixelRatio).floor();
        _currentScissor.copy(_scissor).multiplyScalar(_pixelRatio).floor();
        _currentScissorTest = _scissorTest;
      }
      const framebufferBound = state.bindFramebuffer(_gl.FRAMEBUFFER, framebuffer);
      if (framebufferBound && capabilities.drawBuffers && useDefaultFramebuffer) {
        state.drawBuffers(renderTarget, framebuffer);
      }
      state.viewport(_currentViewport);
      state.scissor(_currentScissor);
      state.setScissorTest(_currentScissorTest);
      if (isCube) {
        const textureProperties = properties.get(renderTarget.texture);
        _gl.framebufferTexture2D(_gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_CUBE_MAP_POSITIVE_X + activeCubeFace, textureProperties.__webglTexture, activeMipmapLevel);
      } else if (isRenderTarget3D) {
        const textureProperties = properties.get(renderTarget.texture);
        const layer = activeCubeFace || 0;
        _gl.framebufferTextureLayer(_gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0, textureProperties.__webglTexture, activeMipmapLevel || 0, layer);
      }
      _currentMaterialId = -1;
    };
    this.readRenderTargetPixels = function(renderTarget, x, y, width, height, buffer, activeCubeFaceIndex) {
      if (!(renderTarget && renderTarget.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let framebuffer = properties.get(renderTarget).__webglFramebuffer;
      if (renderTarget.isWebGLCubeRenderTarget && activeCubeFaceIndex !== void 0) {
        framebuffer = framebuffer[activeCubeFaceIndex];
      }
      if (framebuffer) {
        state.bindFramebuffer(_gl.FRAMEBUFFER, framebuffer);
        try {
          const texture = renderTarget.texture;
          const textureFormat = texture.format;
          const textureType = texture.type;
          if (textureFormat !== RGBAFormat && utils.convert(textureFormat) !== _gl.getParameter(_gl.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const halfFloatSupportedByExt = textureType === HalfFloatType && (extensions.has("EXT_color_buffer_half_float") || capabilities.isWebGL2 && extensions.has("EXT_color_buffer_float"));
          if (textureType !== UnsignedByteType && utils.convert(textureType) !== _gl.getParameter(_gl.IMPLEMENTATION_COLOR_READ_TYPE) && !(textureType === FloatType && (capabilities.isWebGL2 || extensions.has("OES_texture_float") || extensions.has("WEBGL_color_buffer_float"))) && !halfFloatSupportedByExt) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          if (x >= 0 && x <= renderTarget.width - width && (y >= 0 && y <= renderTarget.height - height)) {
            _gl.readPixels(x, y, width, height, utils.convert(textureFormat), utils.convert(textureType), buffer);
          }
        } finally {
          const framebuffer2 = _currentRenderTarget !== null ? properties.get(_currentRenderTarget).__webglFramebuffer : null;
          state.bindFramebuffer(_gl.FRAMEBUFFER, framebuffer2);
        }
      }
    };
    this.copyFramebufferToTexture = function(position, texture, level = 0) {
      const levelScale = Math.pow(2, -level);
      const width = Math.floor(texture.image.width * levelScale);
      const height = Math.floor(texture.image.height * levelScale);
      textures.setTexture2D(texture, 0);
      _gl.copyTexSubImage2D(_gl.TEXTURE_2D, level, 0, 0, position.x, position.y, width, height);
      state.unbindTexture();
    };
    this.copyTextureToTexture = function(position, srcTexture, dstTexture, level = 0) {
      const width = srcTexture.image.width;
      const height = srcTexture.image.height;
      const glFormat = utils.convert(dstTexture.format);
      const glType = utils.convert(dstTexture.type);
      textures.setTexture2D(dstTexture, 0);
      _gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, dstTexture.flipY);
      _gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, dstTexture.premultiplyAlpha);
      _gl.pixelStorei(_gl.UNPACK_ALIGNMENT, dstTexture.unpackAlignment);
      if (srcTexture.isDataTexture) {
        _gl.texSubImage2D(_gl.TEXTURE_2D, level, position.x, position.y, width, height, glFormat, glType, srcTexture.image.data);
      } else {
        if (srcTexture.isCompressedTexture) {
          _gl.compressedTexSubImage2D(_gl.TEXTURE_2D, level, position.x, position.y, srcTexture.mipmaps[0].width, srcTexture.mipmaps[0].height, glFormat, srcTexture.mipmaps[0].data);
        } else {
          _gl.texSubImage2D(_gl.TEXTURE_2D, level, position.x, position.y, glFormat, glType, srcTexture.image);
        }
      }
      if (level === 0 && dstTexture.generateMipmaps)
        _gl.generateMipmap(_gl.TEXTURE_2D);
      state.unbindTexture();
    };
    this.copyTextureToTexture3D = function(sourceBox, position, srcTexture, dstTexture, level = 0) {
      if (_this.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const width = sourceBox.max.x - sourceBox.min.x + 1;
      const height = sourceBox.max.y - sourceBox.min.y + 1;
      const depth2 = sourceBox.max.z - sourceBox.min.z + 1;
      const glFormat = utils.convert(dstTexture.format);
      const glType = utils.convert(dstTexture.type);
      let glTarget;
      if (dstTexture.isData3DTexture) {
        textures.setTexture3D(dstTexture, 0);
        glTarget = _gl.TEXTURE_3D;
      } else if (dstTexture.isDataArrayTexture) {
        textures.setTexture2DArray(dstTexture, 0);
        glTarget = _gl.TEXTURE_2D_ARRAY;
      } else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      _gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, dstTexture.flipY);
      _gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, dstTexture.premultiplyAlpha);
      _gl.pixelStorei(_gl.UNPACK_ALIGNMENT, dstTexture.unpackAlignment);
      const unpackRowLen = _gl.getParameter(_gl.UNPACK_ROW_LENGTH);
      const unpackImageHeight = _gl.getParameter(_gl.UNPACK_IMAGE_HEIGHT);
      const unpackSkipPixels = _gl.getParameter(_gl.UNPACK_SKIP_PIXELS);
      const unpackSkipRows = _gl.getParameter(_gl.UNPACK_SKIP_ROWS);
      const unpackSkipImages = _gl.getParameter(_gl.UNPACK_SKIP_IMAGES);
      const image = srcTexture.isCompressedTexture ? srcTexture.mipmaps[0] : srcTexture.image;
      _gl.pixelStorei(_gl.UNPACK_ROW_LENGTH, image.width);
      _gl.pixelStorei(_gl.UNPACK_IMAGE_HEIGHT, image.height);
      _gl.pixelStorei(_gl.UNPACK_SKIP_PIXELS, sourceBox.min.x);
      _gl.pixelStorei(_gl.UNPACK_SKIP_ROWS, sourceBox.min.y);
      _gl.pixelStorei(_gl.UNPACK_SKIP_IMAGES, sourceBox.min.z);
      if (srcTexture.isDataTexture || srcTexture.isData3DTexture) {
        _gl.texSubImage3D(glTarget, level, position.x, position.y, position.z, width, height, depth2, glFormat, glType, image.data);
      } else {
        if (srcTexture.isCompressedArrayTexture) {
          console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.");
          _gl.compressedTexSubImage3D(glTarget, level, position.x, position.y, position.z, width, height, depth2, glFormat, image.data);
        } else {
          _gl.texSubImage3D(glTarget, level, position.x, position.y, position.z, width, height, depth2, glFormat, glType, image);
        }
      }
      _gl.pixelStorei(_gl.UNPACK_ROW_LENGTH, unpackRowLen);
      _gl.pixelStorei(_gl.UNPACK_IMAGE_HEIGHT, unpackImageHeight);
      _gl.pixelStorei(_gl.UNPACK_SKIP_PIXELS, unpackSkipPixels);
      _gl.pixelStorei(_gl.UNPACK_SKIP_ROWS, unpackSkipRows);
      _gl.pixelStorei(_gl.UNPACK_SKIP_IMAGES, unpackSkipImages);
      if (level === 0 && dstTexture.generateMipmaps)
        _gl.generateMipmap(glTarget);
      state.unbindTexture();
    };
    this.initTexture = function(texture) {
      if (texture.isCubeTexture) {
        textures.setTextureCube(texture, 0);
      } else if (texture.isData3DTexture) {
        textures.setTexture3D(texture, 0);
      } else if (texture.isDataArrayTexture || texture.isCompressedArrayTexture) {
        textures.setTexture2DArray(texture, 0);
      } else {
        textures.setTexture2D(texture, 0);
      }
      state.unbindTexture();
    };
    this.resetState = function() {
      _currentActiveCubeFace = 0;
      _currentActiveMipmapLevel = 0;
      _currentRenderTarget = null;
      state.reset();
      bindingStates.reset();
    };
    if (typeof __THREE_DEVTOOLS__ !== "undefined") {
      __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
  }
  get physicallyCorrectLights() {
    console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead.");
    return !this.useLegacyLights;
  }
  set physicallyCorrectLights(value) {
    console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead.");
    this.useLegacyLights = !value;
  }
  get outputEncoding() {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.");
    return this.outputColorSpace === SRGBColorSpace ? sRGBEncoding : LinearEncoding;
  }
  set outputEncoding(encoding) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.");
    this.outputColorSpace = encoding === sRGBEncoding ? SRGBColorSpace : LinearSRGBColorSpace;
  }
}
class WebGL1Renderer extends WebGLRenderer {
}
WebGL1Renderer.prototype.isWebGL1Renderer = true;
class Scene extends Object3D {
  constructor() {
    super();
    this.isScene = true;
    this.type = "Scene";
    this.background = null;
    this.environment = null;
    this.fog = null;
    this.backgroundBlurriness = 0;
    this.backgroundIntensity = 1;
    this.overrideMaterial = null;
    if (typeof __THREE_DEVTOOLS__ !== "undefined") {
      __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    if (source.background !== null)
      this.background = source.background.clone();
    if (source.environment !== null)
      this.environment = source.environment.clone();
    if (source.fog !== null)
      this.fog = source.fog.clone();
    this.backgroundBlurriness = source.backgroundBlurriness;
    this.backgroundIntensity = source.backgroundIntensity;
    if (source.overrideMaterial !== null)
      this.overrideMaterial = source.overrideMaterial.clone();
    this.matrixAutoUpdate = source.matrixAutoUpdate;
    return this;
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    if (this.fog !== null)
      data.object.fog = this.fog.toJSON();
    if (this.backgroundBlurriness > 0)
      data.object.backgroundBlurriness = this.backgroundBlurriness;
    if (this.backgroundIntensity !== 1)
      data.object.backgroundIntensity = this.backgroundIntensity;
    return data;
  }
  get autoUpdate() {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144.");
    return this.matrixWorldAutoUpdate;
  }
  set autoUpdate(value) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144.");
    this.matrixWorldAutoUpdate = value;
  }
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
      const vertex2 = new Vector3();
      for (let i = 0; i < vertexBuffer.length; i += 3) {
        vertex2.x = vertexBuffer[i + 0];
        vertex2.y = vertexBuffer[i + 1];
        vertex2.z = vertexBuffer[i + 2];
        vertex2.normalize().multiplyScalar(radius2);
        vertexBuffer[i + 0] = vertex2.x;
        vertexBuffer[i + 1] = vertex2.y;
        vertexBuffer[i + 2] = vertex2.z;
      }
    }
    function generateUVs() {
      const vertex2 = new Vector3();
      for (let i = 0; i < vertexBuffer.length; i += 3) {
        vertex2.x = vertexBuffer[i + 0];
        vertex2.y = vertexBuffer[i + 1];
        vertex2.z = vertexBuffer[i + 2];
        const u = azimuth(vertex2) / 2 / Math.PI + 0.5;
        const v = inclination(vertex2) / Math.PI + 0.5;
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
    function pushVertex(vertex2) {
      vertexBuffer.push(vertex2.x, vertex2.y, vertex2.z);
    }
    function getVertexByIndex(index, vertex2) {
      const stride = index * 3;
      vertex2.x = vertices[stride + 0];
      vertex2.y = vertices[stride + 1];
      vertex2.z = vertices[stride + 2];
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
const Cache = {
  enabled: false,
  files: {},
  add: function(key, file) {
    if (this.enabled === false)
      return;
    this.files[key] = file;
  },
  get: function(key) {
    if (this.enabled === false)
      return;
    return this.files[key];
  },
  remove: function(key) {
    delete this.files[key];
  },
  clear: function() {
    this.files = {};
  }
};
class LoadingManager {
  constructor(onLoad, onProgress, onError) {
    const scope = this;
    let isLoading = false;
    let itemsLoaded = 0;
    let itemsTotal = 0;
    let urlModifier = void 0;
    const handlers = [];
    this.onStart = void 0;
    this.onLoad = onLoad;
    this.onProgress = onProgress;
    this.onError = onError;
    this.itemStart = function(url) {
      itemsTotal++;
      if (isLoading === false) {
        if (scope.onStart !== void 0) {
          scope.onStart(url, itemsLoaded, itemsTotal);
        }
      }
      isLoading = true;
    };
    this.itemEnd = function(url) {
      itemsLoaded++;
      if (scope.onProgress !== void 0) {
        scope.onProgress(url, itemsLoaded, itemsTotal);
      }
      if (itemsLoaded === itemsTotal) {
        isLoading = false;
        if (scope.onLoad !== void 0) {
          scope.onLoad();
        }
      }
    };
    this.itemError = function(url) {
      if (scope.onError !== void 0) {
        scope.onError(url);
      }
    };
    this.resolveURL = function(url) {
      if (urlModifier) {
        return urlModifier(url);
      }
      return url;
    };
    this.setURLModifier = function(transform) {
      urlModifier = transform;
      return this;
    };
    this.addHandler = function(regex, loader) {
      handlers.push(regex, loader);
      return this;
    };
    this.removeHandler = function(regex) {
      const index = handlers.indexOf(regex);
      if (index !== -1) {
        handlers.splice(index, 2);
      }
      return this;
    };
    this.getHandler = function(file) {
      for (let i = 0, l = handlers.length; i < l; i += 2) {
        const regex = handlers[i];
        const loader = handlers[i + 1];
        if (regex.global)
          regex.lastIndex = 0;
        if (regex.test(file)) {
          return loader;
        }
      }
      return null;
    };
  }
}
const DefaultLoadingManager = /* @__PURE__ */ new LoadingManager();
class Loader {
  constructor(manager) {
    this.manager = manager !== void 0 ? manager : DefaultLoadingManager;
    this.crossOrigin = "anonymous";
    this.withCredentials = false;
    this.path = "";
    this.resourcePath = "";
    this.requestHeader = {};
  }
  load() {
  }
  loadAsync(url, onProgress) {
    const scope = this;
    return new Promise(function(resolve, reject) {
      scope.load(url, resolve, onProgress, reject);
    });
  }
  parse() {
  }
  setCrossOrigin(crossOrigin) {
    this.crossOrigin = crossOrigin;
    return this;
  }
  setWithCredentials(value) {
    this.withCredentials = value;
    return this;
  }
  setPath(path) {
    this.path = path;
    return this;
  }
  setResourcePath(resourcePath) {
    this.resourcePath = resourcePath;
    return this;
  }
  setRequestHeader(requestHeader) {
    this.requestHeader = requestHeader;
    return this;
  }
}
class ImageLoader extends Loader {
  constructor(manager) {
    super(manager);
  }
  load(url, onLoad, onProgress, onError) {
    if (this.path !== void 0)
      url = this.path + url;
    url = this.manager.resolveURL(url);
    const scope = this;
    const cached = Cache.get(url);
    if (cached !== void 0) {
      scope.manager.itemStart(url);
      setTimeout(function() {
        if (onLoad)
          onLoad(cached);
        scope.manager.itemEnd(url);
      }, 0);
      return cached;
    }
    const image = createElementNS("img");
    function onImageLoad() {
      removeEventListeners();
      Cache.add(url, this);
      if (onLoad)
        onLoad(this);
      scope.manager.itemEnd(url);
    }
    function onImageError(event) {
      removeEventListeners();
      if (onError)
        onError(event);
      scope.manager.itemError(url);
      scope.manager.itemEnd(url);
    }
    function removeEventListeners() {
      image.removeEventListener("load", onImageLoad, false);
      image.removeEventListener("error", onImageError, false);
    }
    image.addEventListener("load", onImageLoad, false);
    image.addEventListener("error", onImageError, false);
    if (url.slice(0, 5) !== "data:") {
      if (this.crossOrigin !== void 0)
        image.crossOrigin = this.crossOrigin;
    }
    scope.manager.itemStart(url);
    image.src = url;
    return image;
  }
}
class CubeTextureLoader extends Loader {
  constructor(manager) {
    super(manager);
  }
  load(urls, onLoad, onProgress, onError) {
    const texture = new CubeTexture();
    const loader = new ImageLoader(this.manager);
    loader.setCrossOrigin(this.crossOrigin);
    loader.setPath(this.path);
    let loaded = 0;
    function loadTexture(i) {
      loader.load(urls[i], function(image) {
        texture.images[i] = image;
        loaded++;
        if (loaded === 6) {
          texture.needsUpdate = true;
          if (onLoad)
            onLoad(texture);
        }
      }, void 0, onError);
    }
    for (let i = 0; i < urls.length; ++i) {
      loadTexture(i);
    }
    return texture;
  }
}
class TextureLoader extends Loader {
  constructor(manager) {
    super(manager);
  }
  load(url, onLoad, onProgress, onError) {
    const texture = new Texture();
    const loader = new ImageLoader(this.manager);
    loader.setCrossOrigin(this.crossOrigin);
    loader.setPath(this.path);
    loader.load(url, function(image) {
      texture.image = image;
      texture.needsUpdate = true;
      if (onLoad !== void 0) {
        onLoad(texture);
      }
    }, onProgress, onError);
    return texture;
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
}, _windowExists$1 = function _windowExists() {
  return typeof window !== "undefined";
}, _isFuncOrString = function _isFuncOrString2(value) {
  return _isFunction(value) || _isString(value);
}, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
}, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i, _globalTimeline, _win$1, _coreInitted, _doc$1, _globals = {}, _installScope = {}, _coreReady, _install = function _install2(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap$1;
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
}, _setDefaults = function _setDefaults2(obj, defaults2) {
  for (var p in defaults2) {
    p in obj || (obj[p] = defaults2[p]);
  }
  return obj;
}, _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
  return function(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
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
}, _postAddChecks = function _postAddChecks2(timeline2, child) {
  var t;
  if (child._time || child._initted && !child._dur) {
    t = _parentToChildTotalTime(timeline2.rawTime(), child);
    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  }
  if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
    if (timeline2._dur < timeline2.duration()) {
      t = timeline2;
      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime);
        t = t._dp;
      }
    }
    timeline2._zTime = -_tinyNum;
  }
}, _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
  _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
  _isFromOrFromStart(child) || (timeline2._recent = child);
  skipChecks || _postAddChecks(timeline2, child);
  return timeline2;
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
}, _createTweenType = function _createTweenType2(type, params, timeline2) {
  var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline2;
  if (type) {
    irVars = vars;
    parent = timeline2;
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
}, _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
  var labels = timeline2.labels, min = _bigNum$1, p, distance, label;
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
}, _quickTween, _createPlugin = function _createPlugin2(config3) {
  config3 = !config3.name && config3["default"] || config3;
  var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
    this._props = [];
  } : config3, instanceDefaults = {
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
  if (config3 !== Plugin) {
    if (_plugins[name]) {
      return;
    }
    _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
    _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
    _plugins[Plugin.prop = name] = Plugin;
    if (config3.targetTest) {
      _harnessPlugins.push(Plugin);
      _reservedProps[name] = 1;
    }
    name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
  }
  _addGlobal(name, Plugin);
  config3.register && config3.register(gsap$1, Plugin, PropTween);
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
  var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners = [], _id2, _req, _raf, _self, _delta, _i, _tick = function _tick2(v) {
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
    manual || (_id2 = _req(_tick2));
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
          _globals.gsap = gsap$1;
          (_win$1.gsapVersions || (_win$1.gsapVersions = [])).push(gsap$1.version);
          _install(_installScope || _win$1.GreenSockGlobals || !_win$1.gsap && _win$1 || {});
          _raf = _win$1.requestAnimationFrame;
        }
        _id2 && _self.sleep();
        _req = _raf || function(f) {
          return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
        };
        _tickerActive = 1;
        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? _win$1.cancelAnimationFrame : clearTimeout)(_id2);
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
}, _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
  var child = timeline2._first, ease;
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
  _proto2.getById = function getById2(id) {
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
  _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
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
    var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = [];
    _this3._overwrite = overwrite;
    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults2 || {}
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
    var prevTime = this._time, tDur = this._tDur, dur = this._dur, tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
      time = tTime;
      timeline2 = this.timeline;
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
          timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
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
      timeline2 && timeline2.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
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
    args.forEach(function(config3) {
      return _createPlugin(config3);
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
        return gsap$1.quickSetter(t, property, unit);
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
  config: function config2(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function(pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });
    _effects[name] = function(targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
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
    init: function init4(target, vars, tween) {
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
var gsap$1 = _gsap.registerPlugin({
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
  init: function init2(target, value) {
    var i = value.length;
    while (i--) {
      this.add(target, i, target[i] || 0, value[i]);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
Tween.version = Timeline.version = gsap$1.version = "3.9.1";
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
var _win, _doc, _docElement, _pluginInitted, _tempDiv, _recentSetterPlugin, _windowExists2 = function _windowExists3() {
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
  if (_windowExists2() && window.document) {
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
  init: function init3(target, vars, tween, index, targets) {
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
gsap$1.utils.checkPrefix = _checkPropPrefix;
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
gsap$1.registerPlugin(CSSPlugin);
var gsapWithCSS = gsap$1.registerPlugin(CSSPlugin) || gsap$1;
gsapWithCSS.core.Tween;
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
class WebglApp {
  constructor({ mapSrc, hdrPath, hdrSrc }) {
    const canvas = document.getElementById("webgl");
    const renderer = new WebGLRenderer({
      canvas,
      antialias: false,
      alpha: true
    });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.setSize(window.innerWidth, window.innerHeight);
    const mapTexture = new TextureLoader().load(mapSrc);
    const hdrEnv = new CubeTextureLoader().setPath(hdrPath).load(hdrSrc);
    const scene = new Scene();
    scene.environment = hdrEnv;
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1e3
    );
    camera.position.z = 1;
    scene.add(camera);
    const sphere = new MeshSphere({ mapTexture, hdrEnv });
    scene.add(sphere);
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
    const tick = (time) => {
      sphere == null ? void 0 : sphere.onTick(time);
      renderer.render(scene, camera);
    };
    gsap.ticker.add(tick);
  }
}
export { WebglApp };
