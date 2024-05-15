export function debounce(func: Function, timeout: number) {
  let timer: NodeJS.Timeout;
  return function (this: any, ...args: any[]) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, args), timeout);
  };
}
