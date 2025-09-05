import React from 'react'
import styled from 'styled-components'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'

export interface FooterProps {
  links?: Array<{
    label: string
    href: string
    external?: boolean
  }>
  socialLinks?: Array<{
    label: string
    href: string
    icon: React.ReactNode
  }>
  copyright?: string
  className?: string
}

const StyledFooter = styled(Box)`
  border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
  background-color: ${({ theme }) => theme.colors.foundation.black};
  margin-top: auto;
`

const FooterContainer = styled(Box)`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[6]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[8]};
  }
`

const FooterContent = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[6]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 2fr 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 3fr 1fr 1fr;
  }
`

const BrandSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`

const LinksSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`

const SocialSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: flex-end;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    align-items: flex-start;
  }
`

const FooterLink = styled.a`
  text-decoration: none;
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: color ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`

const SocialLinks = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-end;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: flex-start;
  }
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: transparent;
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.gray.base};
  }
`

const FooterBottom = styled(Box)`
  border-top: 1px solid ${({ theme }) => theme.colors.gray.base};
  padding-top: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[6]};
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Footer: React.FC<FooterProps> = ({
  links = [],
  socialLinks = [],
  copyright = '© 2024 RSPWN. All rights reserved.',
  className
}) => {
  return (
    <StyledFooter as="footer" className={className}>
      <FooterContainer>
        <FooterContent>
          <BrandSection>
            <Typography variant="brand" color="white">
              RSPWN
            </Typography>
            <Typography variant="body2" color="secondary">
              Professional gaming and AI platform design system.
            </Typography>
          </BrandSection>
          
          {links.length > 0 && (
            <LinksSection>
              <Typography variant="h6" color="primary">
                Links
              </Typography>
              {links.map((link) => (
                <FooterLink
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </FooterLink>
              ))}
            </LinksSection>
          )}
          
          {socialLinks.length > 0 && (
            <SocialSection>
              <Typography variant="h6" color="primary">
                Follow Us
              </Typography>
              <SocialLinks>
                {socialLinks.map((social) => (
                  <SocialLink
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </SocialLink>
                ))}
              </SocialLinks>
            </SocialSection>
          )}
        </FooterContent>
        
        <FooterBottom>
          <Typography variant="caption" color="muted">
            {copyright}
          </Typography>
        </FooterBottom>
      </FooterContainer>
    </StyledFooter>
  )
}