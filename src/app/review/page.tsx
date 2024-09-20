'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import PageTitle from '@/components/shared/PageTitle'
import ImagePreviewer from '@/components/review/ImagePreviewer'
import BlogIcon from '@/assets/icons/review/blog.svg'
import PointIcon from '@/assets/icons/review/point.svg'
import Image from 'next/image'
import Link from 'next/link'

const ExCampaignImage = '/img/campaign.png'
const ExampleImage = '/img/example.png'

// 리뷰 등록: 인플루언서의 체험단 리뷰 등록 및 결과 보고 작성 페이지
// 홈 - 마이페이지(인플루언서) - 리뷰 등록
interface FormData {
  reviewUrl: string
  isAgreed: boolean
}

const Page = () => {
  const [files, setFiles] = useState<File[]>([])
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<FormData>()

  const isAgreed = watch('isAgreed', false) // 체크박스 상태 확인

  const handleFileSelect = (selectedFiles: File[]) => {
    setFiles(selectedFiles)
    if (selectedFiles.length > 0) {
      toast.dismiss() // 파일 선택 시 에러 토스트 닫기
    }
  }

  const onSubmit = async (data: FormData) => {
    // 파일 선택 여부 검사
    if (files.length === 0) {
      toast.error('이미지 파일을 선택해 주세요.')
      return
    }

    setLoading(true)
    toast.dismiss() // 이전 에러 메시지 제거

    const formData = new FormData()
    formData.append('reviewUrl', data.reviewUrl)
    files.forEach((file, index) => {
      formData.append(`file${index + 1}`, file)
    })

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/inf/review`,
        {
          method: 'POST',
          body: formData
        }
      )

      if (!response.ok) {
        throw new Error('리뷰 등록에 실패했습니다.')
      }

      toast.success('리뷰가 성공적으로 등록되었습니다.')
      reset() // 폼 리셋
      setFiles([]) // 첨부된 파일 리셋
    } catch (error: any) {
      toast.error(error.message || '리뷰 등록 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  // 유효성 검사 실패 시 에러를 즉시 토스트로 출력
  const onError = (errors: any) => {
    if (errors.reviewUrl) {
      toast.error(errors.reviewUrl.message)
    }

    // 파일 선택 여부 확인 (errors와 별개로 체크)
    if (files.length === 0) {
      toast.error('이미지 파일을 선택해 주세요.')
    }

    if (errors.isAgreed) {
      toast.error(errors.isAgreed.message)
    }
  }

  return (
    <main>
      <Header
        subtitle="리뷰 등록"
        isLogin
      />
      <PageTitle
        title="리뷰 등록"
        alignment="center"
      />
      <div className="m-auto flex w-full max-w-[1920px] flex-col px-[56px]">
        {/* contents */}
        <div className="m-auto mb-[200px] flex w-full max-w-[1400px] flex-col items-center justify-center lg:flex-row lg:items-start">
          {/* 일단 하드코딩함. 카드 컴포넌트로 교체 예정 */}
          <div className="my-[40px] flex size-full max-h-[494px] max-w-[453px] flex-col items-center justify-center rounded-[8px] bg-background-gray p-[24px]">
            <Image
              src={ExCampaignImage}
              alt="Example Campaign"
              width={405}
              height={248}
            />
            <h4 className="mb-[14px] mt-[24px] w-full text-left text-heading-4 font-[700]">
              다인카페 체험단 모집합니다
            </h4>
            <p className="mb-[24px] w-full text-body-2 text-gray-70">
              음료 메뉴 2잔 + 디저트 메뉴 1종 (선택 가능) + 애견 동반 입장료
              무료 (매너벨트 1개 포함)
            </p>
            <hr className="w-full border border-line-neutral" />
            <div className="my-[17px] flex">
              <div className="mr-[16px] flex bg-gray-5">
                <PointIcon />
                <p className="pl-[2px] text-body-2 text-gray-70">100,000 P</p>
              </div>
              <div className="mr-[16px] flex">
                <BlogIcon />
                <p className="pl-[4px] text-body-2 text-gray-70">
                  네이버 블로그
                </p>
              </div>
              <div className="mr-[16px] flex text-body-2 text-gray-70">
                방문형/맛집
              </div>
            </div>
            <hr className="w-full border border-line-neutral" />
          </div>
          <div className="ml-[20px] mt-[40px] w-full max-w-[927px]">
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <h4 className="text-body-1 font-[800]">
                리뷰 URL<strong className="text-red-main">*</strong>
              </h4>
              <p className="mb-[2px] text-body-2 text-gray-60">
                플랫폼에 작성한 리뷰 URL을 입력해 주세요
              </p>
              <input
                {...register('reviewUrl', {
                  required: '리뷰 URL을 입력해 주세요'
                })}
                maxLength={300}
                className="mb-[26px] h-[38px] w-full rounded-[4px] border border-line-normal pl-[12px]"
              />
              <h4 className="text-body-1 font-[800]">
                파일 선택<strong className="text-red-main">*</strong>
              </h4>
              <p className="mb-[2px] text-body-2 text-gray-60">
                플랫폼에서 본인의 게시물이 나타나는 화면의 캡처 파일을 첨부해
                주세요
                <br />
                10MB 이하의 이미지 파일 10개까지 업로드 가능합니다
              </p>
              <ImagePreviewer
                onFileSelect={handleFileSelect}
                maxFiles={10}
                maxSize={10}
              />
              <p className="mb-[12px] mt-[24px] text-body-2 text-gray-60">
                <strong className="text-gray-60">예시화면</strong>
                &nbsp;&nbsp;키워드로 검색 시 검색되는 본인의 게시물을 캡처해
                주세요
              </p>
              <Image
                src={ExampleImage}
                alt="Example Image"
                width={927}
                height={510}
              />
              <div className="my-[32px]">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register('isAgreed', {
                      required: '개인정보 수집 및 이용에 동의해 주세요.'
                    })}
                    className="mr-2"
                  />
                  <p className="text-body-2">
                    <Link
                      href="/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-2 font-[700] text-gray-90 underline">
                      개인정보 수집 및 이용
                    </Link>{' '}
                    <span className="text-body-2 font-[500] text-gray-90">
                      동의
                    </span>{' '}
                    <span className="text-body-2 font-[300] text-gray-40">
                      (필수)
                    </span>
                  </p>
                </label>
              </div>
              <button
                className="mb-[32px] w-full cursor-pointer rounded-[4px] bg-red-main px-[20px] py-[12px] text-white"
                type="submit"
                disabled={loading}>
                {loading ? '제출 중...' : '제출'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer
        toastStyle={{
          backgroundColor: '#19191B',
          color: '#030303',
          minWidth: '400px'
        }}
        hideProgressBar={true} // 진행시간 바 숨김처리
        icon={false} // 아이콘 숨김처리
        pauseOnFocusLoss={false}
        position="bottom-center"
        autoClose={3000}
      />
    </main>
  )
}

export default Page
