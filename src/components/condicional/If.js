export default function If(props) {
  if (props.test) {
    return props.children
  } else {
    return false
  }
}