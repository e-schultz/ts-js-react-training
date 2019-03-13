import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Box from './Box'

const Root = styled.div([], {
  width: '100vw',
  height: '100vh'
})

const ImageSplitAlt = ({ children }) => {
  const [a, ...rest] = React.Children.toArray(children.props.children)

  return (
    <Root>
      <Flex
        css={{
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%'
        }}>
        <Box width={.1}></Box>
        <Box >{rest}</Box>
        <Box width={.5} >{a}</Box>
      </Flex>
    </Root>
  )
}

export default ImageSplitAlt