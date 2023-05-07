/**
 * 指定月の日数を取得
 * @param  {number} year  年
 * @param  {number} month 月
 * @return {number} 指定月の日数
 */
function getLastDay(year, month){
  return new Date(year, month, 0).getDate();
};