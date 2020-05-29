export default function createAction<T, P>(type: T) {
  return (payload: P): { type: T; payload: P } => {
    return { type, payload }
  }
}
