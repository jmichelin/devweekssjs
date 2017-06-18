/**
 * Created by jmichelin on 6/17/17.
 */
exports.randomInt = randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}