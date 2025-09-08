import React from 'react'
import styled from 'styled-components'
import { BaseTemplate } from './BaseTemplate'
import { ConfigurableTemplateProps, BaseTemplateProps } from './types'

interface EcommerceTemplateProps extends ConfigurableTemplateProps {}

// Product Grid Template
const ProductGridContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "filters results"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  gap: ${({ theme }) => theme.spacing['6']};
  min-height: 100vh;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-areas:
      "header"
      "filters"
      "results"
      "footer";
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['4']};
  }
`

const ProductGridHeader = styled.header`
  grid-area: header;
  padding: ${({ theme }) => theme.spacing['4']};
  background-color: ${({ theme }) => theme.colors.foundation.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.muted};
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing['4']};
`

const ProductFilters = styled.aside`
  grid-area: filters;
  background-color: ${({ theme }) => theme.colors.gray.light};
  padding: ${({ theme }) => theme.spacing['6']};
  border-radius: 8px;
  height: fit-content;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-color: transparent;
    padding: ${({ theme }) => theme.spacing['4']};
  }
`

const ProductResults = styled.main`
  grid-area: results;
  padding: ${({ theme }) => theme.spacing['4']};
`

// Checkout Template
const CheckoutContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "form summary"
    "footer footer";
  grid-template-columns: 1fr 350px;
  grid-template-rows: auto 1fr auto;
  gap: ${({ theme }) => theme.spacing['8']};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['6']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-areas:
      "header"
      "summary"
      "form"
      "footer";
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['6']};
    padding: ${({ theme }) => theme.spacing['4']};
  }
`

const CheckoutHeader = styled.header`
  grid-area: header;
  text-align: center;
  padding: ${({ theme }) => theme.spacing['6']} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.muted};
`

const CheckoutForm = styled.main`
  grid-area: form;
  
  .step {
    margin-bottom: ${({ theme }) => theme.spacing['8']};
    padding: ${({ theme }) => theme.spacing['6']};
    background-color: ${({ theme }) => theme.colors.foundation.white};
    border: 1px solid ${({ theme }) => theme.colors.text.muted};
    border-radius: 8px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .step-header {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing['3']};
    margin-bottom: ${({ theme }) => theme.spacing['4']};
    
    .step-number {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
      color: white;
      border-radius: 50%;
      font-weight: bold;
      font-size: 14px;
    }
    
    .step-title {
      font-size: ${({ theme }) => theme.typography.fontSizes.lg};
      font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
    }
  }
`

const CheckoutSummary = styled.aside`
  grid-area: summary;
  background-color: ${({ theme }) => theme.colors.gray.light};
  padding: ${({ theme }) => theme.spacing['6']};
  border-radius: 8px;
  height: fit-content;
  
  .summary-section {
    margin-bottom: ${({ theme }) => theme.spacing['6']};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .summary-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing['2']};
    
    &.total {
      border-top: 1px solid ${({ theme }) => theme.colors.text.muted};
      padding-top: ${({ theme }) => theme.spacing['3']};
      margin-top: ${({ theme }) => theme.spacing['3']};
      font-weight: bold;
    }
  }
`

const CommonFooter = styled.footer`
  grid-area: footer;
  border-top: 1px solid ${({ theme }) => theme.colors.text.muted};
  padding-top: ${({ theme }) => theme.spacing['6']};
  margin-top: ${({ theme }) => theme.spacing['8']};
  text-align: center;
`

// Product Grid Components
const ProductGridRoot: React.FC<EcommerceTemplateProps> = ({ 
  children, 
  config,
  className,
  id 
}) => (
  <BaseTemplate className={className}>
    <ProductGridContainer>
      {children}
    </ProductGridContainer>
  </BaseTemplate>
)

const ProductGridHeaderComponent: React.FC<BaseTemplateProps> = ({ children, className, id }) => (
  <ProductGridHeader className={className} id={id}>
    {children}
  </ProductGridHeader>
)

const Filters: React.FC<BaseTemplateProps> = ({ children, className, id }) => (
  <ProductFilters className={className} id={id}>
    {children}
  </ProductFilters>
)

const Results: React.FC<BaseTemplateProps> = ({ children, className, id }) => (
  <ProductResults className={className} id={id}>
    {children}
  </ProductResults>
)

const ProductGridFooterComponent: React.FC<BaseTemplateProps> = ({ children, className, id }) => (
  <CommonFooter className={className} id={id}>
    {children}
  </CommonFooter>
)

// Checkout Components
const CheckoutRoot: React.FC<EcommerceTemplateProps> = ({ 
  children, 
  config,
  className,
  id 
}) => (
  <BaseTemplate className={className}>
    <CheckoutContainer>
      {children}
    </CheckoutContainer>
  </BaseTemplate>
)

const CheckoutHeaderComponent: React.FC<BaseTemplateProps> = ({ children, className, id }) => (
  <CheckoutHeader className={className} id={id}>
    {children}
  </CheckoutHeader>
)

const Form: React.FC<BaseTemplateProps> = ({ children, className, id }) => (
  <CheckoutForm className={className} id={id}>
    {children}
  </CheckoutForm>
)

const Summary: React.FC<BaseTemplateProps> = ({ children, className, id }) => (
  <CheckoutSummary className={className} id={id}>
    {children}
  </CheckoutSummary>
)

const CheckoutFooterComponent: React.FC<BaseTemplateProps> = ({ children, className, id }) => (
  <CommonFooter className={className} id={id}>
    {children}
  </CommonFooter>
)

// Step component for checkout form
interface StepProps extends BaseTemplateProps {
  number: number
  title: string
  completed?: boolean
  active?: boolean
}

const Step: React.FC<StepProps> = ({ 
  children, 
  number, 
  title, 
  completed = false,
  active = false,
  className, 
  id 
}) => (
  <div className={`step ${completed ? 'completed' : ''} ${active ? 'active' : ''} ${className || ''}`} id={id}>
    <div className="step-header">
      <div className={`step-number ${completed ? 'completed' : ''}`}>
        {completed ? '✓' : number}
      </div>
      <div className="step-title">{title}</div>
    </div>
    {children}
  </div>
)

export const ProductGridTemplate = Object.assign(ProductGridRoot, {
  Header: ProductGridHeaderComponent,
  Filters,
  Results,
  Footer: ProductGridFooterComponent
})

export const CheckoutTemplate = Object.assign(CheckoutRoot, {
  Header: CheckoutHeaderComponent,
  Form,
  Summary,
  Footer: CheckoutFooterComponent,
  Step
})