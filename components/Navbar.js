export function Navbar({ navigation }) {
  return(
    <ViewContainer style={styles.container}>
      <Icon
        name="post-add"
        type="material"
        size={35}
        color="#fff"
      />

      <Icon
        name="ios-person-circle-outline"
        type="ionicon"
        size={35}
        color="#fff"
      />
    </ViewContainer>
  )
}
