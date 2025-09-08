import React from 'react'
import styled from 'styled-components'
import { BaseTemplate } from './BaseTemplate'
import { ConfigurableTemplateProps, BaseTemplateProps } from './types'

interface ArticleTemplateProps extends ConfigurableTemplateProps {}

const ArticleContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "content sidebar"
    "footer footer";
  grid-template-columns: 1fr 300px;
  grid-template-rows: auto 1fr auto;
  gap: ${({ theme }) => theme.spacing['8']};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['6']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-areas:
      "header"
      "content"
      "sidebar"
      "footer";
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['6']};
    padding: ${({ theme }) => theme.spacing['4']};
  }
`

const ArticleHeader = styled.header`
  grid-area: header;
  text-align: center;
  padding: ${({ theme }) => theme.spacing['8']} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.muted};
  margin-bottom: ${({ theme }) => theme.spacing['8']};
`

const ArticleContent = styled.main`
  grid-area: content;
  max-width: none;
  
  /* Prose styling for readable content */
  line-height: 1.7;
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: ${({ theme }) => theme.spacing['8']};
    margin-bottom: ${({ theme }) => theme.spacing['4']};
    line-height: 1.3;
    
    &:first-child {
      margin-top: 0;
    }
  }
  
  h1 {
    font-size: ${({ theme }) => theme.typography.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  }
  
  h2 {
    font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  }
  
  h3 {
    font-size: ${({ theme }) => theme.typography.fontSizes.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing['6']};
  }
  
  ul, ol {
    margin-bottom: ${({ theme }) => theme.spacing['6']};
    padding-left: ${({ theme }) => theme.spacing['6']};
  }
  
  li {
    margin-bottom: ${({ theme }) => theme.spacing['2']};
  }
  
  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.innovation.primaryBlue};
    padding-left: ${({ theme }) => theme.spacing['4']};
    margin: ${({ theme }) => theme.spacing['6']} 0;
    font-style: italic;
    background-color: ${({ theme }) => theme.colors.gray.light};
    padding: ${({ theme }) => theme.spacing['4']};
  }
  
  code {
    background-color: ${({ theme }) => theme.colors.gray.light};
    padding: ${({ theme }) => theme.spacing['1']} ${({ theme }) => theme.spacing['2']};
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
  }
  
  pre {
    background-color: ${({ theme }) => theme.colors.gray.dark};
    color: ${({ theme }) => theme.colors.foundation.white};
    padding: ${({ theme }) => theme.spacing['4']};
    border-radius: 8px;
    overflow-x: auto;
    margin: ${({ theme }) => theme.spacing['6']} 0;
    
    code {
      background: none;
      padding: 0;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: ${({ theme }) => theme.spacing['6']} 0;
  }
  
  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.text.muted};
    margin: ${({ theme }) => theme.spacing['8']} 0;
  }
`

const ArticleSidebar = styled.aside`
  grid-area: sidebar;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    border-top: 1px solid ${({ theme }) => theme.colors.text.muted};
    padding-top: ${({ theme }) => theme.spacing['6']};
  }
`

const ArticleFooter = styled.footer`
  grid-area: footer;
  border-top: 1px solid ${({ theme }) => theme.colors.text.muted};
  padding-top: ${({ theme }) => theme.spacing['6']};
  margin-top: ${({ theme }) => theme.spacing['8']};
`

const ArticleRoot: React.FC<ArticleTemplateProps> = ({ 
  children,
  className
}) => (
  <BaseTemplate className={className}>
    <ArticleContainer>
      {children}
    </ArticleContainer>
  </BaseTemplate>
)

const Header: React.FC<BaseTemplateProps> = ({ children, className, id }) => (
  <ArticleHeader className={className} id={id}>
    {children}
  </ArticleHeader>
)

const Content: React.FC<BaseTemplateProps> = ({ children, className, id }) => (
  <ArticleContent className={className} id={id}>
    {children}
  </ArticleContent>
)

const Sidebar: React.FC<BaseTemplateProps> = ({ children, className, id }) => (
  <ArticleSidebar className={className} id={id}>
    {children}
  </ArticleSidebar>
)

const Footer: React.FC<BaseTemplateProps> = ({ children, className, id }) => (
  <ArticleFooter className={className} id={id}>
    {children}
  </ArticleFooter>
)

export const ArticleTemplate = Object.assign(ArticleRoot, {
  Header,
  Content,
  Sidebar,
  Footer
})