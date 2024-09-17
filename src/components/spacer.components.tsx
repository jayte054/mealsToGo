import React from "react";
import {View} from "react-native";
import { styled } from "styled-components/native";

// const TopSmall = styled.View`
//     margin-top: ${props => props.theme.space[1]};
// `
// const TopMedium = styled.View`
//     margin-top: ${props => props.theme.space[2]};
// `
// const TopLarge = styled.View`
//     margin-top: ${props => props.theme.space[3]};
// `
// const LeftSmall = styled.View`
//     padding-left: ${props => props.theme.space[1]};
// `
// const LeftMedium = styled.View`
//     padding-left: ${props => props.theme.space[2]};
// `
// const LeftLarge = styled.View`
//     padding-left: ${props => props.theme.space[3]};
// `

// export const Spacer = ({variant}: any) => {
//     if (variant === "top.medium") {
//         return <TopMedium />
//     }
//     if (variant === "top.large") {
//         return <TopLarge />
//     }
//     if (variant === "left.small") {
//         return <LeftSmall />
//     }
//     if (variant === "left.medium") {
//         return <LeftMedium />
//     }
//     if (variant === "left.large") {
//         return <LeftLarge />
//     }
//     return <TopSmall />
// }

const positionVariant: any = {
    top: "margin-top",
    bottom: "margin-bottom",
    right: "margin-right",
    left: "margin-left"
}

const sizeVariant: any= {
    small: 1,
    medium: 2,
    large: 3
}

const getVariant = (position: string, size: string, theme: any) => {
    const sizeIndex = `${sizeVariant[size]}`;
    const property = `${positionVariant[position]}`
    const value = `${theme.space[sizeIndex]}`
    return `${property}:${value}`
}

export const Spacer: any = styled.View`
    ${({position, size, theme}: any) => getVariant(position, size, theme)}
`

Spacer.defaultProps = {
    position: "top",
    size: "small"
}