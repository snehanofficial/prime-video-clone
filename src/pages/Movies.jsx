import React, { useEffect } from 'react'

function Movies() {
    useEffect(() => {
        document.title = "Prime Video: Watch, rent, or buy movies online";
    }, []);
  return (
    <div>Movies</div>
  )
}

export default Movies