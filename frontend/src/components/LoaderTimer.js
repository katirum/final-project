export const Timer = (setLoading) => {
    // set timer that executes after 3 seconds which sets loading to false
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000);
    return () => {
      clearTimeout(timer)
    }
  }