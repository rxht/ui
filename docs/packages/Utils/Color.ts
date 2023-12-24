/**
 * @class 颜色工具类
 */
class Color {
  /**
   * @static
   * @function hex转换Rgb
   * @param hexValue
   * @param defColor
   * @returns
   */
  static hexToRgb(hexValue: string, defColor = '') {
    const rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const hex = hexValue.replace(rgx, (m, r, g, b) => r + r + g + g + b + b);
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!rgb) return defColor;
    const r = parseInt(rgb[1], 16);
    const g = parseInt(rgb[2], 16);
    const b = parseInt(rgb[3], 16);
    return `rgb(${r},${g},${b})`;
  }

  /**
   * @static
   * @function hsl转换Rgb
   * @param hslValue
   * @param defColor
   * @returns
   */
  static hslToRgb(hslValue: string, defColor = '') {
    const hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue);
    if (!hsl) return defColor;
    const h = parseInt(hsl[1]) / 360;
    const s = parseInt(hsl[2]) / 100;
    const l = parseInt(hsl[3]) / 100;

    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    let r, g, b;
    if (s == 0) {
      r = g = b = l;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return `rgb(${r * 255},${g * 255},${b * 255})`;
  }

  /**
   * @static
   * @function rgb转换Hex
   * @param rgbValue
   * @param defColor
   * @returns
   */
  static rgbToHex(rgbValue: string, defColor = '') {
    const reg = /^(rgb|RGB|rgba|RGBA)/;
    if (reg.test(rgbValue)) return defColor;
    const replaceReg = /(?:\(|\)|rgb|RGB|rgba|RGBA)*/g;
    const aColor = rgbValue.replace(replaceReg, '').split(',');
    let strHex = '#';
    for (let i = 0; i < 3; i++) {
      let hex = Number(aColor[i]).toString(16);
      // 修正：不足两位，补0
      if (hex.length === 1) {
        hex = '0' + hex;
      }
      strHex += hex;
    }
    return strHex;
  }

  /**
   * @static
   * @function 检查颜色类型
   * @param color
   * @returns
   */
  static check(color: string) {
    const checkHEX = () => {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
    };
    const checkRGB = () => {
      return /^rgb/.test(color);
    };
    const checkHSL = () => {
      return /^hsl/.test(color);
    };
    if (checkHEX()) return 'hex';
    if (checkRGB()) return 'rgb';
    if (checkHSL()) return 'hsl';
    return 'unknown';
  }

  /**
   * @static
   * @function 颜色标准化输出
   * @param color
   * @param defColor 默认颜色
   * @returns
   */
  static normalization(color: string, defColor = '#000000') {
    let oColor = '';
    switch (Color.check(color)) {
      case 'hex':
        oColor = color;
        break;
      case 'rgb':
        oColor = Color.rgbToHex(color);
        break;
      case 'hsl':
        oColor = Color.rgbToHex(Color.hslToRgb(color));
        break;
      default:
        oColor = defColor;
        break;
    }
    return oColor;
  }
}

export default Color;
