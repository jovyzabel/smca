export interface PdfService {
  generatePdfFromHtml(html: string, idMember: string): Promise<Buffer>;
  
}