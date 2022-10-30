import CompanyReviewForm from './CompanyReviewForm';
import { Button, Rating, Modal, Typography, Card } from '@mui/material';
import * as React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import JobSeekerController from '../../controller/JobSeekerController';

export default function CompanyReview({ }) {

    const [openCompanyReviewForm, setOpenCompanyReviewForm] = React.useState(false);
    const [reviews, setReviews] = React.useState(null);
    const handleOpenCompanyReviewForm = () => {
        setOpenCompanyReviewForm(true);
    };
    const handleCloseCompanyReviewForm = () => {
        setOpenCompanyReviewForm(false); window.location.reload(false);
    };
    React.useEffect(() => {
        JobSeekerController.getCompany('635ae860ce5914a300f65460').then((res) => {
            setReviews(res.reviews)
        });
    }, []);
    return (
        <div style={{paddingBottom: 5}}>
            <div style={{ marginTop: 80, display: 'flex', paddingBottom:30 }}>
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
            {reviews && reviews.map(review => (
                <Card variant="outlined" sx={{margin: 5, padding:3}}>
                    <Typography variant="h5" mb={2}>{review.position}</Typography>
                    <Rating name="read-only" value={review.rating} readOnly />
                    <Typography variant="body1" mt={2} mb={2}>{'Salary: $' + review.salary}</Typography>
                    <Typography variant="body1" mb={2}>{review.review}</Typography>
                </Card>
            ))}
        </div>
    )
}