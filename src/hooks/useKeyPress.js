import { useEffect, useState } from "react"

const useKeyPress = () => {
    const [isPressing, setIsPressing] = useState(false)
    const [pressedKey, setPressedKey] = useState('')
    const [X, setX] = useState(130)
    const [Y, setY] = useState(104)
   const speed = 20
  const handlekeyDown = (e) => {
      e.preventDefault();
      setIsPressing(true)
      setPressedKey(e.key)
      switch (e.key) {
          case 'ArrowRight':
              setX(x => x + speed)
            break;
          case 'ArrowLeft':
            setX(x => x - speed)
            break;
          case 'ArrowUp':
            setY(y => y - speed)
            break;
          case 'ArrowDown':
            setY(y => y + speed)
            break;
    
        default:
            break;
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handlekeyDown);
    return () => {
        window.removeEventListener('keydown', handlekeyDown);
    };
  }, []);
  useEffect(() => {
    window.addEventListener('keyup', ()=> setIsPressing(false));
    return () => {
        window.removeEventListener('keyup', ()=> setIsPressing(false));
    };
  }, []);
    return {
        isPressing,
        pressedKey,
        X,
        Y
    }
}

export default useKeyPress