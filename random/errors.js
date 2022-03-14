// turns console.error into an alert. Useful if you're using
// a device without access to devTools.

javascript:window.onerror = (message, source, line) => {
    alert(`Error: ${message} \nsource: ${source} @ ${line}`)
}
