import { render, screen, fireEvent, createEvent} from '@testing-library/react';
import { CellState, Coords} from '../../helpers/Field';
import { Cell } from './Cell';

describe('Cell component check', ()=>{
  const coords: Coords = [1,1];
  // for (let cell = CellState.empty; cell <= CellState.weekFlag; cell++) {
  //   it('Check prevent default context menu for every type of cell', () => {
  //     const props = {
  //       coords,
  //       onClick: jest.fn(),
  //       onContextMenu: jest.fn(),
  //     }

  //     render(<Cell {...props}>{cell}</Cell>);

  //     const cellComp = screen.getByTestId(`${cell}_${coords}`);

  //     const contextMenuEvent = createEvent.contextMenu(cellComp);

  //     expect(contextMenuEvent.defaultPrevented).toBe(true);
  //   });
  
  // }
  it('onClick and onContext menu handler should be called for active cells', () => {

  });
});