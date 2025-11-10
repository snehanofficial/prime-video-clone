import React, { useEffect } from 'react'

function TVShows() {
    useEffect(() => {
        document.title = "Prime Video: Watch, rent, or buy movies online";
    }, []);
  return (
    <div>TVShows</div>
  )
}

export default TVShows