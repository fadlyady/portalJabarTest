/// <reference types="cypress" />

import { loginPage } from '../support/pageObjects/login';
import { dashboardPage } from '../support/pageObjects/dashboard';
import { tambahLayanan } from '../support/pageObjects/tambahLayanan';

let sampledata;

beforeEach(() => {
    cy.fixture('login.json').then(function(data) {
        logindata=data;
    })

    cy.fixture('dataSample.json').then(function(datatest) {
        sampledata=datatest;
    })
})

describe('Portal Jabar Test',() => {

    it('Verify menu Daftar Layanan', () => {

        const dashboard = new dashboardPage()
        const createLayanan = new tambahLayanan()

        // login step
        cy.visit('/login')

        cy.loginCMS()

        // verify menu Layanan
        dashboard.headerTitle().should('be.visible')
        dashboard.menuLayanan().click()
        cy.wait(1000)
        dashboard.btnTambahLayanan().should('be.visible').click()

        // page tambah layanan
        cy.wait(1000)

        // section Informasi Layanan
        createLayanan.fieldUrusanPemerintahan().click()
        createLayanan.optionUrusanPemerintahanPendidikan().click()
        createLayanan.fieldSubUrusanPemerintahan().click()
        createLayanan.optionSubUrusanPemerintahanPendidikan().click()
        createLayanan.fieldBentukLayanan().click()
        createLayanan.optionBentukLayananAdmin().click()
        createLayanan.fieldJenisLayanan().type(sampledata.jenisLayanan)
        createLayanan.fieldNamaLayanan().type(sampledata.namaLayanan)
        createLayanan.fieldNamaProgramLayanan().type(sampledata.programLayanan)
        createLayanan.fieldDeskripsiLayanan().type(sampledata.deskripsiLayanan)
        createLayanan.fieldPenggunaLayanan().click()
        createLayanan.optionPenggunaASN().click()
        createLayanan.fieldLayananSPBE().click()
        createLayanan.fieldSearchOption().type(sampledata.keywordSPBE)
        createLayanan.optionSPBEEkonomi().click()
        createLayanan.fieldStatusOperasional().click()
        createLayanan.optionStatusAktif().click()
        createLayanan.fieldTeknisLayanan().click()
        createLayanan.optionTeknisLayananOnline().click()
        createLayanan.fieldManfaatLayanan().type(sampledata.manfaatLayanan)
        createLayanan.fieldFasilitasLayanan().should('be.disabled')
        createLayanan.fieldAlamatWebsiteResmi().type(sampledata.testUrl)
        createLayanan.fieldTautanLayanan().type(sampledata.testUrl)
        createLayanan.fieldLabelTautan().type(sampledata.labelTautan)

        // section Detail
        createLayanan.fieldSyaratDanKetentuanLayanan().type(sampledata.syaratKetentuan)
        createLayanan.fieldProsedurLayanan().type(sampledata.prosedurLayanan)
        createLayanan.toggleTarifLayanan().click({force:true})
        createLayanan.fieldTarifLayanan().type(sampledata.tarifLayanan)
        createLayanan.fieldTarifMaksimal().should('not.be.disabled').type(sampledata.tarifMaksimal)
        createLayanan.fieldKeteranganKhusus().should('be.disabled')

        // section Waktu Operasional
        createLayanan.checkBoxSenin().click({force:true})
        createLayanan.fieldJamBukaSenin().should('not.be.disabled').click().type(sampledata.jamBuka)
        createLayanan.fieldJamTutupSenin().should('not.be.disabled').click().type(sampledata.jamTutup)
        createLayanan.checkBoxSelasa().click({force:true})
        createLayanan.fieldJamBukaSelasa().should('not.be.disabled').click().type(sampledata.jamBuka)
        createLayanan.fieldJamTutupSelasa().should('not.be.disabled').click().type(sampledata.jamTutup)
        createLayanan.checkBoxRabu().click({force:true})
        createLayanan.fieldJamBukaRabu().should('not.be.disabled').click().type(sampledata.jamBuka)
        createLayanan.fieldJamTutupRabu().should('not.be.disabled').click().type(sampledata.jamTutup)
        createLayanan.checkBoxKamis().click({force:true})
        createLayanan.fieldJamBukaKamis().should('not.be.disabled').click().type(sampledata.jamBuka)
        createLayanan.fieldJamTutupKamis().should('not.be.disabled').click().type(sampledata.jamTutup)
        createLayanan.checkBoxJumat().click({force:true})
        createLayanan.fieldJamBukaJumat().should('not.be.disabled').click().type(sampledata.jamBuka)
        createLayanan.fieldJamTutupJumat().should('not.be.disabled').click().type(sampledata.jamTutup)
        createLayanan.checkBoxSabtu().click({force:true})
        createLayanan.fieldJamBukaSabtu().should('not.be.disabled').click().type(sampledata.jamBuka)
        createLayanan.fieldJamTutupSabtu().should('not.be.disabled').click().type(sampledata.jamTutup)
        createLayanan.checkBoxMinggu().click({force:true})
        createLayanan.fieldJamBukaMinggu().should('not.be.disabled').click().type(sampledata.jamBuka)
        createLayanan.fieldJamTutupMinggu().should('not.be.disabled').click().type(sampledata.jamTutup)
        createLayanan.fieldKontakTelpon().type(sampledata.kontakTelepon)
        createLayanan.fieldKontakEmail().type(sampledata.kontakEmail)

        //section Lokasi Pelayanan
        createLayanan.fieldJenisLokasi().click()
        createLayanan.optionJenisLokasiKhusus().click()
        createLayanan.fieldPenanggungJawabLokasi().click()
        createLayanan.optionPenanggungJawabLokasiUPTD().click()
        createLayanan.fieldNamaLokasi().type(sampledata.namaLokasi)
        createLayanan.fieldAlamatLokasi().type(sampledata.alamatLokasi)
        createLayanan.fieldKontakLokasi().type(sampledata.kontakTelepon)

        createLayanan.btnSimpanLanjutkan().click()

        // section Aplikasi
        createLayanan.fieldStatusKetersediaanAplikasi().click()
        createLayanan.optionKetersediaanAplikasiTersedia().click()
        createLayanan.fieldNamaAplikasi().type(sampledata.namaAplikasi)
        createLayanan.fieldFiturAplikasi1().type(sampledata.fiturAplikasi1)
        createLayanan.fieldDeskripsiAplikasi1().type(sampledata.deskripsiAplikasi1)
        createLayanan.btnTambahFiturApliasi().click()
        createLayanan.fieldFiturAplikasi2().type(sampledata.fiturAplikasi2)
        createLayanan.fieldDeskripsiAplikasi2().type(sampledata.deskripsiAplikasi2)
        createLayanan.btnTambahFiturApliasi().click()
        createLayanan.fieldFiturAplikasi3().type(sampledata.fiturAplikasi3)
        createLayanan.fieldDeskripsiAplikasi3().type(sampledata.deskripsiAplikasi3)

        createLayanan.btnSimpanLanjutkan().click()

        // section Informasi Tambahan
        createLayanan.fieldPejabatPenanggungJawab().type(sampledata.pejabatPenanggungJawab)
        createLayanan.fieldNomorHP().type(sampledata.kontakTelepon)
        createLayanan.fieldKontakEmail().type(sampledata.kontakEmail)
        createLayanan.fielNamaSosialMedia().type(sampledata.namaSosialMedia)
        createLayanan.fieldTautanLayanan().type(sampledata.testUrl)

        createLayanan.btnTambahkanLayanan().click()

        //section pop up verification
        createLayanan.popUpModalContainer().should('be.visible')
        createLayanan.containNamaPerangkatDaerah().should('contain.text','Dev')
        createLayanan.containNamaLayanan().should('contain.text',sampledata.namaLayanan)
        createLayanan.containNamaProgramLayanan().should('contain.text',sampledata.programLayanan)
        createLayanan.containDeskripsiLayanan().should('contain.text',sampledata.deskripsiLayanan)
        createLayanan.containPenggunaLayanan().should('contain.text','ASN')
        createLayanan.containKategoriLayananSPBE().should('include.text',sampledata.keywordSPBE)
        createLayanan.containStatusOperasional().should('contain.text','aktif')
        createLayanan.containTeknisLayanan().should('include.text','online')
        createLayanan.containManfaatLayanan().should('contain.text',sampledata.manfaatLayanan)
        createLayanan.containFasilitasLayanan().should('contain.text','-')
        createLayanan.containAlamatWebsiteResmi().should('contain.text',sampledata.testUrl)
        createLayanan.containTautan().should('contain.text',sampledata.testUrl)
        createLayanan.containSyaratKetentuan().should('contain.text',sampledata.syaratKetentuan)
        createLayanan.containProsedurLayanan().should('contain.text',sampledata.prosedurLayanan)
        createLayanan.containTarifLayanan().should('contain.text',sampledata.tarifLayanan).and('contain.text',sampledata.tarifMaksimal)
        createLayanan.containKeteranganKhusus().should('contain.text','-')
        createLayanan.containWaktuOperasionalSenin().should('contain.text','Senin').and('contain.text',sampledata.jamBuka).and('contain.text',sampledata.jamTutup)
        createLayanan.containWaktuOperasionalSelasa().should('contain.text','Selasa').and('contain.text',sampledata.jamBuka).and('contain.text',sampledata.jamTutup)
        createLayanan.containWaktuOperasionalRabu().should('contain.text','Rabu').and('contain.text',sampledata.jamBuka).and('contain.text',sampledata.jamTutup)
        createLayanan.containWaktuOperasionalKamis().should('contain.text','Kamis').and('contain.text',sampledata.jamBuka).and('contain.text',sampledata.jamTutup)
        createLayanan.containWaktuOperasionalJumat().should('contain.text','Jumat').and('contain.text',sampledata.jamBuka).and('contain.text',sampledata.jamTutup)
        createLayanan.containWaktuOperasionalSabtu().should('contain.text','Sabtu').and('contain.text',sampledata.jamBuka).and('contain.text',sampledata.jamTutup)
        createLayanan.containWaktuOperasionalMinggu().should('contain.text','Minggu').and('contain.text',sampledata.jamBuka).and('contain.text',sampledata.jamTutup)
        createLayanan.containKontakHotlineHP().should('contain.text',sampledata.kontakTelepon)
        createLayanan.containKontakHotlineEmail().should('contain.text',sampledata.kontakEmail)
        createLayanan.containJenisLokasi().should('contain.text','Khusus')
        createLayanan.containPenanggungJawabLokasi().should('contain.text','UPTD')
        createLayanan.containNamaLokasi().should('contain.text',sampledata.namaLokasi)
        createLayanan.containAlamatLokasi().should('contain.text',sampledata.alamatLokasi)
        createLayanan.containKontakLokasi().should('contain.text',sampledata.kontakTelepon)

        createLayanan.tabAplikasi().click()

        //section pop up verification tab Aplikasi
        createLayanan.containStatusKetersedianAplikasi().should('contain.text','Tersedia')
        createLayanan.containNamaAplikasi().should('contain.text',sampledata.namaAplikasi)
        createLayanan.containFiturAplikasi1().should('contain.text',sampledata.fiturAplikasi1)
        createLayanan.containDeskripsiAplikasi1().should('contain.text',sampledata.deskripsiAplikasi1)
        createLayanan.containFiturAplikasi2().should('contain.text',sampledata.fiturAplikasi2)
        createLayanan.containDeskripsiAplikasi2().should('contain.text',sampledata.deskripsiAplikasi2)
        createLayanan.containFiturAplikasi3().should('contain.text',sampledata.fiturAplikasi3)
        createLayanan.containDeskripsiAplikasi3().should('contain.text',sampledata.deskripsiAplikasi3)

        createLayanan.tabInformasiTambahan().click()

        //section pop up verification tab Informasi Tambahan
        createLayanan.containNamaPejabatPenanggungJawab().should('contain.text',sampledata.pejabatPenanggungJawab)
        createLayanan.containKontakPejabatPenanggungJawab().should('contain.text',sampledata.kontakTelepon)
        createLayanan.containEmailPejabatPenanggungJawab().should('contain.text',sampledata.kontakEmail)
        createLayanan.containNamaMediaSosial().should('contain.text',sampledata.namaSosialMedia)
        createLayanan.containTautanMediaSosial().should('contain.text',sampledata.testUrl)

        createLayanan.btnBatalPopUp().click()

        cy.logoutCMS()
    } )
})