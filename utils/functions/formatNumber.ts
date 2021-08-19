export default function formatNumber(number: number | string, decimals = 0, decPoint = `.`, thousandsSep = ` `) {
  if (isNaN((decimals = Math.abs(decimals)))) {
    decimals = 0;
  }

  const i = parseInt((number = (+number || 0).toFixed(decimals))) + ``;
  let j = i.length;

  if (j > 3) {
    j = j % 3;
  } else {
    j = 0;
  }

  const km = j ? i.substr(0, j) + thousandsSep : ``;
  const kw = i.substr(j).replace(/(\d{3})(?=\d)/g, `$1` + thousandsSep);
  const kd = decimals
    ? decPoint +
      Math.abs(+number - +i)
        .toFixed(decimals)
        .replace(/-/, '0')
        .slice(2)
    : ``;

  return km + kw + kd;
}
