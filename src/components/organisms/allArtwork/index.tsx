import { Grid, Typography, styled } from "@mui/material";
import ImageCard from "../../molecules/ImageCard";
import PageNumbers from "../../molecules/PageNumbers";
import { useNavigate } from "react-router-dom";
import Loading from "../../atom/Loading";

interface IArtworkGrid {
  artData: any;
  handlePageChange: any;
}

const RootGrid = styled(Grid)(({ theme }) => ({
  rowGap: "32px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const InnerGrid = styled(Grid)(({ theme }) => ({
  maxWidth: "450px",
  width: "100%",
  [`& .MuiGrid-grid-xs-4`]: {
    maxWidth: "450px",
    flexBasis: "450px",
  },
}));


function ArtworkGrid({ artData, handlePageChange }: IArtworkGrid) {
  const navigate = useNavigate();


  return (
    <>
      <RootGrid container>
        {artData.length > 0 ? (
          artData.map((artObject: any) => (
            <InnerGrid item data-testid="innerGrid" xs={4} key={artObject.id}>
              <ImageCard
                rightTypo={artObject.principalOrFirstMaker}
                leftTypo={artObject.title}
                imageClick={() => {
                  navigate(`/artwork/${artObject.objectNumber}`);
                }}
                width={450}
                height={364}
                id={artObject.objectNumber}
              />
            </InnerGrid>
          ))
        ) : (
          <Loading/>
        )}
      </RootGrid>
      <PageNumbers handlePageChange={handlePageChange} />
    </>
  );
}

export default ArtworkGrid;
