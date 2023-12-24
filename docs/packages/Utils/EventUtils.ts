export const getClientXY = (event: MouseEvent | TouchEvent) => {
  let clientX: number;
  let clientY: number;
  if (event.type.startsWith('touch')) {
    clientY = (event as TouchEvent).touches[0].clientY;
    clientX = (event as TouchEvent).touches[0].clientX;
  } else {
    clientY = (event as MouseEvent).clientY;
    clientX = (event as MouseEvent).clientX;
  }
  return {
    clientX,
    clientY
  };
};

export interface IOptions {
  drag: (event: MouseEvent | TouchEvent) => void;
  start: (event: MouseEvent | TouchEvent) => void;
  end: (event: MouseEvent | TouchEvent) => void;
}

let isDragging = false;

export const draggable = (
  element: HTMLElement | undefined,
  options: Partial<IOptions>
) => {
  if (!element) return;

  const _onDown = function (event: MouseEvent | TouchEvent) {
    if (isDragging) return;

    event.preventDefault();

    document.onselectstart = () => false;
    document.ondragstart = () => false;

    _initEvent();

    isDragging = true;
    options.start?.(event);
  };

  const _onMove = function (event: MouseEvent | TouchEvent) {
    options.drag?.(event);
  };

  const _onUp = function (event: MouseEvent | TouchEvent) {
    _disposeEvent();

    document.onselectstart = null;
    document.ondragstart = null;

    isDragging = false;
    options.end?.(event);
  };

  const _initEvent = function () {
    document.addEventListener('mousemove', _onMove, false);
    document.addEventListener('mouseup', _onUp, false);
    document.addEventListener('touchmove', _onMove, false);
    document.addEventListener('touchend', _onUp, false);
  };

  const _disposeEvent = function () {
    document.removeEventListener('mousemove', _onMove, false);
    document.removeEventListener('mouseup', _onUp, false);
    document.removeEventListener('touchmove', _onMove, false);
    document.removeEventListener('touchend', _onUp, false);
  };

  element.addEventListener('mousedown', _onDown, false);
  element.addEventListener('touchstart', _onDown, false);
};
