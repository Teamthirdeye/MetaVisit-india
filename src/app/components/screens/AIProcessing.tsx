import { CheckCircle2, Loader2, Clock, Sparkles, FileText, Volume2, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useEffect, useState } from 'react';

interface AIProcessingProps {
  onComplete?: () => void;
}

export function AIProcessing({ onComplete }: AIProcessingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);

  const processingStages = [
    {
      id: 1,
      title: 'Object Recognition',
      description: 'Analyzing image and identifying artifacts',
      icon: Eye,
      duration: 2000,
      status: 'completed' as const,
    },
    {
      id: 2,
      title: 'Historical Context Analysis',
      description: 'Researching historical period and significance',
      icon: FileText,
      duration: 3000,
      status: currentStep >= 1 ? 'completed' : currentStep === 0 ? 'in-progress' : 'pending' as const,
    },
    {
      id: 3,
      title: 'Narrative Generation',
      description: 'Creating descriptive content and story',
      icon: Sparkles,
      duration: 3000,
      status: currentStep >= 2 ? 'completed' : currentStep === 1 ? 'in-progress' : 'pending' as const,
    },
    {
      id: 4,
      title: 'Audio Narration Generation',
      description: 'Synthesizing audio guide in selected language',
      icon: Volume2,
      duration: 2500,
      status: currentStep >= 3 ? 'completed' : currentStep === 2 ? 'in-progress' : 'pending' as const,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < processingStages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
      setOverallProgress((prev) => {
        if (prev < 100) {
          return Math.min(prev + 2, 100);
        }
        return prev;
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  const uploadedImage = 'https://images.unsplash.com/photo-1760679674606-cd621fb5bfed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600';

  return (
    <div className="p-4 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">
          AI Content Generation
        </h1>
        <p className="text-muted-foreground">
          Processing your artwork and generating rich heritage content
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Artwork Preview - Left Side */}
        <div className="lg:col-span-2">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Uploaded Artwork</CardTitle>
              <CardDescription>Processing this image</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted mb-4">
                <ImageWithFallback
                  src={uploadedImage}
                  alt="Uploaded artwork"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overall Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Overall Progress</span>
                  <span className="font-medium text-foreground">{overallProgress}%</span>
                </div>
                <Progress value={overallProgress} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {overallProgress < 100
                    ? 'AI is analyzing your artwork...'
                    : 'Processing complete! Ready for review.'}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Processing Steps - Right Side */}
        <div className="lg:col-span-3 space-y-4">
          {/* Processing Timeline */}
          <div className="space-y-3">
            {processingStages.map((stage, index) => {
              const Icon = stage.icon;
              const isCompleted = stage.status === 'completed';
              const isInProgress = stage.status === 'in-progress';
              const isPending = stage.status === 'pending';

              return (
                <Card
                  key={stage.id}
                  className={`transition-all ${
                    isInProgress
                      ? 'border-accent shadow-md'
                      : isCompleted
                      ? 'border-green-200 bg-green-50/30'
                      : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Step Number/Icon */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                          isCompleted
                            ? 'bg-green-100 text-green-700'
                            : isInProgress
                            ? 'bg-accent/20 text-accent'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : isInProgress ? (
                          <Loader2 className="w-6 h-6 animate-spin" />
                        ) : (
                          <Icon className="w-6 h-6" />
                        )}
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-semibold text-foreground">{stage.title}</h3>
                          {isCompleted && (
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Completed
                            </Badge>
                          )}
                          {isInProgress && (
                            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                              In Progress
                            </Badge>
                          )}
                          {isPending && (
                            <Badge variant="outline" className="text-muted-foreground">
                              <Clock className="w-3 h-3 mr-1" />
                              Pending
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{stage.description}</p>

                        {/* Progress Bar for In-Progress Items */}
                        {isInProgress && (
                          <div className="space-y-1">
                            <Progress value={65} className="h-1.5" />
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* AI Generated Preview */}
          {currentStep >= 2 && (
            <Card className="border-accent/50 bg-accent/5">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <CardTitle>AI-Generated Preview</CardTitle>
                </div>
                <CardDescription>Initial content generated from your artwork</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1.5">
                    SUGGESTED TITLE
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    Ancient Temple Sculpture of Deity
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1.5">
                    DESCRIPTION PREVIEW
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    This intricately carved stone sculpture depicts a traditional Indian deity,
                    showcasing the exceptional craftsmanship of ancient artisans. The detailed
                    jewelry and ornate headdress reflect the artistic traditions of medieval
                    temple architecture...
                  </p>
                </div>
                {currentStep >= 3 && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1.5">
                      AUDIO NARRATION
                    </p>
                    <div className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border">
                      <Volume2 className="w-5 h-5 text-accent" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">
                          Audio guide ready
                        </p>
                        <p className="text-xs text-muted-foreground">English • 1:23 duration</p>
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Ready
                      </Badge>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
