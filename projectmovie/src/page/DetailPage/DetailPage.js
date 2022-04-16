import React from 'react'

export default function DetailPage(props) {
  return (
    <div>DetailPage
        id nhận vào là: {props.match.params.id}
    </div>
  )
}
