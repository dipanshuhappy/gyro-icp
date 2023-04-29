import { Avatar } from "@chakra-ui/react"
import { useConnect } from "@connect2ic/react"
import { identicon } from "minidenticons"
import React, { useMemo } from "react"

const GyroAvatar = () => {
  const { principal, isConnected } = useConnect()
  const svgURI = useMemo(
    () =>
      "data:image/svg+xml;utf8," +
      encodeURIComponent(identicon(principal, "95", "60")),
    [principal],
  )
  return isConnected && <Avatar size="md" borderRadius="full" src={svgURI} />
}

export default GyroAvatar
