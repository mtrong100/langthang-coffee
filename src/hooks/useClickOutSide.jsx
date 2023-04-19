import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom) {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    function handleClickOutSide(e) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShow(false);
      }
    }
    document.addEventListener("click", handleClickOutSide);

    // clean up function
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, [dom]);

  return {
    show,
    setShow,
    nodeRef,
  };
}
