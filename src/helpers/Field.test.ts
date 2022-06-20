import { CellState, emptyFieldGenerator, fieldGenerator } from "./Field";


const { empty, bomb, hidden } = CellState;

describe('Field Generator', () => {
  describe('emptyFieldGenerator tests', () => {
    it('2x2', () => {
      expect(emptyFieldGenerator(2)).toStrictEqual(
        [
          [empty, empty],
          [empty, empty],
        ]
      );
    });

    it('3x3', () => {
      expect(emptyFieldGenerator(3)).toStrictEqual(
        [
          [empty, empty, empty],
          [empty, empty, empty],
          [empty, empty, empty],
        ]
      );
    });

    it('3x3 with hidden state', () => {
      expect(emptyFieldGenerator(3, hidden)).toStrictEqual(
        [
          [hidden, hidden, hidden],
          [hidden, hidden, hidden],
          [hidden, hidden, hidden],
        ]
      );
    });
  });

  describe('Simple cases', () => {
    it('Wrong Probability', () => {
      const errorText = 'Probability must be between 0 and 1';
      expect(() => {fieldGenerator(1,-1)}).toThrow(errorText);
      expect(() => {fieldGenerator(1,2)}).toThrow(errorText);
    });

    it('Smallest possible field without mine', () => {
      expect(fieldGenerator(1,0)).toStrictEqual([[empty]]);
    });

    it('Smallest possible field with mine', () => {
      expect(fieldGenerator(1,1)).toStrictEqual([[bomb]]);
    });

    it('Big field without mine', () => {
      expect(fieldGenerator(10,0)).toStrictEqual(
        [
          [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
          [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
          [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
          [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
          [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
          [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
          [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
          [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
          [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
          [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        ]
      );
    });

    it('2x2 with mines', () => {
      expect(fieldGenerator(2,1)).toStrictEqual(
        [
          [bomb, bomb],
          [bomb, bomb],
        ]
      );
    });

    it('4x4 with 50% probability', () => {
      const field = fieldGenerator(4, 0.5);
      const flatField = field.flat();

      console.table(field);
      console.table(flatField);

      const cellsWithBombs = flatField.filter(cell => cell === bomb);
      const emptyCells = flatField.filter(cell => cell !== bomb);

      expect(cellsWithBombs).toHaveLength(8);
      expect(emptyCells).toHaveLength(8);
    });

    it('Real game field size = 10x10 with 1/4 mined cells', () => {
      const size = 10;
      const mines = 25;

      const probability = mines / (size*size);
      const field =fieldGenerator(size, probability);

      console.table(field);

      const flatField = field.flat();

      expect(flatField.filter(cell => cell === bomb)).toHaveLength(25);
    });
  });
});