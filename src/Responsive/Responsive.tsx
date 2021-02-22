import { FC } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
`

const RentalInfo = styled.div`
  font-family: sans-serif;
  position: relative;
  z-index: 10;
  grid-column-start: 1;
  grid-row-start: 1;
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(4)}
    ${({ theme }) => theme.spacing(3)};
  background-image: linear-gradient(
    to top,
    ${({ theme }) => theme.palette.black},
    rgba(0, 0, 0, 0)
  );
`

const RentalType = styled.p`
  font-size: ${({ theme }) => theme.sizing(3.5)};
  font-weight: 500;
  color: ${({ theme }) => theme.palette.white};
`

const RentalName = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.palette.white};
  font-weight: 600;
`

const RatingsAndLocation = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
`

const Byline = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.sizing(3)};
  font-weight: 500;
  margin-top: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`

const Star: FC<{ className?: string }> = ({ className }) => (
  <svg width="20" height="20" fill="currentColor" className={className}>
    <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
  </svg>
)

const StyledStar = styled(Star)`
  color: ${({ theme }) => theme.palette.green600};
`

const Ratings = styled.div`
  margin-left: ${({ theme }) => theme.spacing(1)};
`
const RatingAmount = styled.span`
  color: ${({ theme }) => theme.palette.black};
`
const RatingCount = styled.span``
const Separator = styled.div`
  font-weight: normal;
  margin-left: ${({ theme }) => theme.spacing(2)};
  margin-right: ${({ theme }) => theme.spacing(2)};
`

const SectionSeparator = styled.hr`
  width: ${({ theme }) => theme.sizing(16)};
  border-color: ${({ theme }) => theme.palette.gray300};
  visibility: hidden;
`

const HostInformation = styled.div`
  grid-column-start: 1;
  grid-row-start: 3;
  padding-top: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => theme.spaceBetweenY(3)};
`
const Host = styled.p`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.black};
  font-size: ${({ theme }) => theme.sizing(3)};
  font-weight: 500;
`
const HostImage = styled.img`
  width: ${({ theme }) => theme.sizing(6)};
  height: ${({ theme }) => theme.sizing(6)};
  border-radius: 100%;
  margin-right: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.gray100};
`
const CheckAvailability = styled.button`
  background-color: ${({ theme }) => theme.palette.green100};
  color: ${({ theme }) => theme.palette.green700};
  font-size: ${({ theme }) => theme.sizing(4)};
  font-weight: 600;
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(6)}`};
  border-radius: 1em;
`

const RentalImages = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  display: flex;
`

const Gallery = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(2)};
`

const GalleryItem = styled.div<{ first?: boolean }>`
  position: relative;
  display: ${({ first }) => (first ? 'initial' : 'none')};
`
GalleryItem.defaultProps = { first: false }

const GalleryImage = styled.img<{ first?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.palette.gray100};
  ${({ first }) =>
    !first &&
    css`
      display: none;
    `}
`
GalleryImage.defaultProps = { first: false }

export const Responsive = () => (
  <Container>
    <RentalInfo>
      <RentalType>Entire House</RentalType>
      <RentalName>Beach House in Collingwood</RentalName>
    </RentalInfo>
    <RatingsAndLocation>
      <Byline>
        <StyledStar />
        <Ratings>
          <RatingAmount>4.94</RatingAmount>
          <RatingCount>(128)</RatingCount>
        </Ratings>
        <Separator>·</Separator>
        <div>Collingwood, Ontario</div>
      </Byline>
      <SectionSeparator />
    </RatingsAndLocation>
    <HostInformation>
      <Host>
        <HostImage src="/assets/kevin-francis.jpg" alt="kevin-francis" />
        Hosted by Kevin Francis
      </Host>
      <CheckAvailability>Check availability</CheckAvailability>
    </HostInformation>
    <RentalImages>
      <Gallery>
        <GalleryItem first>
          <GalleryImage first src="/assets/beach-house.jpg" />
        </GalleryItem>
        <GalleryItem>
          <GalleryImage src="/assets/beach-house-interior.jpg" />
        </GalleryItem>
        <GalleryItem>
          <GalleryImage src="/assets/beach-house-view.jpg" />
        </GalleryItem>
      </Gallery>
    </RentalImages>
  </Container>
)

export default Responsive
