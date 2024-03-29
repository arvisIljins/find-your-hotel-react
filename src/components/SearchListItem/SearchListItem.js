import React from "react";
import {
  FavoriteButtonsContainer,
  LabelItem,
  LabelsRow,
  NoImageWrapper,
  Price,
  SearchItemAddress,
  SearchItemFilters,
  SearchItemImage,
  SearchItemTitle,
  SearchListItemWrapper,
  TextColumn,
} from "./SearchListItem.styles";
import LocationIcon from "../../app/assets/svg/LocationIcon";
import FavoriteButton from "../buttons/FavoriteButton";
import { map } from "lodash";
import Review from "../Review";
import { motion } from "framer-motion";
import NoHotelImage from "../../app/assets/svg/NoHotelImage";
import { useState } from "react";
import Loader from "../Loader";

const SearchListItem = ({ hotel }) => {
  const { title, pictureUrl, filtersList, labelsList, address, city } = hotel;
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  const handleImageError = () => {
    setLoading(false);
    setImageError(true);
  };
  const filters = filtersList?.split(",");
  const labels = labelsList?.split(",");
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}>
      <SearchListItemWrapper>
        {imageError && (
          <NoImageWrapper>
            <NoHotelImage width={18} height={18} />
          </NoImageWrapper>
        )}
        {loading && (
          <NoImageWrapper>
            <Loader />
          </NoImageWrapper>
        )}
        {!imageError && (
          <SearchItemImage
            src={pictureUrl}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        )}
        <FavoriteButtonsContainer>
          <FavoriteButton />
        </FavoriteButtonsContainer>
        <TextColumn>
          <SearchItemTitle>{title}</SearchItemTitle>
          <SearchItemAddress>
            <LocationIcon width={1.1} height={1.4} />
            {`${address}, ${city}`}
          </SearchItemAddress>
          <SearchItemFilters>{filters?.join(" • ")}</SearchItemFilters>
          <LabelsRow>
            {map(labels, (label) => {
              return <LabelItem label={label}>{label}</LabelItem>;
            })}
          </LabelsRow>
          <Review />
        </TextColumn>
        <Price>$ 2,440</Price>
      </SearchListItemWrapper>
    </motion.div>
  );
};

export default SearchListItem;
