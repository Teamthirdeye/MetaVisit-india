import { Download, Printer, Share2, Smartphone, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export function QRCodeScreen() {
  return (
    <div className="p-4 lg:p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">QR Code</h1>
        <p className="text-muted-foreground">Generate visitor access code for your museum</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* QR Code Display */}
        <Card>
          <CardHeader>
            <CardTitle>Museum QR Code</CardTitle>
            <CardDescription>Scan to access the AR experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="w-full max-w-sm aspect-square bg-white p-8 rounded-lg border-2 border-border mb-6">
                <svg viewBox="0 0 256 256" className="w-full h-full">
                  <rect width="256" height="256" fill="white"/>
                  <g fill="#2D2D2D">
                    <rect x="16" y="16" width="32" height="32"/>
                    <rect x="16" y="56" width="32" height="8"/>
                    <rect x="16" y="72" width="8" height="8"/>
                    <rect x="32" y="72" width="16" height="8"/>
                    <rect x="16" y="88" width="8" height="8"/>
                    <rect x="32" y="88" width="8" height="8"/>
                    <rect x="16" y="104" width="32" height="8"/>
                    <rect x="16" y="120" width="32" height="32"/>

                    <rect x="208" y="16" width="32" height="32"/>
                    <rect x="208" y="56" width="32" height="8"/>
                    <rect x="208" y="72" width="8" height="8"/>
                    <rect x="224" y="72" width="16" height="8"/>
                    <rect x="208" y="88" width="8" height="8"/>
                    <rect x="224" y="88" width="8" height="8"/>
                    <rect x="208" y="104" width="32" height="8"/>
                    <rect x="208" y="120" width="32" height="32"/>

                    <rect x="16" y="208" width="32" height="32"/>
                    <rect x="16" y="168" width="32" height="8"/>
                    <rect x="16" y="184" width="8" height="8"/>
                    <rect x="32" y="184" width="16" height="8"/>
                    <rect x="16" y="200" width="8" height="8"/>
                    <rect x="32" y="200" width="8" height="8"/>

                    <rect x="72" y="24" width="8" height="8"/>
                    <rect x="88" y="24" width="8" height="8"/>
                    <rect x="72" y="40" width="16" height="8"/>
                    <rect x="104" y="32" width="8" height="8"/>
                    <rect x="120" y="24" width="8" height="8"/>
                    <rect x="136" y="32" width="8" height="8"/>
                    <rect x="152" y="24" width="16" height="8"/>
                    <rect x="176" y="32" width="8" height="8"/>
                    <rect x="192" y="24" width="8" height="8"/>

                    <rect x="80" y="80" width="96" height="96"/>
                    <rect x="96" y="96" width="64" height="64"/>

                    <rect x="72" y="216" width="8" height="8"/>
                    <rect x="88" y="224" width="8" height="8"/>
                    <rect x="104" y="216" width="16" height="8"/>
                    <rect x="136" y="224" width="8" height="8"/>
                    <rect x="152" y="216" width="8" height="8"/>
                    <rect x="168" y="224" width="16" height="8"/>
                    <rect x="200" y="216" width="8" height="8"/>
                  </g>
                </svg>
              </div>

              <div className="flex flex-wrap gap-3 justify-center w-full">
                <Button className="flex-1 min-w-[140px]">
                  <Download className="w-4 h-4 mr-2" />
                  Download PNG
                </Button>
                <Button variant="outline" className="flex-1 min-w-[140px]">
                  <Download className="w-4 h-4 mr-2" />
                  Download SVG
                </Button>
              </div>

              <div className="flex gap-3 mt-3 w-full">
                <Button variant="outline" className="flex-1">
                  <Printer className="w-4 h-4 mr-2" />
                  Print
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information & Preview */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Museum Information</CardTitle>
              <CardDescription>Details embedded in the QR code</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Museum Name</p>
                <p className="text-base text-foreground">MetaVisitAR Heritage Museum</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Location</p>
                <p className="text-base text-foreground">Mysuru, Karnataka, India</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Collection Size</p>
                <p className="text-base text-foreground">127 Artworks</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">QR Code URL</p>
                <p className="text-base text-foreground font-mono text-sm">
                  https://metavisitar.in/m/mvh-001
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-accent/5 border-accent/20">
            <CardHeader>
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <CardTitle>How to Use</CardTitle>
                  <CardDescription className="mt-2">
                    Place this QR code at your museum entrance or near exhibits. Visitors can scan it with their smartphones to:
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>Access AR-enhanced views of artifacts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>Listen to audio narrations and guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>View detailed information about exhibits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>Navigate the museum with digital maps</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <CardTitle>Mobile Preview</CardTitle>
                  <CardDescription>
                    How visitors will see the experience
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Visitors scan the QR code → Opens mobile web experience →
                  Browse AR content instantly
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
