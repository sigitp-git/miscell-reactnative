import React, { useState, useReducer } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ColorCounter from '../components/ColorCounter'

// reducer live outside of the component, can be in separate file/folder
const reducer = (state, action) => {
  // state: { red: number, green: number, blue: number }
  // action: { color: red or green or blue, amount: +15 or -15}

  // other convention on reducer action ({type: , payload: }) : { type: 'change_red', payload: }

  switch (action.color) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount }
    case 'green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount }
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount }
    default:
      return state
  }
}

const SquareColorScreen = () => {
  const COLOR_INCREMENT = 15

  // reducer is function that change objects, has 2 args: entire state object, and the action (changes)
  // always return a new state object from reducer, we don't change the state object itself, it's a const
  // when we use reducer, we don't use useState, is one or the other
  // initial value required for useReducer
  //
  // dispatch function means: run my reducer!
  //
  // !!!!!!!!!!!!!!! so, it's either useReducer or useState !!!!!!!!!!!!!!!
  //
  //   const [red, setRed] = useState(125)
  //   const [green, setGreen] = useState(125)
  //   const [blue, setBlue] = useState(125)
  //
  //   const setColor = (color, change) => {
  //     switch (color) {
  //       case 'red':
  //         red + change > 255 || red + change < 0 ? null : setRed(red + change)
  //         return
  //       case 'green':
  //         green + change > 255 || green + change < 0
  //           ? null
  //           : setGreen(green + change)
  //         return
  //       case 'blue':
  //         blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
  //         return
  //       default:
  //         return
  //     }
  //   }
  // // /// usage:
  //   onSubmitInc={() => setColor('red', COLOR_INCREMENT)}
  //   onSubmitDesc={() => setColor('red', -1 * COLOR_INCREMENT)}
  //           backgroundColor: `rgb(${red}, ${green}, ${blue})`,

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue } = state

  return (
    <View>
      <ColorCounter
        color='Red'
        onSubmitInc={() => dispatch({ color: 'red', amount: COLOR_INCREMENT })}
        onSubmitDesc={() =>
          dispatch({ color: 'red', amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color='Green'
        onSubmitInc={() =>
          dispatch({ color: 'green', amount: COLOR_INCREMENT })
        }
        onSubmitDesc={() =>
          dispatch({ color: 'green', amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color='Blue'
        onSubmitInc={() => dispatch({ color: 'blue', amount: COLOR_INCREMENT })}
        onSubmitDesc={() =>
          dispatch({ color: 'blue', amount: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
})

export default SquareColorScreen
