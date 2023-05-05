import { Grid, Typography } from "@mui/material";
import ImageCard from "../../molecules/ImageCard";
import PageNumbers from "../../molecules/PageNumbers";
import { useNavigate } from "react-router-dom";

interface IArtworkGrid {
  artData: any;
  handlePageChange: any;
}

function ArtworkGrid({ artData, handlePageChange }: IArtworkGrid) {
  const navigate = useNavigate();

  return (
    <>
      <Grid container spacing={7}>
        {artData.length > 0 ? (
          artData.map((artObject: any) => (
            <Grid item xs={4} key={artObject.id}>
              {/* <Link to={`/artwork/${artObject.objectNumber}`}> */}
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
              {/* </Link> */}
            </Grid>
          ))
        ) : (
          <Typography variant="h5" align="center">
            Loading...
          </Typography>
        )}
      </Grid>
      <PageNumbers handlePageChange={handlePageChange} />
    </>
  );
}

export default ArtworkGrid;
