import { fireEvent, render, screen } from '@testing-library/react';
import {FC} from 'react';
import { Reset } from './Reset';

describe('Reset button check', () => {
  const ResetWithDummyHandler: FC = ()=> <Reset onReset={()=>null}/>;

  it('should render elements with default state', () => {
    render(<ResetWithDummyHandler/>);
    
    expect(screen.getByText('🙂')).toBeInTheDocument();
  });

  it('onReset handler should be called', () => {
    const onReset= jest.fn();
    render(<Reset onReset={onReset}/>);
    fireEvent.click(screen.getByText('🙂'));
    expect(onReset).toBeCalled();
  });

  it('should change state when onMouse events happened', () => {
    render(<ResetWithDummyHandler/>);
    
    fireEvent.mouseDown(screen.getByText('🙂'));
    expect(screen.getByText('😮')).toBeInTheDocument();
    
    fireEvent.mouseUp(screen.getByText('😮'));
    expect(screen.getByText('🙂')).toBeInTheDocument();
  });
  
  it('should change state when on mouseLeave happened', () => {
    render(<ResetWithDummyHandler/>);
    
    fireEvent.mouseDown(screen.getByText('🙂'));
    expect(screen.getByText('😮')).toBeInTheDocument();
    
    fireEvent.mouseLeave(screen.getByText('😮'));
    expect(screen.getByText('🙂')).toBeInTheDocument();
  });
});