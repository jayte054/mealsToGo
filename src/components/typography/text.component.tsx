import styled from "styled-components/native";


const defaultTextStyles = (theme: any) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const body = (theme: any) => `
    font-size: ${theme.fontSizes.body};
`;
const hint = (theme: any) => `
    font-size: ${theme.fontSizes.body};
`;
const error = (theme: any) => `
    color: ${theme.colors.text.error};
    font-sizes: ${theme.fontSizes.caption}
`;
const caption = (theme: any) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;
const label = (theme: any) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium}
`;
const variants: any = {
  body,
  hint,
  error,
  caption,
  label,
};
console.log(Object.keys(variants));

export const Texts: any = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }: any) => variants[variant](theme)}
`;

Texts.defaultProps = {
  variant: "body",
};