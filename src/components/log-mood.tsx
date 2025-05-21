"use client"

import { useState } from "react";
import { CustomRadioButton } from "./custom-radio-button";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Progress } from "./ui/progress";
import { RadioGroup } from "./ui/radio-group";

const steps = [
  {
    title: "Log your mood.",
    description: "How was your mood today?",
  },
  {
    title: "Log your mood.",
    description: "How did you feel?",
  },
  {
    title: "Log your mood.",
    description: "Write about your day...",
  },
  {
    title: "Log your mood.",
    description: "How many hours did you sleep today?",
  },
];

// FIX: Reset step to 0 when the dialog is closed
// FIX: Add a submit button to the last step
// FIX: Add a progress bar to show the current step
// FIX: Switch content based on the current step
// FIX: Save the mood to the database
// FIX: Add a loading state when submitting the mood
// FIX: Add a success message when the mood is submitted
// FIX: Add a error message when the mood is not submitted
// FIX: Save the mood to local storage

export function LogMood() {
  const [step, setStep] = useState(0);

  function handleStepChange() {
    if (step === 3) {
      return;
    }

    setStep(step + 1);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-[60px] bg-blue-600 text-preset-5 text-white px-8 py-4 mb-12 lg:mb-16">Log today&#39;s mood</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogTitle className="sr-only">{steps[step].title}</DialogTitle>
        <DialogDescription className="sr-only">{steps[step].description}</DialogDescription>
        <h2 className="text-preset-2-mobile text-neutral-900">{steps[step].title}</h2>
        <Progress value={25} />
        <p className="text-preset-3-mobile text-neutral-900">{steps[step].description}</p>
        <div>
          <RadioGroup>
            <div className="">
              <CustomRadioButton value="very-happy">
                <CustomRadioButton.Title>Very Happy</CustomRadioButton.Title>
                <CustomRadioButton.Icon src="/icon-very-happy-color.svg" />
              </CustomRadioButton>
            </div>
            <div className="">
              <CustomRadioButton value="happy">
                <CustomRadioButton.Title>Happy</CustomRadioButton.Title>
                <CustomRadioButton.Icon src="/icon-happy-color.svg" />
              </CustomRadioButton>
            </div>
            <div className="">
              <CustomRadioButton value="neutral">
                <CustomRadioButton.Title>Neutral</CustomRadioButton.Title>
                <CustomRadioButton.Icon src="/icon-neutral-color.svg" />
              </CustomRadioButton>
            </div>
            <div className="">
              <CustomRadioButton value="sad">
                <CustomRadioButton.Title>Sad</CustomRadioButton.Title>
                <CustomRadioButton.Icon src="/icon-sad-color.svg" />
              </CustomRadioButton>
            </div>
            <div className="">
              <CustomRadioButton value="very-sad">
                <CustomRadioButton.Title>Very Sad</CustomRadioButton.Title>
                <CustomRadioButton.Icon src="/icon-very-sad-color.svg" />
              </CustomRadioButton>
            </div>
          </RadioGroup>
        </div>
        {step === 3 ? (
            <Button className="h-14 bg-blue-600">
              <span className="text-preset-5 text-white">Submit</span>
            </Button>
          ) : (
            <Button className="h-14 bg-blue-600" onClick={handleStepChange}>
              <span className="text-preset-5 text-white">Continue</span>
            </Button>
          )}
      </DialogContent>
    </Dialog>
  )
}
