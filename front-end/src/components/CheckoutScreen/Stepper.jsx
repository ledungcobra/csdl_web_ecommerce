import React, {createContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckoutRightBanner from "./CheckoutRightBanner";
import StepChoseTypePage from "./StepChoseTypePay";
import StepConfirmToCheckout from "./StepConfirmToCheckout";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',

    },
    button: {
        marginRight: theme.spacing(1),

    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));


function getSteps() {
    return ['Choose your address to ship', 'Choose the pay type', 'Confirm Checkout']
}

export const CheckoutContext = createContext(null);

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <div className="banner">
                    <CheckoutRightBanner/>
                    <div className="clearfix"/>
                </div>
            );
        case 1:
            return (
                <StepChoseTypePage/>
            );
        case 2:
            return (
                <div>
                    <StepConfirmToCheckout/>
                </div>
            );
        default:
            return 'Unknown step';
    }
}

export default function HorizontalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();


    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => {
                const step = prevActiveStep - 1;
                console.log(step);
                if (step >= 0) {
                    return step
                } else {
                    return prevActiveStep;
                }
            }
        );
    };

    const handleSkip = () => {


        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <CheckoutContext.Provider value={{
            handleReset,
            handleNext,
            handleSkip,
            handleBack
        }}>
            <div className={classes.root}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Button onClick={handleReset} className={classes.button}>
                                Reset
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        </div>
                    )}
                </div>
            </div>
        </CheckoutContext.Provider>

    );
}