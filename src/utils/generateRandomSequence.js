/**
 * Generates a random integar seguence
 * @returns {number} A long int
 */
const generateRandomSequence = () => (parseInt(`${`${ Math.random() + ( Date.now() || (new Date).getTime() ) }`.replace(".", "")}`));

export default generateRandomSequence;
