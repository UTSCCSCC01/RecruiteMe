import CompanyReviewForm from './CompanyReviewForm';
import { Button, Rating, Modal, Typography, Card, Pagination, Box } from '@mui/material';
import * as React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import JobSeekerController from '../../controller/JobSeekerController';

export default function CompanyReview(props) {

    const [openCompanyReviewForm, setOpenCompanyReviewForm] = React.useState(false);
    const [reviews, setReviews] = React.useState(null);
    const [page, setPage] = React.useState(1);


    const handleOpenCompanyReviewForm = () => {
        setOpenCompanyReviewForm(true);
    };
    const handleCloseCompanyReviewForm = () => {
        setOpenCompanyReviewForm(false); window.location.reload(false);
    };
    React.useEffect(() => {
        JobSeekerController.getCompany(props.companyId).then((res) => {
            setReviews(res.reviews)
        });
    }, []);
    return (
        <div style={{paddingBottom: 5}}>
            <div style={{ marginTop: 20, display: 'flex', paddingBottom:10 }}>
                <Typography variant="h4" sx={{ marginLeft: '10'}}>Reviews</Typography>
                <Button
                    onClick={handleOpenCompanyReviewForm}
                    startIcon={<AddCircleIcon fontSize="large" />}
                    sx={{
                        color: "black",
                        fontSize: "20px",
                        fontWeight: "400",
                        textTransform: "none",
                        marginLeft: "auto",
                    }}
                    size="145px"
                >
                    Add Review
                </Button>
                <Modal
                    open={openCompanyReviewForm}
                    onClose={handleCloseCompanyReviewForm}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <CompanyReviewForm close={handleCloseCompanyReviewForm}></CompanyReviewForm>
                </Modal>
            </div>
            {reviews && reviews.slice(3 * (page - 1), 3 * page).map(review => (
                <Box sx={{marginBottom: 4, padding:3, backgroundColor: "#D9D9D9" }}>
                    <Typography variant="h5" mb={2}>{review.position}</Typography>
                    <Rating name="read-only" value={review.rating} readOnly />
                    <Typography variant="body1" mt={2} mb={2}>{'Salary: $' + review.salary}</Typography>
                    <Typography variant="body1" mb={2}>{review.review}</Typography>
                </Box>
            ))}
            {reviews && reviews.length > 3 && (
                <Pagination
                    count={Math.ceil(reviews.length / 3)}
                    page={page}
                    onChange={(event, value) => setPage(value)}
                    sx={{
                        justifyContent: "center",
                        display: "flex",
                        marginBottom: 2,
                    }}
                />
            )}
        </div>
    )
}