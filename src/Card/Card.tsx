import React, { FC, useState } from 'react'
import styled from 'styled-components'

const Container = styled.article`
  display: flex;
  overflow: hidden;
`

const ImageContainer = styled.section`
  flex: none;
  width: ${({ theme }) => theme.sizing(48)};
  position: relative;
`

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Main = styled.form`
  flex: auto;
  padding: ${({ theme }) => theme.spacing(6)};
`

const Headline = styled.header`
  display: flex;
  flex-wrap: wrap;

  h1 {
    flex: auto;
    margin: 0;
  }

  aside {
    color: ${({ theme }) => theme.palette.gray500};
  }

  h1,
  aside {
    font-size: ${({ theme }) => theme.sizing(5)};
    font-weight: 600;
  }
`

const StockIndicator = styled.div`
  width: 100%;
  flex: none;
  font-size: ${({ theme }) => theme.sizing(3)};
  font-weight: 500;
  color: ${({ theme }) => theme.palette.gray500};
  margin-top: ${({ theme }) => theme.spacing(2)};
`

const SizeSelector = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`

const SizeButtonContainer = styled.div`
  display: flex;

  /* We can create helpers for this kind of space-between magic */
  ${({ theme }) => theme.spaceBetweenX(2)}
`

const SizeButton = styled.input`
  width: ${({ theme }) => theme.sizing(9)};
  height: ${({ theme }) => theme.sizing(9)};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ checked, theme }) =>
    checked ? theme.palette.gray100 : 'transparent'};
  border-radius: ${({ theme }) => theme.spacing(2)};
`

const SizeGuide = styled.div`
  margin-left: auto;
  font-size: ${({ theme }) => theme.sizing(3)};
  color: ${({ theme }) => theme.palette.gray500};
  text-decoration: underline;
`

const CTAs = styled.div`
  flex: auto;
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => theme.spaceBetweenX(3)}

  .buttons {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ theme }) => theme.spaceBetweenX(3)}

    button.buyNow {
      background-color: black;
      color: white;
    }

    button.addToBag {
      border-width: 1px;
      border-color: ${({ theme }) => theme.palette.gray300};
    }

    button.buyNow,
    button.addToBag {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${({ theme }) => theme.sizing(1)};
    }
  }
`

const LikeButton = styled.button`
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.sizing(9)};
  height: ${({ theme }) => theme.sizing(9)};
  color: ${({ theme }) => theme.palette.gray300};
  border-width: 1px;
  border-color: ${({ theme }) => theme.palette.gray300};
`

const Footer = styled.footer`
  font-size: ${({ theme }) => theme.sizing(3)};
  color: ${({ theme }) => theme.palette.gray500};
`

export interface CardProps {
  className?: string
}
export const Card: FC<CardProps> = ({ className }) => {
  const [selectedSize, setSelectedSize] = useState('xs')

  return (
    <Container className={className}>
      <ImageContainer>
        <Image src="/assets/classic-utility-jacket.jpg" alt="" />
      </ImageContainer>
      <Main>
        <Headline>
          <h1>Classic Utility Jacket</h1>
          <aside>$110.00</aside>
        </Headline>
        <StockIndicator>In Stock</StockIndicator>
        <SizeSelector>
          <SizeButtonContainer>
            {['xs', 's', 'm', 'l', 'xl'].map((size) => (
              <React.Fragment key={size}>
                <SizeButton
                  name="size"
                  type="radio"
                  value={size}
                  checked={size === selectedSize}
                  onChange={() => {
                    setSelectedSize(size)
                  }}
                />
                {size.toUpperCase()}
              </React.Fragment>
            ))}
          </SizeButtonContainer>
          <SizeGuide>Size Guide</SizeGuide>
        </SizeSelector>
        <CTAs>
          <div className="buttons">
            <button className="buyNow">Buy Now</button>
            <button className="addToBag">Add to bag</button>
          </div>
          <LikeButton>
            <svg width="20" height="20" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </LikeButton>
        </CTAs>
        <Footer>Free shipping on all continental US orders.</Footer>
      </Main>
    </Container>
  )
}

export default Card
