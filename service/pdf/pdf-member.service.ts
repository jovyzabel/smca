import { text } from "@fortawesome/fontawesome-svg-core";
import jsPDF from "jspdf";
import MembersRepository from "../../repository/members.repository";
import { PdfService } from "./pdf.service.interface";

export class PdfMemberService implements PdfService {
    private pdf: jsPDF;

    constructor(private memberRepository:MembersRepository) {
        this.pdf = new jsPDF();
        
    }

    // public generatePdf(content: string, idMember: string): void {
    //     this.pdf.text(content, 10, 10);
    //     let member = this.memberRepository.findById(idMember);
    //     let memberName = member.then((m) => m?.lastName || "Unknown Member");
    //     this.pdf.text(`Member: ${memberName}`, 10, 20);
    //     this.pdf.addPage();

    //     this.pdf.save('Test.pdf');
    // }

    public async generatePdfFromHtml(html: string, idMember: string): Promise<Buffer> {
        const pdf = new jsPDF();
        let member = this.memberRepository.findById(idMember);
        let memberName = member.then((m) => m?.lastName || "Unknown Member");
        pdf.text(`Member: ${await memberName}`, 10, 20);

        const arraybuffer = pdf.output('arraybuffer');
        return Buffer.from(arraybuffer);
    }

    public async generatePdfFromUrl(url: string): Promise<Buffer> {
        const pdf = new jsPDF();
        const response = await fetch(url);
        const html = await response.text();
        pdf.html(html);
        const arraybuffer = pdf.output('arraybuffer');
        return Buffer.from(arraybuffer);
    }
}